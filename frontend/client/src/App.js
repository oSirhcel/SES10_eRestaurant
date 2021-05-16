import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Routes from "./components/routing/Routes";
import ViewMenu from "./components/viewMenu/ViewMenu";

export default function App() {
  return (
    // <Provider store={store}>
    //   <Router>
    //     <Route component={Routes} />
    //   </Router>
    // </Provider>
    <div>
      <ViewMenu />
    </div>
  );
}
