import styles from "./PrimaryButton.module.css";

export default function PrimaryButton({ children, size }) {
  return (
    <button
      className={`
       ${styles.primaryButton}
        ${styles[size]}
      `}
    >
      {children}
    </button>
  );
}
