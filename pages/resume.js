import Head from 'next/head'
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
import School from '@material-ui/icons/School'
import LocationOn from '@material-ui/icons/LocationOn'
import Work from '@material-ui/icons/Work'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Date from '../components/date'
import useWindowSize from '../utils/useWindowSize.js'
import data from '../public/data/resume'

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

function Resume() {
    const { width } = useWindowSize()
    const widthLimit = 800
    // const classes = useStyles()

    const timeOC = {
        flex: "none",
        justifyContent: 'space-around',
        minWidth: '168px',
        padding: '6px 10px'
    }
    const dateLoc = {
        color: "#FFFFFF",
        fontFamily: 'Lato',
        fontWeight: '400'
    }

    const paperStyle = {
        background: "none",
        border: "1px solid #4B4D57",
        marginTop: "1rem",
        marginBottom: "1rem",
        // padding: "1.5rem",
        padding: "1.5rem 1rem 1.5rem 1.5rem",
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
    const lato400 = {
        color: "#FFFFF",
        fontFamily: "Lato",
        fontWeight: "400"
    }
    const lato300 = {
        color: "#FFFFF",
        fontFamily: "Lato",
        fontWeight: "300"
    }
    const timeLineStyle = {
        marginTop: "0",
        paddingLeft: "0",
        paddingRight: "0"
    }

    return (
        <>
            <Head>
                <title>{site}</title>
            </Head>
            <div className={styles.resumeWrapper}>
                <div className={styles.topInfo}>
                    <div className={`${styles.imageWrapper} ${utilStyles.borderCircleParent}`}>
                        <img
                            src="/images/profile.jpg"
                            className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                            // 
                            alt={name}
                        />
                    </div>
                    <div className={styles.basicInfo}>
                        {/* <div> */}
                        <h1 className={styles.name}>{data.basics.name}</h1>
                        <div className={utilStyles.lightText}>{data.basics.currentTitel}</div>
                        <div className={`${utilStyles.lightText} ${utilStyles.forIconText}`}>
                            <LocationOn style={{ paddingRight: "0.5rem" }} />
                            {data.basics.location}
                        </div>

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

                <div className={styles.resume}>

                    <div className={styles.mainBar}>

                        <div className={styles.upperResume}>
                            <div className={styles.profile}>
                                <h1 className={`${utilStyles.headingXL} ${styles.sectionHeader}`}>
                                    Profile
                                    </h1>
                                <span >{/* className={styles.profile}> */}
                                    {data.profile}

                                </span>
                                <br /><br />
                                <span >{/* className={styles.profile}> */}
                                    {data.profile2}
                                </span>
                            </div>
                        </div>

                        {(width <= widthLimit) && (
                            <div className={styles.sideBar}>
                                <div className={styles.sideBarContainer}>
                                    <h1 className={`${utilStyles.headingXL} ${styles.sectionHeader}`}>
                                        Skills</h1>
                                    <div className={styles.skills}>
                                        {data.skills[0].keywords.map((skill, i) =>
                                            <div key={`${skill}+${i}`}>
                                                {skill}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className={styles.sideBarContainer}>
                                    <h1 className={`${utilStyles.headingXL} ${styles.sectionHeader}`}>
                                        Languages</h1>
                                    <div className={styles.languages}>
                                        {data.languages.map((lang, i) =>
                                            (lang.language != "French") && (
                                                < div key={`${lang.language}+${i}`}>
                                                    {lang.language}
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                                {/* <div className={styles.sideBarContainer}>
                                    <h1 className={`${utilStyles.headingXL} ${styles.sectionHeader}`}>
                                        Links</h1>
                                    <div className={styles.links}>
                                        {data.links.map((link, i) =>
                                            ((link.label != 'JacobMolin.com') && (
                                                < a href={link.url} key={link.label} target="_blank" >
                                                    {link.label}
                                                </a>
                                            ))
                                        )}
                                    </div>
                                </div> */}
                            </div>
                        )}

                        <div className={styles.lowerResume}>
                            <h1 className={`${utilStyles.headingXL} ${styles.sectionHeader}`}>
                                Education</h1>
                            <div className={styles.timelineWrapper}>
                                <Timeline align="left" style={timeLineStyle}>
                                    {data.education.map((edu, i) =>
                                        <TimelineItem key={`${edu.school}+${i}`}>
                                            {(width > widthLimit) && (
                                                <TimelineOppositeContent style={timeOC}>
                                                    <Typography variant="body2">
                                                        <Date dateString={edu.startDate} /> - <Date dateString={edu.endDate} />
                                                    </Typography>
                                                    <Typography variant="body2"
                                                        style={lato400}
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
                                                            style={lato400}
                                                        >
                                                            {edu.location}
                                                        </Typography>
                                                    </div>
                                                )}
                                                < Paper elevation={3} style={paperStyle}>
                                                    <Typography variant="h5"
                                                        style={lato400}>
                                                        {edu.school}
                                                    </Typography>
                                                    <Typography variant="h6"
                                                        style={lato300}>
                                                        {edu.degree}
                                                    </Typography>
                                                    {(edu.description != "") && (
                                                        <div>
                                                            <Typography
                                                                style={descriptionStyle}>
                                                                {edu.description}
                                                            </Typography>
                                                            <Typography style={descriptionStyle}>
                                                                <span style={{ fontWeight: "400" }}>
                                                                    {edu.bachelor}
                                                                </span> {edu.subDescription}
                                                            </Typography>
                                                        </div>
                                                    )}
                                                </Paper>
                                            </TimelineContent>
                                        </TimelineItem>
                                    )}
                                </Timeline>
                            </div>

                            <h1 className={`${utilStyles.headingXL} ${styles.sectionHeader}`}>
                                Work</h1>
                            <div className={styles.timelineWrapper}>
                                <Timeline align="left" style={timeLineStyle}>
                                    {data.work.map((work, i) =>
                                        <TimelineItem key={`${work.company}+${i}`}>
                                            {(width > widthLimit) && (
                                                <TimelineOppositeContent style={timeOC}>
                                                    <Typography variant="body2" style={dateLoc}>
                                                        <Date dateString={work.startDate} /> - <Date dateString={work.endDate} />
                                                    </Typography>
                                                    <Typography variant="body2" style={lato400}>
                                                        {work.location}
                                                    </Typography>
                                                </TimelineOppositeContent>
                                            )}
                                            <TimelineSeparator>
                                                <TimelineDot color="inherit" variant="outlined">
                                                    <Work />
                                                </TimelineDot>
                                                <TimelineConnector style={{ background: '#4B4D57' }} />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                {(width <= widthLimit) && (
                                                    <div>

                                                    </div>
                                                )}
                                                <Paper elevation={3} style={paperStyle}>
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
                            </div>

                            <h1 className={`${utilStyles.headingXL} ${styles.sectionHeader}`}>
                                Internships</h1>
                            <div className={styles.timelineWrapper}>
                                <Timeline align="left" style={timeLineStyle}>
                                    {data.internships.map((intern, i) =>
                                        <TimelineItem key={`${intern.company}+${i}`}>
                                            {(width > widthLimit) && (
                                                <TimelineOppositeContent style={timeOC}>
                                                    <Typography variant="body2">
                                                        <Date dateString={intern.startDate} /> - <Date dateString={intern.endDate} />
                                                    </Typography>
                                                    <Typography variant="body2"
                                                        style={lato400}
                                                    >
                                                        {intern.location}
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
                                                            <Date dateString={intern.startDate} /> - <Date dateString={intern.endDate} />
                                                        </Typography>
                                                        <Typography variant="body2"
                                                            style={lato400}
                                                        >
                                                            {intern.location}
                                                        </Typography>
                                                    </div>
                                                )}
                                                < Paper elevation={3} style={paperStyle}>
                                                    <Typography variant="h5"
                                                        style={lato400}>
                                                        {intern.position}
                                                    </Typography>
                                                    <Typography variant="h6"
                                                        style={lato300}>
                                                        {intern.summary}
                                                    </Typography>
                                                </Paper>
                                            </TimelineContent>
                                        </TimelineItem>
                                    )}
                                </Timeline>
                            </div>
                        </div>
                    </div>
                    {/* <SideBar data /> */}
                    {(width > widthLimit) && (
                        <div className={styles.sideBar}>
                            <div className={styles.sideBarContainer}>
                                <h1 className={`${utilStyles.headingXL} ${styles.sectionHeader}`}>
                                    Skills</h1>
                                <div className={styles.skills}>
                                    {data.skills[0].keywords.map((skill, i) =>
                                        <div key={`${skill}+${i}`}>
                                            {skill}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className={styles.sideBarContainer}>
                                <h1 className={`${utilStyles.headingXL} ${styles.sectionHeader}`}>
                                    Languages</h1>
                                <div className={styles.languages}>
                                    {data.languages.map((lang, i) =>
                                        (lang.language != "French") && (
                                            < div key={`${lang.language}+${i}`}>
                                                {lang.language}
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Resume