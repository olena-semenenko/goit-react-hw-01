
import '../FriendList/FriendList.css'
import FriendListItem from './FriendListItem/FriendListItem'

const FriendList = ({ friends }) => {
    return (
        <div className='friendlist-container'>
            <ul className='friendlist'>
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