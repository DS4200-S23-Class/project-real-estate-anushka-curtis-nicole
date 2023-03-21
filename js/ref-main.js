/*
D3 Class Demo 2 
Prof. Mosca 
Modified: 02/15/2023
*/

//###############################################################
// Reading data from a file 
// So far we've seen how to use hardcoded data. Now, we will 
// look at plotting data read in from a file. To read data from 
// another file, you will need to set up a python simple server
// in the same directory as your code and data. To do this:
//  (1) Open your terminal or command line 
//  (2) Navigate to the directory your code is in 
//  (3) Run the command (it will vary slightle depending on how 
//      python is set up for you): python3 -m http.server
//  (4) You will see: 
//        Serving HTTP on :: port 8000 (http://[::]:8000/) ...
//  (5) Naviage to localhost:8000 in the browser to see your
//      webpage
//###############################################################
 
// First, we need a frame  
const FRAME_HEIGHT = 200;
const FRAME_WIDTH = 500; 
const MARGINS = {left: 50, right: 50, top: 50, bottom: 50};

const FRAME1 = d3.select("#vis1") 
                  .append("svg") 
                    .attr("height", FRAME_HEIGHT)   
                    .attr("width", FRAME_WIDTH)
                    .attr("class", "frame"); 

// Next, open file 
d3.csv("data/circles1.csv").then((data) => { 

  // d3.csv parses a csv file 
  // .then() passes the data parsed from the file to a function
  // in the body of this function is where you will build your 
  // vis 

  // let's check our data
  console.log(data); //Notice this data has 3 columns
                      // to access data in a column, use .

  // add our circles with styling 
  FRAME1.selectAll("circle") 
      .data(data) // this is passed from  .then()
      .enter()  
      .append("circle")
        .attr("cx", (d) => { return d.x; }) // use x for cx
        .attr("cy", (d) => { return d.y; }) // use y for cy
        .attr("r", 30)  // set r 
        .attr("fill", (d) => { return d.color; }); // fill by color

}); // .then is closed here 

// Let's do another example, with a scale 
const VIS_HEIGHT = FRAME_HEIGHT - MARGINS.top - MARGINS.bottom;
const VIS_WIDTH = FRAME_WIDTH - MARGINS.left - MARGINS.right; 

const FRAME2 = d3.select("#vis2")
                  .append("svg")
                    .attr("height", FRAME_HEIGHT)
                    .attr("width", FRAME_WIDTH)
                    .attr("class", "frame"); 

// read data and create plot
d3.csv("data/circles2.csv").then((data) => {

  // find max X
  const MAX_X2 = d3.max(data, (d) => { return parseInt(d.x); });
          // Note: data read from csv is a string, so you need to
          // cast it to a number if needed 
  
  // Define scale functions that maps our data values 
  // (domain) to pixel values (range)
  const X_SCALE2 = d3.scaleLinear() 
                    .domain([0, (MAX_X2 + 10000)]) // add some padding  
                    .range([0, VIS_WIDTH]); 

  // Use X_SCALE to plot our points
  FRAME2.selectAll("points")  
      .data(data) // passed from .then  
      .enter()       
      .append("circle")  
        .attr("cx", (d) => { return (X_SCALE2(d.x) + MARGINS.left); }) 
        .attr("cy", MARGINS.top) 
        .attr("r", 20)
        .attr("class", "point"); 

  // Add an axis to the vis  
  FRAME2.append("g") 
        .attr("transform", "translate(" + MARGINS.left + 
              "," + (VIS_HEIGHT + MARGINS.top) + ")") 
        .call(d3.axisBottom(X_SCALE2).ticks(4)) 
          .attr("font-size", '20px'); 

}); 

//###############################################################
// Adding Interaction  
// To enable interaction, we will still need event handlers
// and listeners. However, we will use d3 syntax instead of js. 
//###############################################################

const FRAME3 = d3.select("#vis3")
                  .append("svg")
                    .attr("height", FRAME_HEIGHT)
                    .attr("width", FRAME_WIDTH)
                    .attr("class", "frame"); 

// This time, let's define a function that builds our plot
function build_interactive_plot() {

  d3.csv("data/circles3.csv").then((data) => {

    // Build plot inside of .then 
    // find max X
    const MAX_X3 = d3.max(data, (d) => { return parseInt(d.x); });
    
    // Define scale functions that maps our data values 
    // (domain) to pixel values (range)
    const X_SCALE3 = d3.scaleLinear() 
                      .domain([0, (MAX_X3 + 10000)]) // add some padding  
                      .range([0, VIS_WIDTH]); 

    // Use X_SCALE to plot our points
    FRAME3.selectAll("points")  
        .data(data) // passed from .then  
        .enter()       
        .append("circle")  
          .attr("cx", (d) => { return (X_SCALE3(d.x) + MARGINS.left); }) 
          .attr("cy", MARGINS.top) 
          .attr("r", 20)
          .attr("class", "point");

    // Tooltip

     // To add a tooltip, we will need a blank div that we 
    //  fill in with the appropriate text. Be use to note the
    //  styling we set here and in the .css
    const TOOLTIP = d3.select("#vis3")
                        .append("div")
                          .attr("class", "tooltip")
                          .style("opacity", 0); 

    // Define event handler functions for tooltips
    function handleMouseover(event, d) {
      // on mouseover, make opaque 
      TOOLTIP.style("opacity", 1); 
      
    }

    function handleMousemove(event, d) {
      // position the tooltip and fill in information 
      TOOLTIP.html("Name: " + d.name + "<br>Value: " + d.x)
              .style("left", (event.pageX + 10) + "px") //add offset
                                                          // from mouse
              .style("top", (event.pageY - 50) + "px"); 
    }

    function handleMouseleave(event, d) {
      // on mouseleave, make transparant again 
      TOOLTIP.style("opacity", 0); 
    } 

    // Add event listeners
    FRAME3.selectAll(".point")
          .on("mouseover", handleMouseover) //add event listeners
          .on("mousemove", handleMousemove)
          .on("mouseleave", handleMouseleave);    

    // Add an axis to the vis  
    FRAME3.append("g") 
          .attr("transform", "translate(" + MARGINS.left + 
                "," + (VIS_HEIGHT + MARGINS.top) + ")") 
          .call(d3.axisBottom(X_SCALE3).ticks(4)) 
            .attr("font-size", '20px'); 


  });
}

// Call function 
build_interactive_plot();








