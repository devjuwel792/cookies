const cookieBox = document.querySelector(".cookies");
const buttons = document.querySelectorAll(".button");

window.addEventListener("load", () => {
    if(document.cookie.includes("JuwelRana"))return;
    cookieBox.classList.add("shows");
    buttons.forEach(button => {

        button.addEventListener('click', () => {
            cookieBox.classList.remove("shows");
            console.log(button)

            if (button.id == "ActiveBtn") {
                document.cooki = " cookieBy = JuwelRana ; max-age = " + 60 * 60 * 24 * 30 ;

            }
        });
    });
})