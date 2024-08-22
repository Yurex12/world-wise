import styles from './Button.module.css';
function Button({ children, onClick, desc }) {
  return (
    <button
      type='button'
      className={`${styles.btn} ${styles[desc]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
