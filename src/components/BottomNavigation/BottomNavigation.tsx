'use client';

import React, { useEffect, useState } from 'react';

import styles from './index.module.scss';
import ActiveLink from 'src/components/UI/ActiveLink/ActiveLink';
import { Icon } from 'src/components/UI/Icon/Icon';
import { getCookie } from 'cookies-next';
import { toggleDark } from 'src/utils';
import { motion } from 'framer-motion';

const ButtonToggleTheme = () => {
  const [isToggle, setIsToggle] = useState<boolean>(getCookie('data-theme') === 'dark');

  useEffect(() => {
    const localTheme = getCookie('data-theme') === 'dark';
    if (localTheme) {
      document.documentElement.dataset.theme = 'dark';
      setIsToggle(true);
    }
  }, []);

  const handleToggle = (e: any) => {
    toggleDark(e.nativeEvent);
    setIsToggle(!isToggle);
  };

  return (
    <button className={styles.buttonToggleTheme} aria-label='Toggle theme' onClick={handleToggle}>
      <Icon icon={!isToggle ? 'icon-sun' : 'icon-moon'} />
    </button>
  );
};

const BottomNavigation = () => {
  // useEffect(() => {
  //   if (document) {
  //     const nav: any = document.querySelector('.nav'),
  //       nav_inner = nav.querySelector('.nav-inner');

  //     nav_inner.querySelectorAll('li').forEach((li, idx) => {
  //       li.addEventListener('mouseleave', () => nav.style.setProperty('--enter-nav', 0));
  //       li.addEventListener('mousemove', (e) => {
  //         let { clientX: x, clientY: y } = e;
  //         const rect = li.getBoundingClientRect();
  //         x = (x - rect.x - rect.width / 2) / rect.width;
  //         y = (y - rect.y - rect.height / 2) / rect.height;

  //         nav.style = `
  //           --enter-nav: 1;
  //           --current-item: ${idx};
  //           --x: ${x};
  //           --y: ${y};
  //       `;
  //       });
  //     });
  //   }
  // }, []);

  return (
    <div className={styles.containerBottomNavigation}>
      <nav className='nav'>
        <ul className='binoculars'>
          <li>Home</li>
          <li>Blogs</li>
          <li>Resume</li>
        </ul>
        <ul className='nav-inner'>
          <li className={styles.navItem}>
            <ActiveLink href='/' aria-label='Home' activeClassName={styles.active}>
              <Icon icon='icon-home' />
            </ActiveLink>
          </li>
          <li className={styles.navItem}>
            <ActiveLink href='/blogs' aria-label='Blogs' activeClassName={styles.active}>
              <Icon icon='icon-glasses' />
            </ActiveLink>
          </li>
          <li className={styles.navItem}>
            <a
              href='https://drive.google.com/file/d/14_V3hfYsvmcexLtyM3mo2koMLnK2rwOi/view?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Resume'
            >
              <Icon icon='icon-task' />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BottomNavigation;
