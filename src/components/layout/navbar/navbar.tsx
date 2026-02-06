import Link from "next/link";
import styles from "./navbar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navBarContainer}>
      <Link href="/products">
        <span className={styles.navBarText}>Store</span>
      </Link>
      <Link href="/profile">
        <span className={styles.navBarText}>Profile</span>
      </Link>
    </nav>
  );
}
