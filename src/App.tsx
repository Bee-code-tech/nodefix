import Header from './components/Header/Header'
import Body from './components/Body/Body'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import  React from "react";
const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Body />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App