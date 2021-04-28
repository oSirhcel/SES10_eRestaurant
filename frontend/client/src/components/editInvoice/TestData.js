export const mealOrder1 = [
    {id: 1, itemName: "Ratatouille", qty: 2, price: 10.00},
    {id: 2, itemName: "Profiteroles", qty: 1, price: 20.00},
    {id: 3, itemName: "Chocolate Souffle", qty: 1, price: 15.50},
    {id: 4, itemName: "Quiche Lorraine", qty: 1, price: 17.25},
    {id: 5, itemName: "Escargo", qty: 1, price: 21.00},
]

export const mealOrder2 = [
    {id: 6, itemName: "Genoise Cake", qty: 1, price: 12.00},
    {id: 7, itemName: "Chicken la di da", qty: 1, price: 6.00},
    {id: 8, itemName: "Duck a l`Orange", qty: 1, price: 50.00},
]

export const mealOrder3 = [
    {id: 9, itemName: "Strawberry Coconut Macarons", qty: 1, price: 20.00},
    {id: 10, itemName: "Oysters", qty: 1, price: 16.00},
    {id: 11, itemName: "Lobster Mornay", qty: 1, price: 13.50},
]

  function createData(id, reservationId, dateTime, numPeople, name, amount) {
    return { id, reservationId, dateTime, numPeople, name, amount };
  }

export const rows = [
    createData(0, 1, new Date(2021, 6, 20, 12, 30), 6, "Sarah Jones", 150.00, 0.00),
    createData(1, 2, new Date(2021, 4, 20, 11, 30), 4, "Michael Truss", 100.00, 0.00),
    createData(2, 3, new Date(2021, 6, 20, 12, 30), 3, "Tom Blues", 60.00, 0.00),
    createData(3, 4, new Date(2021, 7, 22, 18, 15), 2, "Jessica May", 40.50, 0.00),
  ];