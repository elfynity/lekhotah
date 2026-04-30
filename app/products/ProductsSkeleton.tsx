import styles from "@/app/products/products.module.css"


function ProductSkeletonItem() {
  return(
    <div className={styles.Product + ' ' + styles.skeletonBox}>
    </div>
  )
}
export default function ProductSkeleton() {
  return (
    <>
      <div className={styles.products}>
        <ProductSkeletonItem />
        <ProductSkeletonItem />
        <ProductSkeletonItem />
        <ProductSkeletonItem />
      </div>
    </>
  )
}