import '@/styles/globals.css'

import NavBar from "@/components/NavBar";
import Categories from '@/components/Categories';



export default function App({ Component, pageProps }) {
  return(
    <div>
    <NavBar />
    {/* <Categories/> */}
    <Component {...pageProps} />
    </div> 

  );
 
}

