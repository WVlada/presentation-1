import styles from './hamburgermenu.module.css'
export const Hamburger = () => {
  return (
    <div className=''>
      <input className={styles.checkbox} type="checkbox" name="" id="hamburgercheckbox" />
      <div className={styles.hamburger_lines}>
        <span className={styles.line + " "  + styles.line1}></span>
        <span className={styles.line + " "  + styles.line2}></span>
        <span className={styles.line + " "  + styles.line3}></span>
      </div>
    </div>
  );
};
