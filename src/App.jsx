import Home from "./Home"
import { Routes, Route } from 'react-router-dom'
import { About } from './About'
import { Services } from "./Services"
import { ContactUs } from "./ContactUs"
function App() {
  return (
    <>
    
    <Routes>
     <Route path='/' element= {<Home />} />
     <Route path='services' element= {<Services />}/>
     <Route path='about' element= {<About />}/>
     <Route path='contactus' element= {<ContactUs />}/>
    </Routes>

    </>
  )
}

export default App
