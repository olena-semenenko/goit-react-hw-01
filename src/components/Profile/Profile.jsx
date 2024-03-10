
import './Profile.css'



 const Profile = ({username, tag, location, avatar, followers, views, likes}) => {
  return (
      <div className='profile-card'>
          <div className='profile-info'>
              <img className='profile-img'
                  src={avatar}
                  alt="User avatar"
              />
              <p className='profile-name'>{username}</p>
              <p>@{tag}</p>
              <p>{location}</p>
          </div>

          <ul className='profile-stats'>
              <li className='stats'>
                  <span>Followers</span>
                  <span className='stats-info'>{followers}</span>
              </li>
              <li className='stats'>
                  <span>Views</span>
                  <span className='stats-info'>{views}</span>
              </li>
              <li className='stats'>
                  <span>Likes</span>
                  <span className='stats-info'>{likes}</span>
              </li>
          </ul>
      </div>

  )
}




export default Profile
