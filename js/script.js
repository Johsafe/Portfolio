// Typing Animation

var typed = new Typed(".typing",{
    strings:["","Web Designer","Web Developer","Graphics Designer","MERN Developer","Code Debugger"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

//section slider 
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length;
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;
      for(let i=0; i<totalNavList; i++)
      {
        const a = navList[i].querySelector("a");
        a.addEventListener("click",function()
        {
            removeBackSection();
            for(let j=0; j<totalNavList; j++){
                if(navList[j].querySelector("a").classList.contains("active"))
                {
                    addBackSection(j);
                }
                navList[j].querySelector("a").classList.remove("active")
            }
            this.classList.add("active")
            showSection(this);
            if(window.innerWidth < 1200){
                asideSectionTogglerBtn();
            }
        })
      }
      function addBackSection(num){
        allSection[num].classList.add("back-section")
      }
      function removeBackSection(){
        for(let i=0; i<totalSection; i++){
            allSection[i].classList.remove("back-section")
        }
      }
      function showSection(element){   
        for(let i=0; i<totalSection; i++){
            allSection[i].classList.remove("active")
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#"+ target).classList.add("active")
      }
// btn hire-me
function updateNav(element){
    for(let j=0; j<totalNavList; j++){
        navList[j].querySelector("a").classList.remove("active")
        const target = element.getAttribute("href").split("#")[1];
        if(target ===  navList[j].querySelector("a").getAttribute("href").split("#")[1])
        {
            navList[j].querySelector("a").classList.add("active")
        }
    }

    
}
document.querySelector(".hire-me").addEventListener("click",function()
{
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this)
    updateNav(this)
    removeBackSection();
    addBackSection(sectionIndex);

})

// document.querySelector(".project-btn").addEventListener("click",function()
// {
//     const sectionIndex = this.getAttribute("data-section-index");
//     showSection(this)
//     updateNav(this)
//     removeBackSection();
//     addBackSection(sectionIndex);

// })

// sidebar toggler
      const navTogglerBtn = document.querySelector(".nav-toggler"),
            aside = document.querySelector(".side-nav");
            navTogglerBtn.addEventListener("click",()=>{
                asideSectionTogglerBtn();
            })
            function asideSectionTogglerBtn(){
                aside.classList.toggle("open");
                navTogglerBtn.classList.toggle("open")
                for(let i=0; i<totalSection; i++){
                    allSection[i].classList.toggle("open")
                }
            }