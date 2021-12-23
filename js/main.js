// selecting all require elements
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".image");

// once window loaded
window.onload = () => {
  // when user clicked on filter item div
  filterItem.onclick = (selectedItem) => {
    // if user clicked element has .item class
    if (selectedItem.target.classList.contains("item")) {
      // remove active class which is in the first element
      filterItem.querySelector(".active").classList.remove("active");
      // add that active class on the user selected element or item
      selectedItem.target.classList.add("active");
      // getting data name value of the user selected item
      let filterName = selectedItem.target.getAttribute("data-name");
      filterImg.forEach((image) => {
        // getting image data value
        let filterImages = image.getAttribute("data-name");
        // if user selected item data-name value is equal to image data-name value
        // or user selected item data-name value is equal to "all"
        if (filterImages == filterName || filterName == "all") {
          image.classList.remove("hide");
          image.classList.add("show");
        } else {
          image.classList.add("hide");
          image.classList.remove("show");
        }
      });
    }
  };
};
