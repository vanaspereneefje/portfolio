document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll(".project");
    const projectPic = document.querySelector(".projectpic");
    const project1 = document.querySelector("#project1");
    const project2 = document.querySelector("#project2");
    const project3 = document.querySelector("#project3");
    const defaultPic = "/images/weather_app.png";

    projectPic.style.backgroundImage = `url(${defaultPic})`;

    projects.forEach(project => {
        project.addEventListener("mouseenter", () => {
            const imageUrl = project.getAttribute("data-image");
            projectPic.style.backgroundImage = `url(${imageUrl})`;
            updateBorder();
        });

        project.addEventListener("mouseleave", () => {
            projectPic.style.backgroundImage = `url(${defaultPic})`;
            updateBorder();
        }); 
    });

    function updateBorder() {
        const is2Hovered = project2.matches(":hover");
        const is3Hovered = project3.matches(":hover");
    
        if(!is2Hovered && !is3Hovered){
            console.log("hovered!");
            project1.classList.add("defaultborder");
        } else {
            project1.classList.remove("defaultborder");
        };
    };
    
    document.querySelectorAll(".navlink").forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
    
            const targetId = this.getAttribute("data-target");
            const targetSection = document.getElementById(targetId);
    
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        })
    })
});

/*function openPopup(event) {
    const popupId = event.target.getAttribute("data-popup");
    document.getElementById(popupId).style.display = "block";
}*/

function openPopup(event) {
    const popupId = event.target.getAttribute("data-popup");
    const popup = document.getElementById(popupId);
    
    if (popup) {
        popup.style.display = "block";
    } else {
        console.error(`Popup with ID '${popupId}' not found!`);
    }
}

document.querySelectorAll(".open-button").forEach(button => {
    button.addEventListener("click", openPopup);
});


function closePopup(event) {
    const popupId = event.target.getAttribute("data-close");
    document.getElementById(popupId).style.display = "none";
}

document.querySelectorAll(".close-button").forEach(button => {
    button.addEventListener("click", closePopup);
})

window.addEventListener("click", (event) => {
    document.querySelectorAll(".service-popup").forEach(popup => {
        if(event.target === popup) {
            popup.style.display = "none";
        }
    });
});

