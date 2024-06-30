

document.addEventListener("DOMContentLoaded", function() {
    const keyword = document.getElementById("keyword")
    const tags = document.querySelectorAll(".tag")
    const projects = document.querySelectorAll(".project")
    
    let count = 0, displayed = 0
    console.log(count)
    let noMatch = document.getElementById("noMatch")
  
    // only display projects that match keywords included by the user
    function filterAllProjects() {
        const keywordQuery = keyword.value.toLowerCase();
        noMatch.style.display = "none"
        count = 0
        
        projects.forEach((project) => {
            const title = project.getAttribute('data-name')
            const description = project.getAttribute('data-description')
            const match = title.includes(keywordQuery) || description.includes(keywordQuery)

            count++
            if (match) {
                displayed++
                project.style.display = ""
            } else {
                project.style.display = "none"
            }
        })

        if (displayed <= 0 && count == projects.length) {
            noMatch.style.display = "block"
        }
        displayed = 0
    }

    // filters by tag selected
    tags.forEach((tag) => {
        tag.addEventListener("click", function () {
            count = 0
            noMatch.style.display = "none"
            const selectedTag = this.getAttribute("data-tag")
            projects.forEach((project) => {
                count++
                const projectTags = project.getAttribute("data-tags")
                if (projectTags.includes(selectedTag)) {
                    displayed++
                    project.style.display = ""
                } else {
                    project.style.display = "none"
                }
            })

            if (displayed <= 0 && count == projects.length) {
                noMatch.style.display = "block"
            }
            displayed = 0
        })
    })

    keyword.addEventListener("keyup", filterAllProjects)

})