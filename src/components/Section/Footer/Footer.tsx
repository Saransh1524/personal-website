'use client';

import React from 'react';

import Logo from 'src/components/UI/IconSvg/logo';
import Sparkles from 'src/components/UI/Sparkles/Sparkles';

import styles from './index.module.scss';

function Footer() {
  return (
    <footer className={`container ${styles.footer}`}>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1rem' }}>
        <a
          href="https://github.com/Saransh1524"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
        >
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 4a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V6.41l-9.3 9.3a1 1 0 0 1-1.4-1.42l9.3-9.3H11a1 1 0 1 1 0-2z"/>
          </svg>
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/saransh-naole-8a5a15247/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
        >
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 4a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V6.41l-9.3 9.3a1 1 0 0 1-1.4-1.42l9.3-9.3H11a1 1 0 1 1 0-2z"/>
          </svg>
          LinkedIn
        </a>
        <a
          href="mailto:saranshnaole24@gmail.com"
          style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
        >
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 4a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V6.41l-9.3 9.3a1 1 0 0 1-1.4-1.42l9.3-9.3H11a1 1 0 1 1 0-2z"/>
          </svg>
          Email
        </a>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
