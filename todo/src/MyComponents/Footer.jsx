import React from "react";
const Footer=()=>{
  let footerStyle={
    //  position:"absolute",
    // position:"fixed",
    // position:"relative",
    //  top:"50vh",
    //  width:"100%"
  }
  return(
    // <footer className="bg-dark text-center text-white">
      <footer className="bg-dark text-center text-white" style={footerStyle}> 
             <p>Copyright &copy; MyTodosList.com</p>
    </footer>
  )
}

export default Footer;