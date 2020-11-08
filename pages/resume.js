import Head from 'next/head'
import Layout from '../components/layout'
import stylesH from '../styles/Home.module.css'
import styles from '../styles/Resume.module.css'
import utilStyles from '../styles/utils.module.css'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import {
    Timeline,
    TimelineItem as MuiTimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineOppositeContent,
    TimelineDot
} from '@material-ui/lab'
import FastfoodIcon from '@material-ui/icons/Fastfood'
import LaptopMacIcon from '@material-ui/icons/LaptopMac'
import AdjustRounded from '@material-ui/icons/AdjustRounded'
import School from '@material-ui/icons/School'
import LocationOn from '@material-ui/icons/LocationOn'
import MailOutline from '@material-ui/icons/MailOutline'
import Create from '@material-ui/icons/Create'
import RightArrow from '@material-ui/icons/KeyboardArrowRightRounded'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Date from '../components/date'
import useWindowSize from '../utils/useWindowSize.js'

export const site = 'Resume'
export const name = 'Jacob Molin'

const TimelineItem = withStyles({
    missingOppositeContent: {
        "&:before": {
            display: "none"
        }
    }
})(MuiTimelineItem);

const useStyles = makeStyles({ //theme => (
    wrapIcon: {
        verticalAlign: 'middle',
        display: 'inline-flex'
    },
    timePlace: {
        flex: "none",
        justifyContent: 'space-around',
        minWidth: '168px',
        padding: '6px 10px',
        border: '1px solid red',
        // backgroundColor: 'red',
        // style={{ flex: "none", justifyContent: 'space-around', minWidth: '168px', padding: '6px 10px' }}
    },
    text: {
        // style={{ color: "#FFFFFF", fontFamily: 'Lato', fontWeight: '400' }}
        color: "#FFFFFF",
        fontFamily: 'Lato',
        fontWeight: '400'
    },
    test1: {
        // color: "#FFFFF",
        color: "red",
        fontFamily: "Lato",
        fontWeight: "300",
        lineHeight: "25px",
        letterSpacing: "0.5px",
        paddingTop: "0.7rem"
    }
}) //)

