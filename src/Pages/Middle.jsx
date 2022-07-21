import React from 'react'
import Day3 from './Day3'
import Download from './Download'
import Features from './Features'
import HappyC from './HappyC'
import Investor from './Investor'
import styles from './Middle.module.css'
import Sanitizer from './Sanitizer'
import Why from './Why'

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
    </div>
  )
}

export default Middle