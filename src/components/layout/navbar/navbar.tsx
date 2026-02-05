import Link from "next/link";
import styles from "./navbar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navBarContainer}>
      <Link href="/products">Store</Link>
      <Link href="/profile">Profile</Link>
    </nav>
  );
}
