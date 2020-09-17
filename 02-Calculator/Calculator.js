import {MyMath} from "../01-MyMath/MyMath.js";



export class Calculator 
{
    constructor(numPad, calculation, solution) 
    {
        this.numPad = numPad;
        this.calculation = calculation;
        this.solution = solution;
        /*--------Hier werden Variablen erzeugt, die später zum Rechnen benötigt werden.----------*/
        this.myNumber = "";
        this.myNumber2 = "";
        this.rechenzeichen = "";
        this.calc = "";

        this.setupNumPad();
    }

    setupNumPad() 
    { 
        //Array.from(this.numPad.querySelectorAll("button")).forEach(number => { number.addEventListener('click', this.onButtonClick) });
        let list = document.querySelector("#numpad"),
            items = ["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", "0", "AC", "=", "/"];

        items.forEach(item => 
        {
            let button = document.createElement("button");
            button.innerText = item;
            button.addEventListener('click', this.onButtonClick.bind(this)); 

            list.appendChild(button);
        });
    }
    


    onButtonClick(symbol) 
    {
        let number = symbol.target.innerText;
        let number_int = number * 1;

        if(number === "AC")
            this.clear();
            

        if(number === "+" || number === "-" || number === "*" || number === "/")
        {
            this.rechenzeichen = number;
            this.calc += number;
        }
            
            

        if(Number.isInteger(number_int))
        {
            if(this.rechenzeichen === "")
            {
                this.myNumber += number;
                this.calc += number;
            }
            else
            {
                this.myNumber2 += number;
                this.calc += number;
            }
                          
        }
        

        if(number === "=")
        {
            this.summand = new MyMath(this.myNumber);
            this.summand2 = new MyMath(this.myNumber2);

            switch (this.rechenzeichen)
            {
                case "+" : this.summand.add(this.summand2); break;
                case "-" : this.summand.subtract(this.summand2); break;
                case "*" : this.summand.multiply(this.summand2); break;
                case "/" : this.summand.divide(this.summand2); break;
            }

            this.printSolution(this.summand.value);
        }

        this.print(this.calc);    

    }


    print(string) 
    {
        this.calculation.innerText = string;
    }

    printSolution(string) 
    {
        this.solution.innerText = string;
    }

    clear() 
    {
        this.myNumber = "";
        this.myNumber2 = "";
        this.rechenzeichen = "";
        this.calc = "";
        this.summand = new MyMath(0);
        this.summand2 = new MyMath(0);

        this.calculation.innerText = "";
        this.solution.innerText = "";
    }

}
