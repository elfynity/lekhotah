import Link from 'next/link'
import Image from "next/image"
import Logo from "../public/logo.svg"


export const Header = () => {
  return (
    <>

    <div id="header-container">
      <div className="wrapper">
      
        <header className="wrapper">        
          <Image 
            id="logo"       
            src={Logo}
            alt="Lekhotah logo"
            loading="eager"
            style={{width:'auto', height:'auto'}}
          />
          
          <nav>
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/test">Test</Link>
          </nav>
        </header>

      </div>{/* header */}
    </div>{/* header container */}
    </>
  );
}  





