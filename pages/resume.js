import Head from "next/head";
import styles from "../styles/Resume.module.css";
import utilStyles from "../styles/utils.module.css";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Timeline,
  TimelineItem as MuiTimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from "@material-ui/lab";
import School from "@material-ui/icons/School";
import LocationOn from "@material-ui/icons/LocationOn";
import Work from "@material-ui/icons/Work";
import Assignment from "@material-ui/icons/Assignment";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Date from "../components/date";
import useWindowSize from "../utils/useWindowSize.js";
import data from "../public/data/resume";
// import resumePDF from "../public/data/CV_jacobmolin.pdf";

export const site = "Resume";
export const name = "Jacob Molin";

const TimelineItem = withStyles({
  missingOppositeContent: {
    "&:before": {
      display: "none",
    },
  },
})(MuiTimelineItem);

const useStyles = makeStyles({
  //theme => (
  wrapIcon: {
    verticalAlign: "middle",
    display: "inline-flex",
  },
  timePlace: {
    flex: "none",
    justifyContent: "space-around",
    minWidth: "168px",
    padding: "6px 10px",
    border: "1px solid red",
    // backgroundColor: 'red',
    // style={{ flex: "none", justifyContent: 'space-around', minWidth: '168px', padding: '6px 10px' }}
  },
  text: {
    // style={{ color: "#FFFFFF", fontFamily: 'Lato', fontWeight: '400' }}
    color: "#FFFFFF",
    fontFamily: "Lato",
    fontWeight: "400",
  },
  test1: {
    // color: "#FFFFF",
    color: "red",
    fontFamily: "Lato",
    fontWeight: "300",
    lineHeight: "25px",
    letterSpacing: "0.5px",
    paddingTop: "0.7rem",
  },
}); //)

