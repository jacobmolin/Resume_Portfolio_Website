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
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Date from '../components/date'

export const site = 'Resume'
export const name = 'Jacob Molin'

const useStyles = makeStyles({
    paper: {
        // padding: '6px 16px',
        padding: '1rem',
        // backgroundColor: 'rgb(255,0,0)',
        // backgroundColor: theme.palette.secondary.main,
    },
    // secondaryTail: {
    //     backgroundColor: theme.palette.secondary.main,
    // },
    timePlace: {
        flex: 'none',
        justifyContent: 'space-around',
        minWidth: '160px',
        padding: '6px 10px',
    }
})

function Resume({ data }) {
    const classes = useStyles();

    // console.log('data edu length', data.education.length)
    console.log(data.profile)

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
                        <h4>{data.basics.email}</h4>
                    </div>
                </div>
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

                <h1 className={`${utilStyles.headingXL} ${styles.sectionHeader}`}>Education</h1>
                <div className={styles.timelineWrapper}>
                    <Timeline align="left" key={'hey'} style={{ marginTop: "0" }}>
                        {data.education.map((edu, i) =>
                            <TimelineItem key={edu.school}>
                                <TimelineOppositeContent style={{ flex: "none", justifyContent: 'space-around', minWidth: '160px', padding: '6px 10px' }}>
                                    <Typography variant="body2" style={{ color: "#EAECF3" }}>
                                        <Date dateString={edu.startDate} /> - <Date dateString={edu.endDate} />
                                    </Typography>
                                    <Typography variant="body2" style={{ color: "#EAECF3" }}>
                                        {edu.location}
                                    </Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot color="primary">
                                        <LaptopMacIcon />
                                    </TimelineDot>
                                    {/* {(i < data.education.length - 1) && */}
                                    < TimelineConnector />
                                    {/* } */}
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Paper elevation={3} style={{
                                        background: "none", marginTop: "1rem", marginBottom: "1rem", padding: "1.5rem"
                                    }}> {/* boxShadow: "0 0 0", borderRadius: '4px', boxShadow: '2px 2px 4px rgb(105, 105, 105)', className={classes.paper}*/}
                                        <Typography variant="h5" component="h1" style={{ color: "#FFFFF", fontFamily: "Lato" }}>
                                            {edu.school}
                                        </Typography>
                                        <Typography variant="h6" component="h2" style={{ color: "#FFFFF", fontFamily: "Lato" }}>
                                            {edu.degree}
                                        </Typography>
                                        <Typography style={{ color: "#FFFFF", fontFamily: "Lato", fontWeight: "300", lineHeight: "25px" }}>{/* */}
                                            {edu.description}
                                        </Typography>
                                    </Paper>
                                </TimelineContent>
                            </TimelineItem>
                        )}
                    </Timeline>
                </div>

                <h1 className={`${utilStyles.headingXL} ${styles.sectionHeader}`}>Work</h1>
                <div className={styles.timelineWrapper}>
                    <Timeline align="alternate">
                        {data.work.map((work, i) =>
                            <TimelineItem>
                                <TimelineOppositeContent>
                                    <Typography variant="body2" color="textSecondary">
                                        <Date dateString={work.startDate} /> - <Date dateString={work.endDate} />
                                    </Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot>
                                        <FastfoodIcon />
                                    </TimelineDot>
                                    {/* {(i < data.work.length - 1) && */}
                                    < TimelineConnector />
                                    {/* } */}
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Paper elevation={3} >
                                        <Typography variant="h6" component="h1">
                                            {work.company}
                                        </Typography>
                                        <Typography>{work.summary}</Typography>
                                    </Paper>
                                </TimelineContent>
                            </TimelineItem>
                        )}
                    </Timeline>
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