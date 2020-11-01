import Head from 'next/head'
import Layout from '../components/layout'
import stylesH from '../styles/Home.module.css'
import styles from '../styles/Resume.module.css'
import utilStyles from '../styles/utils.module.css'
import { makeStyles } from '@material-ui/core/styles'
import Timeline from '@material-ui/lab/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
import FastfoodIcon from '@material-ui/icons/Fastfood'
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
// import HotelIcon from '@material-ui/icons/Hotel';
// import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Date from '../components/date'
// import { palette } from '@material-ui/system';

export const site = 'Resume'
export const name = 'Jacob Molin'

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        bacngroundColor: theme.palette.secondary.main,
    },
}))

function Resume({ data }) {
    // const classes = useStyles()
    console.log('data edu length', data.education.length)
    console.log(data.education)
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
                        <h4>{data.basics.name}</h4>
                        <h4>{data.basics.currentTitel}</h4>
                        <h4>{data.basics.email}</h4>
                    </div>
                </div>
                <div className={styles.profile}>
                    {data.profile}
                </div>

                <h1 className={utilStyles.headingXL}>Education</h1>
                <div className={styles.timelineWrapper}>
                    <Timeline align="left" key={'hey'}>
                        {data.education.map((edu, i) =>
                            <TimelineItem key={edu.school}>
                                <TimelineOppositeContent style={{ justifyContent: "space-around" }}>
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
                                    {(i < data.education.length - 1) &&
                                        < TimelineConnector />
                                    }
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Paper elevation={3} style={{ padding: "1rem" }}>
                                        <Typography variant="h5" component="h1" style={{ color: "gray" }}>
                                            {edu.school}
                                        </Typography>
                                        <Typography variant="h6" component="h2" style={{ color: "gray" }}>
                                            {edu.degree}
                                        </Typography>
                                        <Typography style={{ color: "gray" }}>
                                            {edu.description}
                                        </Typography>
                                    </Paper>
                                </TimelineContent>
                            </TimelineItem>
                        )}
                    </Timeline>
                </div>

                <h1 className={utilStyles.headingXL}>Work</h1>
                <div className={styles.timelineWrapper}>
                    <Timeline align="alternate">
                        {data.work.map((work, i) =>
                            <TimelineItem>
                                <TimelineOppositeContent>
                                    <Typography variant="body2" color="textSecondary">
                                        <Date dateString={work.startDate} /> - <Date dateString={work.endDate} />
                                        {/* (data.work[0].endDate == ' ') ? (data.work[0].endDate) : ('Present') */}
                                    </Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot>
                                        <FastfoodIcon />
                                    </TimelineDot>
                                    {(i < data.work.length - 1) &&
                                        < TimelineConnector />
                                    }
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