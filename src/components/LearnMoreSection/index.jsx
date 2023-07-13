import React from 'react';
import styles from './LearnMoreSection.module.scss';

export default function LearnMoreSection({
    title,
    summary,
    banner,
    color
}) {
    return (
        <section className={styles.LearnMoreSection}>
            <div
                className={styles.LearnMoreSection_banner}
                style={{
                    background: `${color} url(${banner}) no-repeat center`,
                    backgroundSize: 'cover'
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
