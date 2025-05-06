document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");
    const fakeAlert = document.getElementById("fake-alert");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        fakeAlert.classList.remove("hidden");

        setTimeout(() => {
            fakeAlert.classList.add("hidden");
        }, 3000); // 3秒後自動隱藏
    });
});
