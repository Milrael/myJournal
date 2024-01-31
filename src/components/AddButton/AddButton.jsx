import CardButton from '../CardButton/CardButton';
import './AddButton.css'

function AddButton() {

    return (
        <CardButton className="journal-add">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                <path d="M10.5 4.16666V15.8333" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.66669 10H16.3334" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div>Новая запись</div>
        </CardButton>
    )
}

export default AddButton;