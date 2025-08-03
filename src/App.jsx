
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
    console.log(blog)
    const newBookmark = [...bookmarks,blog]
    setBookmarks(newBookmark)
  }

  return (
    <>
      <Header />
      <div className='md:flex gap-1 md:max-w-6xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark} />
        <BookMarks bookmarks={bookmarks} />
      </div>
     
    </>
  )
}

export default App
