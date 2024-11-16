import styles from './HeroStyles.module.css';
import heroImg from '../../assets/pic.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Pic"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Erfan Jahedi
        </h1>
        <h2>Computer Science Student</h2>
        <span>
          <a href="https://github.com/erfnjhdi" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/erfan-jahedi-b46568295/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
        Passionate and detail-oriented student at Concordia University with a strong foundation in full-stack development, data management, and object-oriented principles. Known for my communication and adaptability, I excel in both team settings and independently. Currently seeking internship opportunities to apply my skills in innovative tech environments.
        </p>
      </div>
    </section>
  );
}

export default Hero;
