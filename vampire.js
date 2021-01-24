class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/
<<<<<<< HEAD
=======
  /** Simple tree methods **/
>>>>>>> traversal
  // Adds the vampire as an offspring of this vampire
  // also sets the creator for the vampire it passes in as this current object
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  // if the length of the offspring[] array in the current vampire is greater than 0 indexes long
  // count how many indexes are in the current vampires offspring array and add that value
  get numberOfOffspring() {
    let numberOfOffspring = 0;

    if (this.offspring.length > 0) {
      numberOfOffspring = this.offspring.length;
    }

    return numberOfOffspring;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  // climb up the tree (using iteration), counting nodes, until no boss is found
  // while the current object has a boss 'edge' pointing to them 
  get numberOfVampiresFromOriginal() {
    let numberOfVampiresFromOriginal = 0;
    let currentVampire = this;

    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numberOfVampiresFromOriginal++;
    }

    return numberOfVampiresFromOriginal;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {

    const vampiresToCompare = [];

    if (this.creator === null) {
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
<<<<<<< HEAD
=======
  }

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {

    // base case in our recursion
    if (this.name === name) {
      return this;
    }
    
    /* loop through offspring[] arr for each parent node
     * call vampireWithName() recursively for each offspring in above array
     * DFS goes down to root leaf nodes, when it hits a leaf node, they either return sarah as an object to be passed back up the tree or return null of sarah not found
     * inside of loop of each recursive case, if each pending miltiplier recieves a sarah object, thats stored in knowsSarah, otherwise if loop finishs and no sarah found,
       null is stored in knowsSarah
     * if knowsSarah is an object (truthy), then returns this object back up the tree to the next pending multiply */
    for (const offspring of this.offspring) {
      const knowsSarah = offspring.vampireWithName(name);

      if (knowsSarah) {
        return knowsSarah;
      }
    }

    return null;
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    
    // some kind of counter on each node to keep track of any values children below return to it 
    let childrenCounter = 0;

    // call this method on all of the current vampires's descendants and add a counter every node that is visited
    // parent reporting how many children are below me 
    for (const offspring of this.offspring) {
      childrenCounter += 1;
      const childrenCounterReturnedFromChild = offspring.totalDescendents;
      childrenCounter += childrenCounterReturnedFromChild;
    }

    // when the base case for a node reporting its own value isnt hit, then we need to report this node to count itself to the parent node above 
    return childrenCounter;
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    let totalMillennials = [];
    
    // 
    if (this.yearConverted > 1980) {
      totalMillennials.push(this);
    }

    for (const offspring of this.offspring) {
      const millenialOffspring = offspring.allMillennialVampires;
      totalMillennials = totalMillennials.concat(millenialOffspring);
    }

    return totalMillennials;
>>>>>>> traversal
  }

  /** Stretch **/
  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
  }
}

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

<<<<<<< HEAD
// link nodes in our tree 
Elgort.addOffspring(Andrew);

// my test
Andrew.closestCommonAncestor(Bart);
=======

>>>>>>> traversal

module.exports = Vampire;