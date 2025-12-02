import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Made with ❤️ for the best Mom in the world.</p>
            <p className={styles.copyright}>© {new Date().getFullYear()} Happy Birthday</p>
        </footer>
    );
}
