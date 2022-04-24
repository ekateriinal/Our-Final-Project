import "./styles/base.scss";
import "./styles/sass-base.scss";
import styles from "./App.module.scss";
import Header from "./Components/Header/Header";
import Singleproductitem from "./Components/Singleproductitem/Singleproductitem";

const App = () => {
  return (
    <div className={styles["wrapper"]}>
        <Header></Header>
        <Singleproductitem></Singleproductitem>
    </div>
  );
};

export default App;
