class Livro {

    constructor  (titulo, autor, ) {

    this.titulo = titulo;
    this.autor = autor;
    this.disponivel = true;
    
   }


}

class Usuer {

    constructor (nome) { 

        this.nome = nome;
        this.lDlEmprestimo = [];


    }

    livrosEmprest () {

        this.livro.forEach (livro => {
            if (livro.disponivel ===  false){
                console.log(`livro ${livro.titulo} autor ${livro.autor}`)
            }
        }
    )
    }
}

class Biblioteca {

    constructor () {

        this.livro = [];
        this.user = []
    }

    addLivro (livro) {

        this.livro.push (livro);
        console.log(`Livro adicionado ${livro.titulo} autor ${livro.autor} `)
    }

    alugarLivro (titulo) {

        const emprestimo = this.livro.find((livro) => livro.titulo === titulo);

        if (emprestimo.disponivel) {
            emprestimo.disponivel = false;

        console.log(`livro ${emprestimo.titulo}`)

        } else (`livro náo disoponivel`)
    }

    

    devolveLivro (titulo) {

        const emprestimo = this.livro.find((livro) => livro.titulo === titulo);

        if (emprestimo) {

            emprestimo.disponivel = true;

            console.log(`livro ${titulo}`)
        }


    }
}





}






