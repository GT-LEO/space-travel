// function display(){
		let body = document.querySelector("body");
	let home = document.querySelector(".home");
	let crew = document.querySelector(".crew");
	let align1 = document.querySelector(".aligner");
	let technology = document.querySelector(".technology");
	let destination = document.querySelector(".destination");
	let page1 = document.querySelector("#page1");
	let page2 = document.querySelector("#page2");
	let page3 = document.querySelector("#page3");
	let page4 = document.querySelector("#page4");

	let click1 = document.querySelector(".click1");
	let click2 = document.querySelector(".click2");
	let click3 = document.querySelector(".click3");
	let click4 = document.querySelector(".click4");
click1.addEventListener("click", handleClick1);
 function handleClick1(){
home.style.display = "inline-block";
destination.style.display = "none";
crew.style.display = "none";
technology.style.display = "none";
 body.classList.remove("bod2");
 body.classList.remove("bod3");
 body.classList.remove("bod4");
 body.classList.add("bod1");
if(window.innerWidth >= 1100){
home.style.display = "flex";
home.style.paddingRight = "2rem";
home.style.gap = "5vw";
home.style.alignItems = "center";

	}
	

/*window.addEventListener("resize",widthChange);
function widthChange(){
	if(window.innerWidth > "900px" ){
home.style.display = "flex";
home.style.gap = "10vw";
home.style.alignItems = "center";

	}
}*/
};


click2.addEventListener("click", handleClick2);
 function handleClick2(){
 	home.style.display = "none";
crew.style.display = "none";
technology.style.display = "none";
destination.style.display = "block"
body.classList.add("bod2");
body.classList.remove("bod1");
 body.classList.remove("bod3");
 body.classList.remove("bod4");

if(window.innerWidth >= 1100){
destination.style.display = "flex";
destination.style.paddingRight = "2rem";
destination.style.gap = "5vw";
destination.style.alignItems = "center";

}
 };

click3.addEventListener("click", handleClick3); 
function handleClick3(){
	home.style.display = "none";
crew.style.display = "block";
technology.style.display = "none";
destination.style.display = "none";
body.classList.add("bod3");
body.classList.remove("bod2");
 body.classList.remove("bod1");
 body.classList.remove("bod4");


if(window.innerWidth >= 1100){
align1.style.display = "flex"
align1.style.gap = "5%";
document.querySelector(".ansaru").style.height = "40vw";
document.querySelector(".ansaru").style.width = "40vw";

		}
};

click4.addEventListener("click", handleClick4); 
function handleClick4(){
	home.style.display = "none";
crew.style.display = "none";
technology.style.display = "block";
destination.style.display = "none";
body.classList.add("bod4");
body.classList.remove("bod2");
 body.classList.remove("bod3");
 body.classList.remove("bod1");


if(window.innerWidth >= 1100){
document.querySelector(".align2").style.display = "flex";
document.querySelector(".align2").style.gap = "5vw";


}
}; 
