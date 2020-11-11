import styles from '../styles/Resume.module.css'
import utilStyles from '../styles/utils.module.css'

function SideBar({ data }) {
    console.log("data", data)
    return (
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
    )
}

export default SideBar