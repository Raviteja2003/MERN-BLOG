import Navbar from "./Navbar"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Register from './Register';
import Login from './Login';
import CreatePost from './CreatePost';
import Home from './Home';
import Post from './Post';
import EditPost from './EditPost';



function App() {
  

  return (
    
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/create" element={<CreatePost />}></Route>
        <Route path="/post/:id" element={<Post />}></Route>
        <Route path="/edit/:id" element={<EditPost />}></Route>
      </Routes>
      </BrowserRouter>
    
  )
}

export default App
