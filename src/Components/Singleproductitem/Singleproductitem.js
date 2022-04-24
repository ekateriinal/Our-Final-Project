import styles from "./Singleproductitem.module.scss";
import product1and5 from "../../images/product1";
import productTwo from "../../images/product2";
import product3and6 from "../../images/product6";
import productFour from "../../images/product4";

const Singleproductitem = () => {
  const products = [
    {
      id: "product1",
      img: { product1and5 },
      title: "Apollo Running Short",
      price: "$50.00",
    },
    {
      id: "product2",
      img: { productTwo },
      title: "Apollo Dress",
      price: "$100.00",
    },
    {
      id: "product3",
      img: { product3and6 },
      title: "Apollo Trousers",
      price: "$30.00",
    },
    {
      id: "product4",
      img: { productFour },
      title: "Apollo Man T-shirt",
      price: "$50.00",
    },
    {
      id: "product5",
      img: { product1and5 },
      title: "Apollo Skirt",
      price: "$50.00",
    },
    {
      id: "product6",
      img: { product3and6 },
      title: "Apollo children T-shirt",
      price: "$50.00",
    },
  ];

  return (
    <ul className={styles["group"]}>
      <li className={styles["group__item"]}>
        <div className={styles["group__product-box"]}>
          <div className={styles["group__product-img"]}></div>
          <span className={styles["group__title"]}> title</span>
          <span className={styles["group__price"]}>$200</span>
        </div>
      </li>
    </ul>
  );
};

export default Singleproductitem;
