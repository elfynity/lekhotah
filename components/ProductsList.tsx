import styles from "@/app/products/products.module.css"
import { connectJSON } from "@/lib/resJson";
import Image from "next/image";
import Link from 'next/link';




const Product = ({title, url, imageFolder, image, price}:any) => {
  return (
    <div className={styles.product}>
      <Link href={"/products/" + url}>
        <Image
          src={"/" + imageFolder + "/" + image}
          alt={title}
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width:'100%',
            height:'auto',
          }}
        />
        <div className={styles.description}>
          <h3>{title}</h3>
          <p>R{price}</p>
        </div>
      </Link>
    </div>
  )
}


export const ProductsList = async({limit}: {limit?:number}) => {

 // await new Promise((resolve) => setTimeout(resolve, 6000));

  const products = await connectJSON()

  return (
    <>
    <div className={styles.products}>
      {products.slice(0, limit).map((product:any) => (
        <Product 
          key={product.id}
          title={product.title}
          url={product.url} 
          imageFolder={product.imageFolder}
          image={product.image} 
          size={product.size} 
          price={product.price}  />
      ))}
    </div>{/* styles.products*/}
    </>
  )
}

