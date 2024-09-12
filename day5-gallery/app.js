const panels = document.querySelectorAll('.panel')
panels.forEach(panel => {
    panel.addEventListener("click", () => {
        if (panel.classList.contains("open")) {
            panel.style.flex = "1";
            panel.classList.remove("open");
        }
        else {
            panel.classList.add("open");
            panel.style.flex = "4";
        }
    })
})