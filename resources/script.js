// Navbar
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    if (window.scrollY >= 56) {
        navbar.classList.add("navbar-scrolled");
    } else if (window.scrollY < 56) {
        navbar.classList.remove("navbar-scrolled");
    }
});

// Clients
const scrollers = document.querySelectorAll(".scroller");
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        });
    });
}

// Emails
function sendEmail() {
    var name = document.getElementById("usernameComp").value;
    var email = document.getElementById("emailComp").value;
    var company = document.getElementById("companyComp").value;
    var message = document.getElementById("messageComp").value;

    var toast = document.getElementById("messageSentToast");
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toast);

    Email.send({
        SecureToken: "2bfbf089-e2b9-48ab-aa00-0d342b648362",
        To: "biz@codelk.com",
        From: email,
        Subject: "New Message From CodeLK Visitor",
        Body: "Name : " + name +
            "<br>Email : " + email +
            "<br>Company : " + company +
            "<br>Message : " + message
    }).then(
        message => toastBootstrap.show()
    );
}