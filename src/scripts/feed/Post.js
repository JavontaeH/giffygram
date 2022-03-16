export const Post = (postObject) => {
  return `
      <section class="post">
        <header>
            <h2 class="post__title">${postObject.title}</h2> &nbsp;<h3 class="post__user">By: ${postObject.userId}</h3>
        </header>
        <img class="post__image" src="${postObject.imageURL}" />
        <p class = "post__description">${postObject.description}</p>
      </section>
    `;
};
