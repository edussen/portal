// --- DATOS DEL MENÚ ---
const menuItems = [
    { id: '1', name: 'CUADERNO NORMA FERROCARRIL D', price: 15000, category: 'Favoritos', discount: 0, tax: 0, stock: 14, image: 'https://todoenartes.com/cdn/shop/files/7702111356320-1_5bcb7f64-0810-4051-ae1a-f413738d3b85.jpg?v=1750357533' },
    { id: '2', name: 'TIJERA ETERNA 8.5', price: 7000, category: 'Favoritos', discount: 0, tax: 0, stock: 5, image: 'https://imagenes.numart.com.co/noIconItem.png' },
    { id: '3', name: 'PISTOLA SILICONA JOLLY', price: 12000, category: 'Favoritos', discount: 0, tax: 0, stock: 16, image: 'https://imagenes.numart.com.co/noIconItem.png' },
    { id: '4', name: 'CUADERNO PRIMAVERA C DOBLE LINEA', price: 10000, category: '', discount: 0, tax: 0, stock: 5, image: 'https://imagenes.numart.com.co/noIconItem.png' },
    { id: '5', name: 'PELUCHE HELLO KITTY', price: 55000, category: '', discount: 0, tax: 0, stock: 5, image: 'https://imagenes.numart.com.co/noIconItem.png' },
    { id: '6', name: 'CUADERNO LUKIS 5 MATERIAS CUADRICULADO', price: 3000, category: 'Favoritos', discount: 0, tax: 0, stock: 0, image: 'https://imagenes.numart.com.co/noIconItem.png' },
];


// --- ESTADO GLOBAL ---
let currentCategory = 'Main Course';
let searchQuery = '';
let orderItems = JSON.parse(localStorage.getItem('restaurant_cart')) || [];

const formatCurrency = (amount) => {
    return amount.toLocaleString('en-US', {
        minimumFractionDigits: 0, // Cambiado a 0 ya que redondeamos a múltiplos de 50
        maximumFractionDigits: 0
    });
};

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initCategoryTabs();
    initSearch();
    renderMenuItems();
    renderOrderItems();
    updatePricing();
});

function renderMenuItems() {
    const grid = document.getElementById('menu-grid');
    if (!grid) return;

    const filtered = menuItems.filter(item => {
        const matchesCategory = (currentCategory === 'Main Course') ? true : item.category === currentCategory;
        const matchesSearch = item.name.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
    });

    grid.innerHTML = filtered.map(item => {
        const discountedPrice = item.price * (1 - item.discount / 100);
        const finalUnitPrice = discountedPrice * (1 + item.tax / 100);

        return `
        <div class="menu-item" data-id="${item.id}" style="position: relative; cursor: pointer;">
            <span class="stock-tag" title="${item.stock > 5 ? '' : item.stock >= 1 ? 'Pocas unidades. Stock recomendado: más de 5': 'Sin stock'}" style="position: absolute; top: 10px; right: 10px; 
            background:${item.stock > 5 ? '#30aba9' : item.stock >= 1 ? '#e58900ad': '#ff8484'}; 
            color: ${item.stock > 5 ? '#ffffff' : item.stock >= 1 ? '#fff': '#fff'}; 
            padding: 2px 8px; border-radius: 12px; font-size: 12px; font-weight: 500; z-index: 1;">
                
               
                ${item.stock > 5 ? '' : item.stock >= 1 ? '<i class="fa fa-exclamation-triangle" style="padding-right: 3px;"></i>': '<i class="fa fa-times-circle" style="padding-right: 3px;"></i>'}
                ${item.stock === 0 ? 'Agotado' : `Inv. ${item.stock}`}
                
            </span>
            ${item.discount > 0 ? `
            <span class="discount-tag" style="position: absolute; top: 40px; right: 10px; background: #ff4757; color: white; padding: 2px 8px; border-radius: 12px; font-size: 12px; font-weight: bold; z-index: 1;">
                -${item.discount}%
            </span>` : ''}
            <img src="${item.image}" alt="${item.name}" class="menu-item-image">
            <div class="menu-item-info">
                <div class="menu-item-name">${item.name}</div>
                <div class="menu-item-price">
                    <strong>$${formatCurrency(finalUnitPrice)}</strong>
                </div>
                <div style="font-size: 10px; color: #888;">
                        Precio Original: $${formatCurrency(item.price)} + IVA ${item.tax}%
                    </div>
            </div>
        </div>
    `;
    }).join('');

    document.querySelectorAll('.menu-item').forEach(el => {
        el.addEventListener('click', () => addToOrder(el.dataset.id));
    });
}

