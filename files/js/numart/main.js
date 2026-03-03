const numartHeader = document.querySelector(".numart-header");

numartHeader.innerHTML = `<div id="divOculto" class="divOculto">
			<div id="contenido">
				<div class="button-container2">
					<a href="/datos/mi-negocio" id="mi-negocio" class="main-button">
						<i class="fa fa-star" aria-hidden="true"></i>
						<p class="button-text">Mi negocio</p>
					</a>
					<a href="/datos/contabilidad" id="contabilidad" class="main-button">
						<i class="fa fa-chart-line" aria-hidden="true"></i>
						<p class="button-text">Contabilidad</p>
					</a>

					<a href="/datos/reportes" id="reportes" class="main-button">
						<i class="fa fa-chart-area" aria-hidden="true"></i>
						<p class="button-text">Reportes</p>
					</a>

				</div>
			</div>
			<div id="footer"></div>

		</div>
		<div id="divOcultoEvaluacion" class="divOculto">
			<div id="contenido">
				<div class="button-container2">
					<a href="/evaluacion/incidencias" id="incidencias" class="main-button">
						<i class="fa fa-user-tag" aria-hidden="true"></i>
						<p class="button-text">Incidencias</p>
					</a>
					<a href="/evaluacion/eventos" id="eventos" class="main-button">
						<i class="fa fa-briefcase" aria-hidden="true"></i>
						<p class="button-text">Eventos</p>
					</a>

					<a href="/evaluacion/tutoria" id="tutoria" class="main-button">
						<i class="fa fa-user-check" aria-hidden="true"></i>
						<p class="button-text">Tutoría</p>
					</a>

				</div>
			</div>
			<div id="footer"></div>

		</div>
		<div id="divOcultoComunicaciones" class="divOculto">
			<div id="contenido">
				<div class="button-container2">
					<a href="/comunicaciones/avisos" id="avisos" class="main-button">
						<i class="fa fa-paper-plane" aria-hidden="true"></i>
						<p class="button-text">Avisos</p>
					</a>
					<a href="/comunicaciones/circulares" id="circulares" class="main-button">
						<i class="fa fa-file" aria-hidden="true"></i>
						<p class="button-text">Circulares</p>
					</a>

					<a href="/comunicaciones/autorizaciones" id="autorizaciones" class="main-button">
						<i class="fa fa-shield-alt" aria-hidden="true"></i>
						<p class="button-text">Autorizaciones</p>
					</a>

				</div>
			</div>
			<div id="footer"></div>

		</div>
		<div id="divOcultoPerfiles" class="divOculto">
			<div id="contenido">
				<div class="button-container2">
					<a href="/perfiles/empleados/" id="empleados" class="main-button">
						<i class="fa fa-users-cog" aria-hidden="true"></i>
						<p class="button-text">Empleados</p>
					</a>
					<a href="/perfiles/afiliados" id="afiliados" class="main-button">
						<i class="fa fa-users" aria-hidden="true"></i>
						<p class="button-text">Afiliados</p>
					</a>

					<a href="/perfiles/roles/" id="roles" class="main-button">
						<i class="fa fa-key" aria-hidden="true"></i>
						<p class="button-text">Roles</p>
					</a>

				</div>
			</div>
			<div id="footer"></div>

		</div>
		<div class="header">
			<div class="header-content">
				<nav class="navbar navbar-expand">
					<div class="collapse navbar-collapse justify-content-between">
						<div style="display: flex; flex-direction: row; justify-content: center; align-items: center; height: 100px; padding: 0 20px;"
							class="header-left">
							<img class="companyIcon" id="companyIconID" src="/files/images/logoAlmacenZharely.png"
								style="width: 60px;height: 60px;border-radius: 3rem;margin-right: 15px;">
							<div class="dashboard_bar">-</div>
						</div>

						<ul class="navbar-nav header-right">
							<li class="nav-item dropdown notification_dropdown">
								<a class="nav-link  ai-icon" href="javascript:;" role="button"
									data-bs-toggle="dropdown">
									<svg width="26" height="26" viewBox="0 0 26 26" fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M21.75 14.8385V12.0463C21.7471 9.88552 20.9385 7.80353 19.4821 6.20735C18.0258 4.61116 16.0264 3.61555 13.875 3.41516V1.625C13.875 1.39294 13.7828 1.17038 13.6187 1.00628C13.4546 0.842187 13.2321 0.75 13 0.75C12.7679 0.75 12.5454 0.842187 12.3813 1.00628C12.2172 1.17038 12.125 1.39294 12.125 1.625V3.41534C9.97361 3.61572 7.97429 4.61131 6.51794 6.20746C5.06159 7.80361 4.25291 9.88555 4.25 12.0463V14.8383C3.26257 15.0412 2.37529 15.5784 1.73774 16.3593C1.10019 17.1401 0.751339 18.1169 0.75 19.125C0.750764 19.821 1.02757 20.4882 1.51969 20.9803C2.01181 21.4724 2.67904 21.7492 3.375 21.75H8.71346C8.91521 22.738 9.45205 23.6259 10.2331 24.2636C11.0142 24.9013 11.9916 25.2497 13 25.2497C14.0084 25.2497 14.9858 24.9013 15.7669 24.2636C16.548 23.6259 17.0848 22.738 17.2865 21.75H22.625C23.321 21.7492 23.9882 21.4724 24.4803 20.9803C24.9724 20.4882 25.2492 19.821 25.25 19.125C25.2486 18.117 24.8998 17.1402 24.2622 16.3594C23.6247 15.5786 22.7374 15.0414 21.75 14.8385ZM6 12.0463C6.00232 10.2113 6.73226 8.45223 8.02974 7.15474C9.32723 5.85726 11.0863 5.12732 12.9212 5.125H13.0788C14.9137 5.12732 16.6728 5.85726 17.9703 7.15474C19.2677 8.45223 19.9977 10.2113 20 12.0463V14.75H6V12.0463ZM13 23.5C12.4589 23.4983 11.9316 23.3292 11.4905 23.0159C11.0493 22.7026 10.716 22.2604 10.5363 21.75H15.4637C15.284 22.2604 14.9507 22.7026 14.5095 23.0159C14.0684 23.3292 13.5411 23.4983 13 23.5ZM22.625 20H3.375C3.14298 19.9999 2.9205 19.9076 2.75644 19.7436C2.59237 19.5795 2.50014 19.357 2.5 19.125C2.50076 18.429 2.77757 17.7618 3.26969 17.2697C3.76181 16.7776 4.42904 16.5008 5.125 16.5H20.875C21.571 16.5008 22.2382 16.7776 22.7303 17.2697C23.2224 17.7618 23.4992 18.429 23.5 19.125C23.4999 19.357 23.4076 19.5795 23.2436 19.7436C23.0795 19.9076 22.857 19.9999 22.625 20Z"
											fill="#3E4954" />
									</svg>
									<span id="notification_indicator" class="badge light text-white bg-primary"></span>
								</a>
								<div class="dropdown-menu dropdown-menu-end">
									<div id="DZ_W_Notification1" class="widget-media dz-scroll p-3"
										style="height:380px;">
										<ul class="timeline">
											<li>
												<div class="timeline-panel">
													<div class="media me-2">
														<img alt="image" width="50" src="/files/images/avatar/1.jpg">
													</div>
													<div class="media-body">
														<h6 class="mb-1">Dr sultads Send you Photo</h6>
														<small class="d-block">29 July 2020 - 02:26 PM</small>
													</div>
												</div>
											</li>
											<li>
												<div class="timeline-panel">
													<div class="media me-2 media-info">
														KG
													</div>
													<div class="media-body">
														<h6 class="mb-1">Resport created successfully</h6>
														<small class="d-block">29 July 2020 - 02:26 PM</small>
													</div>
												</div>
											</li>
											<li>
												<div class="timeline-panel">
													<div class="media me-2 media-success">
														<i class="fas fa-home"></i>
													</div>
													<div class="media-body">
														<h6 class="mb-1">Reminder : Treatment Time!</h6>
														<small class="d-block">29 July 2020 - 02:26 PM</small>
													</div>
												</div>
											</li>
											<li>
												<div class="timeline-panel">
													<div class="media me-2">
														<img alt="image" width="50" src="/files/images/avatar/1.jpg">
													</div>
													<div class="media-body">
														<h6 class="mb-1">Dr sultads Send you Photo</h6>
														<small class="d-block">29 July 2020 - 02:26 PM</small>
													</div>
												</div>
											</li>
											<li>
												<div class="timeline-panel">
													<div class="media me-2 media-danger">
														KG
													</div>
													<div class="media-body">
														<h6 class="mb-1">Resport created successfully</h6>
														<small class="d-block">29 July 2020 - 02:26 PM</small>
													</div>
												</div>
											</li>
											<li>
												<div class="timeline-panel">
													<div class="media me-2 media-primary">
														<i class="fas fa-home"></i>
													</div>
													<div class="media-body">
														<h6 class="mb-1">Reminder : Treatment Time!</h6>
														<small class="d-block">29 July 2020 - 02:26 PM</small>
													</div>
												</div>
											</li>
										</ul>
									</div>
									<a class="all-notification" href="javascript:;">See all notifications <i
											class="ti-arrow-right"></i></a>
								</div>
							</li>

							<li class="nav-item dropdown header-profile">
								<a class="nav-link" href="javascript:;" role="button" data-bs-toggle="dropdown">
									<div class="header-info">
										<small>Saludo,</small>
										<span>Nombre completo</span>
									</div>
									<img src="/files/images/profile/12.png" width="20" alt="">
								</a>

								<div class="dropdown-menu dropdown-menu-end">
									<a href="/mi/perfil" class="dropdown-item ai-icon">
										<i style="color: rgb(234, 73, 137);" class="fa fa-user"></i>
										<span class="ms-2">Perfil </span>
									</a>
									<a href="/seguridad/inicio-de-sesion-rapido/confirmar-codigo"
										class="dropdown-item ai-icon">
										<i style="color: rgb(255, 206, 46);" class="fa fa-key"></i>
										<span class="ms-2">Inicio de sección rápido </span>
									</a>
									<a href="/seguridad/" class="dropdown-item ai-icon">
										<i style="color: rgb(43, 193, 85);" class="fa fa-cog"></i>
										<span class="ms-2">Configuración </span>
									</a>
									<button id="logoutBtn" class="dropdown-item ai-icon">
										<i style="color: rgb(255, 114, 114);" class="fa fa-door-open"></i>
										<span class="ms-2">Cerrar sesión </span>
									</button>
								</div>
							</li>
						</ul>
					</div>
				</nav>
			</div>

			<div class="header-content"
				style="background-color: #197BC2;min-height: 56px;display: flex;justify-content: center;align-items: end;height: auto;">
				<div class="custom-tab-1" style="display: flex; align-self: center;">
					<div class="nav nav-tabsv2">
						<div class="nav-item" id="datos_menu">
							<a style="color: #fff;" id="mostrarBtn" class="nav-linkv2 active">
								Datos ▾</a>
						</div>
						<div class="nav-item" id="evaluacion_menu">
							<a style="color: #fff;" id="mostrarBtnEvaluacion" class="nav-linkv2 active">
								Evaluación ▾</a>
						</div>
						<div class="nav-item" id="comunicaciones_menu">
							<a style="color: #fff;" id="mostrarBtnComunicaciones" class="nav-linkv2 active">
								Comunicaciones ▾</a>
						</div>
						<div class="nav-item" id="perfiles_menu">
							<a style="color: #fff;" id="mostrarBtnPerfiles" class="nav-linkv2 active">
								Perfiles ▾</a>
						</div>
						<div class="nav-item" id="nomina_menu">
							<a href="/datos/mi-negocio/nomina"  style="color: #fff;"
								class="nav-linkv2 active">
								Nomina</a>
						</div>
						<div class="nav-item" id="inventario_menu">
							<a href="/bodega/inventario/" style="color: #fff;" class="nav-linkv2 active">
								Inventario</a>
						</div>
						<div class="nav-item" id="auditoria_menu">
							<a href="/datos/auditoria" style="color: #fff;" class="nav-linkv2 active">
								Auditoria</a>
						</div>
						<div class="nav-item" id="pos_menu">
							<a href="/pos" style="color: #fff;" class="nav-linkv2 active">
								POS</a>
						</div>


					</div>
				</div>

			</div>

</div>
`;

