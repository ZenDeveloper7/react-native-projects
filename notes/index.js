/**
 * @format
 */

import {AppRegistry, useColorScheme} from 'react-native';
import Notes from './src/App';
import {Provider as PaperProvider} from 'react-native-paper'
import {name as appName} from './app.json';
import {MD2LightTheme as LightTheme, MD3DarkTheme as DarkTheme} from 'react-native-paper'

 export default MyApp = () => {
    const isDarkMode = useColorScheme() === 'dark'

    const theme = isDarkMode ? {
        ...DarkTheme,
        colors: {
            ...DarkTheme.colors,
            primary:'red',
            secodary:'blue'
        } 
    } : {
        ...LightTheme,
        colors: {
            ...LightTheme.colors,
            primary:'red',
            secodary:'blue'
        }
    }

    return <PaperProvider theme={theme}><Notes/></PaperProvider>
}


AppRegistry.registerComponent(appName, () => MyApp);
