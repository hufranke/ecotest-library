import PropTypes from 'prop-types'

const Button = ( {text, execFunction} ) => {
    // const id = {targetId}
    return(
        <button className='btn' onClick={execFunction}>
            {text}
        </button>
    )
}

Button.defaultProps = {
    text: 'Add'
}

Button.propTypes = {
    text: PropTypes.string,
} 

export default Button