
import Head from 'next/head'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
// import { useState, useEffect } from 'react'
import Layout from '../components/layout'
import stylesH from '../styles/Home.module.css'
import styles from '../styles/Portfolio.module.css'
import utilStyles from '../styles/utils.module.css'
import stringClean from '../utils/stringClean.js'

export const site = 'Portfolio'
export const projectPreviews = ['diatot.png', 'vizWiz.png']


// export const projects = [
//     {
//         name: "Project 1",
//         description:
//             "LORem IPSUM LORem IPSUM LORem IPSUM LORem IPSUM LORem IPSUM ",
//         image: "/images/realdq-mockup.jpg",
//     },
//     {
//         name: "Project 2",
//         description:
//             "LORem IPSUM LORem IPSUM LORem IPSUM LORem IPSUM LORem IPSUM ",
//         image: "/images/mockup-PS.jpg",
//     },
//     {
//         name: "Project 3",
//         description:
//             "LORem IPSUM LORem IPSUM LORem IPSUM LORem IPSUM LORem IPSUM ",
//         image: "/images/kr-mockup.jpg",
//     },
//     {
//         name: "Project 4",
//         description:
//             "LORem IPSUM LORem IPSUM LORem IPSUM LORem IPSUM LORem IPSUM ",
//         image: "/images/bp-mockup.jpg",
//     },
// ]

// 'CPP_Mulifiles_VSCode', 
//     'Resume_Portfolio_Website', 
// const projectImages = ['diatot', 'VizWiz']

function Portfolio({ repos, projectImages }) {
    // const projectImages = fs.readdirSync(projectImagesDir)
    // console.log(repos)

    // const [hidden, setHidden] = useState(true);
    // console.log("hidden:", hidden);

    return (

        <>
            <Head>
                <title>{site}</title>
            </Head>

            {/* <div className="projectWrapper">
                {projects.map((proj, i) => {
                    return hidden ? (
                        <div className="project" ref={`projRef${i}`} key={`projName${i}`}>
                            <img className="boxPic" src={proj.image}></img>
                            <h3
                                className="projectName"
                                onClick={() => setHidden(false)}>
                                {proj.name}
                            </h3>
                        </div>
                    ) : (
                            <div className="project" key={`projName${i}`}>
                                <img
                                    className="boxPic"
                                    style={{ opacity: "0.5" }}
                                    src={proj.image}></img>
                                <p className="info" onClick={() => setHidden(true)}>
                                    {proj.description}
                                </p>
                            </div>
                        )
                }
                )}
            </div> */}

            <div className={styles.projectsWrapper}>
                {repos.map((repo, i) =>
                    repo.homepage ? (
                        <Link href={repo.homepage} key={repo.homepage} target="_blank">
                            <a className={styles.project} target="_blank">
                                <div className={styles.projectContent}>
                                    {(projectImages.includes(`${repo.name}.png`)) ? (
                                        <img
                                            src={`/images/${repo.name}.png`}
                                            className={styles.projectImage}
                                            alt={repo.name}
                                        />

                                    ) : (
                                            <img
                                                src="/images/placeholder.png"
                                                className={styles.projectImage}
                                                alt={repo.name}
                                            />
                                        )}
                                    <div className={styles.imageOverlay} />
                                    <div className={styles.textContainer}>
                                        <div className={utilStyles.headingLg} >
                                            {stringClean(repo.name)}
                                        </div>
                                        <div className={styles.description}>
                                            {repo.description}
                                            <br /><br />
                                            Github link: <Link href={repo.html_url} key={repo.html_url} ><a>{repo.html_url}</a></Link>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    ) : (
                            <Link href={repo.html_url} key={repo.html_url} >
                                <a className={styles.project} target="_blank">
                                    <div className={styles.projectContent}>
                                        {projectImages.includes(stringClean(repo.name)) ? (
                                            <img
                                                src={`/images/${repo.name}.png`}
                                                className={styles.projectImage}
                                                alt={repo.name}
                                            />

                                        ) : (
                                                <img
                                                    src="/images/placeholder.png"
                                                    className={styles.projectImage}
                                                    alt={repo.name}
                                                />
                                            )}
                                        <div className={styles.imageOverlay}></div>
                                        <div className={styles.textContainer}>
                                            <div className={utilStyles.headingLg} >
                                                {stringClean(repo.name)}
                                            </div>
                                            <div className={styles.description}>
                                                {repo.description}
                                                <div>Github link: <Link href={repo.html_url} key={repo.html_url} ><a>{repo.html_url}</a></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        )

                )}
            </div>
        </>
    )
}


