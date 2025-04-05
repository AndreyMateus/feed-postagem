import styles from "./Header.module.css";

import igniteLogo from "../assets/react.svg";

export default function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logotipo do React" />
            <strong className={styles.headerTitle}>Ignite Feed</strong>
        </header>
    );
}