import styles from "./Allproducts.module.scss";
import product1and5 from "../../images/product1.png";
import productTwo from "../../images/product2.png";
import product3and6 from "../../images/product6.png";
import product4 from "../../images/product4.png";

const Allproducts = () => {
  const products = [
    {
      id: "product1",
      img: product1and5,
      title: "Apollo man sweater",
      price: "$50.00",
    },
    {
      id: "product2",
      img: productTwo,
      title: "Apollo sweater for woman",
      price: "$100.00",
    },
    {
      id: "product3",
      img: product3and6,
      title: "Apollo dress",
      price: "$30.00",
    },
    {
      id: "product4",
      img: product4,
      title: "Apollo t-shirt for kid",
      price: "$30.00",
    },
    {
      id: "product5",
      img: product1and5 ,
      title: "Apollo sweater",
      price: "$80.00",
    },
    {
      id: "product6",
      img: product3and6,
      title: "Apollo dress",
      price: "$70.00",
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

export default Allproducts;

