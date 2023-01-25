
import React from 'react';
import AppRootNavigation from './src/AppRootNavigation';
import { Provider } from 'react-redux';
import { persistor, store } from './src/redux/store';
import { NetworkProvider } from './src/utility/NetworkProvider';
import { PersistGate } from 'redux-persist/integration/react';


//using redux persist
const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NetworkProvider>
                    <AppRootNavigation />
                </NetworkProvider>
            </PersistGate>
        </Provider>
    );
};

export default App;



