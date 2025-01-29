import styles from "./Header.module.css";

function Header({ children }) {
    return <img className={styles.logo} src="../public/Logo.svg" alt="Логотип журнала" />;
}

export default Header;
