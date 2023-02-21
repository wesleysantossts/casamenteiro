import { AppProps } from 'next/app';
import { GlobalStyled } from '../styles/Global';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import '../styles/Bootstrap.scss'

const App: React.FC<AppProps> = ({Component, pageProps}) => {
  return (
    <ThemeProvider theme={ theme }>
			<GlobalStyled />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App;