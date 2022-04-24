import "./styles/base.scss";
import "./styles/sass-base.scss";
import styles from "./App.module.scss";
import Header from "./Components/Header/Header";
// import Wrapper from "./Components/Wrapper/Wrapper";

const App = () => {
  return (
    <div className={styles["wrapper"]}>
        <Header></Header>
    </div>
  );
};

export default App;
