
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'


const App = () => {
  
  const [sidebar, setSideBar] = useState(true);

  // function handleSideBar(){
  //     setSideBar(prev => prev == false? true: false)
  // }

  return (
    <div>
        <Navbar setSideBar={setSideBar}/>
        <Routes>
          <Route path='/' element={<Home sidebar={sidebar} />} />
          <Route path='/video/:categoryId/:videoId' element={<Video/>} />
        </Routes>
    </div>
  )
}

export default App