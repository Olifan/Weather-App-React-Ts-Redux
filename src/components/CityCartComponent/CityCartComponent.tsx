import React, { FC } from 'react';
import styles from './CityCartComponent.module.scss';

interface CityCartComponentProps {}

const CityCartComponent: FC<CityCartComponentProps> = () => (
  <div className={styles.CityCartComponent}>
    CityCartComponent Component
  </div>
);

export default CityCartComponent;
