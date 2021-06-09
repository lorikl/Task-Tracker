const Button = ({onClick, text, color}) => {
    return (
        <div>
            <button  
            className= 'btn'
            style={{backgroundColor: color}}
            onClick={onClick}
            text={text}>
                {text}
            </button>
        </div>
    )
}

export default Button
 