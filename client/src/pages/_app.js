import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import {NextUIProvider} from "@nextui-org/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
  <>
    <NextUIProvider>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
    <Toaster position="top-center" reverseOrder="false" />
    </NextUIProvider>
  </>
  );
}
