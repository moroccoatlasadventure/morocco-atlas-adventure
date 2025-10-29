import Header from '../common/Header/Header';
import Footer from '../common/Footer/Footer';
import ScrollToTop from '../common/ScrollToTop/ScrollToTop';
import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.css';

const MainLayout = () => {
  return (
    <>
      <div className={styles.mainLayout}>
        <Header />
        <main className={styles.mainContent}>
          <Outlet />
        </main>
        <ScrollToTop />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
