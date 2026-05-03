'use client';
import { useState } from "react";

import Image from "next/image";
import { IMG_PATH } from '@/lib/config';
import styles from "@/app/products/products.module.css"



export default function ProductGallery(
  {galleryImage, galleryFolder}: {galleryImage : string, galleryFolder : string}
) {

  const[index, setIndex] = useState(0);
  let gallery = galleryImage[index];
 
  function handlePrev() {
    if(index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(galleryImage.length - 1);
    }
  }

  function handleNext() {
    if(index < galleryImage.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

 return (
  <>

  <div className={styles.galleryImageContainer}>

    <button className={styles.nav} onClick={handlePrev}>&laquo;</button>
    
    <div className={styles.galleryImage}>
      <Image 
       
        className={styles.galleryImage}
        src={IMG_PATH + "/" + galleryFolder + "/" + gallery}
        alt={gallery}
        title={gallery}
        width={600}
        height={800}
        sizes='(max-width:500px) 100vw, 500px'
        style={{
          width:'100%',
          height:'auto',
        }}
      />
    </div>{/* galleryImages */}


    <button className={styles.nav} onClick={handleNext}>&raquo;</button>

  </div>{/* galleryImagecontainer */}

  </>
 ) 
}