import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({ handleAddToBookmark, handleTotalReadTime }) => {

    // Hold blogs data with state
    const [blogs, setBlogs] = useState([]);

    // Load the all blogs from blogs.json file
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className='md:w-2/3'>
            <p>Blogs: {blogs.length}</p>
            
            {/* Map all blogs data */}
            <div>
                {
                    blogs.map((blog) => <Blog
                        key={blog.id}
                        blog={blog}
                        handleAddToBookmark={handleAddToBookmark}
                        handleTotalReadTime={handleTotalReadTime}
                    ></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;