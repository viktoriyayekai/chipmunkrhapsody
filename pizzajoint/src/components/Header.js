import React from 'react';
import {motion} from 'framer-motion';
import chipmunk from './images/chipmunk.png'


const Header = () => (
   <header>
      <motion.div className="logo"
        initial={{y: -250}}
        animate={{y: -10}}
        transition={{delay: 0.2, type: 'spring', stiffness:120}}
      >
        <img src={chipmunk} alt="Logo" />; 
      </motion.div>
      <motion.div className="title"
         initial={{y: -250}}
         animate={{y: -10}}
         transition={{delay: 0.2, type: 'spring', stiffness:120}}
      >
        <h1>Chipmunk Rhapsody</h1>
      </motion.div>
      <div className ="right">
        <motion.div className="menu">
          <h1>Books</h1>
          <h1>Music</h1>
          <h1>Blog</h1>
          <h1>Gallery</h1>
          <h1>About</h1>
      </motion.div>
      </div>
   </header>
  )

export default Header;