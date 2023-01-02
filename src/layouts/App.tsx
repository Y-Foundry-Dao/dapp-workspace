import AppContent from '@pages/App';
import styles from "@scss/app.module.scss";
import Navigation from '@features/Navigation';
import MainRoutes from '@routes/Main';
import useWallet from '@hooks/useWallet';

export default function AppLayout() {
  const address = useWallet();
  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <Navigation />
        <AppContent />
        <MainRoutes />
      </header>
    </div>
  );
}
