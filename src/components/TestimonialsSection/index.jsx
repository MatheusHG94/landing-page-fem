import React from 'react';
import styles from './TetimonialsSection.module.scss';
import Testimonial from './Testimonial';

export default function TestimonialsSection() {
  return (
    <section className={styles.TestimonialsSection}>
        <h2>
            Client Testimonials
        </h2>
        <Testimonial
            image='assets/images/image-emily.jpg'
            testimonial='We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.'
            author='Emily R.'
            job='Marketing Director'
        />
        <Testimonial
            image='assets/images/image-thomas.jpg'
            testimonial='Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.'
            author='Thomas S.'
            job='Chief Operating Officer'
        />
        <Testimonial
            image='assets/images/image-jennie.jpg'
            testimonial='Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!'
            author='Jennie F.'
            job='Business Owner'
        />
    </section>
  )
}
