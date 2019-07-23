import React from "react";
import { View, StatusBar } from "react-native";

import { SafeAreaView } from "react-navigation";
import { Header } from "../../components/Header";

function Search() {
  return (
    <View>
      <SafeAreaView backgroundColor="white" />
      <StatusBar barStyle="dark-content" />
      <Header backBool={false} />
    </View>
  );
}
export default Search;
