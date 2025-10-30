
import './App.css'
import Book from './book'
import '../index.css'
function App() {
  return (
    <>
    <div className='book-container'>
        <Book image="image" title="title" publisher="publisher" />
        <Book image="image" title="title" publisher="publisher" />
        <Book image="image" title="title" publisher="publisher" />
        <Book image="image" title="title" publisher="publisher" />
    </div>
    </>
  )
}

export default App
