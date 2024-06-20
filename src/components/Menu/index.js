import MenuLink from "../MenuLink";
import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <header>
      <nav className={styles.navigation}>
        <MenuLink to="/">
          Home
        </MenuLink>
        <MenuLink to="/about">
          About Me
        </MenuLink>
      </nav>
    </header>
  )
}