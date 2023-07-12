import React from 'react';
import styles from './Gallery.module.scss';
import imageList from './gallery.json';

export default function Gallery() {
  return (
    <section className={styles.Gallery}>
        {imageList.map(image => 
            <div key={image.id} className={styles.Gallery_image}>
                <img src={image.src} alt={image.alt} />
            </div>
        )}
    </section>
  )
}
