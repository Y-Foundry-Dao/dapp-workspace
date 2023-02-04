import AppContent from '@pages/App';
import styles from "@scss/app.module.scss";
import Navigation from '@features/Navigation';
import MainRoutes from '@routes/Main';
import useChainInfo from '@hooks/useChainInfo';
export default function AppLayout() {
  // useChainInfo preps the chain info for the app
  useChainInfo();
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
