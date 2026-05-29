let canvas = document.getElementById("xylophone");
const note = ['Mallet Note/Mallet Adiese1.wav', 'Mallet Note/Mallet Adiese2.wav', 'Mallet Note/Mallet Adiese3.wav', 'Mallet Note/Mallet Adiese4.wav',
    'Mallet Note/Mallet A1.wav', 'Mallet Note/Mallet A2.wav', 'Mallet Note/Mallet A3.wav', 'Mallet Note/Mallet A4.wav',
    'Mallet Note/Mallet B0.wav', 'Mallet Note/Mallet B1.wav', 'Mallet Note/Mallet B2.wav', 'Mallet Note/Mallet B3.wav',
    'Mallet Note/Mallet B4.wav', 'Mallet Note/Mallet Cdiese1.wav', 'Mallet Note/Mallet Cdiese2.wav', 'Mallet Note/Mallet Cdiese3.wav',
    'Mallet Note/Mallet Cdiese4.wav', 'Mallet Note/Mallet C1.wav', 'Mallet Note/Mallet C2.wav', 'Mallet Note/Mallet C3.wav',
    'Mallet Note/Mallet C4.wav', 'Mallet Note/Mallet C5.wav', 'Mallet Note/Mallet Ddiese1.wav', 'Mallet Note/Mallet Ddiese2.wav',
    'Mallet Note/Mallet Ddiese3.wav', 'Mallet Note/Mallet Ddiese4.wav', 'Mallet Note/Mallet D1.wav', 'Mallet Note/Mallet D2.wav',
    'Mallet Note/Mallet D3.wav', 'Mallet Note/Mallet D4.wav', 'Mallet Note/Mallet E1.wav', 'Mallet Note/Mallet E2.wav',
    'Mallet Note/Mallet E3.wav', 'Mallet Note/Mallet E4.wav', 'Mallet Note/Mallet Fdiese1.wav', 'Mallet Note/Mallet Fdiese2.wav',
    'Mallet Note/Mallet Fdiese3.wav', 'Mallet Note/Mallet Fdiese4.wav', 'Mallet Note/Mallet F1.wav', 'Mallet Note/Mallet F2.wav',
    'Mallet Note/Mallet F3.wav', 'Mallet Note/Mallet F4.wav', 'Mallet Note/Mallet Gdiese1.wav', 'Mallet Note/Mallet Gdiese2.wav',
    'Mallet Note/Mallet Gdiese3.wav', 'Mallet Note/Mallet Gdiese4.wav', 'Mallet Note/Mallet G1.wav', 'Mallet Note/Mallet G2.wav',
    'Mallet Note/Mallet G3.wav', 'Mallet Note/Mallet G4.wav',
]
const touche =["a","z","e","r","t","y","u","i","o","p","q","s","d","f","g","h","j","k","l","m","w","x","c","v","b","n",
    "^","$","ù",",",";",":","!","1","2","3","4","5","6","7","8","9","0","&","é","'","(","-","è","_"];
const couleurs = ["red", "orange","yellow", "green", "blue", "purple"];

canvas.style.display = "flex";
canvas.style.width = "900px";
canvas.style.height = "200px";

console.log(canvas);
console.log(canvas.tagName);

for(index = 0; index < note.length; index++){
    let div = document.createElement("div");
    div.classList.add("note");
    div.style.width = "20px";
    div.style.height = "100px";
    div.style.border = "2px solid black";
    div.style.borderRadius = "10px";
    div.style.cursor = "pointer";
    const couleursChoisie = index % couleurs.length;
    div.style.background = couleurs[couleursChoisie];
    div.audio = note[index];
    canvas.appendChild(div);
    div.addEventListener("click", function(event){
        let audio = event.target.audio;
        new Audio(audio).play();
        console.log(audio);

    })
    
}
document.addEventListener("keydown", function(event){
        console.log(event.key);
        index = touche.indexOf(event.key);
        audio = note[index];
        console.log(audio);
        new Audio(audio).play();
        console.log(event.key);
        console.log(touche.indexOf(event.key));

    })
