import styles from "@/app/products/products.module.css";

export default function ProductSingleSkeleton() {
  return(
    <>
   <div className="wrapper content-padding">

    <div className={styles.singleProduct}>

      
      <div className={styles.singleMain}>
        <div className={styles.image + ' ' + styles.skeletonBox} style={{ width: '300px' }}>
        </div>

        <div className={styles.description + ' ' + styles.skeletonBox}>
        </div>{/* description */} 
      </div>{/* singleMain */}

    </div>{/* single-product */}  
      

  </div>{/* wrapper */}
    </>
  )
}