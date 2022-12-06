import PropTypes from 'prop-types'

const Button = ( {text, onDelete, targetId} ) => {
    // const id = {targetId}
    return(
        <button className='btn' onClick={() => onDelete({targetId})}>
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