// --- LÓGICA DE TOTALES CON REDONDEO ---
function updatePricing() {
    let subtotalRaw = 0;
    let totalDiscount = 0;
    let totalTax = 0;
    let grandTotalExact = 0;

    orderItems.forEach(item => {
        const itemSubtotal = item.price * item.quantity;
        const itemDiscount = (itemSubtotal * item.discount) / 100;
        const itemBaseImponible = itemSubtotal - itemDiscount;
        const itemTax = (itemBaseImponible * item.tax) / 100;

        subtotalRaw += itemSubtotal;
        totalDiscount += itemDiscount;
        totalTax += itemTax;
        grandTotalExact += (itemBaseImponible + itemTax);
    });

    // Redondeo hacia abajo al múltiplo de 50 más cercano
    // Ejemplo: 45,123 -> 45,100 | 45,149 -> 45,100 | 45,180 -> 45,150
    const grandTotalRounded = Math.floor(grandTotalExact / 50) * 50;
    const Rounded = Math.floor(grandTotalExact - grandTotalRounded);
    const elements = {
        'subtotal': `$${formatCurrency(subtotalRaw)}`,
        'discount': `-$${formatCurrency(totalDiscount)}`,
        'iva': `$${formatCurrency(totalTax)}`,
        'redondeo': `-$${Rounded}`,
        'total': `$${formatCurrency(grandTotalRounded)}`
    };

    for (const [id, value] of Object.entries(elements)) {
        const el = document.getElementById(id);
        if (el) el.textContent = value;
    }

    const orderBtn = document.getElementById('make-order-btn');
    if (orderBtn) orderBtn.disabled = orderItems.length === 0;
}

function addToOrder(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    if (!item) return;

    if (item.stock === 0) {
        Swal.fire({
            title: '¡Se agotó!',
            text: 'Este producto voló. Por ahora no tenemos unidades disponibles.',
            icon: 'warning',
        });
        return;
    }

    const existingItem = orderItems.find(oi => oi.id === itemId);
    if (existingItem) {
        if (existingItem.quantity >= item.stock) {
            Swal.fire({
                title: 'Límite alcanzado',
                text: `Solo tenemos ${item.stock} unidades disponibles.`,
                icon: 'info',
            });
            return;
        }
        existingItem.quantity++;

    } else {
        orderItems.push({ ...item, quantity: 1 });
    }
    toastr.options = {
        "closeButton": false,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "timeOut": "3000",
        "extendedTimeOut": "1000",

        /* CONFIGURACIÓN DE ANIMACIÓN */
        "showMethod": "fadeIn",    // Aparece con transparencia
        "hideMethod": "fadeOut",   // Desaparece con transparencia
        "showDuration": "3000",    // Un segundo para aparecer
        "hideDuration": "3000",    // Un segundo para desaparecer
        "showEasing": "swing",
        "hideEasing": "swing"
    };

    toastr.success('Hemos sumado este artículo a tu carrito con éxito.', '¡Listo!');
    saveAndRefresh();
}

function saveAndRefresh() {
    localStorage.setItem('restaurant_cart', JSON.stringify(orderItems));
    renderOrderItems();
    updatePricing();
}

