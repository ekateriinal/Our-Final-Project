import styles from './Wrapper.module.scss';

const Wrapper = ({appearance, children}) => {
return (
    <div className={`
      ${styles.wrapper}
      ${appearance === 'dark' ? styles['wrapper--dark-bg'] : ''} 
      `}
    >
        {children}
    </div>
)
}

export default Wrapper;