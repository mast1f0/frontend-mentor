document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".num");
    const submitBtn = document.querySelector(".submit");
    let selectedValue = 0;

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            buttons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            selectedValue = btn.dataset.value;
        });
    });

    submitBtn.addEventListener("click",() =>{
        if (selectedValue) {
            window.location.href = `thank-you.html?=${selectedValue}`;
        } else {
            console.log("Please choose a rating first 🙂");
        }
    })
})