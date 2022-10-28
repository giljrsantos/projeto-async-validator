import { createServer } from 'node:http';
import url from 'node:url';

const server = createServer((req, res) => {
    const query = url.parse(req.url, true).query;

    //ARRAY DE NOMES QUE NÃO PERMITE INSERIR
    let arrayName = [ 'gilberto', 'erik', 'lucas', 'marcelo', 'consolelog', 'capiaudosul' ]
    
    //varivel que guarda o nome digitado
    let nome = query.username 

     //caso o nome existe no array, recupra o index mesmo
    let valorReal = arrayName.indexOf(nome);

    console.log('Linha 9: ', arrayName); //retorna o array de nome
    console.log('Linha 10: ', nome); //nome digitado no formulário
    console.log('Linha 11: ', valorReal); //caso o nome existe no array, consola o index do mesmo
    console.log('Linha 11: ', arrayName[valorReal]); //recupera o nome no array, referente ao index
        
    res.write(
        //se o nome digitado não existir no array, o formulário é habilitado para ser submetido
        JSON.stringify({disponivel: query.username != arrayName[valorReal] })
    );

    res.end();
});

server.listen(3000, () => {
    console.log('API pronto para uso');
})