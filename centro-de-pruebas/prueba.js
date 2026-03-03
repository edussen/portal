// Estado global
let state = {
    columns: [
        { id: '1', label: 'Tipo', key: 'tipo', editable: false },
        { id: '2', label: 'Nombre', key: 'nombre', editable: true, type: 'text' },
        { id: '3', label: 'Código', key: 'codigo', editable: false },
        { id: '4', label: 'Unidad', key: 'unidad', editable: false },
        { id: '5', label: 'Precios', key: 'precio', editable: true, type: 'price' },
        { id: '6', label: 'Impuestos', key: 'impuestos', editable: true, type: 'select' },
        { id: '7', label: 'Stock', key: 'stock', editable: false },
        { id: '8', label: 'Estado', key: 'estado', editable: false }
    ],
    products: [
        { id: 1, tipo: 'Producto', nombre: 'CLORHEXIS PAFFE® MATE', codigo: '49.38', unidad: 'unidad', precio: 4500, impuestos: 'IVA 19%', stock: '2', estado: true },
        { id: 2, tipo: 'Producto', nombre: 'CONJUNTO AVENTURERO', codigo: '49.37', unidad: 'unidad', precio: 36000, impuestos: 'IVA 19%', stock: '2', estado: true },
        { id: 3, tipo: 'Producto', nombre: 'VESTIDO ZAMARA', codigo: '49.36', unidad: 'unidad', precio: 56000, impuestos: 'IVA 5%', stock: '2', estado: true },
        { id: 4, tipo: 'Producto', nombre: 'JARDINERA 4RCCI IRIS', codigo: '49.35', unidad: 'unidad', precio: 56000, impuestos: 'Sin impuesto', stock: '2', estado: true },
        { id: 5, tipo: 'Producto', nombre: 'BRAGA NARA VAQUIRIRI', codigo: '49.34', unidad: 'unidad', precio: 44000, impuestos: 'IVA 19%', stock: '2', estado: true },
        { id: 6, tipo: 'Producto', nombre: 'CUBRE PEZONES', codigo: '49.43', unidad: 'unidad', precio: 5000, impuestos: 'IVA 19%', stock: '2', estado: false },
        { id: 7, tipo: 'Producto', nombre: 'BETÚN CHERRY NEGRO', codigo: '49.32', unidad: 'unidad', precio: 3500, impuestos: 'IVA 5%', stock: '2', estado: true },
        { id: 8, tipo: 'Producto', nombre: 'PARACETAMOL DE MADEIRA', codigo: '49.31', unidad: 'unidad', precio: 10000, impuestos: 'IVA 0%', stock: '2', estado: true },
        { id: 9, tipo: 'Producto', nombre: 'CUADERNO PRIMAVERA D.L', codigo: '49.30', unidad: 'unidad', precio: 10000, impuestos: 'IVA 19%', stock: '2', estado: true },
        { id: 10, tipo: 'Producto', nombre: 'CUADERNO PRIMAVERA D', codigo: '49.29', unidad: 'unidad', precio: 10000, impuestos: 'Sin impuesto', stock: '2', estado: true }
    ],
    currentPage: 1,
    itemsPerPage: 10,
    searchTerm: '',
    loading: true,
    isInitialLoad: true,
    nextProductId: 11,
    nextColumnId: 9,
    taxOptions: ['Sin impuesto', 'IVA 0%', 'IVA 5%', 'IVA 19%']
};

