import '../styles/globals.css'
import type { AppProps } from 'next/app'
import dynamic from "next/dynamic"
import { memo, Suspense } from "react"
import ErrorBoundary from "@/capsules/ErrorBoundary"
import FontProvider from "./FontProvider"

const App = ({ Component, pageProps }: AppProps) => {
  const SafeHydrate = dynamic(() => import("../capsules/SafeHydrate"), { ssr: false })
  return (
    <ErrorBoundary>
      <SafeHydrate>
        <FontProvider>
          <Suspense fallback={<div>Loading translations...</div>}>
            <Component {...pageProps} />
          </Suspense>
        </FontProvider>
      </SafeHydrate>
    </ErrorBoundary>
  )
}

export default memo(App)