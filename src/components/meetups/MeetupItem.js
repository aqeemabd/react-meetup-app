import style from './MeetupItem.module.css'
import Card from '../ui/Card'
import FavoritesContext from '../../store/favorites-context'

import { useContext } from 'react'

function MeetupItem (props) {

    const context = useContext(FavoritesContext) 

    const itemIsFavorite = context.itemsFavorite(props.id)

    const toggleFavoriteStatusHandler = () => {
        if(itemIsFavorite) {
            context.removeFavorite(props.id)
        } else {
            context.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address
            })
        }
    }


    return(
        <li className={style.item}>
            <Card>
                <div className={style.image}>
                    <img src={props.image} alt={props.title}/>
                </div>
                <div className={style.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={style.actions}>
                    <button onClick={toggleFavoriteStatusHandler}>
                        {
                            itemIsFavorite ? 'Remove From Favorites' : 'To Favorites'
                        }
                    </button>
                </div>
            </Card>
        </li>
    )
}

export default MeetupItem