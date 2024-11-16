import React from 'react';
import styles from '../sections/Projects/ProjectsStyles.module.css';

function ProjectCard({ src, h3, p, onClick}) {
  return (
    <div onClick={onClick} className={styles.card}>
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
    </div>
  );
}

export default ProjectCard;
