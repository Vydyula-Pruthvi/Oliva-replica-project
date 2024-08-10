import React from 'react'
import Header from './Olivaclinic/Header'
import Bookappointment from './Olivaclinic/Bookappointment'
import AboutOlivia from './Olivaclinic/AboutOlivia'
import BuyProducts from './Olivaclinic/BuyProducts'
import Body from './Olivaclinic/Body'
import Footer from './Olivaclinic/Footer'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';

const App = () => {
  return (
    <>
    <Router>
      <Header/>
<Routes>
<Route path='/' element={<Body/>}></Route>
<Route path='/Bookappointment' element={<Bookappointment/>}></Route>
<Route path='/AboutOlivia' element={<AboutOlivia/>}></Route>
<Route path='/BuyProducts' element={<BuyProducts/>}></Route>

</Routes>
<Footer/>
</Router>
  

    
    </>
  )
}

export default App