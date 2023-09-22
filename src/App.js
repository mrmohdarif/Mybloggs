import logo from './logo.svg';
import './App.css';
import Post from './post/Post';
import Header from './header/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './loginregister/Login';
import Register from './loginregister/Register';
import Layout from './Layout'
import Indexpage from './pages/Indexpage';
import CreatePost from './pages/CreatePost';
import Fullpostpage from './pages/Fullpostpage';
import EditPost from './pages/EditPost';
function App() {
  return (
   
 <BrowserRouter>
<Layout/>
      <Routes>
        {/* <Route path='/' element={}/> */}
        
        <Route index element={<main><Header/><Indexpage/></main>}/> 
        <Route path='/login' element={<main><Header/><Login/></main>}/>
        <Route path='/register' element={<main><Header/><Register/></main>}/>
        <Route path='/create' element={<main><Header/>< CreatePost/></main>}/>
        <Route path='/post/:id' element={<main><Header/><Fullpostpage/></main>}/>
        <Route path='/edit/:id' element={<main><Header/><EditPost/></main>}/>
      </Routes>
    </BrowserRouter>  
  );
}
export default App;
