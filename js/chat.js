function addActiveClassChat(buttonsClass, activeClassParent, activeClass, backBtn) {
    const buttons = document.querySelectorAll(buttonsClass);
    const backButton = document.querySelector(backBtn);
    buttons.forEach((button) => {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            const isActive = button.classList.contains(activeClass);
            buttons.forEach((btn) => btn.classList.remove(activeClass));
            if (!isActive) button.classList.add(activeClass);
            if (document.documentElement.classList.contains(activeClassParent))
                document.documentElement.classList.remove(activeClassParent);
            else document.documentElement.classList.add(activeClassParent);
        });
    });
    if (backButton)
        backButton.addEventListener("click", function () {
            buttons.forEach((btn) => btn.classList.remove(activeClass));
            document.documentElement.classList.remove(activeClassParent);
        });
}
addActiveClassChat(".chatblock__item", "open-blockchat", "selected", ".chatblock__back");
