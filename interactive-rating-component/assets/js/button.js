document.addEventListener("DOMContentLoaded", ()=>{
    const buttons = document.querySelectorAll(".num");
    const submit = document.querySelector(".submit");

    let rating = 0;
    
    buttons.forEach(btn =>{
        btn.addEventListener("click", () =>{
            buttons.forEach(btn => btn.classList.remove("active"));
            rating = btn.textContent;
            btn.classList.add("active");
        })
    });

    submit.addEventListener("click", (e)=>{
        e.preventDefault();
        if(rating){
            window.location.href = `./thank-you.html?rating=${rating}`;
        } else{
            alert(`please choose a grade`)
        }
    });
});