function Resume({ data }) {
    const { width } = useWindowSize()
    const widthLimit = 800
    const classes = useStyles()
    // console.log('classes:', classes)
    // #EAECF3 - old timeplace txt color
    const timeOC = {
        flex: "none",
        justifyContent: 'space-around',
        minWidth: '168px',
        padding: '6px 10px'
    }
    const paperStyle = {
        background: "none",
        border: "1px solid #4B4D57",
        marginTop: "1rem",
        marginBottom: "1rem",
        padding: "1.5rem",
        maxWidth: "625px"
    }
    const descriptionStyle = {
        color: "#FFFFF",
        fontFamily: "Lato",
        fontWeight: "300",
        lineHeight: "25px",
        letterSpacing: "0.5px",
        paddingTop: "0.7rem",
    }

    return (
        <>
            <Head>
                <title>{site}</title>
            </Head>
            <div className={styles.resumeWrapper}>
                <div className={styles.topInfo}>
                    <div className={styles.imageWrapper}><img
                        // src="/images/profile.jpeg"
                        src="/images/profileBW2.png"
                        className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                        alt={name}
                    />
                    </div>
                    <div className={styles.basicInfo}>
                        {/* <div> */}
                        <h1 className={styles.name}>{data.basics.name}</h1>
                        <h4 className={utilStyles.headingSm}>{data.basics.currentTitel}</h4>
                        <h4 className={`${utilStyles.headingSm} ${styles.forIconText}`}><LocationOn style={{ paddingRight: "0.5rem" }} /> {data.basics.location}</h4>

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

                        {/* </div> */}

                        {/* <h3 >PDF download</h3> */}
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
                        <ul>
                            {data.skills[0].keywords.map((skill, i) =>
                                <li key={`${skill}+${i}`}>
                                    {skill}
                                </li>
                            )}
                        </ul>
                    </div>

                    {/* <div className={styles.language}>
                        <h1 className={`${utilStyles.headingXL} ${styles.sectionHeader}`}>
                            Languages</h1>
                        <ul>
                            {data.languages.map((lang, i) =>
                                <li key={`${lang.language}+${i}`}>
                                    {lang.language}, {lang.fluency}
                                </li>
                            )}
                        </ul>
                    </div> */}
                </div>

                <div className={styles.lowerResume}>
                    {/* <h1 className={`${utilStyles.headingXL} ${styles.sectionHeader}`}>
                        Education</h1>
                    <div className={styles.timelineWrapper}>
                        <Timeline align="left" style={{ marginTop: "0", paddingLeft: "0" }}>
                            {data.education.map((edu, i) =>
                                (edu.description != "") ? (
                                    <TimelineItem key={`${edu.school}+${i}`}>
                                        <TimelineOppositeContent style={timeOC}>
                                            <Typography variant="body2">
                                                <Date dateString={edu.startDate} /> - <Date dateString={edu.endDate} />
                                            </Typography>
                                            <Typography variant="body2"
                                                style={{ color: "#FFFFFF", fontFamily: 'Lato', fontWeight: '400' }}
                                            >
                                                {edu.location}
                                            </Typography>
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineDot color="inherit" variant="outlined">
                                                <School />
                                            </TimelineDot>
                                            < TimelineConnector style={{ background: '#4B4D57' }} />
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <Paper elevation={3} style={paperStyle}>
                                                <Typography variant="h5"
                                                    style={{
                                                        color: "#FFFFF",
                                                        fontFamily: "Lato",
                                                        fontWeight: "400"
                                                    }}>
                                                    {edu.school}
                                                </Typography>
                                                <Typography variant="h6"
                                                    style={{
                                                        color: "#FFFFF",
                                                        fontFamily: "Lato",
                                                        fontWeight: "300"
                                                    }}>
                                                    {edu.degree}
                                                </Typography>
                                                <Typography
                                                    style={descriptionStyle}>
                                                    {edu.description}
                                                </Typography>
                                                <Typography style={descriptionStyle}>
                                                    <span style={{ fontWeight: "400" }}>{edu.bachelor}</span> {edu.subDescription}
                                                </Typography>
                                            </Paper>
                                        </TimelineContent>
                                    </TimelineItem>
                                ) : (
                                        <TimelineItem key={`${edu.school}+${i}`}>
                                            <TimelineOppositeContent style={timeOC}>
                                                <Typography variant="body2">
                                                    <Date dateString={edu.startDate} /> - <Date dateString={edu.endDate} />
                                                </Typography>
                                                <Typography variant="body2"
                                                    style={{ color: "#FFFFFF", fontFamily: 'Lato', fontWeight: '400' }}
                                                >
                                                    {edu.location}
                                                </Typography>
                                            </TimelineOppositeContent>
                                            <TimelineSeparator>
                                                <TimelineDot color="inherit" variant="outlined">
                                                    <School />
                                                </TimelineDot>
                                                < TimelineConnector style={{ background: '#4B4D57' }} />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <Paper elevation={3} style={paperStyle}>
                                                    <Typography variant="h5"
                                                        style={{
                                                            color: "#FFFFF",
                                                            fontFamily: "Lato",
                                                            fontWeight: "400"
                                                        }}>
                                                        {edu.school}
                                                    </Typography>
                                                    <Typography variant="h6"
                                                        style={{
                                                            color: "#FFFFF",
                                                            fontFamily: "Lato",
                                                            fontWeight: "300"
                                                        }}>
                                                        {edu.degree}
                                                    </Typography>
                                                </Paper>
                                            </TimelineContent>
                                        </TimelineItem>
                                    )
                            )}
                        </Timeline>
                    </div> */}

                    <h1 className={`${utilStyles.headingXL} ${styles.sectionHeader}`}>
                        Education</h1>
                    <div className={styles.timelineWrapper}>
                        <Timeline align="left" style={{ marginTop: "0", paddingLeft: "0" }}>
                            {data.education.map((edu, i) =>
                                // (edu.description != "") ? (
                                <TimelineItem key={`${edu.school}+${i}`}>
                                    {(width > widthLimit) && (
                                        <TimelineOppositeContent style={timeOC}>
                                            <Typography variant="body2">
                                                <Date dateString={edu.startDate} /> - <Date dateString={edu.endDate} />
                                            </Typography>
                                            <Typography variant="body2"
                                                style={{ color: "#FFFFFF", fontFamily: 'Lato', fontWeight: '400' }}
                                            >
                                                {edu.location}
                                            </Typography>
                                        </TimelineOppositeContent>
                                    )}
                                    <TimelineSeparator>
                                        <TimelineDot color="inherit" variant="outlined">
                                            <School />
                                        </TimelineDot>
                                        < TimelineConnector style={{ background: '#4B4D57' }} />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        {(width <= widthLimit) && (
                                            <div>
                                                <Typography variant="body2">
                                                    <Date dateString={edu.startDate} /> - <Date dateString={edu.endDate} />
                                                </Typography>
                                                <Typography variant="body2"
                                                    style={{ color: "#FFFFFF", fontFamily: 'Lato', fontWeight: '400' }}
                                                >
                                                    {edu.location}
                                                </Typography>
                                            </div>
                                        )}
                                        < Paper elevation={3} style={paperStyle}>
                                            <Typography variant="h5"
                                                style={{
                                                    color: "#FFFFF",
                                                    fontFamily: "Lato",
                                                    fontWeight: "400"
                                                }}>
                                                {edu.school}
                                            </Typography>
                                            <Typography variant="h6"
                                                style={{
                                                    color: "#FFFFF",
                                                    fontFamily: "Lato",
                                                    fontWeight: "300"
                                                }}>
                                                {edu.degree}
                                            </Typography>
                                            {(edu.description != "") && (
                                                <div>
                                                    <Typography
                                                        style={descriptionStyle}>
                                                        {edu.description}
                                                    </Typography>
                                                    <Typography style={descriptionStyle}>
                                                        <span style={{ fontWeight: "400" }}>{edu.bachelor}</span> {edu.subDescription}
                                                    </Typography>
                                                </div>
                                            )}
                                        </Paper>
                                    </TimelineContent>
                                </TimelineItem>
                                // ) : (
                                //         <TimelineItem key={`${edu.school}+${i}`}>
                                //             <TimelineOppositeContent style={timeOC}>
                                //                 <Typography variant="body2">
                                //                     <Date dateString={edu.startDate} /> - <Date dateString={edu.endDate} />
                                //                 </Typography>
                                //                 <Typography variant="body2"
                                //                     style={{ color: "#FFFFFF", fontFamily: 'Lato', fontWeight: '400' }}
                                //                 >
                                //                     {edu.location}
                                //                 </Typography>
                                //             </TimelineOppositeContent>
                                //             <TimelineSeparator>
                                //                 <TimelineDot color="inherit" variant="outlined">
                                //                     <School />
                                //                 </TimelineDot>
                                //                 < TimelineConnector style={{ background: '#4B4D57' }} />
                                //             </TimelineSeparator>
                                //             <TimelineContent>
                                //                 <Paper elevation={3} style={paperStyle}>
                                //                     <Typography variant="h5"
                                //                         style={{
                                //                             color: "#FFFFF",
                                //                             fontFamily: "Lato",
                                //                             fontWeight: "400"
                                //                         }}>
                                //                         {edu.school}
                                //                     </Typography>
                                //                     <Typography variant="h6"
                                //                         style={{
                                //                             color: "#FFFFF",
                                //                             fontFamily: "Lato",
                                //                             fontWeight: "300"
                                //                         }}>
                                //                         {edu.degree}
                                //                     </Typography>
                                //                 </Paper>
                                //             </TimelineContent>
                                //         </TimelineItem>
                                //     )
                            )}
                        </Timeline>
                    </div>

                    {/* <h1 className={`${utilStyles.headingXL} ${styles.sectionHeader}`}>
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
                                        </Paper>
                                    </TimelineContent>
                                </TimelineItem>
                            )}
                        </Timeline>
                    </div> */}

                    {/* <h1 className={`${utilStyles.headingXL} ${styles.sectionHeader}`}>
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
                                    </TimelineContent>
                                </TimelineItem>
                            )}
                        </Timeline>
                    </div> */}
                </div>
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