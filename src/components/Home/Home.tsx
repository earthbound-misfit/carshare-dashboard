import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Navbar } from '../../components/Navbar'
// import { Link } from 'react-router-dom';
import RoadTrip from '../../assets/images/road-trip.jpg'

interface Props {
  title?: string;
}

const useStyles = makeStyles(
  {
      background: {
      backgroundImage: `url(${RoadTrip})`,
      backgroundSize: 'cover',
      width: '100%',
      height: '100%',
      backgroundPosition: 'center',
      position: 'absolute',
      zIndex: -1,
    },
    main_text: {
      color: 'black',
      textAlign: 'center',
      position: 'relative',
      top: '40%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    button_text: {
      color: 'black',
      textDecoration: 'none',
    }
  }
)

export const Home = ( props:Props ) => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
            <div className={`${classes.background}`}>
            <div className={classes.main_text}>
                <h1>{ props.title }</h1>
                <Button href="/car-listings" className={classes.button_text}>Take me to my car listings</Button> 
            </div>
            </div>
    </>
  )
}
