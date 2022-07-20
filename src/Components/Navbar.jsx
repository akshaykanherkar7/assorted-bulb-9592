import React from 'react'
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div>
        <div className={styles.mainDiv}>
           <div className={styles.div1}>
              <div className={styles.imgDiv}><img src="https://www.revv.co.in/grapheneImages/newopen/logo.svg" alt="rev_logo" />
              <p className={styles.subtitle}>Sanitised. Safe</p>
              </div>
           </div>
           <div className={styles.div2}>
              <div className={styles.innerDiv1}><p style={{fontWeight:"bold", fontSize:"17px"}}>Hyundai</p><p style={{marginLeft:"5px",fontSize:"14px"}}>Subscription</p></div>
              <div className={styles.innerDiv1}><p style={{fontWeight:"bold", fontSize:"17px"}}>Mahindra</p><p style={{marginLeft:"5px",fontSize:"14px"}}>Subscription</p></div>
              <div className={styles.innerDiv2}>FAQs</div>
              <div className={styles.innerDiv3}>
              <span class="material-symbols-outlined">login</span>
                 <div style={{marginLeft:"10px"}}>Login or Signup</div>
              </div>
           </div>
        </div>
    </div>
  )
}

export default Navbar