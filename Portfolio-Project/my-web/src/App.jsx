import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Experience from './components/Experience/Exp'
//import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contacts/Contact'
import Footer from './components/Footer/Footer'
//import Loader from './components/Spinner/Loader'
//import Testi from './components/Testimonials/Testi'
import PuffLoader from "react-spinners/PuffLoader"
import {useState, useEffect} from 'react'
import './index.css'


function App() { 
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 3000);

  },[]);

  return (
    <>
        {
          
          loading ? (
          <div className='loading'>
          <PuffLoader
          color={'white'}
          loading={loading}
          size={80}
          />
         </div>
        )
        :
        (
<>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Portfolio/>

      <Contact/>
      <Footer/>
</>
        )
        }
    </>
  );
}

export default App