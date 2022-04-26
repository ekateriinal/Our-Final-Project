import "./styles/base.scss";
import "./styles/sass-base.scss";
import styles from "./App.module.scss";
import Header from "./Components/Header/Header";
import Allproducts from "./Components/Allproducts/Allproducts";

const App = () => {
  return (
    <div className={styles["wrapper"]}>
        <Header></Header>
        <Allproducts></Allproducts>
    </div>
  );
};

export default App;