export async function getStaticProps() {
    const resp = await fetch('https://api.github.com/users/jacobmolin/repos?per_page=50')
    let repos = []
    const projectImagesDir = path.join(process.cwd(), 'public/images')
    const projectImages = fs.readdirSync(projectImagesDir)
    // (fs.existsSync(`${projectImagesDir + repo.name}.png`))
    if (resp.status == 200) {
        repos = await resp.json()

        // repos.forEach((r) => {
        //     console.log(r.name)
        //     if (projectImages.includes(r.name)) {
        //         console.log(r.name)
        //     }
        // })
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





{/* <div className={styles.projectsWrapper}>
    {repos.map((repo, i) =>
        repo.homepage ? (
            <Link href={repo.homepage} key={repo.homepage} >
                <a className={styles.project}>
                    <div className={styles.projectContent}>

                        <img
                            src="/images/diatot.png"
                            className={styles.projectImage}
                            alt={repo.name}
                        />
                        <div className={styles.imageOverlay}> </div>
                        <div className={styles.textContainer}>
                            <div className={utilStyles.headingLg} >
                                {stringClean(repo.name)}
                            </div>
                            <div className={styles.description}>
                                {repo.description}
                                <br /><br />
                                            Github link: <Link href={repo.html_url} key={repo.html_url} ><a>{repo.html_url}</a></Link>
                                </div>
                        </div>
                    </div>
                </a>
            </Link>
        ) : (
                <Link href={repo.html_url} key={repo.html_url} >
                    <a className={styles.project}>
                        <div className={styles.projectContent}>

                            <img
                                src="/images/vizWiz.png"
                                className={styles.projectImage}
                                alt={repo.name}
                            />
                            <div className={styles.imageOverlay}></div>
                            <div className={styles.textContainer}>
                                <div className={utilStyles.headingLg} >
                                    {stringClean(repo.name)}
                                </div>
                                <div className={styles.description}>
                                    {repo.description}
                                    <div>Github link: <Link href={repo.html_url} key={repo.html_url} ><a>{repo.html_url}</a></Link></div>
                                    </div>
                            </div>
                        </div>
                    </a>
                </Link>
            )

    )}
</div> */}











// export async function getServerSideProps() {
//     // Get external data from the file system, API, DB etc.
//     const resp = await fetch('https://api.github.com/users/jacobmolin/repos?per_page=50')
//     const data = await resp.json()
//     const urls = []
//     console.log(data)

//     // data.forEach(repo => {
//     //     urls.push(repo['html_url'])
//     // });

//     // console.log('data:', data)
//     // const urls = ['123', '234']
//     // console.log(urls)

//     // The value of the 'props' key will be
//     // passed to the 'Portfolio' component
//     return {
//         props: {
//             urls
//         }
//     }
// }




// USE STATE SOLUTION
// const [data, setData] = useState([])

// useEffect(() => {
//     fetchData()
// }, []);

// const fetchData = async () => {
//     const resp = await fetch('https://api.github.com/users/jacobmolin/repos?per_page=50')

//     if (resp.status == 200) {
//         setData(await resp.json())
//     } else {
//         console.error('Could not fetch data!')
//     }
// }

// console.log(data)




// const [data, setData] = useState([])

// useEffect(() => {
//     // DIFFERENT WAY
//     fetch('https://api.github.com/users/jacobmolin/repos?per_page=50')
//         .then((resp) => resp.json())
//         .then((res_data) => {
//             // console.log('data: ', res_data)
//             setData(res_data)
//         })
//     fetchData()
// }, []);

// OLD WAY
// async function fetchData() {
//     const resp = await fetch('https://api.github.com/users/jacobmolin/repos?per_page=50')

//     if (resp.status == 200) {
//         setData(await resp.json())
//     } else {
//         console.error('Could not fetch data!')
//     }
// }
export default Portfolio