const dataString = `
{
  "bodegas": [
    {
      "id": 1,
      "name": "Principal",
      "status": true,
      "items": [
        {
          "id": 1.1,
          "item_type": "product",
          "name": "Producto generico",
          "measurement_unit": 97,
          "description": "Lorem Ipsum...",
          "group": "Papeleria",
          "base_price": 1000,
          "tax": "none",
          "inicial_price": 80,
          "stock": 1,
          "barcode": null,
          "active": true
        },
        {
          "id": 1.2,
          "item_type": "service",
          "name": "Servicio generico",
          "measurement_unit": 97,
          "description": "Lorem Ipsum...",
          "group": "Papeleria",
          "base_price": 1000,
          "tax": "none",
          "inicial_price": 80,
          "stock": 1,
          "barcode": null,
          "active": true
        }
      ]
    },
    {
      "id": 2,
      "name": "Secundaria",
      "status": true,
      "items": [
        {
          "id": 2.1,
          "item_type": "product",
          "name": "Producto B",
          "measurement_unit": 97,
          "description": "Otro producto",
          "group": "Papeleria",
          "base_price": 2000,
          "tax": "none",
          "inicial_price": 100,
          "stock": 5,
          "barcode": null,
          "active": true
        }
      ]
    }
  ]
}
`;
const data = JSON.parse(dataString);
function buscarItemPorId(data, idString) {
  const id = Number(idString);

  for (const bodega of data.bodegas) {
    const item = bodega.items.find(i => i.id === id);
    if (item) return item;
  }

  return "Item no encontrado";
}
const resultado = buscarItemPorId(data, "1.1");
console.log(resultado);
