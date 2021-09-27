import NewMeetupForm from "../components/meetups/NewMeetupForm"

import { useHistory } from 'react-router-dom'

function NewMeetupPage() {

    // Navigating Programmatically
    const history = useHistory()

    const addMeetupHandler = meetup => {
        fetch('https://react-getting-started-51ff6-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json', {
            method: 'POST',
            body: JSON.stringify(meetup),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(() => {
            history.replace('/')
        })
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    )
}

export default NewMeetupPage