const api = "https://connect.numart.com.co";

const token = localStorage.getItem("token");

var mostrarBtn = document.getElementById('mostrarBtn');
var mostrarBtnEvaluacion = document.getElementById('mostrarBtnEvaluacion');
var mostrarBtnComunicaciones = document.getElementById('mostrarBtnComunicaciones');
var mostrarBtnPerfiles = document.getElementById('mostrarBtnPerfiles');

var divOculto = document.getElementById('divOculto');
var divOcultoComunicaciones = document.getElementById('divOcultoComunicaciones');
var divOcultoPerfiles = document.getElementById('divOcultoPerfiles');
var divOcultoEvaluacion = document.getElementById('divOcultoEvaluacion')
var visiblev2 = false;



mostrarBtn.addEventListener('click', function () {
    if (!visiblev2) {

        divOculto.style.display = 'block';

        // Necesitamos darle un breve momento al navegador para aplicar los estilos antes de cambiar la posición
        setTimeout(function () {
            divOcultoPerfiles.style.top = '-200px'; // Mueve el div oculto arriba de la pantalla
            divOcultoComunicaciones.style.top = '-200px'; // Mueve el div oculto arriba de la pantalla
            divOculto.style.top = '130px';
            divOcultoEvaluacion.style.top = '-200px'; // Mueve el div oculto arriba de la pantalla
        }, 100);
    } else {
        // Animación de regreso
        divOculto.style.top = '-200px'; // Mueve el div oculto arriba de la pantalla

        setTimeout(function () {
        }, 1000); // Tiempo de espera para que la animación termine
    }
    visiblev2 = !visiblev2;
});

