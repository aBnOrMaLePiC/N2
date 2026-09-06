import '../styles/globals.css'
import type { AppProps } from 'next/app'
import dynamic from "next/dynamic"
import AxiosInterceptor from "../api/AxiosInterceptor"
import { memo, Suspense } from "react"
import ErrorBoundary from "@/capsules/ErrorBoundary"
import "../base/components/FontawesomeIcons"
import FontProvider from "./FontProvider"

const App = ({ Component, pageProps }: AppProps) => {
  const SafeHydrate = dynamic(() => import("../capsules/SafeHydrate"), { ssr: false })
  return (
    <ErrorBoundary>
      <SafeHydrate>
        <FontProvider>
          <Suspense fallback={<div>Loading translations...</div>}>
            <AxiosInterceptor>
              <Component {...pageProps} />
            </AxiosInterceptor>
          </Suspense>
        </FontProvider>
      </SafeHydrate>
    </ErrorBoundary>
  )
}

export default memo(App)