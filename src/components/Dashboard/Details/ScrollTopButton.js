import React from 'react'
import { Link } from 'react-router-dom'

const ScrollTopButton = () => {
  return (
    <Link className="scroll-to-top rounded" to="#page-top">
      <i className="fas fa-angle-up"></i>
    </Link>
  )
}

export default ScrollTopButton