mostrarBtnEvaluacion.addEventListener('click', function () {
    if (!visiblev2) {

        divOcultoEvaluacion.style.display = 'block';

        // Necesitamos darle un breve momento al navegador para aplicar los estilos antes de cambiar la posición
        setTimeout(function () {
            divOcultoPerfiles.style.top = '-200px'; // Mueve el div oculto arriba de la pantalla
            divOcultoComunicaciones.style.top = '-200px'; // Mueve el div oculto arriba de la pantalla
            divOculto.style.top = '-200px';
            divOcultoEvaluacion.style.top = '130px'; // Mueve el div oculto arriba de la pantalla
        }, 100);
    } else {
        // Animación de regreso
        divOcultoEvaluacion.style.top = '-200px'; // Mueve el div oculto arriba de la pantalla

        setTimeout(function () {
        }, 1000); // Tiempo de espera para que la animación termine
    }
    visiblev2 = !visiblev2;
});

mostrarBtnComunicaciones.addEventListener('click', function () {
    if (!visiblev2) {

        divOcultoComunicaciones.style.display = 'block';

        // Necesitamos darle un breve momento al navegador para aplicar los estilos antes de cambiar la posición
        setTimeout(function () {
            divOcultoPerfiles.style.top = '-200px'; // Mueve el div oculto arriba de la pantalla
            divOcultoComunicaciones.style.top = '130px'; // Mueve el div oculto arriba de la pantalla
            divOculto.style.top = '-200px';
            divOcultoEvaluacion.style.top = '-200px'; // Mueve el div oculto arriba de la pantalla
        }, 100);
    } else {
        // Animación de regreso
        divOcultoComunicaciones.style.top = '-200px'; // Mueve el div oculto arriba de la pantalla

        setTimeout(function () {
        }, 1000); // Tiempo de espera para que la animación termine
    }
    visiblev2 = !visiblev2;
});

mostrarBtnPerfiles.addEventListener('click', function () {
    if (!visiblev2) {

        divOcultoPerfiles.style.display = 'block';

        // Necesitamos darle un breve momento al navegador para aplicar los estilos antes de cambiar la posición
        setTimeout(function () {
            divOcultoPerfiles.style.top = '130px'; // Mueve el div oculto arriba de la pantalla
            divOcultoComunicaciones.style.top = '-200px'; // Mueve el div oculto arriba de la pantalla
            divOculto.style.top = '-200px';
            divOcultoEvaluacion.style.top = '-200px'; // Mueve el div oculto arriba de la pantalla
        }, 100);
    } else {
        // Animación de regreso
        divOcultoPerfiles.style.top = '-200px'; // Mueve el div oculto arriba de la pantalla

        setTimeout(function () {
        }, 1000); // Tiempo de espera para que la animación termine
    }
    visiblev2 = !visiblev2;
});





if (!token) {
    const currentPath = window.location.pathname;
    window.location.href = `/session/login/?redirect=${encodeURIComponent(currentPath)}`;
}
const ahora = new Date();
const hora = ahora.getHours();




let saludo;

if (hora >= 4 && hora < 12) {
    saludo = "Buenos días,";
} else if (hora >= 12 && hora <= 18) {
    saludo = "Buenas tardes,";
} else {
    saludo = "Buenas noches,";
}

const userInfo = localStorage.getItem("userInfo");
const user = JSON.parse(userInfo);
document.querySelector(".header-info small").textContent = saludo
document.querySelector(".header-info span").textContent = user.primer_nombre + " " + user.primer_apellido;
document.querySelector(".dashboard_bar").textContent = user.empresa
const profileImg = document.querySelector(".header-profile img");
profileImg.src = user.profile_photo;


async function updateProfilePhoto(idEmpleadoPagina) {
    const file = document.getElementById("ProfileformFile").files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("token", localStorage.getItem("token"));
    formData.append("idUser", idEmpleadoPagina);

    const res = await fetch(
        "https://demo-worker.mrluki4656.workers.dev/update-image",
        {
            method: "POST",
            body: formData
        }
    );

    const data = await res.json();
    console.log(data);
}


// Buscamos el elemento una sola vez
const fileInput = document.getElementById('ProfileformFile');

// Solo ejecutamos la lógica si el input existe en el DOM
if (fileInput) {
    fileInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        const preview = document.getElementById('preview');

        if (file && preview) {
            // Validar que sea JPG
            if (file.type === "image/jpeg" || file.type === "image/jpg") {
                const reader = new FileReader();

                reader.onload = function (e) {
                    preview.src = e.target.result;
                    preview.classList.remove('d-none');
                }

                reader.readAsDataURL(file);
            } else {
                Swal.fire("Archivo incompatible", "Por favor, selecciona solo archivos JPG.", "error");
                event.target.value = ""; // Limpia el input
                preview.classList.add('d-none');
            }
        }
    });
}

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
        e.preventDefault(); // Evita comportamientos extraños si es un enlace
        localStorage.removeItem("token");
        window.location.href = "/session/login/";
    });
}

async function validarToken(token) {
    try {
        const res = await fetch(`${api}/validarToken`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token })
        });

        if (!res.ok) {
            const err = await res.json();
            console.log("Error:", err);
            return false;
        }

        const data = await res.json();

        if (!data.resultado) {
            localStorage.removeItem("token");

            Swal.fire({
                title: `La sesión ha caducado`,
                text: 'Vuelve a iniciar sesión',
                icon: 'warning', // Usualmente se usa warning para eliminaciones
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = "/session/login/"
                }
            });
        }

    } catch (error) {
        console.error("Error al conectar con el worker:", error);
        return false;
    }
}

validarToken(localStorage.getItem("token"))

