import React from "react";

const ContextSelf = React.createContext({
  id: "",
  type: "",
  picture: "",
  username: "",
  email: "",
  fistName: "",
  lastName: "",
  following: { count: 0 },
  followers: { count: 0 },
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
