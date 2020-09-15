/**
 * 'export' ist nötig falls wir MyMath in einem anderen Modul importieren wollen.
 * 'class' legt fest dass es sich hierbei um eine Klasse handelt.
 * 'MyMath' ist der Name der Klasse.
 */
export class MyMath {

    /**
     * Der Konstruktor wird aufgerufen um neue Instanzen der Klasse zu generieren.
     * vgl. let myNumber = new MyMath(3);
     * 
     * @param value Unser Initialwert für den Wert von unserer MyMath Instanz.
     */
    constructor(value) 
    {
        // 'this' referenziert den Kontext in dem die aktuelle Funktion aufgerufen wird. 
        // Hier referenziert es die Instanz der Klasse MyMath die wir gerade erstellen.
        // mit 'value * 1' erzwingen wir, dass value als number gelesen wird.
        if(value)
            this.value = value * 1;
        else
            this.value = 0; 
    }

    add(number) 
    {
        this.value = this.value + number.value;
        return this;
    }

    subtract(number) 
    {
        this.value = this.value - number.value;
        return this;
    }

    multiply(number) 
    {
        this.value = this.value * number.value;
        return this;
    }

    divide(number) 
    {
        if(value === 0)
            return "Durch Null teilen ist verboten!";
        else 
        this.value = this.value / number.value;
        return this;
    }

    pow(pot) 
    {
        if(pot.value%1 !== 0 || pot.value < 0)
            return "Der Exponent muss eine natürliche Zahl sein sein!";
        else
        {
            let value_buffer = this.value;
            for(let i = 1; i < pot.value; i++)
            {
                this.value = this.value * value_buffer;
            }

            return this;
        }
    }

    faculty() 
    {
        if(this.value%1 !== 0 || this.value < 0)
            return "Die Fakultät ist nur für natürliche Zahlen definiert!";
        else
        {
            let value_buffer = this.value;
            for(let i = (value_buffer - 1); i > 1; i--)
            {
                this.value = this.value * i;
            }
            
            return this;
        }
    }
}
