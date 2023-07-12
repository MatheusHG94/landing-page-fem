import React from 'react';
import styles from './TetimonialsSection.module.scss';
import Testimonial from './Testimonial';
import testimonialList from './testimonials.json';

export default function TestimonialsSection() {
  return (
    <section className={styles.TestimonialsSection}>
        <h2>
            Client Testimonials
        </h2>
        {testimonialList.map(testimonial =>
            <Testimonial 
                key={testimonial.id}
                imgSrc={testimonial.imgSrc}
                testimonial={testimonial.testimonial}
                author={testimonial.author}
                job={testimonial.job}
            />    
        )}
    </section>
  )
}
