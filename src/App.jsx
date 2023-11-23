import { Route,Routes,Link } from "react-router-dom"
import Home from "./pages/Home"
import BookList from "./pages/BookList"

function App() {

  return (
    <>
      <nav>
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/book-list'}>book list</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/book-list" element={<BookList />} />
        <Route path="/book-list/:id" element={ <h1>id</h1> }/>
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App
