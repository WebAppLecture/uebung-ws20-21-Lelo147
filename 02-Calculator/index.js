import {Calculator} from './Calculator.js';

window.Calculator = Calculator; //Fügt die Klasse Calculator zum globalen Namespace hinzu, damit ihr sie in der Browserkonsole hernehmen könnt.


let calculation = document.querySelector("#calculation");
let solution = document.querySelector("#solution");

window.calc = new Calculator(numpad, calculation, solution); //Erzeuge eine neue Instanz von Calculator