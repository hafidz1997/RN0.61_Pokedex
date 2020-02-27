import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Home, Detail } from '../../containers/pages';

const Router = createStackNavigator(
    {
        Home,
        Detail
    },
    {
        headerMode: 'none',
        initialRouteName: 'Home'
    }
)


  
  export default createAppContainer(Router);