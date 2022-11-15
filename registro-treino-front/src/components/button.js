import { NavLink } from "react-router-dom";

const Button = ({titulo, type="simple", ...props}) => {
    return(
        <>
            {type === 'simple'  && <button {...props}>{titulo}</button>}
            
        </>
        
        
    )
}

export default Button;