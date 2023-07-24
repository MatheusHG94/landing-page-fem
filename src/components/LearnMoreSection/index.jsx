import React from 'react';
import styles from './LearnMoreSection.module.scss';

export default function LearnMoreSection({
    title,
    summary,
    color,
    deviceType,
    image,
    direction
}) {
    return (
        <section
            className={styles.LearnMoreSection}
            style={{ flexDirection: `${direction}` }}
        >
            <div
                className={styles.LearnMoreSection_banner}
                style={{
                    backgroundColor: `${color}`,
                    backgroundImage: `url('assets/images/${deviceType}/${image}.jpg')`
                }}
            ></div>
            <div className={styles.LearnMoreSection_content}>
                <h2>
                    {title}
                </h2>
                <p>
                    {summary}
                </p>
                <a href='/'>
                    Learn more
                    <div
                        style={{
                            border: `5px solid ${color}`
                        }}
                    ></div>
                </a>
            </div>
        </section>
    )
}
