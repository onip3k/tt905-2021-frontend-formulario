
const professores=[
	"Em contato com animais", 
	"Primeira vez que vi uma Lhama", 
	"Primeira PCB que soldei",
	"Época em que morei no internato (escola agrotécnica)",
	"Um dos cartões postais da Chapada Diamantina (Mucugezinho)"
];

const images = [
	"fotos/cavalo.jpg",
	"fotos/lhama.jpg", 
	"fotos/pcb.jpg",
	"fotos/catu.jpg",
	"fotos/mucugezinho.jpg"
]


var current = 0;

function mod(n, m){
	return ((n%m)+m)%m;
}

function movePrevious(){
	const frame2 = document.getElementById("frame2");
	current = mod(current - 1, professores.length);
	frame2.style.backgroundImage = "url("+images[current]+")"; 
	frame2.innerHTML = professores[current];


}


function moveNext(){
	const frame2 = document.getElementById("frame2");
	current = mod(current + 1, professores.length);
	frame2.style.backgroundImage = "url("+images[current]+")"; 
	frame2.innerHTML = professores[current];

}
