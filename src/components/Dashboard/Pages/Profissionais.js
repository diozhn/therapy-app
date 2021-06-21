import React from 'react'
import Footer from '../Footer'
import Logo from '../Logo'
import Navbar from '../Navbar'
import Sidenav from '../Sidenav'
import ContentPage from './ContentPage'
import styles from './Profissionais.module.css'

const Profissionais = () => {
  return (
    <div className={styles.gridTemplateAreas}>
      <Logo />
      <Navbar />
      <ContentPage />
      <Sidenav />
      <Footer />
    </div>
  )
}

export default Profissionais
