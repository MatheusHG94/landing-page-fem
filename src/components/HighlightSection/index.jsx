import React from 'react';
import styles from './HighlightSection.module.scss';

export default function HighlightSection({
    title,
    summary,
    background,
    color
}) {
  return (
    <section 
        className={styles.HighlightSection} 
        style={{
            background: `${color} url(${background}) no-repeat center`,
            backgroundSize: 'cover',
            color: `${color}`
        }}
    >
        <h2>
            {title}
        </h2>
        <p>
            {summary}
        </p>
    </section>
  )
}
