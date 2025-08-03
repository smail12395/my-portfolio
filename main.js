const sections = document.querySelectorAll(".contentScrol > section");
const parentNavDivs = document.querySelectorAll(".parentNavDivs");
const borderDivs = document.querySelectorAll(".parentNavDivs div");
const borderspans = document.querySelectorAll(".parentNavDivs span");
console.log(sections[1].offsetTop)
window.addEventListener("scroll", () => {
    for (let i = 0; i < sections.length; i++) {
        if (window.scrollY >= sections[i].offsetTop -100) {
            for (let j = 0; j < parentNavDivs.length; j++) {
                parentNavDivs[j].classList.remove("active");
            }

            for (let j = 0; j < borderspans.length; j++) {
                if (sections[i].classList.contains(borderspans[j].textContent.trim().toLowerCase())) {
                    parentNavDivs[j].classList.add("active");
                    borderspans[j].classList.remove("group-hover:text-slate-200")
                    borderspans[j].classList.add("group-[.active]:text-slate-200")
                    for(let k = 0; k < borderDivs.length ; k++){
                        if(borderDivs[k].classList.contains(borderspans[j].textContent.trim().toLowerCase())){
                            borderDivs[k].classList.add("group-[.active]:border-slate-200","group-[.active]:w-[20%]");
                        }
                    }
                }
            }
        }
    }
});



     //      parentNavDivs.forEach(parentNavDiv =>{
     //          parentNavDiv.classList.add("active");
     //      })
     //      borderDivs.forEach(borderDiv => {
     //          borderDiv.classList.remove("group-hover:w-[20%]","group-hover:border-slate-200");
     //          borderDiv.classList.add("group-[.active]:border-slate-200","group-[.active]:w-[20%]");
     //      })
     //      borderspans.forEach(borderspan =>{
     //          borderspan.classList.remove("group-hover:text-slate-200")
     //          borderspan.classList.add("group-[.active]:text-slate-200")
     //      })