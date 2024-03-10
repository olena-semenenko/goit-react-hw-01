
import './FriendListItem.css'
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className='friend-item'>
        
          <img src={avatar} alt="Avatar" width="48" />
          <p className='friend-name'>{name}</p>
          {isOnline ? (
            <p className='friend-online'>Online</p>
          ) : (
            <p className='friend-ofline'>Ofline</p>
          )}
        
      </div>
  )
}

export default FriendListItem