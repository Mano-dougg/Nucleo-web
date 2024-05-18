import styles from './Header.module.css'

export const Toggle = ({ handleChange, isChecked}) => {
    return(
        <div className={styles.darkMode}>
            <p>Dark mode:</p>
            <input 
                type="checkbox"
                id='check'
                className={styles.toggle}
                onChange={handleChange}
                checked={isChecked}
            />
            <label htmlFor="check" className={styles.switch}>
                <span className={styles.slider}></span>
            </label>
        </div>
    )
}