import Header from './components/Header/NavBar';
import ItemListContainer from './components/Widgets/ItemListContainer';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';



import './App.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <ItemListContainer greeting="Ola a todos, e boas festas!" />
    </ThemeProvider>
  )
}

export default App
