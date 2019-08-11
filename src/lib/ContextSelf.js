import React from "react";

const ContextSelf = React.createContext({
  uid: "b1b758d8-0d57-42c9-b086-4576bd1951ed",
  type: "USER",
  picture: "https://avatars1.githubusercontent.com/u/14861369?s=460&v=4",
  username: "carlosvq",
  name: "Carlos Valdez"
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
