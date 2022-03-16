/**
 * Main logic module for what should happen on initial page load for Giffygram
 */

import * as dataManager from "./data/dataManager.js";
import { PostList } from "./feed/PostList.js";
import { NavBar } from "./nav/NavBar.js";

const startGiffyGram = () => {
  showPostList();
  showNavBar();
};

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

startGiffyGram();

dataManager.getUsers().then((data) => {
  console.log("Users", data);
});

dataManager.getPosts().then((data) => {
  console.log("Data", data);
});