async function verificarPermiso(token, ruta) {
    try {
        const res = await fetch(`${api}/permisos`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token, path: ruta })
        });

        if (!res.ok) {
            const err = await res.json();
            console.log("Error:", err);
            return false;
        }

        const data = await res.json();

        console.log(`Permiso para ${ruta}:`, data.permitido);
        if (!data.permitido) {
            codeError("401")
        }
        if (ruta === "")
            return data.permitido;
    } catch (error) {
        console.error("Error al conectar con el worker:", error);
        return false;
    }
}



async function returnConfidencialInfo(token, codigocentro, type) {
    try {
        const res = await fetch(`${api}/confidencialInformation`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token, infoNameCompleto: type, codigo_del_centro: codigocentro })
        });

        const data = await res.json();

        if (!res.ok) {
            console.error("Acceso denegado:", res, data);
            return false;
        }

        // ✅ Tiene permiso → devuelve la información
        console.log(`Datos para ${type}:`, data.data);

        if (type === "employeeList") {
            const usuarios = data.data;

            // Obtén la instancia de DataTable
            const table = $('#example5').DataTable();

            // Limpia la tabla antes de agregar nuevas filas (opcional)
            table.clear();

            usuarios.forEach(user => {
                console.log(user)
                table.row.add([
                    `${user.primer_nombre ?? ""} ${user.segundo_nombre ?? ""} ${user.primer_apellido ?? ""} ${user.segundo_apellido ?? ""}`,
                    `${user.documento ?? ""} ${user.numero_documento ?? ""}`,
                    user.email ?? "",
                    user.creador_por ?? "",

                    `${user.active === 1
                        ? '<a class="btn btn-success light btn-sm">ACTIVO</a>'
                        : '<a class="btn btn-danger light btn-sm">INACTIVO</a>'
                    }`,
                    `<div class="dropdown ms-auto c-pointer">
												<div class="btn-link" data-bs-toggle="dropdown">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M11.0005 12C11.0005 12.5523 11.4482 13 12.0005 13C12.5528 13 13.0005 12.5523 13.0005 12C13.0005 11.4477 12.5528 11 12.0005 11C11.4482 11 11.0005 11.4477 11.0005 12Z" stroke="#3E4954" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
														<path d="M18.0005 12C18.0005 12.5523 18.4482 13 19.0005 13C19.5528 13 20.0005 12.5523 20.0005 12C20.0005 11.4477 19.5528 11 19.0005 11C18.4482 11 18.0005 11.4477 18.0005 12Z" stroke="#3E4954" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
														<path d="M4.00049 12C4.00049 12.5523 4.4482 13 5.00049 13C5.55277 13 6.00049 12.5523 6.00049 12C6.00049 11.4477 5.55277 11 5.00049 11C4.4482 11 4.00049 11.4477 4.00049 12Z" stroke="#3E4954" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
													</svg>
												</div>
												<div class="dropdown-menu dropdown-menu-end">
													<a class="dropdown-item text-info" href="edit/?id=${String(user.id)}">
												
                          <i style="color: #2F4CDD;padding-right:12px;padding-left:3px" class="fa fa-pen"></i>
													Editar
													</a>
													<button  onclick="cambiarStatusUsuario(${String(user.id)}, '${user.primer_nombre ?? ""} ${user.segundo_nombre ?? ""} ${user.primer_apellido ?? ""} ${user.segundo_apellido ?? ""}')" class="dropdown-item text-yellow" href="#">
													<i style="color: #7e7e7e;padding-right:8px;padding-left:3px" class="fa fa-user-tag"></i>

													Cambiar estado
													</button>

                          <button onclick="eliminarUsuario(${String(user.id)}, '${user.primer_nombre ?? ""} ${user.segundo_nombre ?? ""} ${user.primer_apellido ?? ""} ${user.segundo_apellido ?? ""}')" class="dropdown-item text-danger" href="#">
													<svg class="me-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#F24242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
														<path d="M15 9L9 15" stroke="#F24242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
														<path d="M9 9L15 15" stroke="#F24242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
													</svg>
													Eliminar usuario
													</button>
												</div>
											</div>`
                ]).draw(false); // draw(false) mantiene la paginación actual
            });
        } else if (type === "storeRoomList") {
            console.log(data.data[0].items)
            const storeRoom = data.data[0].items
            const table = $('#tableInventory').DataTable();

            // Limpia la tabla antes de agregar nuevas filas (opcional)
            table.clear();
            storeRoom.forEach(user => {
                console.log(user)
                table.row.add([
                    `<a href="mirar/?id=${String(user.id)}" class="text-link">${user.name ?? ""}</a>`,
                    `${user.item_type.charAt(0).toUpperCase() + user.item_type.slice(1) ?? ""}`,
                    (user.base_price ?? "") && `$${user.base_price.toLocaleString('es-CO')} COP`,
                    user.stock ?? "",

                    `${user.active === true
                        ? '<a class="btn btn-success light btn-sm">ACTIVO</a>'
                        : '<a class="btn btn-danger light btn-sm">INACTIVO</a>'
                    }`,
                    `<div class="dropdown ms-auto c-pointer">
												<div class="btn-link" data-bs-toggle="dropdown">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M11.0005 12C11.0005 12.5523 11.4482 13 12.0005 13C12.5528 13 13.0005 12.5523 13.0005 12C13.0005 11.4477 12.5528 11 12.0005 11C11.4482 11 11.0005 11.4477 11.0005 12Z" stroke="#3E4954" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
														<path d="M18.0005 12C18.0005 12.5523 18.4482 13 19.0005 13C19.5528 13 20.0005 12.5523 20.0005 12C20.0005 11.4477 19.5528 11 19.0005 11C18.4482 11 18.0005 11.4477 18.0005 12Z" stroke="#3E4954" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
														<path d="M4.00049 12C4.00049 12.5523 4.4482 13 5.00049 13C5.55277 13 6.00049 12.5523 6.00049 12C6.00049 11.4477 5.55277 11 5.00049 11C4.4482 11 4.00049 11.4477 4.00049 12Z" stroke="#3E4954" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
													</svg>
												</div>
												<div class="dropdown-menu dropdown-menu-end">
                                                <a href="mirar/?id=${String(user.id)}" class="dropdown-item text-yellow" href="#">
													<i style="color: #252525;padding-right:8px;padding-left:3px" class="fa fa-eye"></i>

													Mostrar detalles
													</a>
													<a style="color: #197bc2 !important" class="dropdown-item text-info" href="editar/?id=${String(user.id)}">

												
                          <i style="color: #197bc2;padding-right:12px;padding-left:3px" class="fa fa-pen"></i>
													Editar
													</a>
                                                    
													<button  onclick="cambiarStatusUsuario(${String(user.id)}, '${user.primer_nombre ?? ""} ${user.segundo_nombre ?? ""} ${user.primer_apellido ?? ""} ${user.segundo_apellido ?? ""}')" class="dropdown-item text-yellow" href="#">
													<i style="color: #7e7e7e;padding-right:8px;padding-left:3px" class="fa fa-tag"></i>

													Cambiar estado
													</button>

                          <button onclick="eliminarUsuario(${String(user.id)}, '${user.primer_nombre ?? ""} ${user.segundo_nombre ?? ""} ${user.primer_apellido ?? ""} ${user.segundo_apellido ?? ""}')" class="dropdown-item text-danger" href="#">
													<svg class="me-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#F24242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
														<path d="M15 9L9 15" stroke="#F24242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
														<path d="M9 9L15 15" stroke="#F24242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
													</svg>
													Eliminar ítem
													</button>
                                                    
												</div>
											</div>`
                ]).draw(false); // draw(false) mantiene la paginación actual
                if (!user.stock) {
                    table.column(3).visible(false);
                }
                if (!user.base_price) {
                    table.column(2).visible(false);
                }
            });

            console.log(listaBodegas);
        }

        return data;

    } catch (error) {
        console.error("Error al conectar con el worker:", error);
        return false;
    }
}

