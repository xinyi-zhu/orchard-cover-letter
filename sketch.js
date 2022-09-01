let num = 0;

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background(0);
  slider = setupSlider(0, 4, 0, windowWidth/2-250, windowHeight/2+300, NumSliderFunc);

}

function draw() {
  // put drawing code here
  background(0);
  // console.log(num);
  textSize(40);
  fill(255);
  if (num == 0){
    show_text_1();
  } else if (num == 1){
    show_text_2();
  } else if (num == 2){
    show_text_3();
  } else if (num == 3) {
    show_text_4();
  } else {
    show_text_5();
  }
}

function setupSlider(min, max, defaultValue,
  posx, posy, callback) {
  const slider = createSlider(min, max, defaultValue);
  slider.position(posx, posy);
  slider.input(callback);
  slider.addClass("mySliders");
}

function NumSliderFunc(e) {
  num = parseInt(e.target.value);
  redraw();
}

function show_text_1(){
  textSize(40);
  fill(255);
  strokeWeight(8); 
  text(' My first Apple product was a iPod Nano 3rd generation.', 100, 100, 600, 100); 
  textSize(24);
  strokeWeight(1); 
  text('I purchased it back in 2009 when I was 13. When I left my family for a boarding school far away from home and suffered from insomnia and loneliess at night, the world of music that my iPod drawed me into comforted me and accompanied my whole teenager life. With hundreds of songs stored in its tiny body, my iPod was one of my most supportive and loyal friends in those tough coming of age days. Today, as a creative technologist, I am excited to apply for the Web Developer role within the Orchard program at Apple. ',100,300,600,600);
}

function show_text_2(){
  textSize(40);
  fill(255);
  strokeWeight(8); 
  text('Things that I admire Apple for', 100, 100, 600, 100);
  textSize(24);
  strokeWeight(1); 
  text('Apple has redefined the interdisciplinarity of design and engineering for the entire world',100,300,320,300);
  text('Apple sets the bar for technology and hardware in the consumer electronics space. ',480,300,320,300);
  text('Apple keeps pushing the boundaries of innovation which shape the way people interact with emerging technologies.',860,300,380,300);
}

function show_text_3(){
  textSize(40);
  fill(255);
  strokeWeight(8); 
  text('Based on my research I know Apple is seeking someone who', 100, 100, 600, 100);
  textSize(24);
  strokeWeight(1); 
  text('is a master of Front End technology',100,300,800,50);
  text('is energized from collaborative work via clear communication',100,350,800,50);
  text('merges creative and engineering to create an engaging user experience',100,400,800,50);


}

function show_text_4(){
  textSize(40);
  fill(255);
  strokeWeight(8); 
  text('I am this person.', 100, 100, 400, 100); 
  textSize(24);
  strokeWeight(1); 
  text('While working for AKQA San Francisco Studio as a Creative Technologist Intern, I developed the UI components library for the company’s first intranet websites using JavaScript, ReactJS and Storybook, still in use today. ',100,300,320,300);
  text('As a Research Intern at frog Shanghai Studio, I designed screen-based interactive data visualization using Python and React for open studio events, which successfully attracted a large amount of external visitors.',480,300,320,300);
  text('Lastly, when I worked as an Interaction Designer at Berkeley Institute of Design, I collaborared with a group of researchers and engineers to design and develop a virtual reality system prototype in Unity, and our team successfully made a research paper into CHI 2022 Late-Breaking Work.',860,300,380,300);

}

function show_text_5(){
  textSize(40);
  fill(255);
  strokeWeight(8); 
  text('I would love to bring these experiences, skillset, and mindset to the Web Developer role within the Orchard Program.', 100, 100, 600, 400); 
  textSize(24);
  strokeWeight(1); 
  text('Thank you so much for considering my application.',100,350,800,50);

}

