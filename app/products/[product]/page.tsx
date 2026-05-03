import { SITE_NAME } from "@/lib/config";
import styles from "@/app/products/products.module.css"
import { connectJSON } from "@/lib/resJson";
import AddToCart from './AddToCart';
import ProductGallery from "./ProductGallery";




export async function generateMetadata({ 
  params,
}: { 
  params: Promise<{ product: string }>
}) {

  const { product } = await params;
  const products = await connectJSON();
  const singleProduct = products.find((p: any) => p.url === product);

  if (!singleProduct) {
    return { title: "Product Not Found" };
  }

  return {
    title: singleProduct.title + " | " + SITE_NAME,
    description: singleProduct.description,
  };
}



export default async function SingleProduct({
  params,
}: {
  params: Promise<{ product: string }>
}){
  const { product } = await params;


  const products = await connectJSON();

  const singleProduct = products.find((p: any) => p.url === product);



  

  return (
  <>
  <div className="wrapper content-padding">

    <div className={styles.singleProduct}>

      
      <div className={styles.singleMain}>

        <div className={styles.image}>

          <ProductGallery galleryImage={singleProduct.gallery} galleryFolder={singleProduct.imageFolder} />
        
        </div>

        <div className={styles.description}>
          <h1>{singleProduct.title}</h1>
          

          <div className={styles.sizes}>
            <p><span>Size: </span> 
              {singleProduct.size}
            </p>
            
            {singleProduct.dimensions.width && (
              <p><span>Width: </span>
                {singleProduct.dimensions.width}
              </p>
            )}
            
            {singleProduct.dimensions.height && (
              <p><span>Height: </span> 
                {singleProduct.dimensions.height}
              </p>
            )}

            {singleProduct.dimensions.diameter && (
              <p><span>Diameter: </span> 
                {singleProduct.dimensions.diameter}
              </p>
            )}

            {singleProduct.dimensions.depth && (
              <p><span>Depth: </span> 
                {singleProduct.dimensions.depth}
              </p>
            )}
          </div>{/* sizes */}  
                    

          <p className={styles.price}>
            R{singleProduct.price}
          </p>
          
          <p>{singleProduct.description}</p>
        

          {/*<AddToCart product={singleProduct} />*/}

        </div>{/* description */} 
      </div>{/* singleMain */}





    </div>{/* single-product */}  
      

  </div>{/* wrapper */}
  </>
  );
}