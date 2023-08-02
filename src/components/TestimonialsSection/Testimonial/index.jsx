import React from 'react';
import styles from './Testimonial.module.scss';

export default function Testimonial({
    imgSrc,
    testimonial,
    author,
    job
}) {
  return (
    <div className={styles.Testimonial}>
        <div className={styles.Testimonial_image}>
            <img src={imgSrc} alt={author} />
        </div>
        <p>
            {testimonial}
        </p>
        <div className={styles.Testimonial_author}>
            {author}
        </div>
        <div className={styles.Testimonial_job}>
            {job}
        </div>
    </div>
  )
}
