// helps create an animation when each section is shown on home page
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
        console.log(entry.target.classList)
    })
})

const sections = document.querySelectorAll(".section")
sections.forEach((sec) => observer.observe(sec));
