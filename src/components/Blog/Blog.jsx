import React from 'react';

const Blog = ({ blog }) => {
    const { title } = blog;
    return (
        <div>
            <p>Title:{title}</p>
        </div>
    );
};

export default Blog;