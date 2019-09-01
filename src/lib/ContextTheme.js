import React from "react";

const ContextTheme = React.createContext({
  themeMode: "LIGHT_MODE",
  setThemeMode: function setThemeMode() {
    /* ... */
  }
});

export function withNadleTheme(Component) {
  return function contextNadleTheme(props) {
    return (
      <ContextTheme.Consumer>
        {withTheme => <Component {...props} appTheme={withTheme} />}
      </ContextTheme.Consumer>
    );
  };
}

export default ContextTheme;
