import PropTypes from 'prop-types';
import css from './profile.module.css';





function Profile( {username,avatar,tag,stats:{followers,views,likes}}) {
  // console.log(avatar);
  // const defaultImg = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png';
  return (
    <div className={css.profile} >
      <div className={css.description}>
        <div className={css.thumb}>
          <img src={avatar } alt="User avatar" className={css.avatar} />
        </div>
        <div className={css.wrapper}>
          <p className={css.name}>{ username}</p>
          <p className={css.tag}>@{tag}</p>
          <p className={css.location}>Salvador, Brasil</p>
        </div>
      </div>

      <ul className={css.stats}>
        <li className={css.item}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{ followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{ views}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{ likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;

Profile.defaultProps = {
  avatar:'https://cdn-icons-png.flaticon.com/512/1077/1077012.png'
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    
  })
  
  
}
