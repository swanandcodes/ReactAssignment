document.querySelectorAll(".artwork__btn--like").forEach((img) => {
  img.addEventListener("click", (e) => {
    let container = e.target.closest(".artwork__buttons");
    let likeBtn = container.querySelector(".artwork__btn--like");
    let dislikeBtn = container.querySelector(".artwork__btn--dislike");
    if (dislikeBtn.classList.contains("artwork__btn--dislike--active")) {
      dislikeBtn.classList.remove("artwork__btn--dislike--active");
    }
    likeBtn.classList.toggle("artwork__btn--like--active");
  });
});
document.querySelectorAll(".artwork__btn--dislike").forEach((img) => {
  img.addEventListener("click", (e) => {
    let container = e.target.closest(".artwork__buttons");
    let likeBtn = container.querySelector(".artwork__btn--like");
    let dislikeBtn = container.querySelector(".artwork__btn--dislike");
    if (likeBtn.classList.contains("artwork__btn--like--active")) {
      likeBtn.classList.remove("artwork__btn--like--active");
    }
    dislikeBtn.classList.toggle("artwork__btn--dislike--active");
  });
});