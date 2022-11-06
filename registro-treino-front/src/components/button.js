const Button = ({titulo, ...props}) => {
    return(
        <button {...props}>{titulo}</button>
    )
}

export default Button;