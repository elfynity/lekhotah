import type { Metadata } from "next";
import {ProductsList} from "@/components/ProductsList";
import { Suspense } from 'react';
import ProductsSkeleton from '@/app/products/ProductsSkeleton';





export const metadata: Metadata = {
  title: "Products",
  description: "View my catalogue of handmade products in my shop page.",
};




const Products = async () => {
 
  

  return (
    <>
    <div className="content-padding wrapper">
      <h1>Products</h1>
      <p>All products are handmade from scratch with patience, quality and care</p>
      
      <div className="content-padding">

        <Suspense fallback={<ProductsSkeleton />}>
          <ProductsList />
        </Suspense>  

      </div>{/* content-padding */}
    </div>{/* wrapper */} 
   </>
  )
}

export default Products;


