// import Contact from './components/Contact'
import About from './components/About'
import Header from './components/Header'
import Navbar from './components/Navbar'
import LenisScroll from './components/LenisScroll'

export default function App() {
    return (
        <>
            <LenisScroll />
            <Navbar />
            <div>
                <Header />
                <About />
            </div>
        </>
    )
}