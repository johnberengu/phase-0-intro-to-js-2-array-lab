// // Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
const destructivelyAppendCat = (name) => {
    cats.push ("Ralph");
    return name
};


const destructivelyPrependCat = () => {
    cats.unshift ("Bob");
    
};

const destructivelyRemoveLastCat = () => {
    cats.pop ();
    
};
const destructivelyRemoveFirstCat = () => {
    cats.shift ()
};

const appendCat = (name) => {
  return [...cats,name];
};

const prependCat = (name) => {
    return [name,...cats];
};

const removeLastCat = () => {
    return cats.slice (0,-1);
};

const removeFirstCat = () => {
    return cats.slice (1);
};







