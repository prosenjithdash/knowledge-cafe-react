import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {

    // Hold blogs data with state
    const [blogs, setBlogs] = useState([]);

    // Load the all blogs from blogs.json file
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div>
            <p>Blogs: {blogs.length}</p>
            
            {/* Map all blogs data */}
            <div>
                {
                    blogs.map((blog) => <Blog
                        key={blog.id}
                        blog={blog}
                    ></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;