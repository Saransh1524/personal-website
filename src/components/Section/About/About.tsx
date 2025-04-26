'use client';

/* eslint-disable @next/next/no-img-element */
import React from 'react';

import Sparkles from 'src/components/UI/Sparkles/Sparkles';

import styles from './index.module.scss';
import { Span } from 'next/dist/trace';

export default function About() {
  return (
    <section className='About container' id='sectionAbout'>
      <div className={styles.aboutHeading} data-aos='fade-up'>
        <h2 className={styles.aboutTitle}>
          <span>About me</span>
        </h2>

        {/* <h3 className={styles.aboutSubtitle}>
          if you&apos;re <span>wondering</span> who <span>I am...</span>
        </h3> */}
      </div>
      <div className={styles.aboutMe} data-aos='fade-up'>
        <p>
          Hi, my name is <span>Saransh</span>, Hi, I'm a passionate developer focused on mastering programming, DSA, and building real-world projects.
I'm currently pursuing my B.Tech from Vellore Institute of Technology.
I'm actively exploring new technologies, frameworks, and AI/ML to strengthen my skills across different areas of tech.
Driven by curiosity and a love for problem-solving, I'm always looking to create meaningful solutions and push my abilities further.
        </p>
      </div>
      <div className={styles.aboutMeStack} data-aos='fade-up'>
        <h3>
          My current <span >stack </span>
          of <span className={styles.aboutHighlight}>languages/technologies</span>
          is:
        </h3>
        <div>
          <img
            src='https://img.shields.io/badge/html5-%23E34F26.svg?style=flat-square&logo=html5&logoColor=white'
            alt='HTML5'
          />
          <img
            src='https://img.shields.io/badge/css3-%231572B6.svg?style=flat-square&logo=css3&logoColor=white'
            alt='CSS3'
          />
        
          <img
            src='https://img.shields.io/badge/Tailwindcss-%2338B2AC.svg?style=flat-square&logo=tailwind-css&logoColor=white'
            alt='TailwindCSS'
          />
         
          <img
            src='https://img.shields.io/badge/Javascript-%23323330.svg?style=flat-square&logo=javascript&logoColor=%23F7DF1E'
            alt='Javascript'
          />
          <img
            src='https://img.shields.io/badge/Typescript-%23007ACC.svg?style=flat-square&logo=typescript&logoColor=white'
            alt='Typescript'
          />
          <img
            src='https://img.shields.io/badge/Reactjs-%2320232a.svg?style=flat-square&logo=react&logoColor=%2361DAFB'
            alt='Reactjs'
          />
          <img
            src='https://img.shields.io/badge/Nextjs-black?style=flat-square&logo=next.js&logoColor=white'
            alt='Nextjs'
          />
    
          <img
            src='https://img.shields.io/badge/Vitejs-blueviolet?style=flat-square&logo=vite&logoColor=white'
            alt='Vitejs'
          />
          <img
            src='https://img.shields.io/badge/Nodejs-6DA55F?style=flat-square&logo=node.js&logoColor=white'
            alt='Nodejs'
          />
          <img
            src='https://img.shields.io/badge/Expressjs-6DA55F?style=flat-square&logo=nestjs&logoColor=white'
            alt='Expressjs'
          />
          <img
            src='https://img.shields.io/badge/Firebase-%23039BE5.svg?style=flat-square&logo=firebase'
            alt='Firebase'
          />
          <img
            src='https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=flat-square&logo=mongodb&logoColor=white'
            alt='MongoDB'
          />
          <img
            src='https://img.shields.io/badge/Git-%23E34F26.svg?style=flat-square&logo=git&logoColor=white'
            alt='Git'
          />
          <img
            src="https://img.shields.io/badge/C++-00599C.svg?style=flat-square&logo=c%2b%2b&logoColor=white"
            alt="C++"
          />
          <img
            src="https://img.shields.io/badge/Java-007396.svg?style=flat-square&logo=java&logoColor=white"
            alt="Java"
          />
          <img
            src="https://img.shields.io/badge/MySQL-4479A1.svg?style=flat-square&logo=mysql&logoColor=white"
            alt="MySQL"
          />
          <img
            src="https://img.shields.io/badge/Shadcn_UI-111827.svg?style=flat-square&logo=shadcnui&logoColor=white"
            alt="Shadcn UI"
          />
          <img
            src="https://img.shields.io/badge/AWS-232F3E.svg?style=flat-square&logo=amazon-aws&logoColor=white"
            alt="AWS"
          />
        </div>
      </div>

      {/* <div className={styles.aboutContribution}>
        <p className={styles.aboutContributionTitle}>Contributions in this years</p>
        <img src='https://ghchart.rshah.org/hunghg2505' alt='' />
      </div> */}
    </section>
  );
}
