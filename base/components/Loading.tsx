import { BSpinner } from "./"
import { memo } from "react"

export const BLoading: React.FC = memo(() => {
  return (
    <div className="fixed inset-0 bg-backDrop z-[100] flex items-center justify-center">
      <BSpinner height="h-16" width="w-16" />
    </div>
  )
})