async function mainLeftBar() {
    const tablee = await returnConfidencialInfo(
        localStorage.getItem("token"),
        JSON.parse(localStorage.getItem('userInfo')).codigo_centro,
        `role/${JSON.parse(localStorage.getItem('userInfo')).permisos_de_pagina}`
    );
    // Seleccionar automáticamente los valores en true al cargar
    console.log(tablee.data.autorizaciones)
    const rute = tablee.data.autorizaciones;

    if (!rute["mi-espacio"].mis_datos["mis_claves"]) {
        document.getElementById("mis-claves").remove()
    }
    if (!rute["mi-espacio"].top_mis_mensajes["mis_mensajes"]) {
        document.getElementById("misMensajes_menu").remove()
    }
    if (!rute["mi-espacio"].top_mis_reuniones["mis_reuniones"]) {
        document.getElementById("misReuniones_menu").remove()
    }
    if (!rute["mi-espacio"].top_mis_autorizaciones["mis_autorizaciones"]) {
        document.getElementById("misAutorizaciones_menu").remove()
    }
    if (!rute["mi-espacio"].top_mis_tareas["mis_tareas"]) {
        document.getElementById("misTareas_menu").remove()
    }

    if (!rute["mi-espacio"].top_mi_agenda["mi_agenda"]) {
        document.getElementById("miAgenda_menu").remove()
    }
    if (!rute["mi-espacio"].top_mi_nomina["mi_nomina"]) {
        document.getElementById("miNomina_menu").remove()
    }

    //MI NEGOCIO

    const ruteDatos = rute.datos_del_centro;
    const ruteReportes = ruteDatos.reportes;


    const sinContabilidad = !ruteDatos.top_contabilidad["contabilidad"];
    const sinNegocio = !ruteDatos.top_mi_negocio["mi_negocio"];
    const sinReportes = ruteReportes["reporte_diario"] === false && ruteReportes["reporte_mensual"] === false && ruteReportes["reporte_anual"] === false;
    if (sinContabilidad && sinNegocio && sinReportes) {
        document.getElementById("datos_menu")?.remove();
    } else {
        if (sinContabilidad) document.getElementById("contabilidad")?.remove();
        if (sinNegocio) document.getElementById("mi-negocio")?.remove();
        if (sinReportes) {
            console.log(sinReportes)
            document.getElementById("reportes")?.remove();
        }
    }

    if (!rute.datos_del_centro.top_mi_negocio["mi_negocio"]) {
        document.getElementById("mi-negocio")?.remove();
    }

    if (!rute.datos_del_centro.top_contabilidad["contabilidad"]) {
        document.getElementById("contabilidad")?.remove();
    }


    // --- SECCIÓN EVALUACIÓN ---
    const ruteEvaluacion = rute.evaluacion;
    if (!ruteEvaluacion.top_eventos["eventos"] && !ruteEvaluacion.top_incidencias["incidencias"] && !ruteEvaluacion.top_tutoria["tutoria"]) {
        document.getElementById("evaluacion_menu")?.remove();
    } else {
        if (!ruteEvaluacion.top_eventos["eventos"]) document.getElementById("eventos")?.remove();
        if (!ruteEvaluacion.top_incidencias["incidencias"]) document.getElementById("incidencias")?.remove();
        if (!ruteEvaluacion.top_tutoria["tutoria"]) document.getElementById("tutoria")?.remove();
    }

    // --- SECCIÓN COMUNICACIONES ---
    const ruteComunicaciones = rute.comunicaciones;
    if (!ruteComunicaciones.top_autorizaciones["autorizaciones"] && !ruteComunicaciones.top_avisos["avisos"] && !ruteComunicaciones.top_circulares["circulares"]) {
        document.getElementById("comunicaciones_menu")?.remove();
    } else {
        if (!ruteComunicaciones.top_autorizaciones["autorizaciones"]) document.getElementById("autorizaciones")?.remove();
        if (!ruteComunicaciones.top_avisos["avisos"]) document.getElementById("avisos")?.remove();
        if (!ruteComunicaciones.top_circulares["circulares"]) document.getElementById("circulares")?.remove();
    }

    // --- SECCIÓN PERFILES ---
    const rutePerfiles = rute.perfiles;
    if (!rutePerfiles.top_afiliados["afiliados"] && !rutePerfiles.top_empleados["empleados"] && !rutePerfiles.top_roles["roles"]) {
        document.getElementById("perfiles_menu")?.remove();
    } else {
        if (!rutePerfiles.top_afiliados["afiliados"]) document.getElementById("afiliados")?.remove();
        if (!rutePerfiles.top_empleados["empleados"]) document.getElementById("empleados")?.remove();
        if (!rutePerfiles.top_roles["roles"]) document.getElementById("roles")?.remove();
    }

    if (!rute["nomina"].top_nomina["gestionar_nomina"]) {
        document.getElementById("nomina_menu").remove()
    }

    if (!rute["ventas"].inventario["ver_items"]) {
        document.getElementById("inventario_menu").remove()
    }

    if (!rute["datos_del_centro"].top_registro_de_auditoria["registro_de_auditoria"]) {
        document.getElementById("auditoria_menu").remove()
    }

    const ventas = rute.ventas.pos;

    const hayAlgunPermisoVentas = Object.values(ventas).some(valor => valor === true);

    if (!hayAlgunPermisoVentas) {
        const elemento = document.getElementById("pos_menu");
        if (elemento) {
            elemento.remove();
        }
    }
}

