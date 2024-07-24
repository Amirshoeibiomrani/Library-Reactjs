import {books} from '../constants/mockData'
import BookCard from './BookCard'

const Books = (  ) => {
    console.log(books)
  return (
    <div>
    <div className="">
        {books.map((book)=>(
           
           <BookCard key={book.id} data={book} />
        ))}
    </div>
    <div className=""></div>
    </div>
  )
}

export default Books