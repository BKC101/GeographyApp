import React from "react";
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import LandingPage from "./components/pages/landingPage";
import HomePage from "./components/pages/homePage";
import Login from "./components/pages/loginPage";
import Signup from "./components/pages/registerPage";
import PrivateUserProfile from "./components/pages/privateUserProfilePage";
import ContinentSelectionPage from "./components/pages/continentSelectionPage";
import ContinentPage from "./components/pages/continentPage";
import StudyPage from "./components/pages/studyPage";
import QuizPage from "./components/pages/quizPage";
import ChallengePage from "./components/pages/challengePage";
import { createContext, useState, useEffect } from "react";
import getUserInfo from "./utilities/decodeJwt";

export const UserContext = createContext();
//test change
//test again
const App = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(getUserInfo());
  }, []);

  return (
    <>
      <Navbar />
      <UserContext.Provider value={user}>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route path="/privateUserProfile" element={<PrivateUserProfile />} />
          <Route path="/continentSelection" element={<ContinentSelectionPage />} />
          <Route path="/continent/:continent" element={<ContinentPage />} />
          <Route path="/study/:continent" element={<StudyPage />} />
          <Route path="/quiz/:continent" element={<QuizPage />} />
          <Route path="/challenge/:continent" element={<ChallengePage />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
};

export default App
