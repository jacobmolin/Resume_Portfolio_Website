import { useEffect, useState } from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Link from 'next/link'
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton'
import hamStyles from './hamburger.module.css'

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    text: {
        fontFamily: "Montserrat",
        // fontWeight: "400",
        // lineHeight: "22px",
        // fontSize: "12px",
        // letterSpacing: "2px",
        textTransform: "uppercase",
        paddingLeft: "2rem"
    },
    paper: {
        backgroundColor: "#252833",
        width: "200px"
    }
});

// const anchor = 'right'

export default function TemporaryDrawer() {
    const pages = ['home', 'resume', 'portfolio', 'contact']
    const classes = useStyles()
    // const [state, setState] = React.useState({
    //     // top: false,
    //     right: false,
    //     // bottom: false,
    //     // right: false,
    // });

    const [drawer, setDrawer] = useState(false)
    const [burger, setBurger] = useState(false)

    const toggleDrawer = (open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        // burger = open
        setDrawer(open);
        setBurger(open);
    };

    const list = () => (
        <div
            className={clsx(classes.list)}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
                {burger ? (
                    <button className={`${hamStyles.hamburger} ${hamStyles.hamburgerSqueeze} ${hamStyles.isActive}`} onClick={toggleDrawer(true)} type="button">
                        <span className={hamStyles.hamburgerBox}><span className={hamStyles.hamburgerInner}></span>
                        </span>
                    </button>
                ) : (
                        <button className={`${hamStyles.hamburger} ${hamStyles.hamburgerSqueeze}`} onClick={toggleDrawer(true)} type="button">
                            <span className={hamStyles.hamburgerBox}><span className={hamStyles.hamburgerInner}></span>
                            </span>
                        </button>
                    )
                }
            </div>

            <List>
                {pages.map((text, index) =>
                    ((text == 'home') ? (
                        <Link href='/' key={text} >
                            <ListItem button>
                                <ListItemText primary={text} classes={{ primary: classes.text }} />
                            </ListItem>
                        </Link>
                    ) : (
                            <Link href={`/${text}`} key={text} >
                                <ListItem button>
                                    <ListItemText primary={text} classes={{ primary: classes.text }} />
                                </ListItem>
                            </Link>
                        )
                    )
                )}
            </List>
        </div >
    )

    return (
        <div
            style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
        >
            {/* <div
                style={{ border: "1px solid red", display: "flex", justifyContent: "center", alignItems: "center", width: "70%" }}
            > */}
            <div >SIDAN</div>
            <React.Fragment key="drawer">
                {burger ? (
                    <button className={`${hamStyles.hamburger} ${hamStyles.hamburgerSqueeze} ${hamStyles.isActive}`} onClick={toggleDrawer(true)} type="button">
                        <span className={hamStyles.hamburgerBox}><span className={hamStyles.hamburgerInner}></span>
                        </span>
                    </button>
                ) : (
                        <button className={`${hamStyles.hamburger} ${hamStyles.hamburgerSqueeze}`} onClick={toggleDrawer(true)} type="button">
                            <span className={hamStyles.hamburgerBox}><span className={hamStyles.hamburgerInner}></span>
                            </span>
                        </button>
                    )
                }
                <Drawer
                    anchor="right"
                    open={drawer}
                    onClose={toggleDrawer(false)}
                    classes={{ paper: classes.paper }}
                >{list()}
                </Drawer>
            </React.Fragment>
            {/* </div> */}
        </div >
    );
}
