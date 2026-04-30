export const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <>

    <footer>
      <div className="wrapper">
        <p>&copy; Copyright Lekhotah {currentYear} </p>
      </div>{/* wrapper */}  
    </footer>{/* copyright */}

    </>
  );
}