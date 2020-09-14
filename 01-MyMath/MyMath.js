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
    constructor(value) {
        // 'this' referenziert den Kontext in dem die aktuelle Funktion aufgerufen wird. 
        // Hier referenziert es die Instanz der Klasse MyMath die wir gerade erstellen.
        // mit 'value * 1' erzwingen wir, dass value als number gelesen wird.
        if(value)
            this.value = value * 1;
        else
            this.value = 0; 
    }

    add(value) 
    {
        return this.value + value;
    }

    subtract(value) 
    {
        return this.value - value;
    }

    multiply(value) 
    {
        return this.value * value;
    }

    divide(value) 
    {
        if(value === 0)
            return "Durch Null teilen ist verboten!";
        else 
            return this.value / value;
    }

    pow(pot) 
    {
        if(pot%1 !== 0 || pot < 0)
            return "Der Exponent muss eine natürliche Zahl sein sein!";
        else
        {
            let value_buffer = this.value;
            for(let i = 1; i < pot; i++)
            {
                value_buffer = value_buffer * this.value;
            }

            return value_buffer;
        }
    }

    faculty() 
    {
        let value_buffer = this.value;
        if(value_buffer%1 !== 0 || value_buffer < 0)
            return "Die Fakultät ist nur für natürliche Zahlen definiert!";
        else
        {
            for(let i = (value_buffer - 1); i > 1; i--)
            {
                value_buffer = value_buffer * i;
            }
            
            return value_buffer;
        }
    }
}
