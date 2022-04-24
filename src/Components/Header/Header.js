import styles from './Header.module.scss';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as Dollar } from '../../images/dollar.svg';
import { ReactComponent as Cart } from '../../images/cart.svg';


const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles['header__nav-box']}>
        <ul className={styles['header__nav-group']}>
          <li className={`${styles['header__nav-item']}
              ${styles['header__nav-item--active']}
              `}>
            <a className={`${styles['header__nav-link']}`} href='#'>
              Women</a>
          </li>
          <li className={styles['header__nav-item']}>
            <a className={styles['header__nav-link']} href='#'>Men</a>
          </li>
          <li className={styles['header__nav-item']}>
            <a className={styles['header__nav-link']} href='#'>Kids</a>
          </li>
        </ul>
        <div className={styles['header__logo-wrapper']}>
          <Logo className={styles['header__logo']} />
        </div>
        <div className={styles['header__icon-group']}>
          <div className={styles['header__icon-wrapper-small']}>
            <Dollar className={styles['header__icon-small']} />
          </div>
          <div className={styles['header__icon-wrapper']}>
            <Cart className={styles['header__icon']} />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;