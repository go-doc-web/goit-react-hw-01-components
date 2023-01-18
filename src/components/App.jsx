import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './Transaction/TransactionHistory';
import SectionTask from './Section/SectionTask';

import user from '../data/user.json'
import data from '../data/data.json';
import friends from '../data/friends.json';
import trasactions from '../data/transactions.json';





export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        marginTop:'40px',
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        gap:"40px",
        fontSize: 40,
        color: '#010101',
      }}
    >
      <SectionTask title="task[0]" />
       <Profile
        username={user.username}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        stats={user.stats} />
      <SectionTask title="task[1]" />
      <Statistics title="Upload stats" items={data} />
      <SectionTask title="task[2]" />
      <FriendList items={friends} />
      <SectionTask title="task[3]" />
      <TransactionHistory items={trasactions}/>
    </div>
  );
};

export default App;




