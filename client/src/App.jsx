import React, { useState } from 'react';
import PasswordForm from './components/passwordForm';
import DownloadPage from './components/downloadPage';
import Footer from './components/footer';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className='bg-white'>
      {/* {isAuthenticated ? (
        <DownloadPage />
      ) : (
        <PasswordForm onPasswordCorrect={() => setIsAuthenticated(true)} />
      )} */}
      <div className='h-[87svh] justify-center flex-col items-center flex'>
        <h1 className='text-xl'>We are working on new extension.</h1>
        <p>Wait till night!</p>
      </div>
      <Footer />
    </div>
  );
};

export default App;
