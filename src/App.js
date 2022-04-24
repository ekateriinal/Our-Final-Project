import "./styles/base.scss";
import "./styles/sass-base.scss";
import styles from "./App.module.scss";
import Heading from "./Components/Heading/Heading";
import Wrapper from "./Components/Wrapper/Wrapper";

const App = () => {
  return (
    <div className={styles["wrapper"]}>
      <Wrapper appearance="light">
        <Heading>Hello! Iam on the light wrapper</Heading>
      </Wrapper>
      <Wrapper appearance="dark">
        <Heading>I am the best. Okey it is a joke.</Heading>
      </Wrapper>
    </div>
  );
};

export default App;
