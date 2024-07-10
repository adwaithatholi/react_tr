
const heading = "Hello world!";
const root = getElementByID("root");
root.append(heading);

const reactHeading = React.createElement("h1", {}, "Hello world from react!");
const nest = React.createElement(
    'div',
    {},
    React.createElement('h2', {}, 'Nested Hello world'),
    reactHeading
  );
const appRoot = ReactDOM.createRoot(root);
appRoot.render(reactHeading);