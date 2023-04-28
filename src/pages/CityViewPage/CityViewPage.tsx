import React, { FC } from 'react';
import styles from './CityViewPage.module.css';

interface CityViewPageProps {}

const CityViewPage: FC<CityViewPageProps> = () => (
  <div>
  <div className={styles.container}>
    <div className={styles.header}>
      <h1>Simple Weather App</h1>
    </div>
  </div>

  <div className={styles.container}>
    <div className={styles.footer}>
      <p>Made with <span>❤</span> by Anton Olifan</p>
    </div>
  </div>
</div>
);

export default CityViewPage;
