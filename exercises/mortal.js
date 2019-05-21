let creatures = {
    mortals: ['Men', 'Animals', 'Insects'],
    immortals: ['Angels', 'Ghosts']
};

men = ['Galileo', 'Socrates', 'Plato', 'Aristotle', 'Pythogras'];

let socratesIsMan = men.includes('Socrates');

let isMortal = creatures.mortals.includes('Men');

if (socratesIsMan) {
    console.log('Socrates is a Man, Checking if he\'s mortal');
    if (isMortal) {
        console.log('Socrates is a man and is mortal');
    } else {
        console.log('Socrates is a man but he\'s not mortal');
    }
} else {
    console.log('Socrates is not a man')
}