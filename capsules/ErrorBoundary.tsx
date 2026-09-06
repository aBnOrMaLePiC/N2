import { t } from "i18next"
import { Component, ErrorInfo, ReactNode } from "react"

interface Props {
  children?: ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return t("errors.ERROR_500")
    }

    return this.props.children
  }
}

export default ErrorBoundary
