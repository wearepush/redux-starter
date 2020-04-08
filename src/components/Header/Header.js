import React from 'react';
import { Button } from '../../elements';
import styles from './Header.scss';

const Header = () => (
  <div className={styles.Header}>
    <div className={styles.Header__container}>
      <Button variant="info" label="Info" id="button-open" />
      <Button variant="outlined-primary" label="Primary" />
      <Button label="Danger" variant="danger" size="large" />
      <Button variant="outlined-danger" label="Danger" size="small" />
      <Button variant="warning" label="warning" />
    </div>
  </div>
);

export default Header;