mainLeftBar();


const editEmpleadoForm = document.getElementById("editEmpleadoForm");

editEmpleadoForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    // --- SECCIÓN: DATOS PERSONALES ---
    const primerNombre = document.getElementById("primer_nombre").value;
    const segundoNombre = document.getElementById("segundo_nombre").value;
    const primerApellido = document.getElementById("primer_apellido").value;
    const segundoApellido = document.getElementById("segundo_apellido").value;
    const sexo = document.getElementById("sexo").value;
    const tipoDocumento = document.getElementById("documento").value;
    const numeroDocumento = document.getElementById("numero_documento").value;
    const fechaNacimiento = document.getElementById("fecha_de_nacimiento").value;
    const telEmergencia = document.getElementById("telefono_emergencia").value;
    const movil1 = document.getElementById("movil1").value;
    const movil2 = document.getElementById("movil2").value;
    const estadoCivil = document.getElementById("estado_civil").value;

    // --- SECCIÓN: DIRECCIÓN ---
    const direccion = document.getElementById("direccion").value;
    const barrio = document.getElementById("barrio").value;
    const codigoPostal = document.getElementById("codigo_postal").value;
    const paisResidencia = document.getElementById("pais").value;
    const estadoResidencia = document.getElementById("estado_residencia").value;
    const municipio = document.getElementById("municipio").value;
    const zonaResidencial = document.getElementById("zona_residencial").value;

    // --- SECCIÓN: LUGAR DE NACIMIENTO ---
    const paisNacimiento = document.getElementById("pais_nacimiento").value;
    const estadoNacimiento = document.getElementById("estado_nacimiento").value;
    const ciudadNacimiento = document.getElementById("ciudad_nacimiento").value;
    const nacionalidad = document.getElementById("nacionalidad").value;

    // --- SECCIÓN: DATOS ADICIONALES ---
    const correoPersonal = document.getElementById("correo_personal").value;
    const profesion = document.getElementById("profesion").value;
    const ocupacion = document.getElementById("ocupacion").value;
    const empresa = document.getElementById("empresa").value;

    const usuarioEmaildeAcceso = document.getElementById("correo_acceso").value;

    const password = document.getElementById("password").value; // Buscado por tipo ya que no tiene ID en el HTML proporcionado
    const rol = document.getElementById("idRol").value;

    const queryStringPagina = window.location.search;
    const urlParamsPagina = new URLSearchParams(queryStringPagina);
    const idEmpleadoPagina = urlParamsPagina.get('id');
    // Ejemplo de cómo agrupar todo en un objeto para enviarlo a una API
    const datosEmpleado = {
        nombres: { primerNombre, segundoNombre },
        apellidos: { primerApellido, segundoApellido },
        identificacion: { tipoDocumento, numeroDocumento },
        contacto: { movil1, movil2, telEmergencia, correoPersonal },
        ubicacion: { direccion, barrio, municipio, estadoResidencia },
        cuenta: { emailEmpresarial: usuarioEmaildeAcceso, password, rol },
        otrosDatos: {
            sexo, fechaNacimiento, estadoCivil, codigoPostal, paisResidencia, zonaResidencial,
            paisNacimiento, estadoNacimiento, ciudadNacimiento, nacionalidad,
            profesion, ocupacion, empresa, id: idEmpleadoPagina
        }
    };

    console.log("Datos capturados:", datosEmpleado);

    try {
        const res = await fetch(api + "/actualizarPerfil", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                token: localStorage.getItem("token"),
                dataTable: datosEmpleado
            })
        });

        const data = await res.json();
        console.log(data);
        const generoTexto = datosEmpleado.otrosDatos.sexo === "Mujer" ? "empleada" : "empleado";
        if (data.permitido) {
            updateProfilePhoto(idEmpleadoPagina)
            Swal.fire(
                "¡Registro exitoso!",
                `Has actualizado a tu ${generoTexto} ${datosEmpleado.nombres.primerNombre} ${datosEmpleado.nombres.segundoNombre} ${datosEmpleado.apellidos.primerApellido} ${datosEmpleado.apellidos.segundoApellido}`, "success"
            ).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = "/perfiles/empleados";
                }
            });
        } else {
            console.log(data);

            Swal.fire("1", "", "error");
        }
    } catch (err) {
        console.log(data, err);

        alert("Error verificando 2FA: " + err);
    }

    // Aquí iría tu lógica de fetch/axios
});





const empleadoForm = document.getElementById("empleadoForm");

empleadoForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    // --- SECCIÓN: DATOS PERSONALES ---
    const primerNombre = document.getElementById("primer_nombre").value;
    const segundoNombre = document.getElementById("segundo_nombre").value;
    const primerApellido = document.getElementById("primer_apellido").value;
    const segundoApellido = document.getElementById("segundo_apellido").value;
    const sexo = document.getElementById("sexo").value;
    const tipoDocumento = document.getElementById("documento").value;
    const numeroDocumento = document.getElementById("numero_documento").value;
    const fechaNacimiento = document.getElementById("fecha_de_nacimiento").value;
    const telEmergencia = document.getElementById("telefono_emergencia").value;
    const movil1 = document.getElementById("movil1").value;
    const movil2 = document.getElementById("movil2").value;
    const estadoCivil = document.getElementById("estado_civil").value;

    // --- SECCIÓN: DIRECCIÓN ---
    const direccion = document.getElementById("direccion").value;
    const barrio = document.getElementById("barrio").value;
    const codigoPostal = document.getElementById("codigo_postal").value;
    const paisResidencia = document.getElementById("pais").value;
    const estadoResidencia = document.getElementById("estado_residencia").value;
    const municipio = document.getElementById("municipio").value;
    const zonaResidencial = document.getElementById("zona_residencial").value;

    // --- SECCIÓN: LUGAR DE NACIMIENTO ---
    const paisNacimiento = document.getElementById("pais_nacimiento").value;
    const estadoNacimiento = document.getElementById("estado_nacimiento").value;
    const ciudadNacimiento = document.getElementById("ciudad_nacimiento").value;
    const nacionalidad = document.getElementById("nacionalidad").value;

    // --- SECCIÓN: DATOS ADICIONALES ---
    const correoPersonal = document.getElementById("correo_personal").value;
    const profesion = document.getElementById("profesion").value;
    const ocupacion = document.getElementById("ocupacion").value;
    const empresa = document.getElementById("empresa").value;

    const usuarioEmaildeAcceso = document.getElementById("correo_acceso").value;

    const password = document.getElementById("password").value; // Buscado por tipo ya que no tiene ID en el HTML proporcionado
    const rol = document.getElementById("idRol").value;

    // Ejemplo de cómo agrupar todo en un objeto para enviarlo a una API
    const datosEmpleado = {
        nombres: { primerNombre, segundoNombre },
        apellidos: { primerApellido, segundoApellido },
        identificacion: { tipoDocumento, numeroDocumento },
        contacto: { movil1, movil2, telEmergencia, correoPersonal },
        ubicacion: { direccion, barrio, municipio, estadoResidencia },
        cuenta: { emailEmpresarial: usuarioEmaildeAcceso, password, rol },
        otrosDatos: {
            sexo, fechaNacimiento, estadoCivil, codigoPostal, paisResidencia, zonaResidencial,
            paisNacimiento, estadoNacimiento, ciudadNacimiento, nacionalidad,
            profesion, ocupacion, empresa
        }
    };

    console.log("Datos capturados:", datosEmpleado);

    try {
        const res = await fetch(api + "/crearPerfil", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                token: localStorage.getItem("token"),
                perfilType: "empleado",
                dataTable: datosEmpleado
            })
        });

        const data = await res.json();
        console.log(data);
        const generoTexto = datosEmpleado.otrosDatos.sexo === "Mujer" ? "nueva empleada" : "nuevo empleado";
        if (data.permitido) {
            Swal.fire(
                "¡Registro exitoso!",
                `Ahora ${datosEmpleado.nombres.primerNombre} ${datosEmpleado.nombres.segundoNombre} ${datosEmpleado.apellidos.primerApellido} ${datosEmpleado.apellidos.segundoApellido} es tu ${generoTexto}!`, "success"
            ).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = "/perfiles/empleados";
                }
            });
        } else {
            console.log(data);

            Swal.fire("1", "", "error");
        }
    } catch (err) {
        console.log(data, err);

        alert("Error verificando 2FA: " + err);
    }

    // Aquí iría tu lógica de fetch/axios
});


