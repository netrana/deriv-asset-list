import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Image from 'components/Image'; 

import { ROUTES } from 'shared/routes/constants';
import { useIsMobile } from 'shared/hooks';
import logoImagePath from 'assets/images/jaunt_logo.png';

import styles from './logo.module.scss';

const Logo = () => {

  const isMobile = useIsMobile();

  return (
    <div    
    className={classNames({
      [styles.container]: true,
      [styles['is-mobile']]: isMobile,
    })}
    >
      <Link to={ROUTES.PATHS.ROOT}>
        <Image className={styles.logo} src={logoImagePath} alt="Company Logo" />
      </Link>
    </div>
  );
};

export default Logo;
