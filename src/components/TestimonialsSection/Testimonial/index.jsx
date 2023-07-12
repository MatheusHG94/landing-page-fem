import React from 'react';
import styles from './Testimonial.module.scss';

export default function Testimonial({
    key,
    imgSrc,
    testimonial,
    author,
    job
}) {
  return (
    <div key={key} className={styles.Testimonial}>
        <div className={styles.Testimonial_image}>
            <img src={imgSrc} alt='authors face' />
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
