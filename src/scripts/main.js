/**
 * Main logic module for what should happen on initial page load for Giffygram
 */
import * as dataManager from "./data/dataManager.js";
import { PostList } from "./feed/PostList.js";
import { NavBar } from "./nav/NavBar.js";
import { Footer } from "./nav/footer.js";

// manage users and posts Data.
dataManager.getUsers().then((data) => {
  console.log("Users", data);
});

dataManager.getPosts().then((data) => {
  console.log("Data", data);
});

// event listeners
const applicationElement = document.querySelector(".giffygram");

applicationElement.addEventListener("click", (event) => {
  if (event.target.id === "logout") {
    console.log("You clicked on logout");
  }
  if (event.target.id === "directMessageIcon") {
    alert(`You clicked on ${event.target.id}`);
  }
  if (event.target.id === "homeIcon") {
    alert(`You clicked on ${event.target.id}`);
  }
  if (event.target.id.startsWith("edit")) {
    console.log("post clicked", event.target.id.split("--"));
    console.log("the id is", event.target.id.split("--")[1]);
  }
});

applicationElement.addEventListener("change", (event) => {
  if (event.target.id === "yearSelection") {
    const yearAsNumber = parseInt(event.target.value);

    console.log(`User wants to see posts since ${yearAsNumber}`);
  }
});

// render page
const showNavBar = () => {
  //Get a reference to the location on the DOM where the nav will display
  const navElement = document.querySelector("nav");
  navElement.innerHTML = NavBar();
};
const showPostList = () => {
  //Get a reference to the location on the DOM where the list will display
  const postElement = document.querySelector(".postList");
  dataManager.getPosts().then((allPosts) => {
    postElement.innerHTML = PostList(allPosts);
  });
};

const showFooter = () => {
  //Get a reference to the location on the DOM where the footer will display
  const footElement = document.querySelector("footer");
  footElement.innerHTML = Footer();
};

const startGiffyGram = () => {
  showNavBar();
  showPostList();
  showFooter();
};

startGiffyGram();
