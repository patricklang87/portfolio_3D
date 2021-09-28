
import React, {Suspense} from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber';
import Header from './Components/Header/Header';
import Lighting from './Three/Lighting/Lighting';
import Model from './Three/Model/Model';
import notepad from './assets/models/notepad.glb';
import laptop from './assets/models/laptop.glb';
import LoadingModel from './Three/LoadingModel/LoadingModel'
import Banner from './Components/Banner/Banner';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
    <Header />
    <main>
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </main>
    </>
  );
}

export default App;
