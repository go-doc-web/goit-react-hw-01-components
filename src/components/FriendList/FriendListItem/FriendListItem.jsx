import PropTypes from 'prop-types';
import css from './friendListItem.module.css';

const FriendListItem = ({ name, avatar, isOnline }) => {
  let fullClassNameStatus = isOnline
    ? `${css.status} `
    : `${css.status} ${css.active} `;

  return (
    <li className={css.item}>
      <span className={fullClassNameStatus}></span>
      <div className={css.thumb}>
        <img className={avatar} src={avatar} alt="User avatar" width="120" />
      </div>
      <p className={css.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;

FriendListItem.defaultProps = {
  avatar: 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};
