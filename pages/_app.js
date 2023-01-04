import '../styles/globals.css'
import Navbar from "../components/Navbar.jsx";
import Footer from '../components/Footer';


function MyApp({ Component, pageProps }) {
  return<>
   <Navbar/>
   <div className="bg-[url('/image/wbg.avif')] bg-center bg-cover"><Component {...pageProps} /></div>
   <Footer/>
  </>
}

export default MyApp
