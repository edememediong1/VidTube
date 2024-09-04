import React from 'react'
import './Home.css'
import SideBar from '../../Components/SideBar/SideBar'

function Home({sidebar}) {
  return (
    <div>
      <SideBar sidebar={sidebar}/>
    </div>
  )
}

export default Home