var chidi_blauri,ukhidari_nangumba;

function preload(){
    ukhidari_nangumba = loadSound('Ukhidari Nangumba Shilheiba & Biju 2020 Gee Thoibi Movie Official Song Release.mp3');
    chidi_blauri = loadSound('Chidi Blauri Laung Laachi (Full Song) Ammy Virk, Mannat Noor Neeru Bajwa Latest Punjabi Mov.mp3');
}

function setup(){
    canvas = createCanvas(500,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 500, 500);
}