import PropTypes from 'prop-types'

const Button = ( {text, execFunction} ) => {
    // const id = {targetId}
    return(
        <button
            onClick={execFunction}
            className='btn' >
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