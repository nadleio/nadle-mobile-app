import {
  TabNavigator,
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";

import Login from "./views/login";
import Register from "./views/register";

export const Root = createStackNavigator({
  Login: { screen: Login },
  Register: { screen: Register }
});

export const AppContainer = () => createAppContainer(Root);

// export const AppContainer = (signedIn = false) => {
//     // return Root;
//     return createAppContainer({
//         Root: { screen: Root },
//         Navigation: { screen: Navigation }
//     },

//         { initialRouteName: signedIn ? "Root" : "Navigation" }
//     );

// };
