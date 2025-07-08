import "./styles.css";
import { loadInitialPage, handleRoutes } from "./js/navigation-module.js";
import headerHandler from "./js/handle-header.js";

// handle header behavior
headerHandler();

// load home page
loadInitialPage();

// handle navigation
handleRoutes();

console.log("Project initialised!");