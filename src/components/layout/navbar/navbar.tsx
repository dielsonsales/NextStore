import Link from "next/link";
import styles from "./navbar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navBarContainer}>
      <Link className={styles.navBarText} href="/products">
        Store
      </Link>
      <Link className={styles.navBarText} href="/profile">
        Profile
      </Link>
    </nav>
  );
}
