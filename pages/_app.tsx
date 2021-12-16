import '../assets/scss/main.scss'
import { Provider } from "react-redux";

import type { AppProps } from 'next/app'
import store from "../store";
import {getPosts} from "../store/actions";

store.dispatch(getPosts())
function App({ Component, pageProps }: AppProps) {
  return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    )
}

export default App
