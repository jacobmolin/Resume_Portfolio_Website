import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Phone from '@material-ui/icons/Phone'
import MailOutline from '@material-ui/icons/MailOutline'
import GitHub from '@material-ui/icons/GitHub'
import LinkedIn from '@material-ui/icons/LinkedIn'

// INFO REMOVED FROM GITHUB REPOS BECAUSE TOO MUCH TEXT IN DESCRIPTION
// during my masters in Data Technologies at Linköping University, Sweden

export const site = "Contact"

function Contact({ data }) {
    return (
        <>
            <Head>
                <title>{site}</title>
            </Head>
            <div>
                <h1>Contact</h1>
                <div className={utilStyles.contact}>
                    <a href={`mailto: ${data.basics.email}`}>
                        <h4 className={`${utilStyles.headingSm} ${utilStyles.forIconText}`}>
                            <MailOutline style={{ paddingRight: "0.5rem" }} />
                            {data.basics.email}
                        </h4>
                    </a>
                    <a href={`tel:${data.basics.phone}`}>
                        <h4 className={`${utilStyles.headingSm} ${utilStyles.forIconText}`}>
                            <Phone style={{ paddingRight: "0.5rem" }} />
                            {data.basics.phone}
                        </h4>
                    </a>
                    <a href={data.links[1].url} target="_blank" >
                        <h4 className={`${utilStyles.headingSm} ${utilStyles.forIconText}`}>
                            <GitHub style={{ paddingRight: "0.5rem" }} />
                            {data.links[1].label}
                        </h4>
                    </a>
                    <a href={data.links[2].url} target="_blank" >
                        <h4 className={`${utilStyles.headingSm} ${utilStyles.forIconText}`}>
                            <LinkedIn style={{ paddingRight: "0.5rem" }} />
                            {data.links[2].label}
                        </h4>
                    </a>
                    {/* {data.links.map((link) =>
                    ((link.label != 'JacobMolin.com') && (
                        <a href={link.url} key={link.label} target="_blank" >
                            <h4 className={`${utilStyles.headingSm} ${utilStyles.forIconText}`}>
                                <GitHub style={{ paddingRight: "0.5rem" }} />
                                {link.label}
                            </h4>
                        </a>
                    ))
                )} */}
                </div>
            </div>
        </>
    )
}
export default Contact


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