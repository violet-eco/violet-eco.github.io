import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Data Protection',
    description: (
      <>
        Violet employs extensive security features such as end-to-end encryption, secure
        communication channels, source encryption, and a zero-knowledge architecture to keep
        user data secret and unavailable to unauthorized parties.
      </>
    ),
  },
  {
    title: 'Crash Saves',
    description: (
      <>
        Violet's Crash Saves feature stores your work progress and application states automatically
        in real-time. Violet can restore your work to the most recent saved state in the case of a system
        breakdown or unexpected shutdown, ensuring little data loss and letting you to pick up precisely where
        you left off without interruptions.
      </>
    ),
  },
  {
    title: 'Efficient',
    description: (
      <>
        Violet employs unique power management strategies to improve power efficiency and battery
        life on mobile devices. It changes CPU clock speed dynamically, regulates screen brightness,
        restricts background activities and uses adaptive power allocation to provide an ideal balance
        of performance and energy saving, resulting in a longer-lasting and more efficient device usage experience.
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
