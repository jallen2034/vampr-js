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

// link nodes in our tree 
Elgort.addOffspring(Andrew);

// my test
Andrew.closestCommonAncestor(Bart);

module.exports = Vampire;