async function eliminarUsuario(idUsuario, nombrecompleto) {
    Swal.fire({
        title: `¿Estas seguro que quieres borrar la cuenta de ${nombrecompleto}?`,
        text: 'Recuerde que esta acción no se puede deshacer.',
        icon: 'warning', // Usualmente se usa warning para eliminaciones
        showCancelButton: true,
        confirmButtonColor: '#DD6B55', // El color rojo que se ve en tu código (rgb(221, 107, 85))
        confirmButtonText: '¡Sí, bórralo!',
        cancelButtonText: '¡No, cancelalo!',
        reverseButtons: false // Mantener el orden de los botones
    }).then((result) => {
        if (result.isConfirmed) {
            returnConfidencialInfo(localStorage.getItem("token"), JSON.parse(localStorage.getItem('userInfo')).codigo_centro, `eliminarUsuario/${idUsuario}`)
                .then(data => {
                    if (data.data == "404") {
                        Swal.fire(
                            "Usuario no encontrado.",
                            `El usuario que intentas eliminar no existe o ya fue eliminado.`,
                            "error"
                        ).then((result) => {
                            if (result.isConfirmed) {
                                console.log("El usuario hizo clic en OK");
                            }
                        });
                    } else if (data.data == "401") {
                        Swal.fire(
                            "Acción no permitida.",
                            `No puedes eliminar esta cuenta porque no pertenece a tu compañia. `,
                            "error"
                        ).then((result) => {
                            if (result.isConfirmed) {
                                console.log("El usuario hizo clic en OK");
                            }
                        });

                    } else if (data.data == "200") {
                        Swal.fire(
                            '¡Eliminación exitosa!',
                            `La cuenta de ${nombrecompleto} se eliminó correctamente.`,
                            'success'
                        ).then((result) => {
                            if (result.isConfirmed) {
                                location.reload();;
                            }
                        });

                    } else if (data.data == "CEO") {
                        Swal.fire(
                            'Acción no permitida.',
                            `No puedes eliminar la cuenta de ${nombrecompleto}, ya que es un superior. Esta acción no está permitida para ninguna cuenta.`,
                            'error'
                        )
                    } else if (data.data == "403") {
                        Swal.fire(
                            'Acción no permitida.',
                            `No está permitido eliminar la cuenta con la que has iniciado sesión.`,
                            'error'
                        )
                    }

                })
                .catch(err => {
                    // window.location.href = "/error-404"

                    Swal.fire(
                        'Error!',
                        err,
                        'error'
                    ).then((result) => {
                        if (result.isConfirmed) {
                            location.reload();;
                        }
                    });
                });
        }
    });
}

async function cambiarStatusUsuario(idUsuario, nombrecompleto) {
    Swal.fire({
        title: `Cambiar estado de la cuenta`,
        text: `¿Estás seguro de que deseas cambiar el estado la cuenta de ${nombrecompleto}?`,
        icon: 'warning', // Usualmente se usa warning para eliminaciones
        showCancelButton: true,
        confirmButtonColor: '#DD6B55', // El color rojo que se ve en tu código (rgb(221, 107, 85))
        confirmButtonText: '¡Sí, cambialo!',
        cancelButtonText: '¡No, cancelalo!',
        reverseButtons: false // Mantener el orden de los botones
    }).then((result) => {
        if (result.isConfirmed) {
            returnConfidencialInfo(localStorage.getItem("token"), JSON.parse(localStorage.getItem('userInfo')).codigo_centro, `editarStatus/${idUsuario}`)
                .then(data => {
                    if (data.data == "404") {
                        Swal.fire(
                            "Usuario no encontrado.",
                            `El usuario que intentas eliminar no existe o ya fue eliminado.`,
                            "error"
                        ).then((result) => {
                            if (result.isConfirmed) {
                                console.log("El usuario hizo clic en OK");
                            }
                        });
                    } else if (data.data == "401") {
                        Swal.fire(
                            "Acción no permitida.",
                            `No puedes editar esta cuenta porque no pertenece a tu compañia. `,
                            "error"
                        ).then((result) => {
                            if (result.isConfirmed) {
                                console.log("El usuario hizo clic en OK");
                            }
                        });

                    } else if (data.data == "200") {
                        Swal.fire(
                            '¡Listo!',
                            `El estado de ${nombrecompleto} fue actualizado con éxito.`,
                            'success'
                        ).then((result) => {
                            if (result.isConfirmed) {
                                location.reload();;
                            }
                        });

                    } else if (data.data == "CEO") {
                        Swal.fire(
                            'Acción no permitida.',
                            `No puedes editar la cuenta de ${nombrecompleto}, ya que es un superior. Esta acción no está permitida para ninguna cuenta.`,
                            'error'
                        )
                    } else if (data.data == "403") {
                        Swal.fire(
                            'Acción no permitida.',
                            `No puedes desactivar la cuenta con la que has iniciado sesión.`,
                            'error'
                        )
                    }

                })
                .catch(err => {
                    // window.location.href = "/error-404"

                    Swal.fire(
                        'Error!',
                        err,
                        'error'
                    ).then((result) => {
                        if (result.isConfirmed) {
                            location.reload();;
                        }
                    });
                });
        }
    });
}




