const hideElementContent = (elementContent) =>
  elementContent.classList.add("display-none");

const showElementContent = (elementContent) =>
  elementContent.classList.remove("display-none");

export { hideElementContent, showElementContent };
