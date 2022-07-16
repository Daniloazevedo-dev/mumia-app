

function inserirProduto() {
	event.preventDefault();
	
if (form.checkValidity() === true){
	
	var data = {
		"codigoBarras": codigoBarra.value,
        "descricao": descricao.value,
        "categoria": categoria.value,
        "preco": preco.value,
        "quantidade": quantidade.value
	}
	
	$.ajax({
		type: "POST",
		url: "https://mumia-app.herokuapp.com/produto/inserir",
		async: true,
		contentType: "application/json; charset=utf-8",
		data:JSON.stringify(data)
	}).then(sucesso, falha);

	function sucesso(data) {
		
		buscarTodosProdutos();
		alert('Produto inserido com sucesso. ')
	}

	function falha(data) {
		alert("Erro ao inserir Produtos");
	}
	
	
}

	buscarTodosProdutos();
}

function updateProduto() {
	alert('oi');
}

function deleteProduto() {
	descricao.value = ""
}

function buscarProduto() {
	alert('falo');
}

function buscarTodosProdutos() {

	$.ajax({
		type: "GET",
		url: "https://mumia-app.herokuapp.com/produto/buscar-todos",
		async: true,
		contentType: "application/json; charset=utf-8",
	}).then(sucesso, falha);

	function sucesso(data) {

		var linhaTabela = "";

		for (var i = 0; i < data.length; i++) {

			linhaTabela = linhaTabela + '<tr><td>' + data[i].descricao + '</td><td> ' + data[i].categoria + ' </td><td> ' + data[i].quantidade + ' </td><td> ' + data[i].preco + ' </td><td> ' + data[i].codigoBarras + ' </td><td><button title="Excluir" class="btn btn-dark" onclick="deleteProduto();"><i class="bi bi-trash-fill"></i> Excluir</button><button title="Editar" class="btn btn-secondary mx-1" onclick="updateProduto();"><i class="bi bi-pencil-fill"></i> Editar</button></td></tr>'

			listProduto.innerHTML = linhaTabela

		}

	}

	function falha(data) {
		alert("Erro ao Listar Produtos");
	}
}
window.onload = buscarTodosProdutos