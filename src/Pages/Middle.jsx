import React from 'react'
import Day3 from './Day3'
import Download from './Download'
import Features from './Features'
import HappyC from './HappyC'
import Investor from './Investor'
import styles from './Middle.module.css'
import Sanitizer from './Sanitizer'
import Serviceable from './Serviceable'
import Why from './Why'
import Footer from './Footer'

const Middle = () => {
  return (
    <div className={styles.MainShra}>
        <Features/>
        <Sanitizer/>
        <Why/>
        <HappyC/>
        <Download/>
        <Day3/>
        <Investor/>
        <Serviceable/>
        
    </div>
  )
}

export default Middle