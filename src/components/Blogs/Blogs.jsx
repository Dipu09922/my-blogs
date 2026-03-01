import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
const Blogs = ({handleBookMark,handleMarkAsRead,id}) => {

    const [blogs,setBlogs] = useState([]);

    useEffect(() =>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    
    return (
        <div>
            
            <h1 className='text-3xl'> Total Blog : {blogs.length}</h1>
             
            <div className='grid grid-cols-2'>
              {
                blogs.map(blog=> <Blog handleBookMark={handleBookMark} handleMarkAsRead={handleMarkAsRead} blog={blog} key={blog.id}></Blog>)
              }
            </div>
        </div>
    );
};

export default Blogs;