import Head from 'next/head'
import Link from 'next/link'
// import { useState, useEffect } from 'react'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import stylesP from '../styles/Portfolio.module.css'
import utilStyles from '../styles/utils.module.css'
import stringClean from '../utils/stringClean.js'

export const site = 'Portfolio'

function Portfolio({ repos }) {
    // console.log(repos[0])



    return (

        <Layout>
            <Head>
                <title>{site}</title>
            </Head>
            {/* <h1 className={styles.title}>{site}</h1> */}

            <div className={stylesP.projWrapper}>
                {repos.map((repo, i) =>
                    <Link href={repo.html_url} key={repo.html_url} >
                        <a className={stylesP.project}>
                            <img
                                src="/images/profile.jpg"
                            // className={}
                            // alt={'Jacob Molin'}
                            />
                            <div>
                                <div className={utilStyles.headingLg}>
                                    {stringClean(repo.name)}
                                </div>
                                <div>
                                    {repo.description}
                                </div>
                            </div>
                        </a>
                    </Link>
                )}
            </div>
        </Layout >
    )
}


export async function getStaticProps() {
    const resp = await fetch('https://api.github.com/users/jacobmolin/repos?per_page=50')
    let repos = []

    if (resp.status == 200) {
        repos = await resp.json()
    } else {
        console.error('Could not fetch data!')
        console.error(resp.status, resp.statusText)
    }

    return {
        props: {
            repos,
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every second
        revalidate: 60 * 5, // In seconds
    }
}



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