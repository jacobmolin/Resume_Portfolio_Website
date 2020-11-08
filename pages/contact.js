function Contact({ data }) {
    return (
        <main>
            <h1>Contact</h1>
            <a href={`mailto: ${data.basics.email}`}>
                <h4>{data.basics.email}</h4>
            </a>
            <a href={`tel:${data.basics.phone}`}>
                <h4>{data.basics.phone}</h4>
            </a>
            {data.links.map((link) =>
                ((link.label != 'JacobMolin.com') && (
                    < a href={link.url} key={link.label} target="_blank" >
                        <h4>{link.label}</h4>
                    </a>
                ))
            )}
        </main>
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