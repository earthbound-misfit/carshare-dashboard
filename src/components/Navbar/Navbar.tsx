import React, { Suspense } from 'react'
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { AuthCheck } from 'reactfire';
import { Link } from 'react-router-dom';
import firebase from 'firebase';

const useStyles = makeStyles({
    navlogo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        fontSize: '1.5rem',
        color: 'white',
        fontWeight: 'bolder',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        marginEnd: '10px'
    },
    navbar: {
        zIndex: 1,
        position: 'fixed',
        display: 'flex',
        overflow: 'hidden',
        top: 0,
        margin: 'auto',
        boxShadow: '12px 0 15px -4px rgba(31, 73, 125, 0.9)',
        // backgroundColor: '#86B59A',
    },
    navbarItem: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '1.5rem',
        fontWeight: 'bold',
    },
    p5: {
        padding: '20px',
    },
    spaceBetween: {
        justifyContent: 'space-between',
    },
    alignCenter: {
        alignItems: 'center'
    },
    ul: {
        listStyleType: 'none',
    },
    width60: {
        width: '20%',
    },
    width100: {
        width: '100%',
    },
    psides: {
      paddingRight: '20px',
    }
})

export const Navbar = () => {
    const classes = useStyles();

    return (
        <>
          <div className={`${classes.row} ${classes.navbar} ${classes.width100} ${classes.alignCenter} ${classes.p5} ${classes.spaceBetween}`}>
            <Button href='/'>
            <div className={`${classes.navlogo} `}>
                    <h1>Yewy</h1>
            </div></Button>
            <div className={`${classes.width60} ${classes.alignCenter}`}>
                <ul className={`${classes.ul} ${classes.row} ${classes.spaceBetween}`}>
                   <Suspense fallback={'loading...'}>
                    <AuthCheck fallback={
                      <li>


                        <Button> 
                          <Link to='/signin' className={`${classes.navbarItem}`}>Sign In</Link>
                        </Button>


                    </li>
                    }>
                    <li>
                        <Button href='/cars' className={`${classes.navbarItem}`}>My Cars</Button>
                    </li>
                    <Button className={`${classes.navbarItem} ${classes.psides}`} onClick={() => firebase.auth().signOut()}>Sign Out</Button>
                    </AuthCheck>
                    </Suspense>
                </ul>
            </div>
        </div>
        </>
    )
}
