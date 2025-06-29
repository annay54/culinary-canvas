import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import {NextUIProvider} from "@nextui-org/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
  <>
    <NextUIProvider>
      <SessionProvider session={session}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
        <Toaster position="top-center" reverseOrder="false" containerStyle={{top: 100}} />
      </SessionProvider>
    </NextUIProvider>
  </>
  );
}
