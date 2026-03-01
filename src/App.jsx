import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [bookMarked,setBookMarked] =useState([]);
  const [readingCount,setReadingCount] = useState(0);

  const handleBookMark=(blog)=>
  {
    setBookMarked([...bookMarked,blog]);
  }

  const handleMarkAsRead=(time,id)=>
  {
    setReadingCount(readingCount+time);
    removeFromBookMark(id);
  }

  const removeFromBookMark=(id)=>
  {
    const remainingBookMark =bookMarked.filter((mark)=>mark.id!=id)
    setBookMarked(remainingBookMark);
  }
  // console.log(bookMarked)
  return (
    <>
     <Navbar></Navbar>
     <div className="main-container flex text-center">
      <div className='left-container w-[70%]'>
         <Blogs handleBookMark={handleBookMark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        </div>
      <div className='right-container w-[30%] text-center'>
        <h1>Readig Time : {readingCount}</h1>
        <h1>Bookedmarked Count : {bookMarked.length}</h1>
        {
         bookMarked.map((marked)=><p key={marked.id} className='bg-red-600 mb-2 text-white'>{marked.title}</p>)
        }
        </div>
     </div>
    </>
  )
}

export default App
