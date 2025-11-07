
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Homepage from './pages/Homepage'
import 'swiper/css';
import 'swiper/css/navigation'; // if using navigation arrows

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-background'>
      
      <Homepage/>
       
      
      
     
    </div>
  )
}

export default App
