import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
  <>
    <Component {...pageProps} />
    <Footer />
    <Toaster position="top-center" reverseOrder="false" />
  </>
  );
}
