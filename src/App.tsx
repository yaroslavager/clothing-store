import { useState } from 'react'

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import "./app/variables.scss"
import Header from './widgets/header/header';
import AnnouncementBar from './widgets/announcementBar/announcementBar'


function App() {
 
  return (
    <>
    <AnnouncementBar/>
     <Header />

    </>
  )
}

export default App
