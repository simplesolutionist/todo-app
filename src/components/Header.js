import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
          <div className='logoContainer'>
              <img src='https://www.merge.com.au/wp-content/uploads/2020/07/870a2f0a426751eac1fc9cefcd97be78-1.gif' className='gif' alt='' />
          </div>  
          <div className='searchBar'>
              <div className='searchIconContainer'>
              </div>
              <input className='searchInput' placeholder='Search your tasks, or user...' />
          </div>
          <div className='headerItems'>
              <p>All</p>
              <p>Ongoing</p>
              <p>Completed</p>
          </div>
          <div className='loginButton'>
             Login       
          </div>
          <div className='loginButton'>
             SignUp       
          </div>
        </div>
    )
}

export default Header