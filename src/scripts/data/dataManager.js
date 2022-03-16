const loggedInUser = {
  id: 1,
  name: "jae",
  email: "jae@admin.com",
};

export const getLoggedInUser = () => {
  return loggedInUser;
};

export const getUsers = () => {
  return fetch("http://localhost:8088/users")
    .then((response) => response.json())
    .then((parsedResponse) => {
      // do something with response here
      return parsedResponse;
    });
};

let postCollection = [];

export const usePostCollection = () => {
  // best practice to not alter original state of posts.
  return [...postCollection];
};

export const getPostsWithUsers = () => {
  return fetch("http://localhost:8088/posts?_expand=user")
    .then((response) => response.json())
    .then((parsedResponse) => {
      postCollection = parsedResponse;
      return parsedResponse;
    });
};
