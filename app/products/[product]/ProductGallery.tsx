'use client';
import { useState } from "react";
import Image from "next/image";
import styles from "@/app/products/products.module.css"



export default function ProductGallery(
  {galleryImage, galleryFolder}: {galleryImage : string[], galleryFolder : string}
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

      {galleryImage.map((img, i) => (

        <Image 
          key={img}
          className={styles.galleryImage}
          src={"/" + galleryFolder + "/" + img}
          alt={img}
          title={gallery}
          width={600}
          height={800}
          sizes='(max-width:500px) 100vw, 500px'
          priority={i === index || i === index + 1}
          style={{
            width:'100%',
            height:'auto',
            display: i === index ? 'block' : 'none',
          }}
        />

      )

    )}

      


    </div>{/* galleryImages */}


    <button className={styles.nav} onClick={handleNext}>&raquo;</button>

  </div>{/* galleryImagecontainer */}

  </>
 ) 
}