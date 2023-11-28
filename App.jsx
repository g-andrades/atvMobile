import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './src/screens/Home/Home';
import { RegisterFirstPage } from './src/screens/RegisterFirstPage copy/RegisterFirstPage';
import { RegisterSecondPage } from './src/screens/RegisterSecondPage/RegisterSecondPage';
import { ResultPage } from './src/screens/ResultPage/ResultPage';

const { Screen, Navigator } = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name='home' component={Home} />
        <Screen name='registerFirstPage' component={RegisterFirstPage} />
        <Screen name='registerSecondPage' component={RegisterSecondPage} />
        <Screen name='result' component={ResultPage} />
      </Navigator>
    </NavigationContainer>

  );
}
