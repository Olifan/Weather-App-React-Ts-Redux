import React, { FC } from 'react';
import styles from './CityListPage.module.css';

interface CityListPageProps {}

const CityListPage: FC<CityListPageProps> = () => (
  <div className={styles.CityListPage}>
    CityListPage Component
  </div>
);

export default CityListPage;
