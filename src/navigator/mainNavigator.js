import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen19259Navigator from '../features/CopyOfBlankScreen19259/navigator';
import CopyOfBlankScreen19258Navigator from '../features/CopyOfBlankScreen19258/navigator';
import CopyOfBlankScreen19257Navigator from '../features/CopyOfBlankScreen19257/navigator';
import CopyOfBlankScreen19256Navigator from '../features/CopyOfBlankScreen19256/navigator';
import BlankScreen19242Navigator from '../features/BlankScreen19242/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen19259: { screen: CopyOfBlankScreen19259Navigator },
CopyOfBlankScreen19258: { screen: CopyOfBlankScreen19258Navigator },
CopyOfBlankScreen19257: { screen: CopyOfBlankScreen19257Navigator },
CopyOfBlankScreen19256: { screen: CopyOfBlankScreen19256Navigator },
BlankScreen19242: { screen: BlankScreen19242Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
