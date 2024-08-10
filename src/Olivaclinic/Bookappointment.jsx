import React from 'react'
import '../App.css'

const Bookappointment = () => {
  return (
    <>
    <div className='container'>
        <div className='row'>

<h1 className='text-center book'>Book Appointment</h1>
<p className='text-center book' >Please fill the form below and expedite your consultation process.</p><br/>


<div className='col-sm-6'>
    <img src='https://www.olivaclinic.com/wp-content/banner/book-appointment/book-appointment-doctor.png' className='app'/>
</div>
        <div className='col-sm-6'>
            <h3>I'M INTERESTED IN</h3>
            <select className='selectt w-100'>
                    <option>Select Service</option>
                     Unwanted Hair
                    <option>Permanent Laser Hair Removal</option>
                    Skin
                    <option>Pimple Treatment</option>
                    <option>Acne Scar Treatment</option>
                    <option>Skin Whitening</option>
                    <option>Stretch Marks Treatment</option>
                    <option>tattoo Removal Treatment</option>
                    <option>Dull Skin Treatment</option>
                    <option>Anti Aging</option>
                    Hair
                    <option>Hair Loss Treatment</option>
                    <option>Hair Transplantation</option>  
                    Weight Loss
                  <option>Fat Loss/Inch Loss</option>
                  <option>Body Contouriong</option>
                  <option>Weight Loss Treatment</option>
                
                  <option>Other</option>
                    </select>
                    <h3>ABOUT YOU</h3>
                  <input class="form-control mx-5 me-2 " type="search" placeholder="Your Name*" className='selec' aria-label="Search"/><br/>
                  <input class="form-control mx-5 me-2 " type="search" placeholder="Email*" className='selec' aria-label="Search"/><br/>
                  <input class="form-control mx-5 me-2 " type="search" placeholder="Valid Mobile Number*" className='selec' aria-label="Search"/><br/>

              
                  <select className='selec w-100'>
                    <option>Select City</option>
                    <option>Ahmedabad</option>
                    <option>Bangalore</option>
                    <option>Chennai</option>
                    <option>Hyderabad</option>
                    <option>Kochi</option>
                    <option>Kolkata</option>
                    <option>Pune</option>
                    <option>Vizag</option>
                    <option>Delhi</option>
                    <option>Others</option>
                  </select>
   <p> <input type='radio'/> I agree to the Terms & ConditionsI agree to the <span className='span'>Terms & Conditions</span></p>
    <button type="button" class="btn w-75  c" id='butn'>send</button>

        </div>
        
        
        
        </div>



    </div>
    
    
    </>
  )
}

export default Bookappointment