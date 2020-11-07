import Head from 'next/head'
import Layout from '../components/layout'
import stylesH from '../styles/Home.module.css'
import styles from '../styles/Resume.module.css'
import utilStyles from '../styles/utils.module.css'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Timeline from '@material-ui/lab/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
import FastfoodIcon from '@material-ui/icons/Fastfood'
import LaptopMacIcon from '@material-ui/icons/LaptopMac'
import AdjustRounded from '@material-ui/icons/AdjustRounded'
import School from '@material-ui/icons/School'
import Work from '@material-ui/icons/Work'
import WorkOutline from '@material-ui/icons/WorkOutline'
import LocationOn from '@material-ui/icons/LocationOn'
import MailOutline from '@material-ui/icons/MailOutline'
import Create from '@material-ui/icons/Create'
import RightArrow from '@material-ui/icons/KeyboardArrowRightRounded'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Date from '../components/date'
import { ArrowBackIosOutlined } from '@material-ui/icons'

export const site = 'Resume'
export const name = 'Jacob Molin'

// const useStyles = makeStyles({
//     paper: {
//         padding: '1rem',
//         // backgroundColor: 'rgb(255,0,0)',
//         // backgroundColor: theme.palette.secondary.main,
//     },
//     timePlace: {
//         flex: 'none',
//         justifyContent: 'space-around',
//         minWidth: '160px',
//         padding: '6px 10px',
//         background: "rgb(255,0,0)",
//     },

// })

const useStyles = makeStyles(theme => ({
    wrapIcon: {
        verticalAlign: 'middle',
        display: 'inline-flex'
    },
    test: {
        border: '1px solid red',
    }
}))

