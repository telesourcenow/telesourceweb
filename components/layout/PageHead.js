import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "TelesourceNow - AI-Driven Calling Solutions Augmented by Human Expertise"}
                </title>
            </Head>
        </>
    )
}

export default PageHead