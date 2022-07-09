import "../css/global.scss";

// このファイルはすべてのページに共通するトップレベルのコンポーネント
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
