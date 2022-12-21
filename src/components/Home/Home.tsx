import React from 'react';
import { makeStyles, Button } from '@material-ui/core';
import { Navbar } from '../../components/Navbar'
// import { Link } from 'react-router-dom';
import RoadTrip from '../../assets/images/road-trip.jpg'

interface Props {
  title?: string;
}

const useStyles = makeStyles(
  {
      background: {
      background: "rgba(0, 0, 0, .30)",
      backgroundImage: `url(${RoadTrip})`,
      backgroundBlendMode: 'darken',
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
      backgroundColor: 'rgba(255,255,255,0.8)',
      borderRadius: '20px',
      padding: '25px',
      marginTop: '12px',
      boxShadow: '0px 8px 10px rgba(0, 0, 0, 0.4)',
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
                <Button href="/cars" className={classes.button_text}><h1>{ props.title }</h1></Button>
            </div>
            </div>
    </>
  )
}
