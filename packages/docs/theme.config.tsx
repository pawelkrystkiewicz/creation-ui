import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
import { Logo } from './components/logo'
import { BASE_URL, TITLE, TITLE_SHORT } from 'constants'
import Footer from '@components/footer'

export default {
  logo: <Logo size='lg' />,
  project: {
    link: 'https://github.com/pawelkrystkiewicz/creation-ui',
  },
  docsRepositoryBase:
    'https://github.com/pawelkrystkiewicz/creation-ui/tree/develop/packages/docs',
  primaryHue: 213,
  editLink: {
    text: 'Edit this page on GitHub',
  },
  feedback: {
    link: 'Question? Give us feedback →',
  },
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
  useNextSeoProps: function SEO() {
    const { pathname } = useRouter()
    const { frontMatter } = useConfig()
    let section = TITLE

    if (pathname === '/') {
      section = TITLE
    }
    if (pathname === '/docs') {
      section = TITLE_SHORT
    }

    const defaultTitle = frontMatter.overrideTitle || section

    return {
      description: frontMatter.description,
      defaultTitle,
      titleTemplate: `%s – ${section}`,
    }
  },
  footer: {
    component: Footer,
  },
  nextThemes: {
    defaultTheme: 'dark',
  },
  search: {
    placeholder: 'Search documentation…',
  },
}