function Resume() {
  const { width } = useWindowSize();
  const widthLimit = 800;
  // const classes = useStyles()

  const timeOC = {
    flex: "none",
    justifyContent: "space-around",
    minWidth: "168px",
    padding: "6px 10px",
  };
  const dateLoc = {
    color: "#FFFFFF",
    fontFamily: "Lato",
    fontWeight: "400",
  };

  const paperStyle = {
    background: "none",
    border: "1px solid #4B4D57",
    marginTop: "1rem",
    marginBottom: "1rem",
    // padding: "1.5rem",
    padding: "1.5rem 1rem 1.5rem 1.5rem",
    maxWidth: "625px",
  };
  const descriptionStyle = {
    color: "#FFFFF",
    fontFamily: "Lato",
    fontWeight: "300",
    lineHeight: "25px",
    letterSpacing: "0.5px",
    paddingTop: "0.7rem",
  };
  const lato400 = {
    color: "#FFFFF",
    fontFamily: "Lato",
    fontWeight: "400",
  };
  const lato300 = {
    color: "#FFFFF",
    fontFamily: "Lato",
    fontWeight: "300",
  };
  const timeLineStyle = {
    marginTop: "0",
    paddingLeft: "0",
    paddingRight: "0",
  };

  return (
    <>
      <Head>
        <title>{site}</title>
      </Head>
      <div className={styles.resumeWrapper}>
        <div className={styles.topInfo}>
          <div
            className={`${styles.imageWrapper} ${utilStyles.borderCircleParent}`}
          >
            <img
              src="/images/profile.jpg"
              className={`${styles.headerImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
          </div>
          <div>
            <div className={styles.basicInfo}>
              <h1 className={styles.name}>{data.basics.name}</h1>
              <div className={utilStyles.lightText}>
                {data.basics.currentTitel}
              </div>
              {width > widthLimit && (
                <div
                  className={`${utilStyles.lightText} ${utilStyles.forIconText}`}
                >
                  <LocationOn style={{ paddingRight: "0.5rem" }} />
                  {data.basics.location}
                </div>
              )}
              {/* {width <= widthLimit && (
                <div className={styles.download}>
                  <a href={resumePDF} download>
                    PDF download
                  </a>
                </div>
              )} */}
            </div>

            {/* {width > widthLimit && (
              <div className={styles.download}>
                <a href="/data/CV_jacobmolin.pdf" download>
                  PDF download
                </a>
              </div>
            )} */}
          </div>
        </div>

        <div className={styles.resume}>
          <div className={styles.mainBar}>
            <div className={styles.upperResume}>
              <div className={styles.profile}>
                <h1
                  className={`${utilStyles.headingXL} ${styles.sectionHeader}`}
                >
                  Profile
                </h1>
                <span>
                  {/* className={styles.profile}> */}
                  {data.profile}
                </span>
                <br />
                <br />
                <span>
                  {/* className={styles.profile}> */}
                  {data.profile2}
                </span>
              </div>
            </div>

            {width <= widthLimit && (
              <div className={styles.sideBar}>
                <div className={styles.sideBarContainer}>
                  <h1
                    className={`${utilStyles.headingXL} ${styles.sectionHeader}`}
                  >
                    Skills
                  </h1>
                  <div className={styles.skills}>
                    {data.skills[0].keywords.map((skill, i) => (
                      <div key={`${skill}+${i}`}>{skill}</div>
                    ))}
                  </div>
                </div>
                <div className={styles.sideBarContainer}>
                  <h1
                    className={`${utilStyles.headingXL} ${styles.sectionHeader}`}
                  >
                    Languages
                  </h1>
                  <div className={styles.languages}>
                    {data.languages.map(
                      (lang, i) =>
                        lang.language != "French" && (
                          <div key={`${lang.language}+${i}`}>
                            {lang.language}
                          </div>
                        )
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* EDUCATION */}
            <div className={styles.lowerResume}>
              <h1 className={`${utilStyles.headingXL} ${styles.sectionHeader}`}>
                Education
              </h1>
              <div className={styles.timelineWrapper}>
                <Timeline align="left" style={timeLineStyle}>
                  {data.education.map((edu, i) => (
                    <TimelineItem key={`${edu.school}+${i}`}>
                      {width > widthLimit && (
                        <TimelineOppositeContent style={timeOC}>
                          <Typography variant="body2">
                            <Date dateString={edu.startDate} /> -{" "}
                            <Date dateString={edu.endDate} />
                          </Typography>
                          <Typography variant="body2" style={lato400}>
                            {edu.location}
                          </Typography>
                        </TimelineOppositeContent>
                      )}
                      <TimelineSeparator>
                        <TimelineDot color="inherit" variant="outlined">
                          <School />
                        </TimelineDot>
                        <TimelineConnector style={{ background: "#4B4D57" }} />
                      </TimelineSeparator>
                      <TimelineContent>
                        {width <= widthLimit && (
                          <div>
                            <Typography variant="body2">
                              <Date dateString={edu.startDate} /> -{" "}
                              <Date dateString={edu.endDate} />
                            </Typography>
                            <Typography variant="body2" style={lato400}>
                              {edu.location}
                            </Typography>
                          </div>
                        )}
                        <Paper elevation={3} style={paperStyle}>
                          <Typography variant="h5" style={lato400}>
                            {edu.degree}
                          </Typography>
                          <Typography variant="h6" style={lato300}>
                            {edu.school}
                          </Typography>
                          {edu.description != "" && (
                            <div>
                              <Typography style={descriptionStyle}>
                                {edu.description}
                              </Typography>
                              <Typography style={descriptionStyle}>
                                <span style={{ fontWeight: "600" }}>
                                  {edu.bachelor}
                                </span>{" "}
                                {edu.subDescription}
                              </Typography>
                            </div>
                          )}
                        </Paper>
                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </Timeline>
              </div>

              {/* WORK */}
              <h1 className={`${utilStyles.headingXL} ${styles.sectionHeader}`}>
                Work
              </h1>
              <div className={styles.timelineWrapper}>
                <Timeline align="left" style={timeLineStyle}>
                  {data.work.map((work, i) => (
                    <TimelineItem key={`${work.company}+${i}`}>
                      {width > widthLimit && (
                        <TimelineOppositeContent style={timeOC}>
                          <Typography variant="body2" style={dateLoc}>
                            <Date dateString={work.startDate} /> -{" "}
                            <Date dateString={work.endDate} />
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
                        <TimelineConnector style={{ background: "#4B4D57" }} />
                      </TimelineSeparator>
                      <TimelineContent>
                        {width <= widthLimit && (
                          <div>
                            <Typography variant="body2">
                              <Date dateString={work.startDate} /> -{" "}
                              <Date dateString={work.endDate} />
                            </Typography>
                            <Typography variant="body2" style={lato400}>
                              {work.location}
                            </Typography>
                          </div>
                        )}
                        <Paper elevation={3} style={paperStyle}>
                          <Typography
                            variant="h5"
                            component="h1"
                            style={{
                              color: "#FFFFF",
                              fontFamily: "Lato",
                              fontWeight: "400",
                            }}
                          >
                            {work.position}
                          </Typography>
                          <Typography
                            variant="h6"
                            component="h3"
                            style={{
                              color: "#FFFFF",
                              fontFamily: "Lato",
                              fontWeight: "300",
                            }}
                          >
                            {work.company}
                          </Typography>
                          <Typography
                            style={{
                              color: "#FFFFF",
                              fontFamily: "Lato",
                              fontWeight: "300",
                              lineHeight: "25px",
                              letterSpacing: "0.5px",
                              paddingTop: "0.7rem",
                            }}
                          >
                            {work.summary}
                          </Typography>
                        </Paper>
                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </Timeline>
              </div>

              {/* COMMISSIONS OF TRUST */}
              <h1 className={`${utilStyles.headingXL} ${styles.sectionHeader}`}>
                Commissions of Trust
              </h1>
              <div className={styles.timelineWrapper}>
                <Timeline align="left" style={timeLineStyle}>
                  {data.commissionOfTrust.map((com, i) => (
                    <TimelineItem key={`${com.entity}+${i}`}>
                      {width > widthLimit && (
                        <TimelineOppositeContent style={timeOC}>
                          <Typography variant="body2" style={dateLoc}>
                            <Date dateString={com.startDate} /> -{" "}
                            <Date dateString={com.endDate} />
                          </Typography>
                          <Typography variant="body2" style={lato400}>
                            {com.location}
                          </Typography>
                        </TimelineOppositeContent>
                      )}
                      <TimelineSeparator>
                        <TimelineDot color="inherit" variant="outlined">
                          <Assignment />
                        </TimelineDot>
                        <TimelineConnector style={{ background: "#4B4D57" }} />
                      </TimelineSeparator>
                      <TimelineContent>
                        {width <= widthLimit && (
                          <div>
                            <Typography variant="body2">
                              <Date dateString={com.startDate} /> -{" "}
                              <Date dateString={com.endDate} />
                            </Typography>
                            <Typography variant="body2" style={lato400}>
                              {com.location}
                            </Typography>
                          </div>
                        )}
                        <Paper elevation={3} style={paperStyle}>
                          <Typography
                            variant="h5"
                            component="h1"
                            style={{
                              color: "#FFFFF",
                              fontFamily: "Lato",
                              fontWeight: "400",
                            }}
                          >
                            {com.position}
                          </Typography>
                          <Typography
                            variant="h6"
                            component="h3"
                            style={{
                              color: "#FFFFF",
                              fontFamily: "Lato",
                              fontWeight: "300",
                            }}
                          >
                            {com.entity}
                          </Typography>
                          <Typography
                            style={{
                              color: "#FFFFF",
                              fontFamily: "Lato",
                              fontWeight: "300",
                              lineHeight: "25px",
                              letterSpacing: "0.5px",
                              paddingTop: "0.7rem",
                            }}
                          >
                            {com.summary}
                          </Typography>
                        </Paper>
                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </Timeline>
              </div>

              {/* INTERNSHIPS */}
              <h1 className={`${utilStyles.headingXL} ${styles.sectionHeader}`}>
                Internships
              </h1>
              <div className={styles.timelineWrapper}>
                <Timeline align="left" style={timeLineStyle}>
                  {data.internships.map((intern, i) => (
                    <TimelineItem key={`${intern.company}+${i}`}>
                      {width > widthLimit && (
                        <TimelineOppositeContent style={timeOC}>
                          <Typography variant="body2">
                            <Date dateString={intern.startDate} /> -{" "}
                            <Date dateString={intern.endDate} />
                          </Typography>
                          <Typography variant="body2" style={lato400}>
                            {intern.location}
                          </Typography>
                        </TimelineOppositeContent>
                      )}
                      <TimelineSeparator>
                        <TimelineDot color="inherit" variant="outlined">
                          <School />
                        </TimelineDot>
                        <TimelineConnector style={{ background: "#4B4D57" }} />
                      </TimelineSeparator>
                      <TimelineContent>
                        {width <= widthLimit && (
                          <div>
                            <Typography variant="body2">
                              <Date dateString={intern.startDate} /> -{" "}
                              <Date dateString={intern.endDate} />
                            </Typography>
                            <Typography variant="body2" style={lato400}>
                              {intern.location}
                            </Typography>
                          </div>
                        )}
                        <Paper elevation={3} style={paperStyle}>
                          <Typography variant="h5" style={lato400}>
                            {intern.position}
                          </Typography>
                          <Typography variant="h6" style={lato300}>
                            {intern.summary}
                          </Typography>
                        </Paper>
                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </Timeline>
              </div>
            </div>
          </div>

          {/* <SideBar data /> */}
          {width > widthLimit && (
            <div className={styles.sideBar}>
              <div className={styles.sideBarContainer}>
                <h1
                  className={`${utilStyles.headingXL} ${styles.sectionHeader}`}
                >
                  Skills
                </h1>
                <div className={styles.skills}>
                  {data.skills[0].keywords.map((skill, i) => (
                    <div key={`${skill}+${i}`}>{skill}</div>
                  ))}
                </div>
              </div>
              <div className={styles.sideBarContainer}>
                <h1
                  className={`${utilStyles.headingXL} ${styles.sectionHeader}`}
                >
                  Languages
                </h1>
                <div className={styles.languages}>
                  {data.languages.map(
                    (lang, i) =>
                      lang.language != "French" && (
                        <div key={`${lang.language}+${i}`}>{lang.language}</div>
                      )
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Resume;
