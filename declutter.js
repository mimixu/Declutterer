window.useDeclutter = false;

function removeElement($el) {
    $el.hide();
}

var declutter = function(event) {
    if (window.useDeclutter) {
        event.preventDefault();
        var $target = $(event.target);
        removeElement($target);
    }
};

$('body').click(declutter);
