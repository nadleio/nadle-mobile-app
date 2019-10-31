import React from "react";

const ContextSelf = React.createContext({
  uid: "",
  type: "",
  picture: "",
  username: "",
  email: "",
  name: "",
  updateSelf: null
});

export function withSelf(Component) {
  return function contextSelf(props) {
    return (
      <ContextSelf.Consumer>
        {self => <Component {...props} self={self} />}
      </ContextSelf.Consumer>
    );
  };
}

export default ContextSelf;
