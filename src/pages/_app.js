import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }) {
  return (
  <>
    <Navbar />
    <Component {...pageProps} />
    <Toaster position="top-center" reverseOrder="false" />
  </>
  );
}
