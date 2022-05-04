import Head from "next/head";
import Link from "next/link";
import "../styles.css";

import { Box } from "@mui/material";

import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <Box>
      <Head>
        <title>My Budget</title>
      </Head>

      <Navbar />

      <div className="grid wrapper">
        <Component {...pageProps} />
      </div>
    </Box>
  );
}

export default MyApp;
