import React from "react";
import { compose } from "redux";
import styled, { css, withTheme } from "styled-components";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
  BottomTabBar
} from "react-navigation";

import { withSelf } from "./lib/ContextSelf";

import Icon from "./components/Icon";

// Auth Views
import Login from "./views/Auth/Login";
import Signup from "./views/Auth/Signup";
import ResetPassword from "./views/Auth/ResetPassword";
import ChangePassword from "./views/Auth/ChangePassword";

// App Views
import Feed from "./views/Feed";
import MarkdownView from "./views/markdown";
import Profile from "./views/Profile";
// import Notifications from "./views/Notifications";
import Post from "./views/Post";
import Search from "./views/Search";
// import YoutubeForAndroid from "./views/Post/youtubeForAndroid";
// import Subscriptions from "./views/Subscriptions";
// import UserPosts from "./views/UserPosts";
// import CollectionPosts from "./views/CollectionPosts";
import Saved from "./views/Saved";
import MarkdownForm from "./views/markdownForm";
import SearchResults from "./views/SearchResults";
import ListOfPosts from "./views/ListOfPosts";
import Comments from "./views/Comments";
// import Configuration from "./views/Configuration";
// import EditProfile from "./components/EditProfile";
// import ChangePassword from "./views/ChangePassword";
// import MyOrganizations from "./views/myOrganizations";
// import ShareNadle from "./views/shareNadle";
// import Suggestions from "./views/suggestions";

import DEFAULT_PROFILE from "./assets/images/defaultProfile.png";

const Picture = styled.Image`
  border-radius: 12;
  height: 24px;
  width: 24px;
  background-color: #fff;

  ${props =>
    props.focused &&
    css`
      border: 2px ${props => props.theme.colors.PRIMARY} solid;
    `}
`;

const ProfileTab = compose(withSelf)(({ focused, self }) => {
  return (
    <Picture
      focused={focused}
      source={self.avatar ? { uri: self.avatar } : DEFAULT_PROFILE}
    />
  );
});

const IconTab = compose(withTheme)(({ focused, theme, icon }) => {
  return (
    <Icon
      color={focused ? theme.colors.PRIMARY : "#999"}
      size={20}
      name={`${focused ? "solid" : "outline"}-${icon}`}
    />
  );
});

const TabNavigator = createBottomTabNavigator(
  {
    Feed: {
      screen: Feed,
      navigationOptions: () => ({
        tabBarIcon: function TabNewsPaper(props) {
          return <IconTab {...props} icon="newspaper" />;
        },
        tabBarOnPress: tab => {
          if (tab.navigation.isFocused()) {
            tab.navigation.state.params.scrollToTop();
          }
          tab.navigation.navigate("Feed");
        }
      })
    },

    Search: {
      screen: Search,
      navigationOptions: () => ({
        tabBarIcon: function TabSearch(props) {
          return <IconTab {...props} icon="search" />;
        }
      })
    },

    Add: {
      screen: MarkdownView,
      navigationOptions: () => ({
        tabBarIcon: function TabAddPosts(props) {
          return <IconTab {...props} icon="plus-circle" />;
        }
      })
    },

    Saved: {
      screen: Saved,
      navigationOptions: () => ({
        tabBarIcon: function TabBookedPosts(props) {
          return <IconTab {...props} icon="bookmark" />;
        }
      })
    },

    Profile: {
      screen: compose(withSelf)(Profile),
      navigationOptions: () => ({
        tabBarIcon: ProfileTab
      }),

      header: null,
      headerMode: "none"
    }
  },

  {
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      animate: true
    },
    tabBarPosition: "bottom",
    tabBarComponent: compose(withTheme)(function TabBarComponent(props) {
      return (
        <BottomTabBar
          {...props}
          style={{
            backgroundColor: props.theme.styled.BOX_BACKGROUND
          }}
        />
      );
    })
  }
);

const Root = createStackNavigator(
  {
    TabNavigator,
    // Login: { screen: Login },
    // Signup: { screen: Signup },
    // InputEmail: { screen: InputEmail },
    // SendCode: { screen: SendCode },
    // ResetPassword: { screen: ResetPassword },
    SearchProfile: { screen: Profile },
    Post: { screen: Post },
    // YoutubeForAndroid: { screen: YoutubeForAndroid },
    // Subscriptions: { screen: Subscriptions },
    // UserPosts: { screen: UserPosts },
    // CollectionPosts: { screen: CollectionPosts },
    // Notifications: { screen: Notifications },
    MarkdownForm: { screen: compose(withSelf)(MarkdownForm) },
    SearchResults: { screen: SearchResults },
    ListOfPosts: { screen: ListOfPosts },
    // EditProfile: { screen: compose(withSelf)(EditProfile) }
    Comments: { screen: Comments }
    // Configuration: { screen: Configuration },
    // EditProfile: { screen: EditProfile },
    // ChangePassword: { screen: ChangePassword },
    // MyOrganizations: { screen: MyOrganizations },
    // ShareNadle: { screen: ShareNadle },
    // Suggestions: { screen: Suggestions }
  },
  {
    header: null,
    headerMode: "none"
  }
);

const NotAuthenticatedRoot = createStackNavigator(
  {
    // Redirect: { screen: Redirect },
    Login: { screen: Login },
    ResetPassword: { screen: ResetPassword },
    ChangePassword: { screen: ChangePassword },
    Signup: { screen: Signup }

    // SearchProfile: { screen: Profile }
  },
  {
    header: null,
    headerMode: "none"
  }
);

// export const AppContainer = (authenticated = true) =>
//   createAppContainer(
//     createSwitchNavigator(
//       {
//         NotAuthenticatedRoot: { screen: NotAuthenticatedRoot },
//         Root: { screen: Root }
//       },

//       { initialRouteName: authenticated ? "Root" : "NotAuthenticatedRoot" }
//     )
//   );

export const AppContainer = createAppContainer(Root);
export const AppContainerNot = createAppContainer(NotAuthenticatedRoot);
