import Home from "../components/Home"
import Body from "../components/Layouts/Body"
import Footer from "../components/Layouts/Footer"
import Header from "../components/Layouts/Header/index"

const index = () => {
  return (
    <Body>
      <Header />
      <Home />
      <Footer />
    </Body>
  )
}

export default index