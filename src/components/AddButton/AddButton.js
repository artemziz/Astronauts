import React from 'react';
import {useState} from 'react';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

import AstronautForm from '../AstronautForm/AstronautForm';

  export default function SwipeableTemporaryDrawer() {
    
    const[isOpen,setIsOpen] = useState(false);
  //   const [state, setState] = useState({
  //     right: false,
  //   });
  
    const toggleDrawer = (open) => (event) => {
      if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setIsOpen(open);
    };
  
    return (
      <div>
          <IconButton onClick={toggleDrawer(true)}  aria-label="add">
              <AddIcon/>
          </IconButton>
            <SwipeableDrawer
              anchor='right'
              open={isOpen}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
            >
              <AstronautForm/>
            </SwipeableDrawer>
        
      </div>
    );
  }