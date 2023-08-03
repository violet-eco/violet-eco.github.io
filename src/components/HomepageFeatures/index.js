import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Security',
    description: (
      <>
        To protect your data from threats, we use cutting-edge encryption, strict security measures and real-time monitoring.
      </>
    ),
  },
  {
    title: 'Accessibility',
    description: (
      <>
        Violet aims to be accessible to everyone. We focus creating user-friendly interfaces, supporting a wide range of hardware and assistive technology.
      </>
    ),
  },
  {
    title: 'Quantum-Ready Architecture',
    description: (
      <>
        Violet adopts a quantum-ready architecture in anticipation of the future of quantum computing.
        We use quantum-safe cryptography to protect your data from possible dangers posed by quantum computers.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
