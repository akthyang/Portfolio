

document.addEventListener("DOMContentLoaded", function() {
    const keyword = document.getElementById("keyword")
    const tags = document.querySelectorAll(".tag")
    const projects = document.querySelectorAll(".project")
  
    // only display projects that match keywords included by the user
    function filterAllProjects() {
        const keywordQuery = keyword.value.toLowerCase();
        
        projects.forEach((project) => {
            const title = project.getAttribute('data-name')
            const description = project.getAttribute('data-description')
            const match = title.includes(keywordQuery) || description.includes(keywordQuery)

            if (match) {
                project.style.display = ""
            } else {
                project.style.display = "none"
                alert("no matches found")
            }
            console.log(project.title)
        })
    }

    // filters by tag selected
    tags.forEach((tag) => {
        tag.addEventListener("click", function () {
            const selectedTag = this.getAttribute("data-tag")

            projects.forEach((project) => {
                const projectTags = project.getAttribute("data-tags")
                if (projectTags.includes(selectedTag)) {
                    project.style.display = ""
                } else {
                    project.style.display = "none"
                }
            })
        })
    })

    keyword.addEventListener("keyup", filterAllProjects)

})