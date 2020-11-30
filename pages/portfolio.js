
import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import styles from '../styles/Portfolio.module.css'
import utilStyles from '../styles/utils.module.css'
import stringClean from '../utils/stringClean.js'
import GitHub from '@material-ui/icons/GitHub'

export const site = 'Portfolio'

function Portfolio({ repos, projectImages }) {

    return (
        <>
            <Head>
                <title>{site}</title>
            </Head>
            <div className={styles.portfolioContent}>
                <div className={styles.introText}>
                    Here are some in- and out-of-school projects I’ve worked on.
                </div>
                <div className={styles.projectsWrapper}>

                    {/* ZPEJA */}
                    <a className={styles.project} href="https://zpeja.com/" target="_blank">
                        <div className={styles.projectContent}>
                            <img
                                src="/images/projects/zpeja.png"
                                className={styles.projectImage}
                                alt="zpeja.com"
                            />
                            <div className={styles.imageOverlay} />
                            <div className={styles.textContainer}>
                                <h2 className={`${utilStyles.headingLg} ${styles.projHeading}`}>
                                    Bachelor project
                                </h2>
                                <div className={styles.descLink}>
                                    <div className={styles.description}>
                                        Zpeja.com - An online price comparison service which collects data by web scraping online stores.
                                        My focus laid on collecting, comparing and organizing data with Python scripts.
                                        The project has continued after the course’s end.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>

                    {/* THE REST OF THE PROJECTS */}
                    {repos.map((repo) =>
                        repo.name != 'Resume_Portfolio_Website' && (

                            repo.homepage ? (
                                <a className={styles.project} href={repo.homepage} key={repo.homepage} target="_blank">
                                    <div className={styles.projectContent}>
                                        {(projectImages.includes(`${repo.name}.png`)) ? (
                                            <img
                                                src={`/images/projects/${repo.name}.png`}
                                                className={styles.projectImage}
                                                alt={repo.name}
                                            />
                                        ) : (
                                                <img
                                                    src="/images/projects/placeholder.png"
                                                    className={styles.projectImage}
                                                    alt={repo.name}
                                                />
                                            )}
                                        <div className={styles.imageOverlay} />
                                        <div className={styles.textContainer}>
                                            <h2 className={`${utilStyles.headingLg} ${styles.projHeading}`}>
                                                {stringClean(repo.name)}
                                            </h2>
                                            <div className={styles.descLink}>
                                                <div className={styles.description}>
                                                    {repo.description}
                                                    {/* <br /><br /> */}
                                                </div>
                                                <a href={repo.html_url} target="_blank" >
                                                    <h4 className={`${utilStyles.headingSm} ${utilStyles.forIconText}`}>
                                                        <GitHub style={{ paddingRight: "0.5rem" }} />
                                                    GitHub repo
                                                </h4>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            ) : (
                                    // <Link href={repo.html_url} key={repo.html_url} >
                                    // <a className={styles.project} target="_blank">
                                    <a className={styles.project} href={repo.html_url} key={repo.html_url} target="_blank" >
                                        <div className={styles.projectContent}>
                                            {projectImages.includes(`${repo.name}.png`) ? (
                                                <img
                                                    src={`/images/projects/${repo.name}.png`}
                                                    className={styles.projectImage}
                                                    alt={repo.name}
                                                />
                                            ) : (
                                                    <img
                                                        src="/images/projects/placeholder.png"
                                                        className={styles.projectImage}
                                                        alt={repo.name}
                                                    />
                                                )}
                                            <div className={styles.imageOverlay}></div>
                                            <div className={styles.textContainer}>
                                                <h2 className={`${utilStyles.headingLg} ${styles.projHeading}`}>
                                                    {stringClean(repo.name)}
                                                </h2>
                                                <div className={styles.descLink}>
                                                    <div className={styles.description}>
                                                        {repo.description}
                                                        {/* <br /><br /> */}
                                                    </div>
                                                    <div>
                                                        <a href={repo.html_url} target="_blank" >
                                                            <h4 className={`${utilStyles.headingSm} ${utilStyles.forIconText}`}>
                                                                <GitHub style={{ paddingRight: "0.5rem" }} />
                                                                GitHub repo
                                                            </h4>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                )
                        )
                    )}
                </div>
            </div >
        </>
    )
}


export async function getStaticProps() {
    const resp = await fetch('https://api.GitHub.com/users/jacobmolin/repos?per_page=50')
    let repos = []
    const projectImagesDir = path.join(process.cwd(), 'public/images/projects')
    const projectImages = fs.readdirSync(projectImagesDir)

    if (resp.status == 200) {
        repos = await resp.json()
        // console.log(repos)
    } else {
        console.error('Could not fetch data!')
        console.error(resp.status, resp.statusText)
    }

    return {
        props: {
            repos,
            projectImages,
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every second
        revalidate: 60 * 5, // In seconds
    }
}

export default Portfolio