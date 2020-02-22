let colors = document.querySelectorAll(".colors div");
let range = document.querySelector("input[type=range]");
let price = document.querySelector(".price-number");
let colorArray = ["#00ffff", "#000000", "#0000ff", "#ff00ff", "#808080", "#008000", "#00ff00", "#800000", "#000080", "#808000", "#800080", "#ff0000", "#c0c0c0", "#008080", "#ffffff", "#ffff00"]

colors.forEach((color, idx) => {
  color.style.backgroundColor = colorArray[idx];
});


range.addEventListener('input', () => {
  price.textContent = `$0 - $${range.value}`
})


// navbar scroll effect
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    console.log($(this));
  });
