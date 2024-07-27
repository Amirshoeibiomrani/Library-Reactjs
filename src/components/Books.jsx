import { useState } from 'react'
import {books as bookData} from '../constants/mockData'
import BookCard from './BookCard'
import SideCard from './SideCard'
import SearchBox from './SearchBox'

const Books = () => { 
  const [liked,setLiked]=useState([])
  const [search,setSearch]=useState([])
const [books,setBooks]=useState(bookData)
  const handleLikedList=(book,state)=>{
    // console.log({book,status})
    if(status){
      const newLikedList=liked.filter((i)=>i.id !== book.id)
      setLiked(newLikedList)
    }else{
      setLiked((liked)=>[...liked,book])
    }
  }
    console.log(books)

    const searchHandler=()=>{
      if(search){
        const newBooks=bookData.filter(book=>book.title.toLowerCase().includes(search))
        setBooks(newBooks)
      }else{
        setBooks(bookData)
      }
    }
  return (
    <>
    <SearchBox search={search} setSearch={setSearch} searchHandler={searchHandler} />
    <div className='flex'>
    <div className="flex min-h-screen ">
        {books.map((book)=>(
          
          <BookCard key={book.id} data={book} handleLikedList={handleLikedList} />
          
        ))}
    </div>
      {/* conditional rendering */}  

      {!!liked.length && (
        <div className='h-fit p-4 bg-[#6552f4] rounded-lg ml-5 flex-1' >
          <h4 className='text-lg'>Favorites</h4>
        {liked.map((book)=>(
          <SideCard key={book.id} data={book} />
        ))}
      </div>)}
    
    </div>
        </>
  )
}

export default Books