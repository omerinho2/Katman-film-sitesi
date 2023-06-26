import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Daha Fazlasını Keşfet!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
              <ul className='cards__items'> 
                <CardItem 
                  src='images/img-10.jpg'
                  text='TEYZENİ KORU VI'
                  label='İZLE'
                  path='/services'
                />
                <CardItem 
                  src='images/img-12.jpg'
                  text='SLENDERGÜNLERİN İNTİKAMI IV'
                  label='İZLE'
                  path='/services'
                />
                   <CardItem 
                  src='images/img-13.jpg'
                  text='TUVALETTE EKMEK YERSEN NE OLUR'
                  label='İZLE'
                  path='/services'
                />
                <CardItem 
                  src='images/img-14.jpg'
                  text='BİR YAYINCININ SEX GÜNLÜĞÜ'
                  label='İZLE'
                  path='/services'
                />
                   <CardItem 
                  src='images/img-15.jpg'
                  text='BANA ÖYLE BAKMA, ANLAYACAKLAR'
                  label='İZLE'
                  path='/services'
                />
              </ul>
            </div>
        </div>
    </div>
  );
}

export default Cards
