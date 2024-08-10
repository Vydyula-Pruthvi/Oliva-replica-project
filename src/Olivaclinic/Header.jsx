import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
   <>
   <div className='container-fluid'>
    <div className='row' id='bg'>
    <div className='col-sm-10'>
        <p className='left my-1'>English</p>
    </div>
    <div className='col-sm-2 prod'>
      <div className='prodct'>
<Link to="/BuyProducts">

   <h6 className='pro'> <img src='https://www.olivaclinic.com/wp-content/themes/oliva/images/new.gif' className='imgg'/>
    <i class="fa-solid fa-cart-shopping"></i > Buy Products</h6>
   </Link> </div></div></div>
</div> 
 <div className='container'>
  <div className='row m-4'>
    <div className='col-sm-6'>
<Link to="/">

      <img src='https://www.olivaclinic.com/wp-content/webp-express/webp-images/uploads/2018/04/logo.png.webp' className='oliva'/>
    </Link></div>
    <div className='col-sm-6 phn'>
    <i class="fa-solid fa-phone"></i>
<h3 className='float-end fw-bolder'> 82978 82978
<p className='cc fw-normal'>Customer Care - 8 AM to 12 AM</p></h3>
</div>
  </div>
</div><hr/> 
 <div className='container-fluid'>
  <div className='row'>
    <div className='col-sm-8'>
<div class="">
   <div class="container">
      <nav class="navbar navbar-expand-lg navbar-dark p-0">
         <button class="navbar-toggler my-2" id="navbarSideCollapse"  type="button" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
         </button>
         <div class="navbar-collapse offcanvas-collapse justify-content-center lh-lg" id="navbarSideCollapse">
            <ul class="navbar-nav p-3 p-md-0">
               <li class="nav-item"><a class="nav-link active text-dark" href="#">Home</a> </li>
               <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle text-dark" href="#" data-bs-toggle="dropdown">About Us</a>
                  <ul class="dropdown-menu rounded-0 border-0 py-0 shadow-sm">
<Link to="/AboutOlivia">

                     <li><a class="dropdown-item text-dark" href="#">About Oliva </a></li></Link>
                     <li><a class="dropdown-item text-dark" href="#">Contact Us </a></li>
                     <li><a class="dropdown-item text-dark" href="#">Our Medical Review Board </a></li>
                     <li><a class="dropdown-item text-dark" href="#">Our Doctors</a></li>
                     <li><a class="dropdown-item text-dark" href="#">Our Expert Panel </a></li>
                     <li><a class="dropdown-item text-dark" href="#">Editorial</a></li>
                  </ul>
               </li>
               <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle text-dark" href="#" data-bs-toggle="dropdown"> Conditions </a>
                  <div class="dropdown-menu rounded-0 border-0 shadow-sm p-3">
                  <li><a class="dropdown-item text-dark" href="#"> Acne Vulgaris </a></li>
                  <li><a class="dropdown-item text-dark" href="#"> Acne Star</a></li>
                  <li><a class="dropdown-item text-dark" href="#">Ageing Issues</a></li>
                  <li><a class="dropdown-item text-dark" href="#"> Birth Marks</a></li>
                  <li><a class="dropdown-item text-dark" href="#">Dark Circles</a></li>
                  <li><a class="dropdown-item text-dark" href="#">Hypertrichosis</a></li>
                  <li><a class="dropdown-item text-dark" href="#">Alopecia</a></li>
                  <li><a class="dropdown-item text-dark" href="#">Moles</a></li>
                  <li><a class="dropdown-item text-dark" href="#">Open Pores</a></li>
                  <li><a class="dropdown-item text-dark" href="#">Pigmentation</a></li>
                  <li><a class="dropdown-item text-dark" href="#">Skin Tags</a></li>
                    
                  </div>
               </li>


               <li class="nav-item dropdown">
               <a class="nav-link dropdown-toggle text-dark" href="#" data-bs-toggle="dropdown"> Treatments </a>
                  
                  <div class="dropdown-menu rounded-0 border-0 shadow-sm p-3">
                  <div className='textt'>  Unwanted Hair </div>
                  <li><a class="dropdown-item text-dark" href="#">Laser Hair Removal </a></li>
                  <li><a class="dropdown-item text-dark" href="#">Upper Lip Hair Removal </a></li>
                  <li><a class="dropdown-item text-dark" href="#">Facial Hair Removal </a></li>
                  <li><a class="dropdown-item text-dark" href="#">Underarm Hair Removal </a></li>
                  <li><a class="dropdown-item text-dark" href="#">Bikini Hair Removal </a></li>
                  <li><a class="dropdown-item text-dark" href="#">Leg Hair Removal </a></li>
