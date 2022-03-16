// let postUsername = usersArr.find((userObj) => userObj.id === postObject.userId);
//  &nbsp;<h3 class="post__user">By: ${postObject.id}</h3>
import { formatDate } from "../helpers/formatDate.js";

export const Post = (postObject) => {
  return `
      <section class="post">
        <header>
            <h2 class="post__title">${postObject.title} <br> ${
    postObject.id
  }</h2>
        </header>
        <img class="post__image" src="${postObject.imageURL}" />
        <p class = "newPost__description">${
          postObject.description
        } <br> ${formatDate(postObject.timestamp)}</p>
      </section>
    `;
};
