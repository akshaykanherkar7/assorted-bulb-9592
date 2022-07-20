import React from 'react'
import Features from './Features'
import HappyC from './HappyC'
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
    </div>
  )
}

export default Middle