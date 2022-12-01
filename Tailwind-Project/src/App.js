import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Analytics from './components/Analytics';
import Newsletter from './components/Newsletter';
import Cards from './components/Cards';
import Footer from './components/Fotter';
import PuffLoader from "react-spinners/PuffLoader"
import {useState, useEffect} from 'react'

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
      <div className='loading bg-black h-screen w-full justify-center items-center flex'>
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
      <Navbar/>
      <Hero/>
      <Analytics/>
      <Newsletter/>
      <Cards/>
      <Footer/>

      </>
        )
        }
    </>
  );
}

export default App;
