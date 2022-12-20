import React from 'react'

const TopSearchBar = () => {
  return (
    <div className='topsearchBar'>
        <div className='searchBarInput'>
          <img src='/images/srch.svg' alt='search icon' />
            <input 
            type="text"
            placeholder='Search a record by name, email, dob, e.t.c.'
            />
        </div>
        <div className='topSearchBarIcons'>
            <img src='/images/noti.svg' alt='notifications' />
            <img src='/images/icon6.png' alt='notifications' />
        </div>

    </div>
  )
}

export default TopSearchBar