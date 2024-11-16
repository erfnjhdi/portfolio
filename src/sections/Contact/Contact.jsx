import styles from './ContactStyles.module.css';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import { useTheme } from '../../common/ThemeContext';

function Contact() {
  const { theme} = useTheme();
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <h4>I'd love to hear from you! Here are some ways to reach out:</h4>
      <div className={styles.list}>
      <p><b>Phone:</b> 438.928.7493</p>
        <p><b>Email: </b><a href="mailto:erfanjahedi81@gmail.com" target='_blank' rel="noopener noreferrer">erfanjahedi81@gmail.com</a></p>
        <p><b>LinkedIn:</b>
          <a href="https://www.linkedin.com/in/erfan-jahedi-b46568295/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" className={styles.icon} />
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
