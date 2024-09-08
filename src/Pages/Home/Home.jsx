// import React from 'react'
import './Home.css'
import SideBar from '../../Components/SideBar/SideBar'
import Feed from '../../Components/Feeds/Feed'

function Home({sidebar}) {
  return (
    <div>
      <SideBar sidebar={sidebar}/>
      <div className={`container ${sidebar ? "" : "large-container"}`}>
          <Feed/>
      </div>
    </div>
  )
}

export default Home