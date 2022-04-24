import styles from "./Singleproductitem.module.scss";
import product1and5 from "../../images/product1.png";
import productTwo from "../../images/product2.png";
import product3and6 from "../../images/product6.png";
import productFour from "../../images/product4.png";

const Singleproductitem = () => {
  const products = [
    {
      id: "product1",
      img: product1and5,
      title: "Apollo Running Short",
      price: "$50.00",
    },
    {
      id: "product2",
      img: productTwo,
      title: "Apollo Dress",
      price: "$100.00",
    },
    {
      id: "product3",
      img: product3and6,
      title: "Apollo Trousers",
      price: "$30.00",
    },
    {
      id: "product4",
      img: productFour,
      title: "Apollo Man T-shirt",
      price: "$50.00",
    },
    {
      id: "product5",
      img: product1and5 ,
      title: "Apollo Skirt",
      price: "$50.00",
    },
    {
      id: "product6",
      img: product3and6,
      title: "Apollo children T-shirt",
      price: "$50.00",
    },
  ];

  return (
    <ul className={styles["group"]}>
      {products.map(product => (
        <li key={product.id} className={styles["group__item"]}>
          <div id={product.id}
          className={styles["group__product-box"]}>
            <div className={styles["group__img-box"]}>
              <img className={styles["group__img"]}src={product.img} alt='/' />
            </div>
            <span className={styles["group__title"]}>{product.title}</span>
            <span className={styles["group__price"]}>{product.price}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Singleproductitem;
