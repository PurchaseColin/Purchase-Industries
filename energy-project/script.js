// projected growth maybe even a graph projection animation thingy

var i = 0;
var txt = "Welcome to Purchase Industries. ";
var speed = 50;

// function typeWriter() {
//   if (i < txt.length) {
//     document.getElementById("welcome-tag").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }
// typeWriter();

const steel_text = document.querySelector(".steel-process");
const steel_begin = document.querySelector(".steel-begin");

const steel_process = [
  "Mining the iron ore from the USA, Slovokia and Brazil.",
  "Transporting the ore to a steel work facility.",
  "Combining the different  ores to the desired specifications with the addition of coal.",
  "Heating the coal and iron ore mixture to transform it into sinter.",
  "Coal, sinter and limestone are being added to the blast furnace.",
  "Blasting the furnace with air.",
  "Increasing the temperature to 2000 celcius.",
  "Seperating molten metal from the slag.",
  "Transporting the high carbon content molten metal to the basic oxygen system.",
  "Blasting the molten metal with pure oxygen reducing the carbon content.",
  "Adding additional metals to create the desired alloy properties.",
  "Pouring the final molten metal product through the gas tight refractory tube into the tundish.",
  "The resovoir is pouring the metal into a another series of gas tight refractory tubes into a number of water cooled copper molds.",
  "Controlling the flow rate and the solidifying outer surfaces.",
  "Pulling the steel theough a curved arrangement of support rolls and water sprays",
  "Horizontal steel beams emerge and are cut to length by automatic gas burners.",
  "Hot rolling into desired shapes thickness and size.",
  "Cold rolling to even thinner sizes.",
  "Adding the zinc, tin and plastic coatings.",
  "Finished product out for delivery.",
];


const plastic_process = [
  'Natural gas and crude oil are mined to produce feedstock for plastics', 
  'Ethane is extracted from crude oil and propane from natural gas during the refinement process', 
  'The extracted compunds ethane and propane are sent to a cracking plant [crack joint] to be broken down into smaller molecules', 
  'These new compounds are aptly named ethylene and propylene resepectively.',
  'The etylene and propylene then go through a polymerization process in which a ctalyst is added and the smaller molecules are chained together.', 'The resulting polymer chains are called polyethylene and polypropylene.', 
  'These compunds are heated, cooled and broken down into post production plastic pebbles called nurdles.', 
  'Nurdles are packaged arnd ready for dilivery. '
]

async function processing(process) {
  steel_begin.style.display = "none";
  for (i = 0; i < process.length; i++) {
    steel_text.innerHTML = process[i];
    console.log(steel_text.innerHTML);
    await sleep(0.5);
  }
}
async function sleep(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}
