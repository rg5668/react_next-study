import Todo from "./components/Todo";
import { Route, Switch } from "react-router-dom";

import AllMeetup from "./pages/AllMeetup";
import NewAllMeetup from "./pages/NewmMeetup";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <div>
      <h1>Test</h1>
      <Todo text="할일" />
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
    </div>
  );
}

export default App;
