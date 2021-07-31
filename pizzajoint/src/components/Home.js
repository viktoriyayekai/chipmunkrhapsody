import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

const Home = () => {
  return (
    <motion.div className="home container"
       initial = {{opacity: 0 }}
       animate = {{opacity: 1 }}
       transitioon={{delay: 1.5, duration:1.5}}
    >
      <motion.h2 animate={{fontSize: 50}}>
        Welcome, dear! 
      </motion.h2>
      <Link to="/base">
        <motion.button
          whileHover={{ 
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow:"0px 0px 8px rgb(255,255,255)",

            }}>
          In what I can interest you today?
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;