// ROLES

async function borrarRolFunction(nombreRol) {
    // 1. Validación rápida antes de abrir Swal
    if (nombreRol === "CEO" || nombreRol === "Invitado") {
        Swal.fire("Acción denegada", `El rol '${nombreRol}' es del sistema y no se puede eliminar.`, "error");
        return;
    }

    Swal.fire({
        title: `¿Estás seguro de borrar el rol '${nombreRol}'?`,
        text: 'Recuerde que esta acción no se puede deshacer.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: '¡Sí, bórralo!',
        cancelButtonText: 'Cancelar',
        allowOutsideClick: () => !Swal.isLoading() // Evita cerrar mientras carga
    }).then((result) => {
        if (result.isConfirmed) {
            ejecutarBorrado(nombreRol);
        }
    });
}

async function ejecutarBorrado(nombreRol) {
    const token = localStorage.getItem('token');
    const estructuraRol = { "rol_name": nombreRol };

    try {
        // Bloqueo de UI
        Swal.fire({
            title: 'Eliminando...',
            didOpen: () => { Swal.showLoading(); }
        });

        const res = await fetch(`${api}/editarInfoRole`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                token,
                dataTable: JSON.stringify(estructuraRol),
                type: "remove"
            })
        });

        const data = await res.json();

        if (!res.ok || data.permitido === false) {
            // Manejo de errores específicos del backend (como el 403 de CEO/Invitado)
            Swal.fire("Error", data.mensaje || "No se pudo eliminar el rol.", "error");
            return;
        }

        // Éxito
        Swal.fire("¡Listo!", "El rol se eliminó.", "success").then(() => {
            localStorage.setItem('abrirModalRoles', 'true');
            location.reload();
        });

    } catch (error) {
        Swal.fire("Ouch...", "Error de conexión con el servidor.", "error");
        console.error(error);
    }
}

function obtenerFechaFormateada(timestamp = null) {
    // Si pasas un timestamp lo usamos, si no, usamos Date.now()
    // Multiplicamos por 1000 solo si el timestamp viene en segundos (10 dígitos)
    const fechaBase = timestamp
        ? new Date(timestamp.toString().length === 10 ? timestamp * 1000 : timestamp)
        : new Date();

    const dia = String(fechaBase.getDate()).padStart(2, '0');
    const mes = String(fechaBase.getMonth() + 1).padStart(2, '0');
    const anio = fechaBase.getFullYear();

    const horas = String(fechaBase.getHours()).padStart(2, '0');
    const minutos = String(fechaBase.getMinutes()).padStart(2, '0');

    return `${dia}/${mes}/${anio} ${horas}h:${minutos}`;
}


function codeError(code) {
    if (code === "401") {
       document.title= "Error 401 | Unauthorized Response"

        const nuevoHTML = `<html lang="en" class="h-100" dir="ltr"><head>
	<!-- Title -->
	<title>Error 401 | Unauthorized Response</title>

	<!-- Meta -->
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">

	<!-- Mobile Specific -->
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<!-- Favicon icon -->
	<link rel="icon" type="image/png" href="https://imagenes.numart.com.co/favicon.ico">
	<link href="/files/css/style.css" rel="stylesheet">

</head>

<body class="h-100" data-typography="poppins" data-theme-version="light" data-layout="vertical" data-nav-headerbg="color_3" data-headerbg="color_1" data-sidebar-style="full" data-sibebarbg="color_3" data-sidebar-position="fixed" data-header-position="fixed" data-container="wide" direction="ltr" data-primary="color_1">
	<div class="authincation h-100">
		<div class="container h-100">
			<div class="row justify-content-center h-100 align-items-center">
				<div class="col-md-6">
					<div class="form-input-content text-center error-page">
						<h1 class="error-text  font-weight-bold">401</h1>
						<h4><i class="fas fa-times-circle text-danger"></i> Unauthorized</h4>
						<p>You do not have permission to view this resource.</p>
						<div>
							<button class="btn btn-light" onclick="window.history.go(-1)">VOLVER</button>
							<a class="btn btn-primary" href="/">INICIO</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!--**********************************
	Scripts
***********************************-->
	<!-- Required vendors -->
	<script src="/files/vendor/global/global.min.js"></script>
	<script src="/files/js/custom.min.js"></script>
	<script src="/files/js/deznav-init.js"></script>
</body></html>`;

        document.open();
        document.write(nuevoHTML);
        document.close();








    } else if (code === "404") {


        const nuevoHTML = `<html lang="en" class="h-100" dir="ltr"><head>
    <!-- Title -->
	<title>Error 404 | Not Found</title>

	<!-- Meta -->
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<!-- Mobile Specific -->
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<!-- Favicon icon -->
	<link rel="icon" type="image/png" href="https://imagenes.numart.com.co/favicon.ico">
    <link href="/files/css/style.css" rel="stylesheet">
    
</head>

<body class="h-100" data-typography="poppins" data-theme-version="light" data-layout="vertical" data-nav-headerbg="color_3" data-headerbg="color_1" data-sidebar-style="full" data-sibebarbg="color_3" data-sidebar-position="fixed" data-header-position="fixed" data-container="wide" direction="ltr" data-primary="color_1">
    <div class="authincation h-100">
        <div class="container h-100">
            <div class="row justify-content-center h-100 align-items-center">
                <div class="col-md-6">
                    <div class="form-input-content text-center error-page">
                        <h1 class="error-text  font-weight-bold">404</h1>
                        <h4><i class="fas fa-times-circle text-danger"></i> Algo salió mal.</h4>
                        <p>Página no encontrada</p>
						<div>
							<button class="btn btn-light" onclick="window.history.go(-2)">VOLVER</button>
                            <a class="btn btn-primary" href="/">INICIO</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<!--**********************************
	Scripts
***********************************-->
<!-- Required vendors -->
<script src="/files/vendor/global/global.min.js"></script>
<script src="/files/js/custom.min.js"></script>
<script src="/files/js/deznav-init.js"></script>

</body></html>`;

        document.open();
        document.write(nuevoHTML);
        document.close();
    }
}
