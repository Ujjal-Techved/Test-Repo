// pages/_app.js

// Import your global CSS here
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import '../styles/styles.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}