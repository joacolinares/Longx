
import Routing from './Routes/Routing';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './context/AuthContext';
import 'primereact/resources/themes/saga-blue/theme.css';  // Theme
import 'primereact/resources/primereact.min.css';           // Core CSS
import 'primeicons/primeicons.css';                         // Icons

function App() {
  return (
    <>
      {/* Add your routing logic here */}
        <AuthProvider>
            <Routing />
        </AuthProvider>
        <ToastContainer />
    </>
  );
}

export default App;
