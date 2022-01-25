import React from 'react';
import Slider from './Slider/Slider';
import Note from './Note/Note';
import Programmings from './Programming/Programmings';
import Footer from '../Footer/Footer';

export default function Home() {
  return <div>
    <Slider/>
    <Note/>
    <Programmings/>
    <Footer/>
  </div>;
}

