import React from 'react'
import CountryStateCity from '../country/CountryStateCity'
import { Auth0Provider } from '@auth0/auth0-react';
import UserProfile from './UserProfile';
import { Container, Form, Button } from 'react-bootstrap'
import descriptionPic from '../Images/description.png'
import '../../styles/home.css'
import Filter from '../Filter/Filter';
import ItemShowCase from '../product/ItemShowCase';

const Home = () => {
  return (
    <Container>
        <div className='container'>
            <img src={descriptionPic} className="image d-block w-100"/>
                <p className='header'>
                  You can save the Earth!
                  You can make Money!
                  Show us recreated items with your unique and creative ideas!
                </p>
        </div>
        {/* State City Filter */}
        <CountryStateCity/>

        {/* Search Product filtering */}
        <Filter />
        <div style={{width: 800}} className="m-auto">
          <h2 style={{marginTop: 30, color: '#0A3622'}}>Look how people rebuild recylced items!</h2>
        </div>
        <ItemShowCase />
    </Container>
  )
}


export default Home