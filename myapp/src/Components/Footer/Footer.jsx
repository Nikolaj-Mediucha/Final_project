import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
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
            <a title='instagram' href='https://www.instagram.com' target='_blank' className={classes.link}>
              <i className={classes.icon_instagram} />
              <span className={classes.icon_title}>Instagram</span>
            </a>
            <a title='whatsapp' href='https://www.whatsapp.com' target='_blank' className={classes.link}>
              <i className={classes.icon_whatsapp} />
              <span className={classes.icon_title}>Whatsapp</span>
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
      {/* <img src={img} alt="maps" width={'100%'} height={'auto'} className={classes.maps} /> */}
      <iframe className={classes.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2610.2555262853366!2d9.203862776817227!3d49.13877268093371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47982f364f5d1f39%3A0xfa868fc71587994e!2sKarlsruher%20Str.%208%2C%2074072%20Heilbronn!5e0!3m2!1sde!2sde!4v1690298317359!5m2!1sde!2sde" width="100%" height="500" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </footer>
  )
}
