import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [bookMarked,setBookMarked] =useState([]);

  const handleBookMark=(blog)=>
  {
    setBookMarked([...bookMarked,blog]);
  }
  console.log(bookMarked)
  return (
    <>
     <Navbar></Navbar>
     <div className="main-container flex text-center">
      <div className='left-container w-[70%]'>
         <Blogs handleBookMark={handleBookMark}></Blogs>
        </div>
      <div className='right-container w-[30%] text-center'>
        <h1>Readig Time : 0</h1>
        <h1>Bookedmarked Count : 0</h1>
        {
         bookMarked.map((marked)=><p>{marked.title}</p>)
        }
        </div>
     </div>
    </>
  )
}

export default App
