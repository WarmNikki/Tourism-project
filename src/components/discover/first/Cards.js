import React, { Component } from 'react'
//import { Card, WhiteSpace } from 'antd-mobile';
import CardCSS from './Cards.module.scss'
import {Link} from 'react-router-dom'

const Cards = (props)=>(
     console.log(props),
  <div className={CardCSS.cards}>
       <Link to='/user'><div className={CardCSS.photos}
       
       >
         
       </div>
       </Link>
       <div className={CardCSS.All}>
       <b className={CardCSS.H3}>wocao</b>
       <br/>
       <span className={CardCSS.Span}>your parents boom die</span>
       </div>
       <div className={CardCSS.Allimg}>
       <img src="https://s1.ax1x.com/2020/08/25/dccUAK.png" alt="dccUAK.png" border="0" />
       <img src="https://s1.ax1x.com/2020/08/25/dccUAK.png" alt="dccUAK.png" border="0" />
       <img src="https://s1.ax1x.com/2020/08/25/dccUAK.png" alt="dccUAK.png" border="0" />
       </div>
  </div>
  );
  export default (Cards)