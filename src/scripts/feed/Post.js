import { formatDate } from "../helpers/formatDate.js";

export const Post = (postObject) => {
  return `
      <section class="post">
        <header>
            <h2 class="post__title">${postObject.title} By: ${
    postObject.user.name
  }</h2>
        </header>
        <img class="post__image" src="${postObject.imageURL}" />
        <p class = "post__tagline">${postObject.description} <br> ${formatDate(
    postObject.timestamp
  )}</p>
         <div class = "post__actions" ><button id="edit--${
           postObject.id
         }">Edit</button></div>
      </section>
    `;
};
