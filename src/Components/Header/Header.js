import styles from './Header.module.scss';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as Dollar } from '../../images/dollar.svg';
import { ReactComponent as Cart } from '../../images/cart.svg';
import { useState } from 'react';

const Header = () => {
  const [activeLink, setActiveLink] = useState('w');

  return (
    <header className={styles.header}>
      <nav className={styles['header__nav-box']}>
        <ul className={styles['header__nav-group']}>
          <li className={styles['header__nav-item']}>
            <a onClick={() => setActiveLink('w')}
              className={styles['header__nav-link']}
              href='#'>
              <span className={`
              ${styles['header__link-content']}
              ${activeLink === 'w' ? styles['header__link-content--active'] : ''}
              `}>
                Women
              </span>
            </a>
          </li>
          <li className={styles['header__nav-item']}>
            <a onClick={() => setActiveLink('m')}
              className={styles['header__nav-link']}
              href='#'>
              <span className={`
              ${styles['header__link-content']}
              ${activeLink === 'm' ? styles['header__link-content--active'] : ''}
              `}>
                Men
              </span>
            </a>
          </li>
          <li className={styles['header__nav-item']}>
            <a onClick={() => setActiveLink('k')}
              className={styles['header__nav-link']}
              href='#'>
              <span className={`
              ${styles['header__link-content']}
              ${activeLink === 'k' ? styles['header__link-content--active'] : ''}
              `}>
                Kids
              </span>
            </a>
          </li>
        </ul>
        <div>
          <div className={styles['header__logo-wrapper']}>
            <Logo className={styles['header__logo']} />
          </div>
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