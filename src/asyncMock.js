const products = [
  {
    id: "1",
    name: "Innuendo",
    price: 10000,
    category: "Album",
    img: "https://www.infobae.com/new-resizer/Xy7J0erqNI5dw-A2xZbOFXNegs8=/768x432/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/YP6VQ7RQDVHZVPRMAOHBVXPQ5M.jpg",
    stock: 10,
    description: "Descripcion de disco",
  },
  {
    id: "2",
    name: "Innuendo",
    price: 10000,
    category: "Album",
    img: "https://www.infobae.com/new-resizer/Xy7J0erqNI5dw-A2xZbOFXNegs8=/768x432/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/YP6VQ7RQDVHZVPRMAOHBVXPQ5M.jpg",
    stock: 10,
    description: "Descripcion de disco",
  },
  {
    id: "3",
    name: "Innuendo",
    price: 10000,
    category: "Album",
    img: "https://www.infobae.com/new-resizer/Xy7J0erqNI5dw-A2xZbOFXNegs8=/768x432/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/YP6VQ7RQDVHZVPRMAOHBVXPQ5M.jpg",
    stock: 10,
    description: "Descripcion de disco",
  },
];
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductsById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod=>prod.id===productId));
    }, 500);
  });
};