module.exports = class Stack{
    constructor(){
        this.itens = []
    }

    push(element){
        this.itens.push(element)
    }

    pop(){
        return this.itens.pop()
    }

    //Retorna o elemento do topo da pilha 
    peek(){
        if(this.isEmpty()){
            //Se a pilha estiver vazia ele retorna indefinido
            return undefined
        }
        else{
            //Retorna o elemento do topo da pilha
            return this.itens[this.itens.length - 1]
        }
    }

    //Verifica se a pilha está vazia
    isEmpty(){
        if(this.itens.length == 0){
            return true
        }
        else{
            return false
        }
    }
    //Retorna quantos elementos tem na pilha
    size(){
        return this.itens.length
    }
    //Esvazia a pilha
    clear(){
        this.itens = []
    }

}