import './gesture-handler';
/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import Navegacao from './src/navegacao/index';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Navegacao);
