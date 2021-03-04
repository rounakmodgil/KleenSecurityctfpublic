import React from "react";
import Home from "./Home";
import Features from "./Features";
import Home2 from "./Home2";
import Navbar from "./pages/Navbar";
import University from "./University";
import Companies from "./Companies";
import Join from "./Join";
import Footer from "./Footer";
import AnimatedPage from "./AnimatedPage";
import AcademyCourseLandingPage from "./AcademyCourseLandingPage";
import AccountDashboard from "./AccountDashboard";
import AcademyProfilePage from "./AcademyProfilePage";
import CTFPrivateLanding from "./CTFPrivateLanding";
import CTFPrivateJoinTeam from "./CTFPrivateJoinTeam";
import CTFPrivateForm from "./CTFPrivateForm";
import CTFPrivateAccountSettingsPage from "./CTFPrivateAccountSettingsPage";
import CTFPrivateCreateTeam from "./CTFPrivateCreateTeam";
import CTFPrivateJoinTeamForm from "./CTFPrivateJoinTeamForm";
import CTFPublicLandingPage from "./CTFPublicLandingPage";
import CTFPublicParticipated from "./CTFPublicParticipated";
import CTFPublicLanding from "./CTFPublicLanding";

import CTFPublicDiscord from "./CTFPublicDiscord";
import CTFPublicRank from "./CTFPublicRank";
import CTFPublicChallenges from "./CTFPublicChallenges";
import CTFPublicSubscription from "./CTFPublicSubscription";
import CTFPublicHelp from "./CTFPublicHelp";
import CTFPublicAbout from "./CTFPublicAbout";
import CTFPublicDashboard from "./CTFPublicDashboard";
import CtfCompetitionLandingMachine from "./CtfCompetitionLandingMachine";
import CtfCompetitionLandingChallenges from "./CtfCompetitionLandingChallenge";

import CTFPublicMachines from "./CTFPublicMachines";

import ScrollTop from "./ScrollTop";
import "./Main.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
function Main() {
  return (
    <>
      <Router>
        <ScrollTop />
        <Switch>
          <Route path='/' exact component={CTFPublicLanding} />
          <Route path='/dashboard' exact component={CTFPublicDashboard} />
          <Route path='/machines' exact component={CTFPublicMachines} />
          <Route path='/challenges' exact component={CTFPublicChallenges} />
          <Route path='/rank' exact component={CTFPublicRank} />
          <Route path='/participated' exact component={CTFPublicParticipated} />
          <Route path='/subscription' exact component={CTFPublicSubscription} />
          <Route path='/discord' exact component={CTFPublicDiscord} />
          <Route path='/about' exact component={CTFPublicAbout} />
          <Route path='/help' exact component={CTFPublicHelp} />
          <Route
            path='/machinedetails'
            exact
            component={CtfCompetitionLandingMachine}
          />
          <Route
            path='/challengedetails'
            exact
            component={CtfCompetitionLandingChallenges}
          />
          <Route
            path='/editprofile'
            exact
            component={CTFPrivateAccountSettingsPage}
          />
        </Switch>
      </Router>
    </>
  );
}

export default Main;

/*<Router>
        <ScrollTop />
        <Switch>
          <Route path='/' exact component={CTFPublicLanding} />
          <Route path='/dashboard' exact component={CTFPublicDashboard} />
          <Route path='/machines' exact component={CTFPublicMachines} />
          <Route path='/challenges' exact component={CTFPublicChallenges} />
          <Route path='/rank' exact component={CTFPublicRank} />
          <Route path='/participated' exact component={CTFPublicParticipated} />
          <Route path='/subscription' exact component={CTFPublicSubscription} />
          <Route path='/discord' exact component={CTFPublicDiscord} />
          <Route path='/about' exact component={CTFPublicAbout} />
          <Route path='/help' exact component={CTFPublicHelp} />
          <Route
            path='/machinesdetail'
            exact
            component={CtfCompetitionLandingMachine}
          />
          <Route
            path='/challengesdetail'
            exact
            component={CtfCompetitionLandingChallenges}
          />
          <Route
            path='/editprofile'
            exact
            component={CTFPrivateAccountSettingsPage}
          />
        </Switch>
      </Router>
      */
