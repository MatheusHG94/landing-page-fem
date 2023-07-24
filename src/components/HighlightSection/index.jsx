import React from 'react';
import styles from './HighlightSection.module.scss';

export default function HighlightSection({
    title,
    summary,
    color,
    deviceType,
    image,
    side
}) {
  return (
    <section 
        className={styles.HighlightSection} 
        style={{
            backgroundColor: `${color}`,
            backgroundImage: `url('assets/images/${deviceType}/${image}.jpg')`,
            color: `${color}`,
            float: `${side}`
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
