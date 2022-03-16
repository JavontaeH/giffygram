/**
 * Main logic module for what should happen on initial page load for Giffygram
 */
import * as dataManager from "./data/dataManager.js";
import { PostList } from "./feed/PostList.js";
import { NavBar } from "./nav/NavBar.js";
import { Footer } from "./nav/footer.js";

// print the users and posts data to the console

// dataManager.getUsers().then((data) => {
//   console.log("Users", data);
// });

// dataManager.getPostsWithUsers().then((data) => {
//   console.log("Posts", data);
// });

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
    //invoke a filter function passing the year as an argument
    showFilteredPosts(yearAsNumber);
  }
});

// render page
const showNavBar = () => {
  //Get a reference to the location on the DOM where the nav will display
  const navElement = document.querySelector("nav");
  navElement.innerHTML = NavBar();
};

const postElement = document.querySelector(".postList");

const showPostList = () => {
  //Get a reference to the location on the DOM where the list will display
  dataManager.getPostsWithUsers().then((allPosts) => {
    postElement.innerHTML = PostList(allPosts);
  });
};

const showFilteredPosts = (year) => {
  //get a copy of the post collection
  const epoch = Date.parse(`01/01/${year}`);
  //filter the data
  const filteredData = dataManager.usePostCollection().filter((singlePost) => {
    if (singlePost.timestamp >= epoch) {
      return singlePost;
    }
  });
  postElement.innerHTML = PostList(filteredData);
  postCounter = filteredData.length;
  console.log(postCounter);
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
