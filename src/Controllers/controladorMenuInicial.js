import config from "../Config";

export default async function carregarMenu() {

    let raiz = `${config.SERVER_ADRESS}api/tag/`;

    //pesquisa de acordo com a raiz e operação escolhida
    return fetch(raiz)
        .then(response => {
            // valida se a requisição falhou
            if (!response.ok) {
                return new Error('falhou a requisição') // cairá no catch da promise
            }

            // verificando pelo status
            if (response.status === 404) {
                return new Error('não encontrou qualquer resultado')
            }

            // retorna uma promise com os dados em JSON
            return response.json()
        })


}