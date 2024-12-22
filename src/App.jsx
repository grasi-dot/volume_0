import Header from './components/Header/NavBar';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';


import './App.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  )
}

export default App
