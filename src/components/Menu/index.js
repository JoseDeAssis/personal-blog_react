import MenuLink from "../MenuLink";
import styles from "./menu.module.css";

export default function Menu() {
  return (
    <header>
      <nav className={styles.navigation}>
        <MenuLink to="/">
          Home
        </MenuLink>
        <MenuLink to="/about">
        </MenuLink>
      </nav>
    </header>
  )
}