import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from '@ant-design/icons';
import classNames from 'classnames';
import React, { FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { useIsTab } from 'shared/hooks';

import styles from './footer.module.scss';

export const Footer: FC = () => {
  const isTab = useIsTab();
  const navigate = useNavigate();

  const handleOnClick = useCallback(
    (link) => {
      navigate(link, { replace: true });
      window.scrollTo(0, 0);
    },
    [navigate]
  );
  const handleExternalLinkCLick = (link: string) => window.open(link, '_blank');

  return (
    <div
      className={classNames({
        [styles.container]: true,
        [styles['is-mobile']]: isTab,
      })}
    >
      <div className={styles.bottom}>
        <div className={styles.bottomLeft}>
          <span>© {new Date().getFullYear()} Jaunt, Ltd.</span>
          <span
            onClick={() => handleOnClick('/privacy-policy')}
            className={styles.privacy}
          >
            Privacy
          </span>
          <span
            onClick={() => handleOnClick('/terms-and-conditions')}
            className={styles.terms}
          >
            Terms
          </span>
        </div>
        <div className={styles.bottomRight}>
          <FacebookOutlined
            onClick={() =>
              handleExternalLinkCLick('https://www.facebook.com/jauntaustralia')
            }
            className={styles.icon}
          />
          <LinkedinOutlined
            onClick={() => handleExternalLinkCLick('')}
            className={styles.icon}
          />
          <InstagramOutlined
            onClick={() =>
              handleExternalLinkCLick(
                'https://www.instagram.com/jauntaustralia/'
              )
            }
            className={styles.icon}
          />
          <TwitterOutlined
            onClick={() => handleExternalLinkCLick('')}
            className={styles.icon}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
