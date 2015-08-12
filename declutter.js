function removeElement($el) {
    $el.hide();
}

$('body').click(function(e) {
    e.preventDefault();
    var $target = $(e.target);
    removeElement($target);
});
