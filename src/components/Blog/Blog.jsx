import React from 'react';

const Blog = ({ blog }) => {
    const { id,cover,title,author_img,author,posted_date,reading_time,hashtags} = blog;



    return (
        <div>
            <img className='w-[845px] h-[450px] pb-4 rounded-xl' src={cover} alt="" />

            {/* Div 01 */}
            <div className='md:flex md:justify-between items-center pb-4'>
                <div className='md:flex gap-4 '>
                    {/* Author Image */}
                    <div className='w-[60px] h-[60px]'>
                        <img src={author_img} alt="" />
                    </div>
                    {/* Author Name & date */}
                    <div>
                        <h5 className='font-bold text-[24px]'>{author}</h5>
                        <small className='text-[16px] text-[#111111]'>{posted_date}</small>
                    </div>
                </div>

                <div className='md:flex gap-2 items-center'>
                    {/* Reading Time */}
                    <p className='text-[20px]'>{reading_time}</p>

                    {/* Bookmark Logo */}
                    <div>
                        <h2>Logo</h2>
                    </div>
                </div>
            </div>

            {/* Div 02 */}
            <div>
                <h2 className='text-[40px] font-bold pb-4'>{title}</h2>
            </div>

            {/* Div 03 */}
            <div className='pb-4'>
                {/* Hashtag */}
                <div className='md:flex gap-2 '>
                    {
                        hashtags.map((hashtag,idx) => <span key={idx}><a href='' ># {hashtag}</a></span> )
                    }
                </div>
            </div>

            {/* Div 04 */}
            <div className='pb-4'>
                {/* Mark as read */}
                <p className='text-blue-600 font-bold'><ul>Mark as read</ul></p>
            </div>
            


           

        </div>
    );
};

export default Blog;