import "@/styles/globals.css";
import MainProvider, { ThemeContext } from "@/components/MainProvider";

export default function App({ Component, pageProps }) {
  return (
    <MainProvider>
      <Component {...pageProps} />;
    </MainProvider>
  );
}
