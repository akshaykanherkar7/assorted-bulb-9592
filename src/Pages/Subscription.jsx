import React from 'react'
import Navbar from '../Components/Navbar';
import SearchBox from '../Components/SearchBox';
import Faqs from './Faqs';



const Subscription = () => {
  return (
    <div>
        <Navbar/>
        <div style={{width:"100%", height:"600px",position:"absolute"}}>
            <img style={{width:"100%", height:"600px"}} src="http://4.bp.blogspot.com/-oZExnsR7OOo/UEyT2l-wpUI/AAAAAAAAAm4/rOWLSoZxGSc/s1600/SABIC-Mahindra-XUV500-Photo-high-res.gif" alt="suv" />
        </div>
        <SearchBox style={{position:"absolute"}} />
        <div style={{width:"500px", height:"100px", cursor:"pointer", position:"absolute", backgroundColor:"#fff", margin:"57px 0px 0px 620px", borderRadius:"10px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <p style={{fontSize:"18px", padding:"10px 0px 0px 10px"}}>Looking for Hyundai Subscription</p>
            <div style={{display:"flex"}}>
                <h1 style={{fontSize:"24px", fontWeight:"bold", padding:"0px 0px 0px 10px"}}>By the Year</h1>
                <p style={{color:"teal", fontSize:"17px", fontWeight:"bold", padding:"10px 0px 0px 10px"}}>Explore</p>
            </div>
        </div>
        <Faqs/>

    </div>
  )
}

export default Subscription ;