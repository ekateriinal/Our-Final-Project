import './styles/base.scss';
import './styles/sass-base.scss';
import styles from './App.module.scss';

const App = () => {
  return (
   <div className={styles.wrapper}>
   <h1 className={styles['wrapper__header']}>Hello!</h1>
   </div>
  )
}

export default App;
