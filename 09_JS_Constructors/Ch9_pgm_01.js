// Using a function to create an object
var buildPlanet = function (name, position, type) {
    var planet = {};
  
    planet.name = name;
    planet.position = position;
    planet.type = type;
  
    return planet;
};


var planet1 = buildPlanet(
    "Jupiter",
    5,
    "Gas Giant"
);


console.log("First Planet:");
console.log("Name:", planet1.name);
console.log("Position:", planet1.position);
console.log("Type:", planet1.type);


var planet2 = buildPlanet(
    "Earth",
    3,
    "Terrestrial"
);


console.log("\nSecond Planet:");
console.log("Name:", planet2.name);
console.log("Type:", planet2.type);



/* Further Adventures
 *
 * 1) Build a second planet,
 *    using the buildPlanet function.
 *
 * 2) Log its name and type.
 *
 */