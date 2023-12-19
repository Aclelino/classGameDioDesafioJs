class game{

    // Metodo construtor

    constructor(nome,idade,tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = ["Guerreiro","Mago","Monge","Ninja"]

        console.log("_____________________________")
        console.log("Play: " + this.nome)
        console.log("Age: " + this.idade)
        console.log("_____________________________")

      

    }

    atacar(){

        for (var i = 0; i<=4 ;i++){


            if (this.tipo[i] === "Guerreiro"){
                console.log("o "+ this.tipo[0] + " Atacou usando espada")
             }
           
            
             if (this.tipo[i] === "Mago"){
                console.log("o "+ this.tipo[1] + " Atacou usando margia")
             }
    
             if (this.tipo[i] === "Monge"){
                console.log("o "+ this.tipo[2] + " Atacou usando artes marciais")
             }
    
             if (this.tipo[i] === "Ninja"){
                console.log("o "+ this.tipo[3] + " Atacou  usando shuriken")
             }


        }

        
        }    
    

    
}
teste = new game('Jose',12);
teste.atacar();