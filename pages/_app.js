// pages/_app.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import '../styles/styles.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoogleAnalytics } from "nextjs-google-analytics";

const GA_MEASUREMENT_ID = "3124600306"; // Replace with your actual GA4 Measurement ID
import 'rsuite/dist/rsuite.min.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Automatically track page views */}
      <GoogleAnalytics trackPageViews gaMeasurementId={GA_MEASUREMENT_ID} />
      <Component {...pageProps} />
    </>
  );
}
