var menuActive = false;

function handleMenuClick() {

    if (menuActive) {
        $('.nav-content').hide();
        menuActive = false;
    } else {
        $('.nav-content').show();
        menuActive = true;
    }
}