// Objeto tipo "DataTable" para simular el comportamiento
const table = {
    row: {
        add: function(rowData) {
            const newProduct = {
                id: state.nextProductId,
                _rowData: rowData // Guardar los datos HTML crudos
            };
            
            // Parsear los datos HTML para extraer valores
            const tempDiv = document.createElement('div');
            
            // Extraer valores de cada columna según el formato
            rowData.forEach((html, index) => {
                tempDiv.innerHTML = html;
                const column = state.columns[index];
                
                if (!column) return;
                
                // Nombre (con link)
                if (column.key === 'nombre') {
                    const link = tempDiv.querySelector('a');
                    newProduct[column.key] = link ? link.textContent.trim() : html;
                }
                // Tipo
                else if (column.key === 'tipo') {
                    newProduct[column.key] = tempDiv.textContent.trim();
                }
                // Precio
                else if (column.key === 'precio') {
                    const priceMatch = html.match(/\$([0-9,.]+)/);
                    if (priceMatch) {
                        newProduct[column.key] = parseFloat(priceMatch[1].replace(/,/g, ''));
                    } else {
                        newProduct[column.key] = 0;
                    }
                }
                // Estado
                else if (column.key === 'estado') {
                    newProduct[column.key] = html.includes('ACTIVO');
                }
                // Otros campos
                else {
                    newProduct[column.key] = tempDiv.textContent.trim() || '...';
                }
            });
            
            state.products.push(newProduct);
            state.nextProductId++;
            
            return this;
        },
        
        draw: function(resetPaging = true) {
            if (!resetPaging) {
                // Ir a la última página
                const totalPages = Math.ceil(state.products.length / state.itemsPerPage);
                state.currentPage = totalPages;
            } else {
                state.currentPage = 1;
            }
            render();
            return this;
        }
    }
};

// Utilidades
function getFilteredProducts() {
    return state.products.filter(product =>
        product.nombre?.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
        product.codigo?.includes(state.searchTerm)
    );
}

function getPaginatedProducts() {
    const filtered = getFilteredProducts();
    const startIndex = (state.currentPage - 1) * state.itemsPerPage;
    const endIndex = startIndex + state.itemsPerPage;
    return {
        products: filtered.slice(startIndex, endIndex),
        total: filtered.length,
        startIndex,
        endIndex
    };
}

function formatPrice(price) {
    if (!price && price !== 0) return '...';
    return `$${parseFloat(price).toLocaleString('es-CO')} COP`;
}

function parsePrice(priceStr) {
    if (!priceStr) return 0;
    // Eliminar $, COP, espacios y convertir comas a puntos
    return parseFloat(priceStr.replace(/[\$,COP\s]/g, '').trim()) || 0;
}

// Edición inline
function makeEditable(td, product, column) {
    if (!column.editable) return;
    
    td.classList.add('editable');
    td.setAttribute('title', 'Doble click para editar');
    
    td.addEventListener('dblclick', function(e) {
        if (td.classList.contains('editing')) return;
        
        td.classList.add('editing');
        const currentValue = product[column.key];
        
        if (column.type === 'select') {
            // Select para impuestos
            const select = document.createElement('select');
            select.className = 'inline-edit-select';
            
            state.taxOptions.forEach(option => {
                const opt = document.createElement('option');
                opt.value = option;
                opt.textContent = option;
                if (option === currentValue) opt.selected = true;
                select.appendChild(opt);
            });
            
            const originalContent = td.innerHTML;
            td.innerHTML = '';
            td.appendChild(select);
            select.focus();
            
            const saveEdit = () => {
                const newValue = select.value;
                product[column.key] = newValue;
                td.classList.remove('editing');
                td.innerHTML = originalContent;
                td.textContent = newValue;
                
                // Callback de actualización
                console.log(`Actualizado ID ${product.id}: ${column.key} = ${newValue}`);
            };
            
            select.addEventListener('blur', saveEdit);
            select.addEventListener('change', saveEdit);
            select.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    td.classList.remove('editing');
                    td.innerHTML = originalContent;
                }
            });
            
        } else if (column.type === 'price') {
            // Input para precio (solo número)
            const input = document.createElement('input');
            input.type = 'text';
            input.className = 'inline-edit-input';
            input.value = currentValue || 0;
            
            const originalContent = td.innerHTML;
            td.innerHTML = '';
            td.appendChild(input);
            input.focus();
            input.select();
            
            const saveEdit = () => {
                const newValue = parsePrice(input.value);
                product[column.key] = newValue;
                td.classList.remove('editing');
                td.innerHTML = formatPrice(newValue);
                
                // Callback de actualización
                console.log(`Actualizado ID ${product.id}: ${column.key} = ${newValue}`);
            };
            
            input.addEventListener('blur', saveEdit);
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    saveEdit();
                } else if (e.key === 'Escape') {
                    td.classList.remove('editing');
                    td.innerHTML = originalContent;
                }
            });
            
        } else {
            // Input de texto para nombre u otros
            const input = document.createElement('input');
            input.type = 'text';
            input.className = 'inline-edit-input';
            input.value = currentValue || '';
            
            const originalContent = td.innerHTML;
            td.innerHTML = '';
            td.appendChild(input);
            input.focus();
            input.select();
            
            const saveEdit = () => {
                const newValue = input.value.trim();
                product[column.key] = newValue;
                td.classList.remove('editing');
                td.innerHTML = originalContent;
                if (column.key === 'nombre') {
                    td.innerHTML = `<span class="cell-nombre">${newValue}</span>`;
                } else {
                    td.textContent = newValue;
                }
                
                // Callback de actualización
                console.log(`Actualizado ID ${product.id}: ${column.key} = ${newValue}`);
            };
            
            input.addEventListener('blur', saveEdit);
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    saveEdit();
                } else if (e.key === 'Escape') {
                    td.classList.remove('editing');
                    td.innerHTML = originalContent;
                }
            });
        }
    });
}

