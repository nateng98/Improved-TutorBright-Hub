
import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material' 
import { Routes, Route } from 'react-router-dom'
import Topbar from './scenes/global/Topbar';
import SideMenu from './scenes/global/SideMenu';
import DashBoard from './scenes/dashboard';
import Students from './scenes/students'
import Invoices from './scenes/invoices'
import Line from './scenes/line'
import Calendar from './scenes/calendar'


function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideMenu />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path='/' element={<DashBoard/ >} />
              <Route path='/students' element={<Students/ >} />
              <Route path='/invoices' element={<Invoices/ >} />
              <Route path='/calendar' element={<Calendar/ >} />
              <Route path='/line' element={<Line/ >} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
