import type { Metadata } from "next";
import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/contact/contact.module.css"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with me.",
};

const ContactLinks = ({img, url, title}: {img:string, url:string, title:string}) => {
  return(
    <>
    <div className={styles.contactLink}>
      <Link href={url}>
        <Image
          src={"/icons/" + img}
          alt={title}
          width={20}
          height={20}
        /> 
      </Link>

      {title}

    </div>{/* contactLink */}


     

    </>
  )
}

const Contact = () => {
  return(
    <>
    <div className="content-padding wrapper">
      <h1>Contact Me</h1>

        <p>I am open to orders for custom designed cases, drumbags, snare cases, togs bags etc. Please get in touch and we discuss colours and sizing etc. </p>
        
        <div id={styles.contactLinks}>
          <ContactLinks img="phone.svg" url="tel:+27767555354" title="0767555354"/>
          <ContactLinks img="email.svg" url="mailto:devgirl@disroot.org" title="devgirl@disroot.org"/>
          <ContactLinks img="address.svg" url="#" title="Westville, Durban, KZN"/>
        </div>{/* contactLinks */}  

    </div>  
    </>
  )
}

export default Contact;