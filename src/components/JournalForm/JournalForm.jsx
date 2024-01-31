import Button from '../Button/Button';
import styles from './JournalForm.module.css';
import { useState } from 'react';
import cn from 'classnames';

function JournalForm({ onSubmit }) {

    const [formValidState, setFormValidState] = useState({
        title: true,
        post: true,
        date: true
    })


    const addJournalItem = (e) => {
        e.preventDefault();
        // console.log(e.target);
        const formData = new FormData(e.target);
        const formKeys = Object.fromEntries(formData);

        let isFormValid = true;
        if (!formKeys.title?.trim().length) {
            setFormValidState(state => ({ ...state, title: false }));
            isFormValid = false;
        } else {
            setFormValidState(state => ({ ...state, title: true }))
        }
        if (!formKeys.post?.trim().length) {
            setFormValidState(state => ({ ...state, post: false }));
            isFormValid = false;
        } else {
            setFormValidState(state => ({ ...state, post: true }))
        }
        if (!formKeys.date) {
            setFormValidState(state => ({ ...state, date: false }));
            isFormValid = false;
        } else {
            setFormValidState(state => ({ ...state, date: true }))
        }
        if (!isFormValid) {
            return;
        }
        onSubmit(formKeys);
    }
    // className={`${styles['input']} ${formValidState.date ? '' : styles['not-valid']}`}
    const titleInputStyle = cn(styles['input'], {
        [styles['not-valid']]: !formValidState.title
    });


    return (
        <form className={styles['journal-form']} onSubmit={addJournalItem}>
            <input type="text" name="title" className={titleInputStyle} />
            <input type="date" name="date" className={cn(styles['input'], {
                [styles['not-valid']]: !formValidState.date
            })} />
            <input type="text" name="tag" />
            <textarea name="post" id="" cols="30" rows="10" className={cn(styles['input'], {
                [styles['not-valid']]: !formValidState.post
            })}></textarea>
            <Button text="Сохранить" onClick={() => { console.log('Работает'); }} />
        </form>
    )
}

export default JournalForm;