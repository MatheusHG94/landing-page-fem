import React from 'react';
import styles from './Gallery.module.scss';

export default function Gallery() {
  return (
    <section className={styles.Gallery}>
        <div className={styles.Gallery_image}>
            <img src='assets/images/mobile/image-gallery-milkbottles.jpg' alt='lined milkbottles with cloudy background' />
        </div>
        <div className={styles.Gallery_image}>
            <img src='assets/images/mobile/image-gallery-orange.jpg' alt='half orange on a blue and white plate with orange background' />
        </div>
        <div className={styles.Gallery_image}>
            <img src='assets/images/mobile/image-gallery-cone.jpg' alt='empty ice cream cone with blue background' />
        </div>
        <div className={styles.Gallery_image}>
            <img src='assets/images/mobile/image-gallery-sugar-cubes.jpg' alt='stacked sugar cubes with pink background' />
        </div>
    </section>
  )
}
