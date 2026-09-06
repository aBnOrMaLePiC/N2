import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { wrapper } from "../store"
import i18n from "../i18n"
import { I18nextProvider } from "react-i18next"
import dynamic from "next/dynamic"
import AxiosInterceptor from "../api/AxiosInterceptor"
import { memo, Suspense } from "react"
import ErrorBoundary from "@/capsules/ErrorBoundary"
import "../base/components/FontawesomeIcons"
import FontProvider from "./FontProvider"

const App = ({ Component, pageProps, router }: AppProps) => {
  const SafeHydrate = dynamic(() => import("../capsules/SafeHydrate"), { ssr: false })
  const { store, props } = wrapper.useWrappedStore([pageProps, router])
  const { pageProps: newPageProps } = props
  return (
    <ErrorBoundary>
      <SafeHydrate>
        <FontProvider>
          <Provider store={store}>
            <I18nextProvider i18n={i18n}>
              <Suspense fallback={<div>Loading translations...</div>}>
                <AxiosInterceptor>
                  <Component {...newPageProps} />
                </AxiosInterceptor>
              </Suspense>
            </I18nextProvider>
          </Provider>
        </FontProvider>
      </SafeHydrate>
    </ErrorBoundary>
  )
}

export default memo(App)