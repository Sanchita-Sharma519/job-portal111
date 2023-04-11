
import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { CssBaseline,ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import LogIn from './pages/logIn';
import UserDashboard from './pages/user/UserDashboard';
import Layout from './pages/global/Layout';
import UserRoute from './component/UserRoute';

const UserDashboardHOC = Layout(UserDashboard);

const App = () =>{

  return (
    <>
    <ToastContainer/>
    <ThemeProvider theme={theme}>
        <CssBaseline>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path='/search/location/:location' element={<Home />} />
              <Route path='/search/:keyword' element={<Home />} />
              <Route path='/login' element={<LogIn />} />
              <Route path='/user/dashboard' element={<UserRoute>< UserDashboardHOC /></UserRoute>} />
              <Route path="*" element={<NotFound/>} />
            </Routes>
          </BrowserRouter> 
        </CssBaseline>
    </ThemeProvider>
    </>
  )

}

export default App