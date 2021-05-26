function ageInDays(){
    var birthYear = prompt('What year you born Dear?');
    var ageInDays = (2020-birthYear)*365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('YOU ARE ' +ageInDays+ ' DAYS OLD')
    h1.setAttribute('id','ageInDays')
    h1.appendChild(textAnswer);
    document.getElementById('result').appendChild(h1);
    console.log(ageInDays);
}
function reset(){
    document.getElementById('ageInDays').remove();
}