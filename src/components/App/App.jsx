import { useState } from 'react';
import React from 'react';

import Profile from '../Profile/Profile';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

import user from '/src/data/User.json';
import friends from '/src/data/Friends.json';
import transaction from '/src/data/Transaction.json';

const App = () => {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      ></Profile>

      <FriendList friends={friends}></FriendList>

      <TransactionHistory items={transaction}></TransactionHistory>
    </div>
  );
};

export default App;
