import React,{useState} from "react";
import Menu from "./modules/Menu/Menu";
import Main from "./modules/Main/Main";
import BurgerMenu from "./modules/BurgerMenu/BurgerMenu";
import Footer from "./modules/Footer/Footer";

const App = () => {
    const[open,setOpen]=useState(false)
  return (
    <div  >
<Menu open={open} setOpen={setOpen}/>
<Main open={open} setOpen={setOpen}/>
<Footer/>

    </div>
  );
};

export default App;
