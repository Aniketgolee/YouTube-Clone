/* eslint-disable no-unused-vars */
import { useState } from "react"
import Sidebar from "../../Components/Sidebar/Sidebar"
import "./Home.css"
import Feed from "c:/Users/Dell/Desktop/YouTube-Clone/vite-project/src/Components/Feed/feed"

// eslint-disable-next-line react/prop-types
function Home({sidebar}) {
  const [category, setCategory]= useState(0);
  return (
    <>
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory}/>
      <div className={`container ${sidebar?"":'large-container'}`}>
        <Feed category={category}/>
      </div>
    </>
  )
}

export default Home
