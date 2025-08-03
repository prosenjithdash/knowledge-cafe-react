import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const BookMarks = ({ bookmarks, totalReadTime }) => {
    return (
        <div className='md:w-1/3'>
            {/* TIME */}
            <div className='bg-blue-100 border-2 border-blue-700 rounded-xl m-6  p-2'>
                <h2 className='text-[24px] text-blue-700 front-bold'>Spent time on read : {totalReadTime} min</h2>

            </div>

            {/* Single bookmarked blog */}
            <div className=' bg-gray-100 rounded-xl m-6  p-2'>
                <h1 className='text-[24px] front-bold mt-7 pl-2'>Bookmarked Blogs : {bookmarks.length}</h1>
                {/* Map all bookmarks */}

                <div>
                    {
                        bookmarks.map((blog, idx) => <Bookmark
                            key={idx}
                            blog={blog}
                        >

                        </Bookmark>)
                    }
                </div>
            </div>
        </div>
        
    );
};

export default BookMarks;