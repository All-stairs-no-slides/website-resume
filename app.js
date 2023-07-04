const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('shown')
        } else {
            entry.target.classList.remove('shown')
        }

    });
});

const hidden_elems = document.querySelectorAll(".hidden");
hidden_elems.forEach((el) => observer.observe(el))