// Renderizado
function renderSkeletonRows() {
    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = '';
    
    for (let i = 0; i < state.itemsPerPage; i++) {
        const tr = document.createElement('tr');
        tr.className = 'skeleton-row';
        
        for (let j = 0; j < state.columns.length + 1; j++) {
            const td = document.createElement('td');
            const div = document.createElement('div');
            div.className = j === 1 ? 'skeleton skeleton-wide' : 'skeleton skeleton-normal';
            td.appendChild(div);
            tr.appendChild(td);
        }
        
        tbody.appendChild(tr);
    }
}

function renderTableHead() {
    const thead = document.getElementById('tableHead');
    const tr = document.createElement('tr');
    
    state.columns.forEach(column => {
        const th = document.createElement('th');
        const div = document.createElement('div');
        div.className = 'th-content';
        
        const span = document.createElement('span');
        span.textContent = column.label;
        div.appendChild(span);
        
        const btnDelete = document.createElement('button');
        btnDelete.className = 'btn-delete-col';
        btnDelete.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
            </svg>
        `;
        btnDelete.dataset.columnId = column.id;
        btnDelete.title = 'Eliminar columna';
       // div.appendChild(btnDelete);
        
        th.appendChild(div);
        tr.appendChild(th);
    });
    
    // Columna de acciones
    const thActions = document.createElement('th');
    thActions.textContent = 'Acciones';
    tr.appendChild(thActions);
    
    thead.innerHTML = '';
    thead.appendChild(tr);
}

function renderCellContent(column, product) {
    const value = product[column.key];
    
    if (column.key === 'nombre') {
        return `<a href="mirar/?id=${product.id}" class="text-link">${value || '...'}</a>`;
    } else if (column.key === 'tipo') {
        return value ? value.charAt(0).toUpperCase() + value.slice(1) : '...';
    } else if (column.key === 'precio') {
        return formatPrice(value);
    } else if (column.key === 'stock') {
        return `
            <div class="cell-stock">
                <span class="stock-badge">${value || '0'}</span>
                <span class="stock-label">min</span>
            </div>
        `;
    } else if (column.key === 'estado') {
        return value === true
            ? '<a class="btn btn-success">ACTIVO</a>'
            : '<a class="btn btn-danger">INACTIVO</a>';
    }
    
    return value || '...';
}

function renderTableBody() {
    const tbody = document.getElementById('tableBody');
    const { products } = getPaginatedProducts();
    
    tbody.innerHTML = '';
    
    products.forEach((product, index) => {
        const tr = document.createElement('tr');
        tr.dataset.productId = product.id;
        
        if (state.isInitialLoad) {
            tr.className = 'row-enter';
            tr.style.animationDelay = `${index * 0.05}s`;
        }
        
        state.columns.forEach(column => {
            const td = document.createElement('td');
            td.innerHTML = renderCellContent(column, product);
            
            // Hacer editable si la columna lo permite
            makeEditable(td, product, column);
            
            tr.appendChild(td);
        });
        
        // Columna de acciones con dropdown
        const tdActions = document.createElement('td');
        tdActions.innerHTML = `
            <div class="dropdown">
                <button class="dropdown-toggle" data-toggle="dropdown">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.0005 12C11.0005 12.5523 11.4482 13 12.0005 13C12.5528 13 13.0005 12.5523 13.0005 12C13.0005 11.4477 12.5528 11 12.0005 11C11.4482 11 11.0005 11.4477 11.0005 12Z" stroke="#3E4954" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18.0005 12C18.0005 12.5523 18.4482 13 19.0005 13C19.5528 13 20.0005 12.5523 20.0005 12C20.0005 11.4477 19.5528 11 19.0005 11C18.4482 11 18.0005 11.4477 18.0005 12Z" stroke="#3E4954" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4.00049 12C4.00049 12.5523 4.4482 13 5.00049 13C5.55277 13 6.00049 12.5523 6.00049 12C6.00049 11.4477 5.55277 11 5.00049 11C4.4482 11 4.00049 11.4477 4.00049 12Z" stroke="#3E4954" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <div class="dropdown-menu">
                    <a href="mirar/?id=${product.id}" class="dropdown-item text-yellow">
                        <i class="fa fa-eye" style="color: #252525;"></i>
                        Mostrar detalles
                    </a>
                    <a href="editar/?id=${product.id}" class="dropdown-item text-info">
                        <i class="fa fa-pen" style="color: #197bc2;"></i>
                        Editar
                    </a>
                    <button class="dropdown-item text-yellow" data-action="toggle-status" data-id="${product.id}" data-name="${product.nombre}">
                        <i class="fa fa-tag" style="color: #7e7e7e;"></i>
                        Cambiar estado
                    </button>
                    <button class="dropdown-item text-danger" data-action="delete" data-id="${product.id}" data-name="${product.nombre}">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#F24242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M15 9L9 15" stroke="#F24242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M9 9L15 15" stroke="#F24242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        Eliminar ítem
                    </button>
                </div>
            </div>
        `;
        tr.appendChild(tdActions);
        
        tbody.appendChild(tr);
    });
    
    if (state.isInitialLoad && products.length > 0) {
        setTimeout(() => {
            state.isInitialLoad = false;
        }, products.length * 50 + 300);
    }
}

function renderPagination() {
    const { total, startIndex, endIndex } = getPaginatedProducts();
    const totalPages = Math.ceil(total / state.itemsPerPage);
    
    document.getElementById('paginationInfo').textContent = 
        `${startIndex + 1} a ${Math.min(endIndex, total)} de ${total}`;
    
    document.getElementById('pageInfo').textContent = 
        `Página ${state.currentPage} de ${totalPages}`;
    
    document.getElementById('prevPage').disabled = state.currentPage === 1;
    document.getElementById('nextPage').disabled = state.currentPage === totalPages || totalPages === 0;
}

function render() {
    renderTableHead();
    
    if (state.loading) {
        renderSkeletonRows();
    } else {
        renderTableBody();
    }
    
    renderPagination();
}

// Acciones
function addColumn() {
    const newColumn = {
        id: state.nextColumnId.toString(),
        label: `Columna #${state.nextColumnId}`,
        key: `columna${state.nextColumnId}`,
        editable: false
    };
    
    state.columns.push(newColumn);
    
    // Añadir datos vacíos a todos los productos
    state.products = state.products.map(product => ({
        ...product,
        [newColumn.key]: '...'
    }));
    
    state.nextColumnId++;
    render();
}

function deleteColumn(columnId) {
    if (state.columns.length <= 1) {
        alert('Debe haber al menos una columna');
        return;
    }
    
    state.columns = state.columns.filter(col => col.id !== columnId);
    render();
}

function addRow() {
    const newProduct = {
        id: state.nextProductId
    };
    
    // Añadir datos por defecto para todas las columnas
    state.columns.forEach(col => {
        newProduct[col.key] = col.key === 'tipo' ? 'Producto' : 
                              col.key === 'estado' ? true :
                              col.key === 'precio' ? 0 :
                              col.key === 'impuestos' ? 'Sin impuesto' : '...';
    });
    
    state.products.push(newProduct);
    state.nextProductId++;
    
    // Ir a la última página si es necesario
    const totalPages = Math.ceil(state.products.length / state.itemsPerPage);
    state.currentPage = totalPages;
    
    render();
}

function deleteRow(productId) {
    const product = state.products.find(p => p.id === productId);
    if (product && confirm(`¿Eliminar "${product.nombre}"?`)) {
        state.products = state.products.filter(p => p.id !== productId);
        
        // Ajustar página si es necesario
        const totalPages = Math.ceil(getFilteredProducts().length / state.itemsPerPage);
        if (state.currentPage > totalPages && totalPages > 0) {
            state.currentPage = totalPages;
        }
        
        render();
        console.log(`Eliminado producto ID: ${productId}`);
    }
}

function toggleStatus(productId) {
    const product = state.products.find(p => p.id === productId);
    if (product) {
        product.estado = !product.estado;
        render();
        console.log(`Cambiado estado del producto ID ${productId} a: ${product.estado}`);
    }
}

function changePage(delta) {
    const totalPages = Math.ceil(getFilteredProducts().length / state.itemsPerPage);
    const newPage = state.currentPage + delta;
    
    if (newPage >= 1 && newPage <= totalPages) {
        state.currentPage = newPage;
        render();
    }
}

function changeItemsPerPage(value) {
    state.itemsPerPage = parseInt(value);
    state.currentPage = 1;
    render();
}

function search(term) {
    state.searchTerm = term;
    state.currentPage = 1;
    render();
}

// Dropdown toggle
function toggleDropdown(dropdown) {
    const menu = dropdown.querySelector('.dropdown-menu');
    const isOpen = menu.classList.contains('show');
    
    // Cerrar todos los dropdowns
    document.querySelectorAll('.dropdown-menu.show').forEach(m => {
        m.classList.remove('show');
    });
    
    // Abrir este si estaba cerrado
    if (!isOpen) {
        menu.classList.add('show');
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Simular carga inicial
    renderSkeletonRows();
    
    setTimeout(() => {
        state.loading = false;
        render();
    }, 2000);
    
    // Búsqueda
    document.getElementById('searchInput').addEventListener('input', (e) => {
        search(e.target.value);
    });
    
    // Items por página
    document.getElementById('itemsPerPage').addEventListener('change', (e) => {
        changeItemsPerPage(e.target.value);
    });
    
    // Navegación
    document.getElementById('prevPage').addEventListener('click', () => {
        changePage(-1);
    });
    
    document.getElementById('nextPage').addEventListener('click', () => {
        changePage(1);
    });
    
    // Delegación de eventos para botones dinámicos
    document.getElementById('productTable').addEventListener('click', (e) => {
        // Dropdown toggle
        const dropdownToggle = e.target.closest('.dropdown-toggle');
        if (dropdownToggle) {
            e.stopPropagation();
            const dropdown = dropdownToggle.closest('.dropdown');
            toggleDropdown(dropdown);
            return;
        }
        
        // Dropdown actions
        const dropdownItem = e.target.closest('.dropdown-item[data-action]');
        if (dropdownItem) {
            const action = dropdownItem.dataset.action;
            const productId = parseInt(dropdownItem.dataset.id);
            
            if (action === 'delete') {
                deleteRow(productId);
            } else if (action === 'toggle-status') {
                toggleStatus(productId);
            }
            
            // Cerrar dropdown
            document.querySelectorAll('.dropdown-menu.show').forEach(m => {
                m.classList.remove('show');
            });
            return;
        }
        
        // Eliminar columna
        if (e.target.closest('.btn-delete-col')) {
            const columnId = e.target.closest('.btn-delete-col').dataset.columnId;
            deleteColumn(columnId);
        }
    });
    
    // Cerrar dropdowns al hacer click fuera
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-menu.show').forEach(m => {
                m.classList.remove('show');
            });
        }
    });
    
    // Añadir columna
    document.getElementById('addColumnBtn').addEventListener('click', () => {
        addColumn();
    });
    
    // Añadir fila
    document.getElementById('addRowBtn').addEventListener('click', () => {
        addRow();
    });
});

/* ============================================
   EJEMPLO DE USO: table.row.add()
   ============================================
   
   Puedes usar la función table.row.add() de esta manera:
   
   table.row.add([
       `<a href="mirar/?id=${productId}" class="text-link">${name}</a>`,
       `${type.charAt(0).toUpperCase() + type.slice(1)}`,
       `$${price.toLocaleString('es-CO')} COP`,
       stock,
       `${active === true
           ? '<a class="btn btn-success">ACTIVO</a>'
           : '<a class="btn btn-danger">INACTIVO</a>'
       }`,
       `<!-- HTML del dropdown menu -->`
   ]).draw(false); // false mantiene la paginación actual
   
*/
