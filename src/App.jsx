import './App.scss'
import Layout from './Components/Layout/Layout'
import Logo from './Components/atoms/Logo'
import Header from './Components/molecules/Header/Header'
import { Route, Routes } from "react-router-dom"
import Login from './Components/organ/Login/Login'
import MainPage from './Components/organ/MainPage'
function App() {

  return (
    <>
       <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Login/>} />
            <Route path="/main" element={<MainPage/>} />
          </Route>
          
        </Routes>
    </>
  )
}

{/* <Routes>
<Route path="/" element={<ClientLayout />}>
  <Route path="/login" element={<Login/>} />
  <Route path="/register" element={<Register/>} />
  <Route path="/" element={<Home/>}>
  <Route path="/" element={<PasswordGenerator/>} />
    <Route path="/password-generator" element={<PasswordGenerator/>} />
    <Route path="/currency" element={<Currency/>} />
    <Route path="/blog" element={<Blog/>} />
    <Route path="/todo" element={<Todo/>} />
    <Route path="/todo/:item" element={<TodoItem/>} />
    <Route path="/counter" element={<Counter/>} />
    <Route path="/store" element={<Store/>} />
    <Route path="*" element={<Error/>} />
  </Route>
  <Route path="/about" element={<About/>} />
  <Route path="/contact" element={<Contact/>} />
</Route>
<Route path="/admin" element={<AdminLayout/> }>
  <Route index element={<Profile/>}/>
</Route>
<Route path="*" element={<Error/>} />
</Routes> */}

export default App
