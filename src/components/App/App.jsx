import { useState } from 'react'
import React from 'react'

import Profile from '../Profile/Profile'
import FriendList from '../FriendList/FriendList'
import TransactionHistory from '../TransactionHistory/TransactionHistory'

import user from '/src/data/User.json'
import friends from '/src/data/Friends.json'
import transaction from '/src/data/Transaction.json'

const { username, tag, location, avatar, stats } = user

const App = () => {
  return (
    <div>
      <Profile
        avatar={avatar}
        username={username}
        tag={tag}
        location={location}
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}></Profile>
      
      <FriendList
        friends={friends}></FriendList>
      
      <TransactionHistory items={transaction}></TransactionHistory>
    </div>
  )
}

export default App
