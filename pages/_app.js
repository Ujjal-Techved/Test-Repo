// pages/_app.js

// Import your global CSS here
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import '../styles/styles.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoogleAnalytics } from "nextjs-google-analytics";

const GA_MEASUREMENT_ID = "3124600306"; // Replace with your GA4 Measurement ID

export default function MyApp({ Component, pageProps }) {


  useEffect(() => {
    if (typeof window !== "undefined") {
      // Initialize GA4 config
      window.gtag("config", GA_MEASUREMENT_ID);
    }
  }, []);

  return (
    <>
      {/* Automatically track page views */}
      <GoogleAnalytics trackPageViews gaMeasurementId={GA_MEASUREMENT_ID} />
      <Component {...pageProps} />;
    </>
  )
}