function Resume({ data }) {
    const classes = useStyles()
    // #EAECF3 - old timeplace txt color

    return (
        <>
            <Head>
                <title>{site}</title>
            </Head>
            <div className={styles.resumeWrapper}>
                <div className={styles.basicInfo}>
                    <img
                        src="/images/profile.jpeg"
                        className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                        alt={name}
                    />
                    <div>
                        <h1>{data.basics.name}</h1>
                        <h4>{data.basics.currentTitel}</h4>
                        {/* <Link href="mailto: jacob.cb.molin@gmail.com"> */}
                        <a href="mailto: jacob.cb.molin@gmail.com">
                            <h4><MailOutline /> {data.basics.email}</h4>
                        </a>
                        {/* </Link> */}
                        <h4 ><LocationOn /> {data.basics.location}</h4>

                        {/* <Typography variant="subtitle1" className={classes.wrapIcon}>
                         <h4> <LocationOn  className={classes.linkIcon} /> {data.basics.location}</h4>
                        </Typography> */}

                        {/* <div style={{
                            verticalAlign: 'middle',
                            display: 'inline-flex'
                        }}>
                            <LocationOn />
                            <p>revolve</p>
                        </div> */}


                        {/* <LocationOn /> */}

                    </div>
                </div>

                <div className={styles.upperResume}>
                    <div className={styles.profile}>
                        <h1 className={`${utilStyles.headingXL} ${styles.sectionHeader}`}>Profile</h1>
                        <span >{/* className={styles.profile}> */}
                            {data.profile}

                        </span>
                        <br /><br />
                        <span >{/* className={styles.profile}> */}
                            {data.profile2}
                        </span>
                    </div>

                    <div className={styles.skills}>
                        <h1 className={`${utilStyles.headingXL} ${styles.sectionHeader}`}>
                            Skills</h1>
                        {/* {console.log("data.skills:", data.skills)} */}
                        {/* <h5>{data.skills[0].name}</h5> */}
                        <ul>
                            {data.skills[0].keywords.map((skill, i) =>
                                <li key={`${skill.company}+${i}`}>
                                    {skill}
                                </li>
                            )}
                        </ul>
                    </div>
                </div>

                <div className={styles.lowerResume}>
                    {/* <div> */}
                    <h1 className={`${utilStyles.headingXL} ${styles.sectionHeader}`}>
                        Education</h1>
                    <div className={styles.timelineWrapper}>
                        <Timeline align="left" style={{ marginTop: "0", paddingLeft: "0" }}>
                            {/* key={'hey'}  */}
                            {data.education.map((edu, i) =>
                                <TimelineItem key={`${edu.school}+${i}`}>
                                    <TimelineOppositeContent className={classes.test} style={{ flex: "none", justifyContent: 'space-around', minWidth: '168px', padding: '6px 10px' }}>
                                        {/* className={classes.timePlace} */}
                                        <Typography variant="body2" style={{ color: "#FFFFFF", fontFamily: 'Lato', fontWeight: '400' }}>
                                            <Date dateString={edu.startDate} /> - <Date dateString={edu.endDate} />
                                        </Typography>
                                        <Typography variant="body2" style={{ color: "#FFFFFF", fontFamily: 'Lato', fontWeight: '400' }}>
                                            {edu.location}
                                        </Typography>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot color="inherit" variant="outlined">
                                            <School />
                                        </TimelineDot>
                                        {/* {(i < data.education.length - 1) && */}
                                        < TimelineConnector style={{ background: '#4B4D57' }} />
                                        {/* } */}
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Paper elevation={3} style={{
                                            background: "none",
                                            border: "1px solid #4B4D57",
                                            marginTop: "1rem",
                                            marginBottom: "1rem",
                                            padding: "1.5rem",
                                            maxWidth: "625px"
                                        }}> {/* boxShadow: "0 0 0", borderRadius: '4px', boxShadow: '2px 2px 4px rgb(105, 105, 105)', className={classes.paper}*/}
                                            <Typography variant="h5" component="h1" style={{
                                                color: "#FFFFF",
                                                fontFamily: "Lato",
                                                fontWeight: "400"
                                            }}>
                                                {edu.school}
                                            </Typography>
                                            <Typography variant="h6" component="h3" style={{
                                                color: "#FFFFF",
                                                fontFamily: "Lato",
                                                fontWeight: "300"
                                            }}>
                                                {edu.degree}
                                            </Typography>
                                            <Typography style={{
                                                color: "#FFFFF",
                                                fontFamily: "Lato",
                                                fontWeight: "300",
                                                lineHeight: "25px",
                                                letterSpacing: "0.5px",
                                                paddingTop: "0.7rem",
                                            }}>{/* */}
                                                {edu.description}
                                            </Typography>
                                            <Typography style={{
                                                color: "#FFFFF",
                                                fontFamily: "Lato",
                                                fontWeight: "300",
                                                lineHeight: "25px",
                                                letterSpacing: "0.5px",
                                                paddingTop: "0.7rem",
                                            }}>{/* */}
                                                <span style={{ fontWeight: "400" }}>{edu.bachelor}</span> {edu.subDescription}
                                            </Typography>
                                        </Paper>
                                    </TimelineContent>
                                </TimelineItem>
                            )}
                        </Timeline>
                    </div>

                    <h1 className={`${utilStyles.headingXL} ${styles.sectionHeader}`}>
                        Work</h1>
                    <div className={styles.timelineWrapper}>
                        <Timeline align="left" style={{ marginTop: "0", paddingLeft: "0" }}>
                            {data.work.map((work, i) =>
                                <TimelineItem key={`${work.company}+${i}`}>
                                    <TimelineOppositeContent style={{ flex: "none", justifyContent: 'space-around', minWidth: '168px', padding: '6px 10px' }}>
                                        <Typography variant="body2" style={{ color: "#FFFFFF", fontFamily: 'Lato', fontWeight: '400' }}>
                                            <Date dateString={work.startDate} /> - <Date dateString={work.endDate} />
                                        </Typography>
                                        <Typography variant="body2" style={{ color: "#FFFFFF", fontFamily: 'Lato', fontWeight: '400' }}>
                                            {work.location}
                                        </Typography>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot color="inherit" variant="outlined">
                                            <Work />
                                        </TimelineDot>
                                        <TimelineConnector style={{ background: '#4B4D57' }} />
                                    </TimelineSeparator>
                                    <TimelineContent>


                                        <Paper elevation={3} style={{
                                            background: "none",
                                            border: "1px solid #4B4D57",
                                            marginTop: "1rem",
                                            marginBottom: "1rem",
                                            padding: "1.5rem",
                                            maxWidth: "625px"
                                        }}>
                                            <Typography variant="h5" component="h1" style={{
                                                color: "#FFFFF",
                                                fontFamily: "Lato",
                                                fontWeight: "400"
                                            }}>
                                                {work.company}
                                            </Typography>
                                            <Typography variant="h6" component="h3" style={{
                                                color: "#FFFFF",
                                                fontFamily: "Lato",
                                                fontWeight: "300"
                                            }}>
                                                {work.position}
                                            </Typography>
                                            <Typography style={{
                                                color: "#FFFFF",
                                                fontFamily: "Lato",
                                                fontWeight: "300",
                                                lineHeight: "25px",
                                                letterSpacing: "0.5px",
                                                paddingTop: "0.7rem",
                                            }}>
                                                {work.summary}
                                            </Typography>
                                            {/* <Typography style={{
                                                color: "#FFFFF",
                                                fontFamily: "Lato",
                                                fontWeight: "300",
                                                lineHeight: "25px",
                                                letterSpacing: "0.5px",
                                                paddingTop: "0.7rem",
                                            }}>
                                                <span style={{ fontWeight: "400" }}>{edu.bachelor}</span> {edu.subDescription}
                                            </Typography> */}
                                        </Paper>


                                        {/* 

                                        <Paper elevation={3} style={{
                                            background: "none", border: "1px solid #4B4D57",
                                            marginTop: "1rem", marginBottom: "1rem",
                                            padding: "1.5rem"
                                        }}>
                                            <Typography variant="h5" component="h1" style={{ color: "#FFFFF", fontFamily: "Lato" }}>
                                                {work.company}
                                            </Typography>
                                            <Typography variant="h6" component="h2" style={{ color: "#FFFFF", fontFamily: "Lato" }}>
                                                {work.position}
                                            </Typography>
                                            <Typography style={{ color: "#FFFFF", fontFamily: "Lato", fontWeight: "300", lineHeight: "25px" }}>
                                                {work.summary}
                                            </Typography>
                                        </Paper> */}


                                    </TimelineContent>
                                </TimelineItem>
                            )}
                        </Timeline>
                    </div>

                    <h1 className={`${utilStyles.headingXL} ${styles.sectionHeader}`}>
                        Internships</h1>
                    <div className={styles.timelineWrapper}>
                        <Timeline align="left" style={{ marginTop: "0", paddingLeft: "0" }}>
                            {data.internships.map((intern, i) =>
                                <TimelineItem key={`${intern.company}+${i}`}>
                                    <TimelineOppositeContent style={{ flex: "none", justifyContent: 'space-around', minWidth: '168px', padding: '6px 10px' }}>
                                        <Typography variant="body2" style={{ color: "#FFFFFF", fontFamily: 'Lato', fontWeight: '400' }}>
                                            <Date dateString={intern.startDate} /> - <Date dateString={intern.endDate} />
                                        </Typography>
                                        <Typography variant="body2" style={{ color: "#FFFFFF", fontFamily: 'Lato', fontWeight: '400' }}>
                                            {intern.location}
                                        </Typography>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot color="inherit" variant="outlined">
                                            <RightArrow />
                                            {/* <RightArrow /> */}
                                        </TimelineDot>
                                        < TimelineConnector style={{ background: '#4B4D57' }} />
                                    </TimelineSeparator>
                                    <TimelineContent>

                                        <Paper elevation={3} style={{
                                            background: "none",
                                            border: "1px solid #4B4D57",
                                            marginTop: "1rem",
                                            marginBottom: "1rem",
                                            padding: "1.5rem",
                                            maxWidth: "625px"
                                        }}>
                                            <Typography variant="h5" component="h1" style={{
                                                color: "#FFFFF",
                                                fontFamily: "Lato",
                                                fontWeight: "400"
                                            }}>
                                                {intern.company}
                                            </Typography>
                                            <Typography variant="h6" component="h3" style={{
                                                color: "#FFFFF",
                                                fontFamily: "Lato",
                                                fontWeight: "300"
                                            }}>
                                                {intern.position}
                                            </Typography>
                                            <Typography style={{
                                                color: "#FFFFF",
                                                fontFamily: "Lato",
                                                fontWeight: "300",
                                                lineHeight: "25px",
                                                letterSpacing: "0.5px",
                                                paddingTop: "0.7rem",
                                            }}>
                                                {intern.summary}
                                            </Typography>
                                        </Paper>




                                        {/* <Paper elevation={3} style={{
                                            background: "none", border: "1px solid #4B4D57",
                                            marginTop: "1rem", marginBottom: "1rem",
                                            padding: "1.5rem"
                                        }}>
                                            <Typography variant="h5" component="h1" style={{ color: "#FFFFF", fontFamily: "Lato" }}>
                                                {intern.company}
                                            </Typography>
                                            <Typography variant="h6" component="h2" style={{ color: "#FFFFF", fontFamily: "Lato" }}>
                                                {intern.position}
                                            </Typography>
                                            <Typography style={{ color: "#FFFFF", fontFamily: "Lato", fontWeight: "300", lineHeight: "25px" }}>
                                            </Typography>
                                        </Paper> */}


                                    </TimelineContent>
                                </TimelineItem>
                            )}
                        </Timeline>
                    </div>
                </div>


                {/* </div> */}

            </div>
        </>
    )
}
export default Resume

export async function getStaticProps() {
    const resp = await fetch(`${process.env.PUBLIC_URL}/data/resume.json`)
    let data = []

    if (resp.status == 200) {
        data = await resp.json()
    } else {
        console.error('Could not fetch data!')
        console.error(resp.status, resp.statusText)
    }

    return {
        props: {
            data,
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every second
        revalidate: 60 * 5, // In seconds
    }
}