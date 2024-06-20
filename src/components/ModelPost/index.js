import styles from "./ModelPost.module.css";

export default function ModelPost({ coverPhoto, title, children }) {
  return (
    <article className={styles.modelPostContainer}>
      <div
        className={styles.coverPhoto}
        style={{ backgroundImage: `url(${coverPhoto})` }}
      />
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.postContentContainer}>{children}</div>
    </article>
  );
}
