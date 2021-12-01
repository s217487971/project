import React from "react";
import Slider from "./ImageSlider";
import Slideshow from "./WebsiteSlider";
import backGround3 from './image_resources/backGround3.PNG';

function Homemethod()
{
    return(
        <div style={{ backgroundImage:`url(${backGround3})` }}>

              <div class="container" >
    <br/>
    <h3 class="font-weight-bold">
        Welcome, This is SIZWE
    </h3>
    <br/>
    <p>SovTech creates Excellent Solutions using modern technologies that Ultimately have social Good just like other Tech Giants, however unlike other Tech Giants it does not do so at the expense of it's staff. After Reading The SovTech Spex it is Apparent that Sov-Tech Offers a Healthy Working Environment to its Staff and it would be blessing to Work at Sov-Tech. Regarding the Projects Created by Sov-Tech, all the Projects I have always wanted to be part and the Lessons are being done continously in the Real life Setting and It would Great Honor to Be Part of the Team and Contribute in the making of Great Solutions. Personally, growth and Improvement my Drive seeing how Sov-Tech is advancing into New Technologies Such as BlockChain it would be Great to learn about the Implementation of such Technologies in practice.</p>
    <p>Ever Since, modern Computers I have always wanted to be involved in the making of them, However things took a different turn in the age of smartphones. Ever since Smartphones Existed I wanted to Learn of they are made and possibly build my Softwares that could help People or Even improve exising Software. In my spare time I do try out new Frameworks and New Languages that are Being Used today Just to keep up as much as i can. I believe that Would be accelerated at Sov-Tech</p>
    <p>I Decided to Pursue a Degree in Computer Science so i could learn as much as I can and to try and learn everything there is to know about Software and Hardware, Even in University I realized that I could Understand Computing more than I understood Statistics, Mathematics and Applied Mathematics then I knew Computing is what I am best at. The Skills I have Aqcuired at School are decent start into the Software Engineering Field and there is Still more To Learn. At this Point I would love to work at Sov-Tech since I believe I will be an assert to SovTech and Equally SovTech will assist in the Growth of my Skills and Knowledge.</p>
    <h5>Applications TO AUTOMATE TASKS</h5>
    <h5>WEBSITES FOR YOUR BUSINESS</h5>
    <br/>
    <div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
    <Slider/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h4 class="card-title">Android</h4>
        <p class="card-text">Scalable Mobile Applications with Optimised Performance to Suit your needs.</p>
        
      </div>
    </div>
  </div>
</div>
            <br/>


        <div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
    <Slideshow/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Websites</h5>
        <p class="card-text">Visually appealing and fully functional websites to make your life Easier.</p>
      </div>
    </div>
  </div>
</div>
<br/>
<nav class="navbar navbar-expand-lg navbar-light bg-primary">
<h2><span class="badge bg-primary"> Softwares Solutions Made For You </span></h2>
            </nav>
            <br/>

            <div class="card bg-dark text-white">
            <img src={require('./image_resources/backGround.PNG').default}  alt=""/>
  <div class="card-img-overlay">
    <h5 class="card-title">Innovation </h5>
    <p class="card-text">Using cutting-edge technologies to reach your Technical Goals.</p>
  </div>
</div>






            </div>
          
        
            
        
            
            
            <br/>

      </div>
    )
}

export default Homemethod;