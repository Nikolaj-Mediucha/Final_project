import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import classes from './Footer.module.css'
import img from './Media/Maps.png';


export default function Footer() {
  return (
    <footer className={classes.footer}>
      
        <div className={classes.footer_container}>
          <div className={classes.contact_container}>
            <h1 className={classes.contact}>Contact</h1>
            <a title='+4915159993999' href="tel:+4915159993999" className={classes.telefon}>+4915159993999</a>
          <div className={classes.soc_netz}>
            <a title='instagram' href='/'><i className={classes.icon_instagram}/>
              <a className={classes.instagram}>Instagram</a>
            </a>
            <a title='whatsapp' href='/'><i className={classes.icon_whatsapp}/>
              <a className={classes.whatsapp}>Whatsapp</a>
            </a>
          </div>
        </div>
        <div className={classes.address_container}>
          <h2 className={classes.address_title}>Address</h2>
          <a title='https://goo.gl/maps/9xi6HkbbZ1Ps7VkDA' href="https://goo.gl/maps/9xi6HkbbZ1Ps7VkDA" target='_blank' className={classes.address}>Karlsruher Str. 8, 74072 Heilbronn</a>
          <div className={classes.working_time}>Working Hours:</div>
          <div className={classes.working_hours}>24 hours a day</div>
        </div>

        
      </div>
      <img src={img} alt="maps" width={'100%'} height={'auto'} className={classes.maps}/>
     
    </footer>
  )
}
