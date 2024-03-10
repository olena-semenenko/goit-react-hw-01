
import css from'../FriendList/FriendList.module.css'
import FriendListItem from './FriendListItem/FriendListItem'

const FriendList = ({ friends }) => {
    return (
        <div className={css.friendlist_container}>
            <ul className={css.friendlist}>
                {friends.map(item =>(
                    <li key={item.id}>
                        <FriendListItem
                            avatar={item.avatar}
                            name={item.name}
                            isOnline={item.isOnline}>   </FriendListItem>
                    

                    </li>)
                )}
        
            </ul>
        </div>)
}


export default FriendList