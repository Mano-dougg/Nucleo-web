/* eslint-disable react/prop-types */
import { Cross, ThreeLineHorizontal } from 'akar-icons';
import styles from './ToggleMenuButton.module.css'

export function ToggleMenuButton({ menuOpen, handleToggleMenu }) {
  return (
    <button className={styles.closeButton} onClick={handleToggleMenu}>
      {menuOpen ? (
        <Cross strokeWidth={2} size={28} />
      ) : (
        <ThreeLineHorizontal strokeWidth={2} size={28} />
      )}
    </button>
  );
}