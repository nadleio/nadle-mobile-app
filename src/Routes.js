import {
  TabNavigator,
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";

import Login from "./views/login";
import Register from "./views/register";
import InputEmail from "./views/ResetPassword/inputEmail";
import SendCode from "./views/ResetPassword/sendCode";
import ResetPassword from "./views/ResetPassword/resetPassword";

export const Root = createStackNavigator({
  Login: { screen: Login },
  Register: { screen: Register },
  InputEmail: { screen: InputEmail },
  SendCode: { screen: SendCode },
  ResetPassword: { screen: ResetPassword }
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
