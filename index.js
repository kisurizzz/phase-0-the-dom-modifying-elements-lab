// Write your code here!
const mainChild = document.querySelector('main#main')
mainChild.remove()

const newHeader = document.createElement('h1');
newHeader.id = 'victory';

const yourName = 'Arnold Kisuri'
newHeader.textContent = `${yourName} is the champion`