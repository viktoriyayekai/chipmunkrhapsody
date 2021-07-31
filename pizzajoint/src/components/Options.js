import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

const Options = ({ addOptions, choice }) => {
  let options = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <div className="options container">
      
      <h3>Awesome! Choose one, please:</h3>
      <ul>
        {options.map(option => {
          let spanClass = choice.options.includes(option) ? 'active' : '';
          return (
            <motion.li key={option} onClick={() => addOptions(option)}
              whileHover={{scale: 1.3, originX:0, color: '#f9e122'}}
              transition={{type: 'spring', stiffness: 300}}
            >
              <span className={spanClass}>{ option }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button
        whileHover={{ 
          scale: 1.1,
          textShadow: "0px 0px 8px rgb(255,255,255)",
          boxShadow:"0px 0px 8px rgb(255,255,255)",

          }}>
          Order
        </motion.button>
      </Link>

    </div>
  )
}

export default Options;