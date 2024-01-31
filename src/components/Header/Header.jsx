import styles from './Header.module.css';

function Header() {

    return (
        <img src="/logo.svg" className={styles.logo} alt="Логотип журнала" />
    )
}

export default Header;