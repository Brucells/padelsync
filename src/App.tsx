import Header from "./components/layout/Header"
import MainContent from "./components/layout/MainContent"
import MobileNavbar from "./components/layout/MobileNavbar"
import Navbar from "./components/layout/Navbar"

function App() {

  return (
    <div className="w-full flex h-svh max-h-svh">
      <Navbar />
      <div className="h-full flex-1 flex flex-col">
          <Header />
          <MainContent />
          <MobileNavbar />
      </div>
    </div>
  )
}

export default App
