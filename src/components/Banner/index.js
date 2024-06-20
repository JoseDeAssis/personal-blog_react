import styles from "./Banner.module.css";
import coloredCircle from "assets/circulo_colorido.png";
import myPhoto from "assets/josemaria.jpg";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.presentation}>
        <h1 className={styles.title}>Hello World!</h1>

        <p className={styles.paragraph}>
          Boas vindas ao meu espaço pessoal! Eu sou José Maria, desenvolvedor
          Full-Stack. Aqui compartilho vários conhecimentos, espero que aprenda
          algo novo :)
        </p>
      </div>

      <div className={styles.images}>
        <img
          className={styles.coloredCircle}
          src={coloredCircle}
          aria-hidden={true}
          alt=""
        />
        <img
          className={styles.myPhoto}
          src={myPhoto}
          alt="Foto to José Maria"
        />
      </div>
    </div>
  );
}
