
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/Header/Header'

function App() {

  // State for bookmarks
  const [bookmarks, setBookmarks] = useState([]);

  // handle for bookmarks
  const handleAddToBookmark = (blog) => {
    // console.log(blog)
    const newBookmark = [...bookmarks,blog]
    setBookmarks(newBookmark)
  }


  // Read total time state
  const [totalReadTime, setTotalReadTime] = useState(0)

  // handleRead time
  const handleTotalReadTime = (id,readTime) => {
    // console.log('Read time is: ', readTime)
    const newReadTime = totalReadTime + readTime;
    setTotalReadTime(newReadTime)

    // Remove bookmarks
    // console.log('Remove id:', id)
    const remainingBookmark = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookmark);
  }

  return (
    <>
      <Header />
      <div className='md:flex gap-1 md:max-w-6xl mx-auto'>
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleTotalReadTime={handleTotalReadTime}
        />
        <BookMarks
          bookmarks={bookmarks}
          totalReadTime={totalReadTime}
        />
      </div>
     
    </>
  )
}

export default App
