import PropTypes from 'prop-types'

const Button = ({classname,text,onClick}) => {
    return (
        <button
        onClick = {onClick}
        className={classname}
        >   
        {text}
        </button>
    )
}

Button.defaultProps={
    classname:'btn',
    text:'click',
}
Button.propTypes={
    classname:PropTypes.string ,
    text:PropTypes.string ,
    onClick:PropTypes.func ,

}
export default Button