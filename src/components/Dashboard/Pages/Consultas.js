import React from 'react'
import Join from '../../Chat/Join'
import Footer from '../Footer'
import Logo from '../Logo'
import Navbar from '../Navbar'
import Sidenav from '../Sidenav'
import styles from './Consultas.module.css'

const Consultas = () => {
  return (
    <div className={styles.gridTemplateAreas}>
      <Logo />
      <Navbar />
      <Join />
      <Sidenav />
      <Footer />
    </div>
  )
}

export default Consultas
