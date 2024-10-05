import React from 'react';
import Navbar from './Navbar';
import Services from './Services';
import Aboutus from './Aboutus';
import Whyus from './Whyus';
import Gallery from './Gallery';
import Clientfeedback from './Clientfeedback';
import Contactus from './Getintouch';
// import Footer from './Footer';
import Map from './Map';
import Banner from './Banner';
import Cards from './Cards';
// import Achievement from './Achievement';
const Homepage = () => {
  return (
    <>
      {/* <div ><Navbar/></div> */}
      <div ><Banner/></div>
      <div ><Services/></div>
      <div ><Aboutus/></div>
      {/* <div><Achievement/></div> */}
      <div ><Whyus/></div>
      <div><Cards/></div>
      <div ><Gallery/></div>
      <div ><Clientfeedback/></div>
      <div ><Contactus/></div>
      <div ><Map /></div>
      {/* <Footer /> */}
    </>
  );
};

export default Homepage;
