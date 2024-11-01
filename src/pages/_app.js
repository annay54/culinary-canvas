import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";

import {NextUIProvider} from "@nextui-org/react";

export default function App({ Component, pageProps }) {
  return (
  <>
    <NextUIProvider>
    <Navbar />
    <Component {...pageProps} />
    <Toaster position="top-center" reverseOrder="false" />
    </NextUIProvider>
  </>
  );
}
