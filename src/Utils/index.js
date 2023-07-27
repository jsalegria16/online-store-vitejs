/*

item = {
    id: 254,
    title: "12",
    price: 12,
    description: "12",
    images: ["hhe.com"],
    creationAt: "2023-07-26T17:51:53.000Z",
    updatedAt: "2023-07-26T17:51:53.000Z",
    category: {
      id: 1,
      name: "nuevo",
      image: "https://picsum.photos/640/640?r=5550",
      creationAt: "2023-07-26T10:04:32.000Z",
      updatedAt: "2023-07-26T18:29:54.000Z",
    },
}

*/


// Calculate the todal price of any order.

const TotalPrice = (items) => {

    let Price = 0
    items.forEach(item => {
        Price += item.price 
    });

    return Price
}

export {TotalPrice}