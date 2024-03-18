import './App.css';
import Messenger from './Component/Messenger';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './Contest/AccountProvider';


function App() {
  const clientIds = '628266441709-lorpnvsum3bguug8kar8huk1i49hp7eo.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId={clientIds}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>

    </GoogleOAuthProvider>
  );
}

export default App;
