
import css from './FriendListItem.module.css'
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.friend_item}>
        
          <img src={avatar} alt="Avatar" width="48" />
          <p className={css.friend_name}>{name}</p>
          {isOnline ? (
            <p className={css.friend_online}>Online</p>
          ) : (
            <p className={css.friend_ofline}>Ofline</p>
          )}
        
      </div>
  )
}

export default FriendListItem