const nomes = ["Nathalia", "Iara", "Maria Clara", "Thiago", "Matheus", "Angela", "Jorge"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)
