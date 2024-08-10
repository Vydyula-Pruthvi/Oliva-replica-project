import React from 'react'
import '../App.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Body = () => {
  return (
    <>
   
    <div className='container-fluid'>
   <div className='row mt-2' id='up'>
   <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="5000">
      <img src="https://www.olivaclinic.com/wp-content/banner/home/desktop/offer.jpg?var=1" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item"  data-bs-interval="5000">
      <img src="https://www.olivaclinic.com/wp-content/banner/home/desktop/laser-hair-removal.jpg?var=1" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item"  data-bs-interval="5000">
      <img src="https://www.olivaclinic.com/wp-content/banner/home/desktop/hair-loss.jpg?var=1" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item"  data-bs-interval="5000">
      <img src="https://www.olivaclinic.com/wp-content/banner/home/desktop/acne.jpg?var=1" class="d-block w-100" alt="..."/>
    </div> <div class="carousel-item"  data-bs-interval="5000">
      <img src="https://www.olivaclinic.com/wp-content/banner/home/desktop/acne-scar.jpg?var=1" class="d-block w-100" alt="..."/>
    </div> <div class="carousel-item"  data-bs-interval="5000">
      <img src="https://www.olivaclinic.com/wp-content/banner/home/desktop/skin-lightening.jpg?var=1" class="d-block w-100" alt="..."/>
    </div> <div class="carousel-item"  data-bs-interval="5000">
      <img src="https://www.olivaclinic.com/wp-content/banner/home/desktop/pigmentation-treatment.jpg?var=1" class="d-block w-100" alt="..."/>
    </div> <div class="carousel-item"  data-bs-interval="5000">
      <img src="https://www.olivaclinic.com/wp-content/banner/home/desktop/igsr.jpg?var=1" class="d-block w-100" alt="..."/>
    </div> <div class="carousel-item"  data-bs-interval="5000">
      <img src="https://www.olivaclinic.com/wp-content/banner/home/desktop/inch-loss.jpg?var=1" class="d-block w-100" alt="..."/>
    </div> <div class="carousel-item"  data-bs-interval="5000">
      <img src="https://www.olivaclinic.com/wp-content/banner/home/desktop/anti-aging.jpg?var=1" class="d-block w-100" alt="..."/>
    </div> <div class="carousel-item"  data-bs-interval="5000">
      <img src="https://www.olivaclinic.com/wp-content/banner/home/desktop/hifu-treatment.jpg?var=1" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item"  data-bs-interval="5000">
      <img src="https://www.olivaclinic.com/wp-content/banner/home/desktop/tattoo-removal.jpg?var=1" class="d-block w-100" alt="..."/>
    </div>

  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" id='prev' aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
   </div>
</div>
<br/> 
 <div className='container-fluid'>
  <div className='row' id='to'>
    <div className='col-sm-1' id='clck'>
    
    <i class="fa-solid fa-clock-rotate-left text-light fw-bolder mb-2"></i></div>
    <div className='col-sm-1' id='talk'>

<p className='fw-bolder text-light clck'>Talk to Our Experts</p>
</div>  
<div className='col-sm-2' id='talk'>

                  <input class="form-control  " type="search" placeholder="Full Name*" className='id' aria-label="Search"/><br/>
                 </div>
                 <div className='col-sm-2' id='talk'>
                  <input class="form-control " type="search" placeholder="Valid Mobile Number*" className='id' aria-label="Search"/><br/>
                </div>  

    <div className='col-sm-2 id ' id='talk'>
      
              
                  <select className='select w-100 '>
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
                  </select></div>
    <div className='col-sm-2 id' id='talk'>

                  <select className='select w-100'>
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
                    </select></div>
         
    <div className='col-sm-2' >
    <button type="button" class="btn  " id='reqq'>Request a Call Back</button>
                                   
</div></div>
</div>


<div className='container'>
  <div className='row'>
<div className='col-sm-6'>
  <h3 className='tri fw-bolder mt-3'>Best Dermatologists & Trichologists in Your City</h3>
<p className='fs-5'>Leading Chain Of Skin And Hair Clinics in India</p>
<p>We are a chain of leading medico-aesthetic clinics, revolutionising the concept of aesthetic dermatology. Our expert Dermatologists and Trichologists are rigorously trained to give real results for all your skin and hair concerns.</p>

<p>✓ 100+ Expert Dermatologists and Trichologists</p>

<p>✓ Robust presence with over 31 state-of-the-art clinics</p>

<p>✓ Most trusted clinics with strong ethical values</p>

<p>✓ World-class medical treatments with clinical expertise</p>

<p>✓ Awarded No. 1 clinic in India by Times of India</p>

  </div>
<div className='col-sm-6'>
<img src='https://www.olivaclinic.com/wp-content/webp-express/webp-images/uploads/2018/10/doctor.jpg.webp' className='mx-5 hd'/>
</div>
</div></div>


<div className='container-fluid'>
  <div className='row'>
   
   <h3 className='text-center'>Our Skin & Hair Care Services</h3>
   <div className='col-sm-2 text-center'>
 <img src='https://www.olivaclinic.com/wp-content/webp-express/webp-images/uploads/2018/09/laser-hair-removal1-1.jpg.webp' className='imgs w-75'/>
 <p className=''>Laser Hair Removal</p>
   </div> 
   <div className='col-sm-2 text-center'>
    <img src='https://www.olivaclinic.com/wp-content/webp-express/webp-images/uploads/2018/07/acne.jpg.webp' className='imgs w-75'/>
    <p>Pimples Treatment</p>
   </div> <div className='col-sm-2 text-center'>
    <img src='https://www.olivaclinic.com/wp-content/webp-express/webp-images/uploads/2018/07/acne-scar.jpg.webp' className='imgs w-75'/>
    <p>Acne Scar Treatment
    </p>
   </div> <div className='col-sm-2 text-center'>
    <img src='https://www.olivaclinic.com/wp-content/webp-express/webp-images/uploads/2020/02/hair-loss.jpg.webp' className='imgs w-75'/>
    <p>Hair loss treatment</p>
   </div> <div className='col-sm-2 text-center'>
    <img src='https://www.olivaclinic.com/wp-content/webp-express/webp-images/uploads/2018/09/skin-lightening-treatment.jpg.webp' className='imgs w-75'/>
    <p>Skin Lightening Treatment</p>
   </div>
   <div className='col-sm-2 text-center'>
    <div className='bordernew'>
    <div className='neww fs-4 fw-bolder' id='home'>More <br/>Services</div>
</div>     <p className='more '>More</p>
   </div>
    </div>
  </div>
  <div className='container-fluid'>
    <div className='row why'>
      <h2 className='text-center text-light mt-5 fw-bold oli'>WHY OLIVA</h2>
      <div className='col-sm-3 '>
        <div className='doc '>
      <i class="fa-solid fa-user-doctor mt-5"></i>
      <p className='text-light mt-2'>LARGEST TEAM<br/> OF CERTIFIED<br/>DERMOTOLOGIST</p>
      </div>
      </div>
      <div className='col-sm-3'>
      <div className='doc '>

        <img src='https://www.olivaclinic.com/wp-content/webp-express/webp-images/uploads/2018/05/icon-2-1.png.webp' className='mt-5'/>
        <p className='text-light mt-2'>US-FDA<br/> APPROVED <br/>EQUIPMENTS</p>
</div>      </div>
      <div className='col-sm-3'>
      <div className='doc '>
        
        <img src='https://www.olivaclinic.com/wp-content/webp-express/webp-images/uploads/2018/05/icon-3-1.png.webp' className='mt-5'/>
        <p className='text-light mt-2'>HIGHLY <br/>STANDARDISED<br/> PROTOCALS</p>
      </div></div>
      <div className='col-sm-3'>
      <div className='doc '>
      
        <img src='https://www.olivaclinic.com/wp-content/webp-express/webp-images/uploads/2018/05/icon-4-1.png.webp' className='mt-5'/>
        <p className='text-light mt-2'>6 LAKH +<br/>   HAPPY<br/>CLIENTS</p>
      </div></div>
    </div>
  </div>
   <div className='container'>
    <div className='row' id='award'>
      <h2 className=' text-center fw-bold mt-3'>AWARDS AND RECOGNITIONS</h2>
      <div className='col-sm-2 magrn'>
        <img src='https://www.olivaclinic.com/wp-content/webp-express/webp-images/uploads/2018/05/pic-1.png.webp' className=''/>
        <p className='clr'>TIMES OF INDIA</p>
      </div>
      <div className='col-sm-2 magrn'>
        <img src='https://www.olivaclinic.com/wp-content/webp-express/webp-images/uploads/2018/05/pic-3.png.webp'/>
        <p className='clr'>ET NOW</p>
      </div>  <div className='col-sm-2 magrn'>
        <img src='https://www.olivaclinic.com/wp-content/webp-express/webp-images/uploads/2018/05/pic-2.png.webp'/>
        <p className='clr'>FRANCHIES INDIA</p>
      </div>  <div className='col-sm-2 magrn'>
        <img src='https://www.olivaclinic.com/wp-content/webp-express/webp-images/uploads/2018/05/pic-4.png.webp'/>
        <p className='clr'>CMO ASIA</p>
      </div>  <div className='col-sm-2 magrn'>
        <img src='https://www.olivaclinic.com/wp-content/webp-express/webp-images/uploads/2018/05/pic-5.png.webp'/>
        <p className='clr'>PRIME TIME</p>
      </div>
    </div>
  </div><hr className='w-75 mx-auto ato'/> 
  <div className='container clientt'>
    <div className='row mt-5'>
      <div className='col-sm-10'>
      <h2 className='fw-bold'>Our 91% client satisfaction rate is unparalleled in our field.</h2>
       <p className='fs-5'> Read below what our clients have to say and learn more about what makes us the premier provider of skin and hair care services.</p>
      </div>
      <div className='col-sm-2'>

    <button type="button" class="btn w-100" id='butn'>Write a Review</button>
</div>
    </div>
  </div> 

  <div className='container-fluid'>
    <div className='row client'>
      
<h2 className='text-center fw-bold mt-5'>CLIENT REVIEWS</h2>
<p className='text-center'>Read below what our esteemed clients have to say about us and what makes us the premier provider of skin and hair care services.</p>
    

  <OwlCarousel className='owl-theme' loop margin={20} nav>
    <div class='item bordr'>
    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
    <p className='fs-4 awe'>Awesome</p> 
    <p>Exceptional Experience at OLIVA Skin Institute:A Five-Star Review</p>
    <div className='col'>
    <img src='https://lh3.googleusercontent.com/a/ACg8ocLBUIdwHxpQbr9oUCwxrkoDi_HvB9cFtl0d0hFC3LFDY6A2knWd=s50' className='pic'/>
    </div>
    <p>Reviewed Us for Pigmentation Treatment</p>
   <p className='fs-5'>Mohammad Mujahid</p> </div>
   
    <div class='item bordr'>
    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
        
        <p className='fs-4 awe'>Good</p>
        <p>It was an excellent experience. Must Visit.Great staf </p>
        <div className='col'>
        <img src='https://lh3.googleusercontent.com/a/ACg8ocLJnZpoyyJGIQISQ2wwrHxnOiNSHJH4yNwtoda14MaUIbQAGw=s50-mo' className='pic'/>
        </div>
        <p>Reviewed us for : Pigmentation Treatment in Kochi</p>
    <p className='fs-5'>dhaliya ismail</p>
    </div>
    <div class='item bordr'>
    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
    <p className='fs-4 awe'>Amazing</p>
        <p>I Was attended by Tanya and its Good </p>
        <div className='col'>
        <img src='https://lh3.googleusercontent.com/a/ACg8ocKqopEBvGe4V9CwoVWY1urapMWwpdRPUyBNSVP38JutF7onsw=s50-mo' className='pic'/>
        </div>
        <p>Reviewed us for : Laser Hair Removal</p>
    <p className='fs-5'>Sakshi Dubey</p>
        
    </div>
    <div class='item bordr'>
    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
        <p className='fs-4 awe'>Great Results</p> 
          <p>Must Visit.Great stafs, good doctors </p>
        <div className='col'>
        <img src='https://lh3.googleusercontent.com/a/ACg8ocL6iCJiHlgw4yPOEoKsm7_lLZJMahm0Bh__BQGZxqq7WSctog=s50-mo' className='pic'/>
        </div>
        <p>Reviewed us for :Acne Treatment</p>
    <p className='fs-5'>Shilpa Kamboj</p>
        
    </div>
    <div class='item bordr'>
        
    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
    <p className='fs-4 awe'>Very Good Experience</p>
      <p>Im Totally satisfied</p>
    <div className='col'>
    <img src='https://lh3.googleusercontent.com/a/ACg8ocIMkRfPJDIMmt0zC4ICNCZFEVGCB5NWA6LiiScAnZPk0Ne32Do1=s50' className='pic'/>
    </div>
    <p>Reviewed us for : Pimple Treatment</p>
    <p className='fs-5'>Anu Alphonsa</p>
    </div>
    <div class='item bordr'>
    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
    <p className='fs-4 awe'>AWesome</p>
    <p>DOn't Have Words to describe</p>
    <div className='col'>
   <img src='https://lh3.googleusercontent.com/a/ACg8ocKR2Cgr6aibCO7w3y8ivDFlOn1yFZk7dyO5IJSiXDnpgng=s50' className='pic'/>
   </div>
   <p>Reviewed us for : Laser Hair Removal</p>
    <p className='fs-5'>Ramya</p>
    </div>
    <div class='item bordr'>
    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
    <p className='fs-4 awe'>Promised Results</p>
    <p> Good Experience </p>
    <div className='col'>
   <img src='https://lh3.googleusercontent.com/a/ACg8ocLoQjkOhp7OKGibiXhqzJwWNdtBI1p9o6EC31ssaNir=s50-mo' className='pic'/>
   </div>
   <p>Reviewed us for : Hairfall Treatment</p>
    <p className='fs-5'>Aayush Sharma</p>    </div>

    <div class='item bordr'>
    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
    <p className='fs-4 awe'>Treatment was Good</p>
    <p>AWesome , DOn't Have Words to describe</p>
    <div className='col-sm-6 col  d-flex'>
      
      <div className='col-sm-6'>
  <img src='https://lh3.googleusercontent.com/a/ACg8ocJgjsQVEyR-xniV0v6bDL5dMJ9wkPAq0OnvSuLNG2720Ys=s50' className='pic'/>
  </div>
  <div className='col-sm-3'>
  <p>Reviewed us for : Pigmentation Treatment </p>
    <p className='fs-5'>Nisha</p>
    </div></div></div>
    
    <div class='item bordr'>
    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
<p className='fs-4 awe'>Good</p><p> Great Doctors</p>
<div className='col'>
<img src='https://lh3.googleusercontent.com/a/ACg8ocIMkRfPJDIMmt0zC4ICNCZFEVGCB5NWA6LiiScAnZPk0Ne32Do1=s50' className='pic'/>
</div>
<p>Reviewed us for : Skin Lightening Treatment</p>
    <p className='fs-5'>Shivik Mishra</p>
  
    </div>
    
    <div class='item bordr'>
    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
    <p className='fs-4 awe'>Awesome , </p><p>DOn't Have Words to describe</p>
    <div className='col'>
    <img src='https://lh3.googleusercontent.com/a/ACg8ocKR2Cgr6aibCO7w3y8ivDFlOn1yFZk7dyO5IJSiXDnpgng=s50' className='pic'/>
    </div>
    <p>Reviewed us for : Laser Hair Removal</p>
    <p className='fs-5'>Ramya</p>
    </div>
    <div class='item bordr'>
    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
    <p className='fs-4 awe'>DOn't Have Words to describe</p>
<p>Everything Good</p>    <div className='col'>

    <img src='https://lh3.googleusercontent.com/a/ACg8ocLoQjkOhp7OKGibiXhqzJwWNdtBI1p9o6EC31ssaNir=s50-mo' className='pic'/>
    </div>
    <p>Reviewed us for : Hairfall Treatment</p>
    <p className='fs-5'>Aayush Sharma</p>    </div>
    <div class='item bordr'>
    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
    <p className='fs-4 awe'>Nice Treatment</p>
    <p>AWesome , DOn't Have Words to describe</p>

    <div className='col'>
  
    <img src='https://lh3.googleusercontent.com/a/ACg8ocJgjsQVEyR-xniV0v6bDL5dMJ9wkPAq0OnvSuLNG2720Ys=s50' className='pic'/>
    </div>
    <p>Reviewed us for : Pigmentation Treatment </p>
   <p className='fs-5'>Nishanth</p>
    </div>
</OwlCarousel>;

<button type="button" class="btn fw-bold mx-auto" id='butny'>View More</button>
</div>
  </div>

  
<div className='container'>
  <div className='row findd'>
    <h2 className='find fw-bold mt-4'>FIND THE BEST DERMOTOLOGIST NEAR YOU</h2>
    <div className='col-sm-3 hr'>
      <p className='fs-4 awe'>AHMEDABAD</p>
      <p>CG ROAD</p>
</div>

<div className='col-sm-3 hr'>

<p  className='fs-4 awe'>Chandigarh</p>
<p>Sector 17</p>
</div>
<div className='col-sm-3 hr'>

<p  className='fs-4 awe'>Delhi</p>
<p>Punjabi Bagh, Pitampura & Preet Vihar & Greater Kailash 2</p></div>
<div className='col-sm-3 hr'>

<p  className='fs-4 awe'>Bangalore</p>
<p>HSR Layout, HRBR Layout, Indira Nagar, Jayanagar, Koramangala, Sadashivanagar & Whitefield.</p></div>
</div></div>
<br/>

<div className='container'>
  <div className='row findd'>
<div className='col-sm-3 hr'>

<p  className='fs-4 awe'>Hyderabad</p>
<p>Banjara Hills, Gachibowli, Himayatnagar, Jubilee Hills, Kukatpally, Secunderabad & Dilsukh Nagar.</p></div>
<div className='col-sm-3 hr'>

<p className='fs-4 awe'>Chennai</p>
<p>Adyar, Alwarpet & Anna Nagar</p></div>
<div className='col-sm-3 hr'>

<p className='fs-4 awe'>Kochi</p>
<p>Kadavanthra</p></div>
<div className='col-sm-3 hr'>

<p className='fs-4 awe'>Vizag</p>
<p>Dwaraka Nagar</p></div>

</div></div><br/>
<div className='container'>
<div className='row findd'>

<div className='col-sm-3 hr'>

<p  className='fs-4 awe'>Pune</p>
<p>Kalyani Nagar, Shivaji Nagar & Aundh</p></div>
<div className='col-sm-3 hr'>
<p className='fs-4 awe'>Kolkata</p>
<p>Jodhpur Park, Park Street Area & Salt Lake</p>
</div>  </div>
</div><br/>

    
    
    
    </>
  )
}

export default Body