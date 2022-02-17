function preload(){

}
function setup(){
    background('white');
    canvas = createCanvas(280, 280);
    canvas.mouseReleased(classifyCanvas)
    synth = window.speechSynthesis;
}
function updatecanvas(){
    background('white')
}