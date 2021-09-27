import style from './NewMeetupForm.module.css'
import Card from '../ui/Card'

import { useRef } from 'react'

function NewMeetupForm (props) {

    const titleInputRef = useRef()
    const imageInputRef = useRef()
    const addressInputRef = useRef()
    const descriptionInputRef = useRef()

    const submitHandler = (e) => {
        e.preventDefault()

        const enteredTitle = titleInputRef.current.value
        const enteredImage = imageInputRef.current.value
        const enteredAddress = addressInputRef.current.value
        const enteredDescription = descriptionInputRef.current.value

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        }

        // console.log(meetupData)

        props.onAddMeetup(meetupData)
    }


    return(
        <Card>
            <form className={style.form} onSubmit={submitHandler}>
                <div className={style.control}>
                    <label htmlFor='title'>Meetup title</label>
                    <input type='text' required id='title' ref={titleInputRef}/>
                </div>

                <div className={style.control}>
                    <label htmlFor='image'>Meetup image</label>
                    <input type='url' required id='image' ref={imageInputRef}/>
                </div>

                <div className={style.control}>
                    <label htmlFor='address'>Meetup address</label>
                    <input type='text' required id='address' ref={addressInputRef}/>
                </div>

                <div className={style.control}>
                    <label htmlFor='description'>Meetup description</label>
                    <textarea type='text' required id='description' rows='5' ref={descriptionInputRef}></textarea>
                </div>

                <div className={style.actions}>
                    <button type='submit'>Add Meetup</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm