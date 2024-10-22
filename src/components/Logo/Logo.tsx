import styles from './Logo.module.css';
import logo from '../../assets/img/dirtymta2.png';
import Image from 'next/image';

const Logo = () => {
  return (
    <div
      className={styles.logoContainer}
      role='banner'
      aria-label='Company logo - Dirty MTA'
    >
        <div className={styles.logoBox}>
          <div className={styles.logo1} aria-hidden='true'>Dirty</div>
        <div className={styles.logo2} aria-hidden='true'>MTA</div>
        </div>
        <div className={styles.logoImage}><Image src={logo.src} alt="Dirty MTA logo" className={styles.logoImage}/></div>
      </div>
  )
}

export default Logo;