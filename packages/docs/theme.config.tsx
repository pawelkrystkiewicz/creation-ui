import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
import { Logo } from './components/logo'

const BASE_URL = 'https://creation-ui.com'
const TITLE = 'Creation UI'
export default {
  logo: <Logo size='lg' />,
  project: {
    link: 'https://github.com/pawelkrystkiewicz/creation-ui',
  },
  primaryHue: 213,

  head: () => {
    const { asPath } = useRouter()
    const { frontMatter } = useConfig()
    return (
      <>
        <meta property='og:url' content={`${BASE_URL}${asPath}`} />
        <meta property='og:title' content={frontMatter.title || TITLE} />
        <meta
          property='og:description'
          content={frontMatter.description || 'React Tailwind components'}
        />
      </>
    )
  },
  footer: {
    content: (
      <span>
        {new Date().getFullYear()}&copy;
        <a href={BASE_URL} target='_blank'>
          <Logo size='sm' /> {TITLE}
        </a>
      </span>
    ),
  },
}
