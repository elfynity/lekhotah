import type { Metadata } from "next";
import {ProductsList} from "@/components/ProductsList";
import { Suspense } from 'react';
import ProductsSkeleton from '@/app/products/ProductsSkeleton';
import Link from 'next/link';


export const metadata: Metadata = {
  title: "Lekhotah",
  description: "Handmade Custom Cases and Clothing",
};


export default function Home() {
  return (
    <>
    <div className="content-padding">
      <div className="wrapper">
        <h1>Handmade Custom Cases and Clothing </h1>

        <p>I handpaint and sew all types of custom cases for leisure and utility use as well as unique handpainted clothing. </p>
        
        <p>Cases can be made from waterproof material and are sewn with a lock stitch and high quality foam so contents are protected from weather, bumps and scratches. </p>
        
        <p>I design and create:
        round bags, small travel bags, drum bags, cases for drumkits, snare drum and stands cases, as well as </p>
      </div>{/* wrapper */}
    </div>{/* content-padding */}  



    <div className="content-padding bg-alt">
      <div className="wrapper">


        <h2>Latest Products</h2>
        <Suspense fallback={<ProductsSkeleton />}>
          <ProductsList limit={4} />
        </Suspense>  

        <Link className="buttonLink center" href="/products"> View All</Link>
      </div>{/* wrapper */}
    </div>{/* content-padding */} 
    </>
  );
}
