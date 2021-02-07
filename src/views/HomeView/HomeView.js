import React from 'react';
import homeImage from '../../images/catPhonebook.jpg';
import s from '../HomeView/HomeView.module.css';

export default function HomeView() {
  return (
    <>
      <h1 className={s.text}>Hi! I'm your contact book!</h1>
      <img src={homeImage} alt="" className={s.homePhoto} />
    </>
  );
}
