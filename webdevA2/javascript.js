/* Home page class setup */
const HomeButton = document.querySelectorAll(".Home"); 
const HomePage = document.querySelector("#Home");
for (const element of HomeButton)
{
    element.addEventListener("click", function(){ShowPage(HomePage)});
}

/* KindOfSkier page class setup */
const KindOfSkierButton = document.querySelectorAll(".KindOfSkier"); 
const KindOfSkierPage = document.querySelector("#KindOfSkier");
for (const element of KindOfSkierButton)
{
    element.addEventListener("click", function(){ShowPage(KindOfSkierPage)});
}

/* Prepare page class setup */
const PrepareButton = document.querySelectorAll(".Prepare"); 
const PreparePage = document.querySelector("#Prepare");
for (const element of PrepareButton)
{
    element.addEventListener("click", function(){ShowPage(PreparePage)});
}

/* Hides all the pages before reloading it */
function HideAllPages()
{
    HomePage.style.display ="none";
    KindOfSkierPage.style.display ="none";
    PreparePage.style.display ="none";
}

/* Shows the new page */
function ShowPage(page)
{
    HideAllPages();
    page.style.display = "flex";
}

const SkiTechniqueButtonArray = []; /* Array to store all the buttons */
let SkiTechniqueButton = document.querySelectorAll(".SkiTechniqueButtons")
for (const element of SkiTechniqueButton)
{
    SkiTechniqueButtonArray.push(element); /* Pushes the buttons into the array */
}
var activeButton = SkiTechniqueButton[0];
var activeButtonIndex = 0;
HideButtons(); /* Hides the buttons at the beginning */

for (const element of SkiTechniqueButton)
{
    element.addEventListener("click", function(){NextButton()});
}

function NextButton() /* Function that calls the next button */
{
    if (activeButton === SkiTechniqueButtonArray[SkiTechniqueButtonArray.length - 1])
    {
        HideButtons();
        return;
    }
    activeButtonIndex++;
    activeButton = SkiTechniqueButtonArray[activeButtonIndex]
    activeButton.style.display = "flex";
}

function HideButtons() /* Functions that resets the buttons */
{
    for(let button of SkiTechniqueButton)
    {
        button.style.display = "none";
    }
    SkiTechniqueButtonArray[0].style.display = "flex";
    activeButton = SkiTechniqueButton[0];
    activeButtonIndex = 0;
}

// Opening up the left menu using the menu button  (When screen too small)

const menuButton = document.getElementById("menuButton");
const LeftMenu = document.getElementById("LeftMenu");
var isMenuOpen = false;

function openMenu()
{
    if (!isMenuOpen)
    {
        LeftMenu.style.left = "0%";
        LeftMenu.style.transition = "left 1s ease-in-out";
    }
    else
    {
        LeftMenu.style.left = "-100%";
    }

    isMenuOpen = !isMenuOpen;  // Give value based on whether the menu should be open
}

menuButton.addEventListener("click", function() {
    openMenu();
})

//Adds buttons to the image and text to reveal
const HelemtButton = document.querySelector("#HelmetButton"); 
const HelemtPage = document.querySelector("#HelemtText");
HelemtButton.addEventListener("click", function(){RevealText(HelemtPage)});

const GoggleButton = document.querySelector("#GoggleButton"); 
const GogglePage = document.querySelector("#GoggleText");
GoggleButton.addEventListener("click", function(){RevealText(GogglePage)});

const SkisBootsButton = document.querySelector("#SkisBootsButton"); 
const SkisBootsPage = document.querySelector("#SkisBootsText");
SkisBootsButton.addEventListener("click", function(){RevealText(SkisBootsPage)});

const ColdClothsButton = document.querySelector("#ColdClothsButton"); 
const ColdClothsPage = document.querySelector("#ColdClothsText");
ColdClothsButton.addEventListener("click", function(){RevealText(ColdClothsPage)});

const SkiJacketPantButton = document.querySelector("#SkiJacketPantButton"); 
const SkiJacketPantPage = document.querySelector("#SkiJacketPantText");
SkiJacketPantButton.addEventListener("click", function(){RevealText(SkiJacketPantPage)});

//Toggle to reveal text
function RevealText(text)
{
    text.classList.toggle("HideText");
}

ShowPage(HomePage); //Starts the website
