$(".cssicon[data-morph]").hover(function (e) {
  e.preventDefault();
  var morphClasses = $(this).data("morph");
  $(this).toggleClass(morphClasses);
});
