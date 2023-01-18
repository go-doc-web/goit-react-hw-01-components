import PropTypes from 'prop-types';
import css from './friendList.module.css';

import FriendListItem from './FriendListItem/FriendListItem';

const FriendList =({items})=>{
  
   const elements = items.map(({id,...itemProps})=><FriendListItem key={id} {...itemProps}/>)
return (
   
      <ul className={css.list}>
         {elements}
      </ul>
   
)
}

export default FriendList;

FriendList.defaultProps = {
   items: [],

};
 
FriendList.propTypes = {
   items: PropTypes.arrayOf(
      PropTypes.shape({
         avatar:PropTypes.string,
            id:PropTypes.number.isRequired,
            isOnline:PropTypes.bool.isRequired,
            name:PropTypes.string.isRequired
      })
           
   )
}
   
// List.propTypes = { title: PropTypes.string, items: PropTypes.arrayOf(
// PropTypes.shape({ id: PropTypes.string.isRequired, title:
// PropTypes.string.isRequired, year: PropTypes.string.isRequired, }) ), };

