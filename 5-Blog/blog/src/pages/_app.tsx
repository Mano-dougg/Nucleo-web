import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { AppProps } from 'next/app'
import RootLayout from '@/app/layout'
import { ThemeProvider } from '@/context/theme-context'

library.add(fas)

config.autoAddCss = false

export default function MyApp({ Component, pageProps }: AppProps) {
return (
        <ThemeProvider>
        <RootLayout>
            <Component {...pageProps} />
        </RootLayout>
        </ThemeProvider>
        )
}