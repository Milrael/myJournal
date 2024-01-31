import './Button.css';

function Button({text, onClick}) {

    return (
        <button className='button' onClick={onClick}>{text}</button>
    )
}

export default Button;