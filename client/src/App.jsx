import React, { useState } from 'react';
import PasswordForm from './components/passwordForm';
import DownloadPage from './components/downloadPage';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      {isAuthenticated ? (
        <DownloadPage />
      ) : (
        <PasswordForm onPasswordCorrect={() => setIsAuthenticated(true)} />
      )}
    </div>
  );
};

export default App;
