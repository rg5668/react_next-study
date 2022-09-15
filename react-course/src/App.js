import Todo from "./components/Todo";
import { Route, Switch } from "react-router-dom";

import AllMeetup from "./pages/AllMeetup";
import NewAllMeetup from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      {/* <h1>Test</h1>
      <Todo text="할일" /> */}
      <Switch>
        {/* exact를 설정하면 path가 딱 맞아 떨어지는것만 해당 */}
        <Route path={"/"} exact>
          <AllMeetup />
        </Route>

        <Route path={"/new-meetup"}>
          <NewAllMeetup />
        </Route>

        <Route path={"/favorites"}>
          <Favorites />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
