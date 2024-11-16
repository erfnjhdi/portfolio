import React from 'react';
import styles from './ProjectsStyles.module.css';
import { useTheme } from '../../common/ThemeContext';

function ProjectModal({ id, title, description, link, onClose }) {
const { theme} = useTheme();
if (id === 'alert'){
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        <p id='modal-text'>{description}</p>
        <div className={styles.buttons}>
            <a href="https://alert-hazel.vercel.app/" target="_blank" rel="noopener noreferrer"> 
              <button className={styles.button}>View Website</button>
            </a>
            <a href={link} target="_blank" rel="noopener noreferrer"> 
              <button className={styles.button}>View on GitHub</button>
            </a>
            <button className={styles.closeButton} onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
else{
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className={styles.buttons}>
            <a href={link} target="_blank" rel="noopener noreferrer">
            <button className={styles.button}>View on GitHub</button>
            </a>
            <button className={styles.closeButton} onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
}

export default ProjectModal;
