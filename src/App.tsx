import React from "react";

// scss
import "./assets/scss/theme.scss";
import "./assets/scss/chat-left.scss";
import "./assets/scss/custom-scrollbar.scss";
import "./assets/scss/navbar.scss";
import "./assets/scss/custom.scss";
import "./assets/scss/sidebar.scss";

//Route
import Routes from "./router/index.tsx";

// Import Firebase Configuration file
// import { initFirebaseBackend } from "./helpers/firebase_helper";

// api config
// import config from "./config";
import fakeBackend from "./helper/fakeBackend.ts";

// TODO
fakeBackend();

// const firebaseConfig = {
//   apiKey: config.FIRE_BASE.API_KEY,
//   authDomain: config.FIRE_BASE.AUTH_DOMAIN,
//   databaseURL: config.FIRE_BASE.DATABASEURL,
//   projectId: config.FIRE_BASE.PROJECTID,
//   storageBucket: config.FIRE_BASE.STORAGEBUCKET,
//   messagingSenderId: config.FIRE_BASE.MESSAGINGSENDERID,
//   appId: config.FIRE_BASE.APPID,
//   measurementId: config.FIRE_BASE.MEASUREMENTID,
// };

// // init firebase backend
// initFirebaseBackend(firebaseConfig);

const App = () => {
  document.title = "Chat | Doot - React Admin & Dashboard Template"

  return <Routes />;
};

export default App;
