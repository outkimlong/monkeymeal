import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import Providers from './src/navigators';
    const App = () => {
        useEffect(() => {
            setTimeout(() => {
                SplashScreen.hide();
            }, 1000);
        },[]);
        return( <Providers/> )

    };
export default App;
  