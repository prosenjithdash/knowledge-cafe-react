import React from 'react';

const Bookmark = ({blog}) => {
    return (
        <div className='bg-white rounded-lg p-4 m-2'>
            <p>{blog.title }</p>
        </div>
    );
};

export default Bookmark;