function renderOrderItems() {
    const container = document.getElementById('order-items-list');
    if (!container) return;

    if (orderItems.length === 0) {
        container.innerHTML = '<div style="text-align:center; padding:20px; color:#888;">No hay productos</div>';
        return;
    }

    container.innerHTML = orderItems.map(item => {
        const discountedPrice = item.price * (1 - item.discount / 100);
        const finalUnitPrice = discountedPrice * (1 + item.tax / 100);
        const itemTotal = finalUnitPrice * item.quantity;

        return `
            <div class="order-item">
                <img src="${item.image}" alt="${item.name}" class="order-item-image">
                <div class="order-item-details">
                    <div class="order-item-header">
                        <div class="order-item-name">${item.name}</div>
                        <button class="remove-item-btn" data-id="${item.id}">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="order-item-footer">
                        <div class="quantity-controls">
                            <button class="quantity-btn" data-id="${item.id}" data-action="decrease">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                            </button>
                            <span class="quantity-value">${item.quantity}</span>
                            <button class="quantity-btn" data-id="${item.id}" data-action="increase">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                            </button>
                        </div>
                        <div class="order-item-total">$${formatCurrency(itemTotal)}</div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    container.querySelectorAll('.quantity-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.dataset.id;
            const action = btn.dataset.action;
            changeQty(id, action === 'increase' ? 1 : -1);
        });
    });

    container.querySelectorAll('.remove-item-btn').forEach(btn => {
        btn.addEventListener('click', () => removeFromOrder(btn.dataset.id));
    });
}

function changeQty(id, delta) {
    const itemInOrder = orderItems.find(i => i.id === id);
    const itemOriginal = menuItems.find(i => i.id === id);

    if (itemInOrder && itemOriginal) {
        if (delta > 0 && itemInOrder.quantity >= itemOriginal.stock) {
            Swal.fire({
                title: 'Límite alcanzado',
                text: `Lo sentimos, no hay más existencias de ${itemOriginal.name}.`,
                icon: 'info',
            });
            return;
        }

        itemInOrder.quantity += delta;
        if (itemInOrder.quantity <= 0) {
            removeFromOrder(id);
        } else {
            saveAndRefresh();
        }
    }
}

function removeFromOrder(id) {
    orderItems = orderItems.filter(i => i.id !== id);
    saveAndRefresh();
}

function initNavigation() {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            const page = item.dataset.page;
            document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
            item.classList.add('active');
            document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
            const targetPage = document.getElementById(`${page}-page`);
            if (targetPage) targetPage.classList.add('active');
        });
    });
}

function initCategoryTabs() {
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            currentCategory = tab.dataset.category;
            document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderMenuItems();
        });
    });
}

function initSearch() {
    document.getElementById('search-input')?.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        renderMenuItems();
    });
}

function imprimirDiv(idDiv) {
    var elemento = document.getElementById(idDiv);
    var contenido = elemento.innerHTML;
    var contenidoOriginal = document.body.innerHTML;

    // Envolvemos el contenido en un contenedor que fuerce el tamaño
    document.body.innerHTML =
        '<div style="width: 100%; display: flex; justify-content: center;">' +
        '<div id="' + idDiv + '" style="transform-origin: top center;">' +
        contenido +
        '</div>' +
        '</div>';

    // Pequeño truco: si el contenido es muy alto, podrías aplicar un scale 
    // manualmente aquí, pero normalmente el navegador lo hace con "Ajustar a la página"

    window.print();

    document.body.innerHTML = contenidoOriginal;
    location.reload();
}
document.addEventListener('DOMContentLoaded', function () {
    // Referencias a elementos de pantalla
    const step1 = document.getElementById('main_payment_container');
    const step2 = document.getElementById('success_container');
    const panelEfectivo = document.getElementById('panel_efectivo');
    const listaMetodos = document.getElementById('metodos_lista');
    const contenedorOpcionesRapidas = document.querySelector('#panel_efectivo .payment-buttons');

    // Inputs y Botones
    const inputEfectivo = document.getElementById('primer_nombre');
    const btnContinuar = document.getElementById('btn_continuar');
    const btnImprimir = document.getElementById('btn_imprimir');
    const cambioP1 = document.getElementById('cambio_pantalla_1');
    const totalPantalla1 = document.querySelector('.payment-1 p[style*="25px"]');

    let metodoActual = "Efectivo";
    let totalVentaCalculado = 0;

    // --- FUNCIÓN PARA PREPARAR EL PAGO ---
    // Llamar a esta función justo antes de mostrar el modal o al abrirlo
    window.prepararPanelPago = function () {
        let grandTotalExact = 0;
        orderItems.forEach(item => {
            const sub = item.price * item.quantity;
            const desc = (sub * item.discount) / 100;
            const tax = ((sub - desc) * item.tax) / 100;
            grandTotalExact += (sub - desc + tax);
        });

        // Redondeo a 50 como en tu lógica de updatePricing
        totalVentaCalculado = Math.floor(grandTotalExact / 50) * 50;

        // Actualizar total en la pantalla de pago
        if (totalPantalla1) totalPantalla1.innerText = `$${formatCurrency(totalVentaCalculado)}`;

        generarSugerenciasEfectivo(totalVentaCalculado);
    };

    function generarSugerenciasEfectivo(total) {
        if (!contenedorOpcionesRapidas) return;

        // Crear sugerencias inteligentes (Billetes colombianos comunes)
        const sugerencias = new Set();
        sugerencias.add(total); // Opción exacta
        sugerencias.add(Math.ceil(total / 1000) * 1000); // Siguiente mil
        sugerencias.add(Math.ceil(total / 5000) * 5000); // Siguiente 5 mil

        // Billetes estándar si el total es menor
        [10000, 20000, 50000, 100000].forEach(billete => {
            if (billete > total) sugerencias.add(billete);
        });

        // Filtrar, ordenar y tomar las 3 más cercanas
        const botonesFinales = Array.from(sugerencias)
            .filter(v => v >= total)
            .sort((a, b) => a - b)
            .slice(0, 3);

        contenedorOpcionesRapidas.innerHTML = botonesFinales.map(valor => `
            <button class="payment-btn btn-quick" data-value="${valor}">
                <span>$${formatCurrency(valor)}</span>
            </button>
        `).join('');

        // Re-asignar eventos a los nuevos botones generados
        contenedorOpcionesRapidas.querySelectorAll('.btn-quick').forEach(btn => {
            btn.addEventListener('click', function () {
                inputEfectivo.value = this.getAttribute('data-value');
                actualizarCambio();
            });
        });
    }

    // Manejo de clicks en métodos de pago principales
    document.querySelectorAll('.payment-btn[data-method]').forEach(btn => {
        btn.addEventListener('click', function () {
            const metodo = this.getAttribute('data-method');
            metodoActual = this.querySelector('span').innerText;

            if (metodo === 'cash') {
                listaMetodos.style.display = 'none';
                panelEfectivo.style.display = 'block';
                inputEfectivo.value = totalVentaCalculado; // Sugerir exacto de entrada
                actualizarCambio();
                setTimeout(() => inputEfectivo.focus(), 200);
            } else {
                inputEfectivo.value = totalVentaCalculado;
                finalizarVenta();
            }
        });
    });

    function actualizarCambio() {
        const pago = parseFloat(inputEfectivo.value) || 0;
        const cambio = pago - totalVentaCalculado;
        const resultado = cambio > 0 ? cambio : 0;
        cambioP1.innerText = ` $${formatCurrency(resultado)}`;
    }

    inputEfectivo.addEventListener('input', actualizarCambio);
    btnContinuar.addEventListener('click', finalizarVenta);

    function finalizarVenta() {
        const pago = parseFloat(inputEfectivo.value) || 0;

        // 1. Cálculos de totales basados en el carrito actual (orderItems)
        let subtotalRaw = 0;
        let totalDiscount = 0;
        let totalTax = 0;
        let totalQuantity = 0;
        let grandTotalExact = 0;

        orderItems.forEach(item => {
            const itemSubtotal = item.price * item.quantity;
            const itemDiscount = (itemSubtotal * item.discount) / 100;
            const itemBaseImponible = itemSubtotal - itemDiscount;
            const itemTax = (itemBaseImponible * item.tax) / 100;

            subtotalRaw += itemSubtotal;
            totalDiscount += itemDiscount;
            totalTax += itemTax;
            totalQuantity += item.quantity;
            grandTotalExact += (itemBaseImponible + itemTax);
        });

        const grandTotalRounded = Math.floor(grandTotalExact / 50) * 50;
        const roundingValue = grandTotalExact - grandTotalRounded;
        const cambioFinal = pago - grandTotalRounded > 0 ? pago - grandTotalRounded : 0;

        // 2. Renderizar los productos en la tabla del ticket
        const ticketBody = document.querySelector('#ticket tbody');
        ticketBody.innerHTML = orderItems.map(item => `
        <tr>
            <td style="padding: 5px 0;">${item.quantity}</td>
            <td style="padding: 5px 0;">${item.name}</td>
            <td style="padding: 5px 0; text-align: right;">${formatCurrency(item.price)}</td>
            <td style="padding: 5px 0; text-align: right;">${formatCurrency(item.price * item.quantity)}</td>
        </tr>
    `).join('');

        // 3. Actualizar textos de identificación y totales en el ticket
        document.getElementById('ticket_metodo').innerText = metodoActual;
        document.getElementById('ticket_fecha').innerText = new Date().toLocaleString('es-CO');

        // IDs de los contenedores de totales en el ticket
        document.getElementById('subtotalTicket').innerText = `$${formatCurrency(subtotalRaw)}`;
        document.getElementById('descuentosTicket').innerText = `-$${formatCurrency(totalDiscount)}`;

        // El ID ivaTicket se repite en tu HTML, lo ideal es usar querySelectorAll o corregir IDs
        document.querySelectorAll('#ivaTicket').forEach(el => {
            if (el.tagName === 'DIV' && el.id === 'ivaTicket') el.innerText = `$${formatCurrency(totalTax)}`;
        });

        document.getElementById('redondeoTicket').innerText = `-$${Math.floor(roundingValue)}`;
        document.getElementById('TotalTicket').innerText = `$${formatCurrency(grandTotalRounded)}`;

        // Resumen de impuestos
        document.getElementById('ivaBaseTicket').innerText = `$${formatCurrency(subtotalRaw - totalDiscount)}`;
        document.getElementById('ivaImpuestoTicket').innerText = `$${formatCurrency(totalTax)}`;

        // Datos de pago y cantidades
        document.getElementById('dineroRecibidoTicket').innerText = `Total recibido: $${formatCurrency(pago)}`;
        document.getElementById('cambioTicket').innerText = `Cambio: $${formatCurrency(cambioFinal)}`;
        document.getElementById('totalProductosTicket').innerText = `Total de productos: ${totalQuantity}`;

        // Actualizar también los elementos de la pantalla de éxito
        document.getElementById('total_pantalla_2').innerText = `$${formatCurrency(pago)}`;
        document.getElementById('cambio_pantalla_2').innerText = ` $${formatCurrency(cambioFinal)}`;

        // 4. Cambiar vista (Tu código original)
        step1.style.display = 'none';
        step2.style.display = 'block';
        btnContinuar.style.display = 'none';
        btnImprimir.style.display = 'inline-block';
    }

    // Resetear al cerrar modal
    const miModal = document.getElementById('anuncioModal');
    if (miModal) {
        miModal.addEventListener('show.bs.modal', prepararPanelPago); // Se actualiza al abrir
        miModal.addEventListener('hidden.bs.modal', function () {
            step1.style.display = 'block';
            step2.style.display = 'none';
            listaMetodos.style.display = 'block';
            panelEfectivo.style.display = 'none';
            btnContinuar.style.display = 'inline-block';
            btnImprimir.style.display = 'none';
            inputEfectivo.value = '';
            cambioP1.innerText = ' $0';
        });
    }
});

