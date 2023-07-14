import styles from './Navigation.module.scss';
import logo from '@/assets/logo.svg';

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <img src={logo} alt='logo' className={styles.logo} />

      <button type='button' onClick={() => window.open('https://github.com/ka1serrr')} className='black_btn'>
        GitHub
      </button>
    </nav>
  );
};
