const api = "https://connect.numart.com.co"; 
let currentEmail = "";

const loginForm = document.getElementById("loginForm");
const twofaForm = document.getElementById("2faForm");

const qrBox = document.getElementById("qrBox");
const qrImg = document.getElementById("qrImg");
const codeBox = document.getElementById("codeBox");

// Si ya hay token → redirigir
if (localStorage.getItem("token")) {
  window.location.href = "/";
}

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("dz-email");
  const pass = document.getElementById("dz-password");

  currentEmail = email.value;
  console.log(email.value)
  console.log(pass.value)

  try {
    const res = await fetch(api + "/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email.value,
        contraseña: pass.value
      })
    });

    const data = await res.json();
    console.log(data);

    // Reset UI
    qrBox.style.display = "none";
    codeBox.style.display = "none";

    // 🔹 USUARIO SIN 2FA → mostrar QR + pedir código
    if (data.require2faSetup) {
      qrBox.style.display = "block";
      codeBox.style.display = "block";
      document.getElementById("loginBox").style.display = "none"
      qrImg.src =
        "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=" +
        encodeURIComponent(data.otpauth);

      Swal.fire("Activa tu 2FA", "Escanea el QR y escribe el código", "info");
      return;
    }

    // 🔹 USUARIO CON 2FA → pedir solo código
    if (data.require2fa) {
      qrBox.style.display = "block";
      codeBox.style.display = "none";
      qrImg.style.display = "none"
      document.getElementById("loginBox").style.display = "none"
      document.getElementById("image-text-center").style.display = "none"
      Swal.fire("2FA requerido", "Ingresa el código del Authenticator", "info");
      return;
    }

    // 🔹 LOGIN DIRECTO
    if (data.token) {

    } else {
      Swal.fire("Oops...", "Credenciales incorrectas", "error");
    }

  } catch (err) {
    alert("Error de conexión: " + err);
  }
});
twofaForm.addEventListener("submit", async (e) => {
  const codeInput = document.getElementById("dz-2fa");

  e.preventDefault();

  try {
    function getDeviceDetails() {
      const ua = navigator.userAgent;
      let os = "Otro OS";
      let browser = "Otro Navegador";

      // Lógica de Sistema Operativo
      if (ua.indexOf("Win") !== -1) os = "Windows";
      else if (ua.indexOf("Android") !== -1) os = "Android";
      else if (ua.indexOf("Mac") !== -1) os = "MacOS/iOS";
      else if (ua.indexOf("Linux") !== -1) os = "Linux";

      // Lógica de Navegador
      if (ua.indexOf("Edg") !== -1) browser = "Edge";
      else if (ua.indexOf("Chrome") !== -1) browser = "Chrome";
      else if (ua.indexOf("Firefox") !== -1) browser = "Firefox";
      else if (ua.indexOf("Safari") !== -1) browser = "Safari";

      return `${os}, ${browser}`;
    }



    const ahora = new Date();

    const opcionesv2 = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    };

    // Formateamos la fecha en español
    let fechaFormateada = new Intl.DateTimeFormat('es-ES', opcionesv2).format(ahora);

    // Ajustes menores para que coincida exactamente con tu formato
    fechaFormateada = fechaFormateada.replace(',', '') + ' hs';
    // Capitalizar la primera letra
    fechaFormateada = fechaFormateada.charAt(0).toUpperCase() + fechaFormateada.slice(1);

    const device = getDeviceDetails();

    // 1. Asegúrate de que la función devuelva el objeto
    async function getNetworkDetails() {
      try {
        const response = await fetch('https://ipinfo.io/json');
        const data = await response.json();
        return data; // Esto devuelve el objeto con ip, city, country, etc.
      } catch (error) {
        console.error("Error obteniendo IP:", error);
        return { ip: "IP no disponible" };
      }
    }

    // 2. En tu función de envío de login (debe ser async)
    async function enviarLogin() {
      const networkData = await getNetworkDetails();


      const res = await fetch(api + "/login-2fa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: currentEmail,
          code: codeInput.value,
          ip: networkData,
          device: getDeviceDetails(), // Tu función de "Windows, Chrome"
          fechaFormateada: new Date().toLocaleString()
        })
      });

      const data = await res.json();
      console.log(data);

      if (data.token) {
        finishLogin(data);
      } else {
        Swal.fire("Código inválido", "Verifica el código 2FA", "error");
      }
    }
    enviarLogin()

  } catch (err) {
    alert("Error verificando 2FA: " + err);
  }
})



// ✅ FINALIZAR LOGIN
function finishLogin(data) {

  if (data.userInfo.active === 0) {
    Swal.fire(
      'Lo sentimos.',
      "Su cuenta ha sido deshabilitada. Por favor, póngase en contacto con la empresa para conocer más información.",
      'error'
    ).then((result) => {
      if (result.isConfirmed) {
        location.reload();;
      }
    });
  } else {
    const params = new URLSearchParams(window.location.search);
    const redirectTo = params.get("redirect") || "/";
    console.log(data)
    localStorage.setItem("userInfo", JSON.stringify(data.userInfo));
    localStorage.setItem("token", data.token);
    window.location.href = redirectTo;
  }
}
