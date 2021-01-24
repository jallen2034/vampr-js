class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  // also sets the creator for the vampire it passes in as this current object
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    let numberOfOffspring = 0;

    // if the length of the offspring[] array in the current vampire is greater than 0 indexes long
    // count how many indexes are in the current vampires offspring array and add that value
    if (this.offspring.length > 0) {
      numberOfOffspring = this.offspring.length;
    }

    return numberOfOffspring;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVampiresFromOriginal = 0;
    let currentVampire = this;

    // climb up the tree (using iteration), counting nodes, until no boss is found
    // while the current object has a boss 'edge' pointing to them 

    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numberOfVampiresFromOriginal++;
    }

    return numberOfVampiresFromOriginal;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {

    const vampiresToCompare = [];

    if (this.creator == null) {
      return true;
    }

    vampiresToCompare.push({vampire: this, numofAncestors: 0});
    vampiresToCompare.push({vampire: vampire, numofAncestors: 0});

    vampiresToCompare[0].numofAncestors = this.numberOfVampiresFromOriginal;
    vampiresToCompare[1].numofAncestors = vampire.numberOfVampiresFromOriginal;

    // check if the numofAncestors in the first index of vampiresToCompare is < than numofAncestors in second index of vampiresToCompare
    if (vampiresToCompare[0].numofAncestors < vampiresToCompare[1].numofAncestors) {

      return true;
    } else {
      return false;
    }
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.

/*
  1. Handle first edge case for if a great-grandchild is shares an edge from a grandparent 
    - if so, just say the common ancestor is the parent for both grandchild and great grandchild 
  2. Compare the level that person a is on from the original root node vs the level person b is on from the original root node
    - if nodes a and b are not on the same level relative to the root node, keep climbing the tree from the node 'further down' below, until it hits an ancestor in line with the second person, who is above
  3. check the ancestor who is above person a on the same level as person b share a common grandparent again and again until the root is hit 
    - root node is terminator for a recursive case we do in here to do that 
  */
  
  // TODO
  // closestCommonAncestor(vampire) {

  //   // Handle first edge case for if a great-grandchild is shares an edge from a grandparent 
  //   if (this.creator === vampire) {
  //     return vampire;
  //   }
    
  //   let commonAncestor;
  //   const vampire1 = {vampire: this, numofAncestors: 0};
  //   const vampire2 = {vampire: vampire, numofAncestors: 0}

  //   vampire1.numofAncestors = this.numberOfVampiresFromOriginal;
  //   vampire2.numofAncestors = vampire.numberOfVampiresFromOriginal;

  //   console.log(vampire1.numofAncestors);
  //   console.log(vampire2.numofAncestors);
    
  //   // Compare the level that person a is on from the original root node vs the level person b is on from the original root node
  //   // if nodes a and b are not on the same level relative to the root node, keep climbing the tree from the node 'further down' below, 
  //   // until it hits an ancestor in line with the second person, who is above
  //   if (vampire1.numofAncestors > vampire2.numofAncestors) {
  //     let generationDifference = vampire1.numofAncestors - vampire2.numofAncestors;
  //     console.log(generationDifference);
  //     let currentVampire = this;

  //     // climb up the tree (using iteration), counting nodes, until no boss is found
  //     // while the current object has a boss 'edge' pointing to them 
  //     while (generationDifference > 0) {
  //       currentVampire = currentVampire.creator;
  //       generationDifference--;
  //     }

  //     // call recursiveRootCheck to recursivly keep moving up the tree from the two nodes and check the common ancestor of currentVampire and vampire
  //     commonAncestor = recursiveRootCheck(currentVampire, vampire);
  //     return commonAncestor;
  //   } else if (vampire2.numofAncestors > vampire1.numofAncestors) {
  //     let generationDifference = vampire1.numofAncestors - vampire1.numofAncestors;
  //     console.log(generationDifference);
  //     let currentVampire = this;

  //     // climb up the tree (using iteration), counting nodes, until no boss is found
  //     // while the current object has a boss 'edge' pointing to them 
  //     while (generationDifference > 0) {
  //       currentVampire = currentVampire.creator;
  //       generationDifference--;
  //     }

  //     // 3. check the ancestor who is above person a on the same level as person b share a common grandparent again and again until the root is hit 
  //     // - root node or a common parent being found between the two nodes we pass in is the terminator for a recursive case we do in here to do that
  //     commonAncestor = recursiveRootCheck(currentVampire, vampire);
  //     return commonAncestor;
  //   }
  // }
}

// TODO
// const recursiveRootCheck = function(currentVampire, vampire) {
//   if (currentVampire.creator === vampire.creator) {
//     return currentVampire.creator;
//   } else {
//     currentVampire = currentVampire.creator;
//     vampire = vampire.creator;
//     recursiveRootCheck(currentVampire, vampire)
//   }
// }

// create nodes representing each parent vamparie and who they infected 
const Original = new Vampire("Original", 1800);
const Ansel = new Vampire("Ansel", 1850);
const Bart = new Vampire("Bart", 1870);
const NoChildShrew = new Vampire("NoChildShrew", 1880);

// link nodes in our tree
Original.addOffspring(Ansel);
Original.addOffspring(Bart);
Original.addOffspring(NoChildShrew);

// create nodes representing child vamparie and who they infected 
const Elgort = new Vampire("Elgort", 1890);
const Sarah = new Vampire("Sarah", 1902);

// link nodes in our tree 
Ansel.addOffspring(Elgort);
Ansel.addOffspring(Sarah);

// create nodes representing grandchild vamparie and who they infected 
const Andrew = new Vampire("Andrew", 1980);

// link nodes in our tree 
Elgort.addOffspring(Andrew);

// my test
Andrew.closestCommonAncestor(Bart) 

module.exports = Vampire;

