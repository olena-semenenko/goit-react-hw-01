import css from './Profile.module.css';

// eslint-disable-next-line react/prop-types
const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile_card}>
      <div className={css.profile_info}>
        <img className={css.profile_img} src={avatar} alt="User avatar" />
        <p className={css.profile_name}>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.profile_stats}>
        <li className={css.stats}>
          <span>Followers</span>
          <span className={css.stats_info}>{stats.followers}</span>
        </li>
        <li className={css.stats}>
          <span>Views</span>
          <span className={css.stats_info}>{stats.views}</span>
        </li>
        <li className={css.stats}>
          <span>Likes</span>
          <span className={css.stats_info}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