<div className='textt'>Skin Rejuvenation</div>
                  <li><a class="dropdown-item text-dark" href="#">Skin Lightening Treatment </a></li>
                  <li><a class="dropdown-item text-dark" href="#">Pigmentation Treatment </a></li>
                  <li><a class="dropdown-item text-dark" href="#">Melasma Treatment </a></li> 
                  <li><a class="dropdown-item text-dark" href="#">Dull Skin Treatment </a></li>
                  <li><a class="dropdown-item text-dark" href="#">Dark Circle Treatment </a></li> 
                  <li><a class="dropdown-item text-dark" href="#">Insta Glow Skin Rejuvenation </a></li> 
<div className='textt'>Acne/ Scar </div>
<li><a class="dropdown-item text-dark" href="#">Pimple Treatment </a></li>
<li><a class="dropdown-item text-dark" href="#">Acne Scar Treatment </a></li>
<li><a class="dropdown-item text-dark" href="#">Hair Re-Growth  </a></li>
<li><a class="dropdown-item text-dark" href="#">Hair Loss Treatment </a></li>
<li><a class="dropdown-item text-dark" href="#">PRP Hair Treatment </a></li>
<div className='textt'>Body </div>
<li><a class="dropdown-item text-dark" href="#">Body Contouring Treatment </a></li>
<li><a class="dropdown-item text-dark" href="#">Weight Management Treatment </a></li>
<li><a class="dropdown-item text-dark" href="#">Weight Loss Treatment </a></li> 
<li><a class="dropdown-item text-dark" href="#">Inch Loss Treatment </a></li>
<div className='textt'>Anti-Aging </div>
<li><a class="dropdown-item text-dark" href="#">Botox Treatment </a></li>
<li><a class="dropdown-item text-dark" href="#">HydraGeneo Treatment </a></li>
<li><a class="dropdown-item text-dark" href="#">Profhilo Treatment </a></li>
<li><a class="dropdown-item text-dark" href="#">HydraGeneo Treatment </a></li>
<li><a class="dropdown-item text-dark" href="#">Dermal Fillers Treatment </a></li>
<li><a class="dropdown-item text-dark" href="#">Skin Tightening </a></li>
<li><a class="dropdown-item text-dark" href="#">Anti-Ageing Treatments </a></li>
<div className='textt'>More </div>
<li><a class="dropdown-item text-dark" href="#">Tattoo Removal Treatment </a></li>
<li><a class="dropdown-item text-dark" href="#">Stretch Marks Removal Treatment </a></li>
<li><a class="dropdown-item text-dark" href="#">Moles Removal </a></li>
<li><a class="dropdown-item text-dark" href="#">Warts Removal </a></li>
<li><a class="dropdown-item text-dark" href="#">Skin Tag Removal </a></li>
                    
                  </div>
               </li>

              
               <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle text-dark" href="#" data-bs-toggle="dropdown">Gallery</a>
                  <ul class="dropdown-menu rounded-0 border-0 py-0 shadow-sm">
                     <li><a class="dropdown-item text-dark" href="#">About Us </a></li>
                     <li>
                        <a class="dropdown-item text-dark" href="#"> Dropdown Content<strong class="float-end">&raquo;</strong> </a>
                        <div class="submenu dropdown-menu mega-submenu rounded-0 border-0 p-3 shadow-sm">
                           <span>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                           </span>
                        </div>
                     </li>
                     <li><a class="dropdown-item" href="#">Login </a></li>
                  </ul>
               </li>
               <li class="nav-item"> <a class="nav-link active text-dark" href="#">Blog</a> </li>

               <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle text-dark" href="#" data-bs-toggle="dropdown">Pages </a>
                  <ul class="dropdown-menu rounded-0 border-0 py-0 shadow-sm">
                     <li><a class="dropdown-item text-dark" href="#">About Us </a></li>
                     <li>
                        <a class="dropdown-item text-dark" href="#"> About Acne<strong class="float-end">&raquo;</strong> </a>
                        <div class="submenu dropdown-menu mega-submenu rounded-0 border-0 p-3 shadow-sm">
                           <span>
                           Lorem ipsum dolor sit amet. 
                           </span>
                        </div>
                     </li>
                     <li><a class="dropdown-item" href="#">Login </a></li>
                  </ul>
               </li>
            </ul>
         </div>
      </nav>
   </div>
</div>

    </div>
    
    <div className='col-sm-4'>
<div className='calndr'>  
<Link to="/Bookappointment">

     <i class="fa-solid fa-calendar-days"></i> 
    <button type="button" class="btn" id='btnn'>Book Appointment</button>
    </Link>
    </div></div>
  </div>
</div>

  
</>
  )

}

export default Header