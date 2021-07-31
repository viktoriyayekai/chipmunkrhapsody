import React from 'react';
import { Link } from 'react-router-dom';
import {motion, useSpring} from 'framer-motion';

const Base = ({ addBase, choice }) => {
  const bases = ['Music', 'Book reviews', 'Blog'];

  return (
    <motion.div className="base container"
        initial={{x:'100vw'}}
        animate={{x:0}}
        transition={{type:'spring', delay: 0.5}}>

      <h3>What you like to see first? </h3>
      <ul>
        {bases.map(base => {
          let spanClass = choice.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)}
            whileHover={{scale: 1.3, originX:0, color: '#f9e122'}}
            transition={{type: 'spring', stiffness: 300}}>
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {choice.base && (
        <motion.div className="next">
          <Link to="/options">
            <motion.button
            whileHover={{ 
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow:"0px 0px 8px rgb(255,255,255)",
  
              }}>
              Next
              </motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;