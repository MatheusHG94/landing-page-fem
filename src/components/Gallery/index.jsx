import React from 'react';
import styles from './Gallery.module.scss';

export default function Gallery() {
  return (
    <section className={styles.Gallery}>
        <div className={styles.Gallery_image}>
            <img src='assets/images/mobile/image-gallery-milkbottles.jpg' alt='' />
        </div>
        <div className={styles.Gallery_image}>
            <img src='assets/images/mobile/image-gallery-orange.jpg' alt='' />
        </div>
        <div className={styles.Gallery_image}>
            <img src='assets/images/mobile/image-gallery-cone.jpg' alt='' />
        </div>
        <div className={styles.Gallery_image}>
            <img src='assets/images/mobile/image-gallery-sugar-cubes.jpg' alt='' />
        </div>
    </section>
  )
}
