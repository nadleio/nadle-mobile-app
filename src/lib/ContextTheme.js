import React from "react";

const ContextTheme = React.createContext({
  themeMode: "LIGHT_MODE",
  setThemeMode: function setThemeMode() {
    /* ... */
  }
});

export function withThemeProvider(Component) {
  return function contextTheme(props) {
    return (
      <ContextTheme.Consumer>
        {withTheme => <Component {...props} appTheme={withTheme} />}
      </ContextTheme.Consumer>
    );
  };
}

export default ContextTheme;
