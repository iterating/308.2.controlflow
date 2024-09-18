console.group( `Pt 1`)

function plantGrowth(startingPlants, thisWeek){
    //startingPlants must be a positive number. We can also use ts to do this. 
    if (typeof startingPlants !== 'number' || isNaN(startingPlants) || startingPlants <= 0) {
        console.error("Starting number of plants must be a positive number.");
        return;
    }
    //thisWeek must be a integer and cannot be positive. 
    if (typeof thisWeek !== 'number' || isNaN(thisWeek) || thisWeek < 0 || !Number.isInteger(thisWeek)) {
        console.error("The current week for plant growth must be a non-negative integer.");
        return;
    }

    // radius in meters
    const PI = 3.1415
    const radius = 5;
    // area in sq meters 
    const totalArea = PI * radius * radius
    const plantSpace = 0.8
    let plantsCount = [startingPlants/2]
    for (week = 1 ; week <= thisWeek ; week++) {
        let plantsPrev = plantsCount[week-1];
        let plantsNow = plantsPrev *2;
        plantsCount.push(plantsNow);
    }
    let plantsNow = plantsCount[thisWeek];
    let plantsTotalSpaceNow = plantSpace * plantsNow ;
    let areaLeft = totalArea - plantsTotalSpaceNow ;

    console.log(`Week: ${thisWeek}`);
    console.log(`Starting number of plants: ${startingPlants}`);
    console.log(`Current number of plants: ${plantsNow}`);
    console.log(`Total Area: ${totalArea.toFixed(1)} square meters`);
    console.log(`Space needed for plants: ${plantsTotalSpaceNow.toFixed(1)} square meters`);
    console.log(`Area left: ${areaLeft.toFixed(1)} square meters`);
    if (plantsTotalSpaceNow > 0.8*totalArea){
    console.log("Action: Prune")}
    else if (plantsTotalSpaceNow < (0.5*totalArea)){
        console.log("Action: Plant")}
    else console.log("Action: Monitor")
}

plantGrowth(20, 1);
// Week: 1
// Starting number of plants: 20
// Current number of plants: 20
// Total Area: 78.5 square meters
// Space needed for plants: 16.0 square meters
// Area left: 62.5 square meters
// Action: Plant
plantGrowth(20, 2);
// Starting number of plants: 20
// Current number of plants: 40
// Total Area: 78.5 square meters
// Space needed for plants: 32.0 square meters
// Area left: 46.5 square meters
// Action: Plant
plantGrowth(20, 3);
// Week: 3
// Starting number of plants: 20
// Current number of plants: 80
// Total Area: 78.5 square meters
// Space needed for plants: 64.0 square meters
// Area left: 14.5 square meters
// Action: Prune
console.groupEnd()

console.group(`Part 2: Thinking Bigger`)
// The conservation area in which the garden is located has multiple other gardens. 
// Using the logic you have already created, determine:
// The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.

plantGrowth(100, 10);
// Starting number of plants: 100
// Current number of plants: 51200
// Total Area: 78.5 square meters
// Space needed for plants: 40960.0 square meters

// You would need 40881.5 square meters more

//If the space remained circular, what would be the radius of this expanded garden?
const PI = 3.1415
let totalArea = 40960 // area in sq meters  
let radius = Math.sqrt(totalArea/PI) 
console.log(`The radius of the area needed is ${radius.toFixed(1)} square meters`)

    // The radius of the area needed is 114.2 square meters

console.groupEnd()
console.group(`Part 3`)
// The scientists decided not to listen to your recommendations, and have instead started with 100 plants in the original 5-meter-radius garden.
// Use try and catch to wrap your work in an error-handling block. If the amount of space required to hold the originally provided number of plants exceeds the amount of space available, throw a new error and log an appropriate message


function plantGrowthErrorHandled(startingPlants, thisWeek){
    //startingPlants must be a positive number. We can also use ts to do this. 
    if (typeof startingPlants !== 'number' || isNaN(startingPlants) || startingPlants <= 0) {
        console.error("Starting number of plants must be a positive number.");
        return;
    }
    //thisWeek must be a integer and cannot be positive. 
    if (typeof thisWeek !== 'number' || isNaN(thisWeek) || thisWeek < 0) {
        console.error("The current week for plant growth must be a non-negative number.");
        return;
    }

    const PI = 3.1415
    const radius = 5;
    const totalArea = PI * radius * radius
    const plantSpace = 0.8
    let plantsCount = [startingPlants/2]
    for (week = 1 ; week <= thisWeek ; week++) {
        let plantsPrev = plantsCount[week-1];
        let plantsNow = plantsPrev *2;
        plantsCount.push(plantsNow);
    }
    let plantsNow = plantsCount[thisWeek];
    let plantsTotalSpaceNow = plantSpace * plantsNow ;

    console.log(`Week: ${thisWeek}`);
    console.log(`Starting number of plants: ${startingPlants}`);
    console.log(`Current number of plants: ${plantsNow}`);
    console.log(`Total Area: ${totalArea.toFixed(1)} square meters`);
    console.log(`Space needed for plants: ${plantsTotalSpaceNow.toFixed(1)} square meters`);
    if (plantsTotalSpaceNow > 0.8*totalArea){
    console.log("Action: Prune")}
    else if (plantsTotalSpaceNow < (0.5*totalArea)){
        console.log("Action: Plant")}
    else console.log("Action: Monitor")

//Part 3
function areaLeft(totalArea, plantsTotalSpaceNow){
    try { let areaLeft = totalArea - plantsTotalSpaceNow; 
        if (areaLeft >= 0){
        console.log(`Area left: ${areaLeft.toFixed(1)} square meters`);}
        else if (areaLeft < 0){
            throw new Error('Space needed for plants exceeds leftover area');
        }
      }  catch (err) {
        console.error(err.message);
        }
    }
areaLeft(totalArea, plantsTotalSpaceNow);
}

plantGrowthErrorHandled(10,2)
// Week: 2
// Starting number of plants: 10
// Current number of plants: 20
// Total Area: 78.5 square meters
// Space needed for plants: 16.0 square meters
// Action: Plant
// Area left: 62.5 square meters
plantGrowthErrorHandled(100,1)
// Week: 1
// Starting number of plants: 100
// Current number of plants: 100
// Total Area: 78.5 square meters
// Space needed for plants: 80.0 square meters
// Action: Prune
// Space needed for plants exceeds leftover area
plantGrowthErrorHandled(-3,3)
// Starting number of plants must be a positive number.
plantGrowthErrorHandled(3,-3)
// The current week for plant growth must be a non-negative number.

console.groupEnd()
