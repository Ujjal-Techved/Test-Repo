// pages/_app.js
import '../styles/styles.css'; // Import your global CSS here

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}