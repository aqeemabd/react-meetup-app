import {useContext} from 'react'

import FavoritesContext from '../store/favorites-context'
import MeetupList from '../components/meetups/MeetupList'

function FavoritesPage() {

    const favoriteCtx = useContext(FavoritesContext)

    let content

    if(favoriteCtx.totalFavorites === 0) {
        content = <p>You have no favorites yet. Start adding some?</p>
    } else {
        content = <MeetupList meetups={favoriteCtx.favorites}/>
    }

    return (
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
    )
}

export default FavoritesPage