import React, { useState } from 'react';
import styles from './ProjectsStyles.module.css';
import alert from '../../assets/logo.png';
import database from '../../assets/data.png';
import banking from '../../assets/Banking.png';
import library from '../../assets/library2.png';
import ProjectCard from '../../common/ProjectCard';
import ProjectModal from '../Projects/ProjectModal';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'alert',
      src: alert,
      link: 'https://github.com/Ade-mir/company-landing-page-2',
      title: 'Alert',
      about: 'Full-stack Website',
      description: 'Alert is a full-stack web application designed for real-time reporting of incidents and disturbances such as crimes, protests, or natural disasters. Built with a ReactJS frontend, Node.js backend, and MongoDB for database management, the platform allows users to report incidents, which are then displayed on an interactive map with markers. The active markers are displayed on the map and users can view the information stored for each incident. The main goal is to provide a comprehensive solution for public awareness and safety. This project strengthened my skills in full-stack development, and NoSQL database integration.'
    },
    {
      id: 'database',
      src: database,
      link: 'https://github.com/erfnjhdi/Soccer-database',
      title: 'Soccer Club Database',
      about: 'Database System',
      description: 'Designed and implemented a relational database for managing data within a youth soccer club in a team setting, utilizing BCNF normalization to optimize data consistency and reduce redundancy. I developed SQL scripts for data insertion, query processing, and helped build a PHP-based GUI to facilitate real-time data interactions for users.'
    },
    {
      id: 'banking',
      src: banking,
      link: 'https://github.com/erfnjhdi/Banking_System',
      title: 'Banking System',
      about: 'Multi-threaded Programming',
      description: 'Created a multithreaded Java application to simulate banking transactions, such as deposits and withdrawals, handling concurrent user activity and synchronization of shared resources. I applied concurrency control techniques, such as semaphores, to manage thread consistency and resolve resource conflicts. This project strengthened my debugging skills through the handling of simulated transaction inconsistencies, enhancing my understanding of complex concurrency challenges in software systems.'
    },
    {
      id: 'library',
      src: library,
      link: 'https://github.com/erfnjhdi/Library-System',
      title: 'Library System',
      about: 'Object-oriented Programming',
      description:'The Library System is a Java-based application designed to manage inventory and client interactions within a library, supporting various items such as books, journals, and media. Built with core object-oriented principles like inheritance, polymorphism, and encapsulation, the system allows users to add, edit, and delete items and clients, lease items, and handle returns. Users can view specific item categories, track leased items, and find the largest book by page count. This project strengthened my skills in Java programming, object-oriented design, and UML modeling, enhancing my ability to apply best practices, manage data integrity through deep copying, and solve complex inventory management problems.'
    },
  ];

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            src={project.src}
            h3={project.title}
            p={project.about}
            onClick={() => handleCardClick(project)}
          />
        ))}
      </div>
      {selectedProject && (
        <ProjectModal
          id = {selectedProject.id}
          title={selectedProject.title}
          description={selectedProject.description}
          link={selectedProject.link}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
}

export default Projects;
