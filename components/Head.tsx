import NextHead from 'next/head'
import { useRouter } from 'next/router'
import { MetaProps } from "../types"

export const WEBSITE_HOST_URL = 'https://bobbyross.dev'

const Head = ({ customMeta }: { customMeta?: MetaProps }) => {
    const router = useRouter()
    const meta: MetaProps = {
        title: "Bobby Ross Website",
        description: 'Software developer, Gamer , Geek',
        image: `${WEBSITE_HOST_URL}/images/site-preview.png`,
        type: 'website',
        ...customMeta
    }
    return (
        <NextHead>
            <title>{meta.title}</title>
            <meta content={meta.description} name="description" />
            <meta property="og:url" content={`${WEBSITE_HOST_URL}${router.asPath}`} />
            <link rel="canonical" href={`${WEBSITE_HOST_URL}${router.asPath}`} />
        </NextHead>
    )
}

export default Head;
