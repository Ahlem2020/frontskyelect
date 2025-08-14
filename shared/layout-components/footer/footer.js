import React from 'react'
import work4 from "../../../public/assets/img/brand/1.png";
import { colors } from '@mui/material';

const Footer = () => {
  return (
    <div
    ><div className="main-footer text-center">
        <div className="container">
          <div className="row row-sm">
            <div className="col-md-12">


              <span>  <img src={work4.src} style={{ width: '100px', marginTop: '-10px' }} alt="user-img" />  Copyright © 2025 <a href="#">Plate-forme Alternance 2025</a> - <a href="albertondoossa.net"> </a> All rights reserved.</span>
            </div>

          </div>
        </div>
      </div></div>
  )
}

export default Footer;