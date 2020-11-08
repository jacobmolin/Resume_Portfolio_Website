
import Head from 'next/head'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import Layout from '../components/layout'
import stylesH from '../styles/Home.module.css'
import styles from '../styles/Portfolio.module.css'
import utilStyles from '../styles/utils.module.css'
import stringClean from '../utils/stringClean.js'

export const site = 'Portfolio'
// export const projectPreviews = ['diatot.png', 'vizWiz.png']

function Portfolio({ repos, projectImages }) {

    return (
        <>
            <Head>
                <title>{site}</title>
            </Head>
            <h1>Here are some in- and out-of-school projects I’ve worked on.</h1>
            <div className={styles.projectsWrapper}>
                {repos.map((repo, i) =>
                    repo.homepage ? (
                        <Link href={repo.homepage} key={repo.homepage} target="_blank">
                            <a className={styles.project}>
                                <div className={styles.projectContent}>
                                    {(projectImages.includes(`${repo.name}.png`)) ? (
                                        // <Link href={repo.homepage} key={repo.homepage} target="_blank">
                                        <img
                                            src={`/images/${repo.name}.png`}
                                            className={styles.projectImage}
                                            alt={repo.name}
                                        />

                                        // </Link>
                                    ) : (
                                            // <Link href={repo.homepage} key={repo.homepage} target="_blank">

                                            <img
                                                src="/images/placeholder.png"
                                                className={styles.projectImage}
                                                alt={repo.name}
                                            />

                                            // </Link>
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