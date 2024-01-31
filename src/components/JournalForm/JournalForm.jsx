import Button from '../Button/Button';
import styles from './JournalForm.module.css';
import { useEffect, useReducer } from 'react';
import cn from 'classnames';
import { formReducer, INITIAL_STATE } from './JournalForm.state';

function JournalForm({ onSubmit }) {

    const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE)
    const { isValid, isFormReady, values } = formState;

    useEffect(() => {
        let timer;
        if (!isValid.date || !isValid.post || !isValid.title) {

            timer = setTimeout(() => {
                console.log('Очищено');
                dispatchForm({ type: 'RESET_VALID' })
            }, 3000)
        }
        return () => {
            clearTimeout(timer);
        }
    }, [isValid]);


    useEffect(() => {
        if (isFormReady) {
            onSubmit(values);

        }
    }, [isFormReady])

    const addJournalItem = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formKeys = Object.fromEntries(formData);

        dispatchForm({ type: 'SUBMIT', payload: formKeys })
        console.log(isFormReady);
        
    }
    
    const titleInputStyle = cn(styles['input'], {
        [styles['not-valid']]: !isValid.title
    });


    return (
        <form className={styles['journal-form']} onSubmit={addJournalItem}>
            <input type="text" name="title" className={titleInputStyle} />
            <input type="date" name="date" className={cn(styles['input'], {
                [styles['not-valid']]: !isValid.date
            })} />
            <input type="text" name="tag" />
            <textarea name="post" id="" cols="30" rows="10" className={cn(styles['input'], {
                [styles['not-valid']]: !isValid.post
            })}></textarea>
            <Button text="Сохранить" onClick={() => { console.log('Работает'); }} />
        </form>
    )
}

export default JournalForm;