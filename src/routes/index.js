import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../App.scss";
// import Layout from "../components/layout/layout";
import PublicSection from "../routes/PublicSection";

// Import Pages
import Main from "../pages/main";
import Coba from "../pages/coba";

function Routes() {
  return (
    <Router>
      <Switch>
        {/* Auth Route */}
        <Route path="/login" exact component={Main} />
        {/* Login */}
        {/* End Auth Route */}

        {/* Main Route */}
        <PublicSection>
          <Route path="/" exact component={Coba} />
          {/* Dashboard */}
        </PublicSection>
        {/* End Main Route */}
      </Switch>
    </Router>
  );
}

export default Routes;
