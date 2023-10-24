import { AnimatePresence } from 'framer-motion'
import Layout from '../app/components/layout/layout'
import { ThemeProvider } from "../app/components/theme/theme";

//Styles
import '../app/components/_setup/reset.css'
import '../app/components/_setup/fonts.scss'
import '../app/components/_setup/style.scss'

//Component Styles
import '../app/components/header/header.scss'
import '../app/components/header/header.burger.scss'
import '../app/components/layout/layout.scss'

//Stage
import '../app/components/stage/stage.scss'

//pages
import '../app/components/pages/page.scss'

// MODULES
import "../app/components/modules/moduleText/moduleText.scss"

const App = ({ Component, pageProps, router, videos }) => {
    return (
        <ThemeProvider {...pageProps}>
            <Layout {...pageProps}>
                <AnimatePresence mode="wait">
                    <Component {...pageProps} key={router.asPath} />
                </AnimatePresence>
            </Layout>
        </ThemeProvider>
    )
}
export default App
