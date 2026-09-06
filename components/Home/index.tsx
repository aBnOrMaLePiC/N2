import HeadTitle from "@/capsules/HeadTitle"
import { FC } from 'react'

const Home: FC = () => {

  return (
    <div className="bg-bgray-200 min-h-screen relative overflow-hidden">
      {/* Tab title */}
      <HeadTitle>
        title
      </HeadTitle>
    </div>
  )
}

export default Home