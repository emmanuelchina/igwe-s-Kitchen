import { useEffect } from "react";


function Scroll() {
 
    useEffect(() =>{
        window.scrollTo({
            top:0,
            left:0,
            behavior:"instant"
        })
        
    },


)
    return null;
}

export default Scroll