import styles from "./Singleproductitem.module.scss";
const Singleproductitem = () => {
  const products = [
    {
      id: "product1",
      title: "Apollo Running Short",
      price: "$50.00",
    },
    {
      id: "product2",
      title: "Apollo Dress",
      price: "$100.00",
    },
    {
      id: "product3",
      title: "Apollo Trousers",
      price: "$30.00",
    },
    {
      id: "product4",
      title: "Apollo Man T-shirt",
      price: "$50.00",
    },
    {
      id: "product5",
      title: "Apollo Skirt",
      price: "$50.00",
    },
    {
      id: "product6",
      title: "Apollo Schildren T-shirt",
      price: "$50.00",
    },
  ];

  return (
    <ul>
      <li>
        <div>
          <h2>product title</h2>
          <p>$200</p>
        </div>
      </li>
    </ul>
  );
};

export default Singleproductitem;
