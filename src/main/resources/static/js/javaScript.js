function salvar (){
	
	if(idProduto.value === '' || idProduto.value === null){
		
		
		
		inserirProduto();
		
	}else {
		
		atualizarProduto();
	}
}  

function inserirProduto() {
	event.preventDefault();

	if (form.checkValidity() === true) {

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
			data: JSON.stringify(data)
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
	
	$(function() {
		
		$(document).on('click', '#editar', function(e) {
			e.preventDefault;
			var id = $(this).parent().parent().find('td').data('id');
			
			
			buscarProduto(id);
			
			

		});
	});
	
}

function atualizarProduto() {
	
	event.preventDefault();

	if (form.checkValidity() === true) {

		var data = {
			
			"id": idProduto.value,
			"codigoBarras": codigoBarra.value,
			"descricao": descricao.value,
			"categoria": categoria.value,
			"preco": preco.value,
			"quantidade": quantidade.value
		}

		$.ajax({
			type: "PUT",
			url: "https://mumia-app.herokuapp.com/produto/update",
			async: true,
			contentType: "application/json; charset=utf-8",
			data: JSON.stringify(data)
		}).then(sucesso, falha);

		function sucesso(data) {

			buscarTodosProdutos();
			alert('Produto Atualizado com sucesso. ')
		}

		function falha(data) {
			alert("Erro ao Atualizar Produto.");
		}


	}

	buscarTodosProdutos();

}

function deleteProduto() {

	$(function() {
		$(document).on('click', '#excluir', function(e) {
			e.preventDefault;
			var id = $(this).parent().parent().find('td').data('id');
			
			deletarProduto(id);

		});
	});


}

function deletarProduto(id) {
	
	$.ajax({
		type: "DELETE",
		url: "https://mumia-app.herokuapp.com/produto/delete/" + id,
		async: true,
		contentType: "application/json; charset=utf-8",
	}).then(sucesso, falha);

	function sucesso(data) {
		
		buscarTodosProdutos()
	
	alert('Produto deletado com sucesso.');
	
	}

	function falha(data) {
		alert("Erro ao Deletar Produto.");
	}


}


function buscarProduto(id) {
	
	$.ajax({
		type: "GET",
		url: "https://mumia-app.herokuapp.com/produto/buscar/" + id,
		async: true,
		contentType: "application/json; charset=utf-8",
	}).then(sucesso, falha);

	function sucesso(data) {
	
		idProduto.value = data.id;
		descricao.value = data.descricao;
		preco.value = data.preco;
		quantidade.value = data.quantidade;
		categoria.value = data.categoria;
		codigoBarra.value = data.codigoBarras;
		
	
	}

	function falha(data) {
		alert("Erro ao Buscar Produto");
	}
	
}

function buscarTodosProdutos() {

	$.ajax({
		type: "GET",
		url: "https://mumia-app.herokuapp.com/buscar-todos",
		async: true,
		contentType: "application/json; charset=utf-8",
	}).then(sucesso, falha);

	function sucesso(data) {

		var linhaTabela = "";

		for (var i = 0; i < data.length; i++) {

			linhaTabela = linhaTabela + '<tr><td data-id="' + data[i].id + '">' + data[i].id + '</td><td data-nome="' + data[i].descricao + '">' + data[i].descricao + '</td><td data-nome="' + data[i].categoria + '"> ' + data[i].categoria + ' </td><td> ' + data[i].quantidade + ' </td><td> ' + data[i].preco + ' </td><td> ' + data[i].codigoBarras + ' </td><td><button id="excluir" title="Excluir" class="btn btn-dark"><i class="bi bi-trash-fill"></i> Excluir</button><button id="editar" title="Editar" class="btn btn-secondary mx-1"><i class="bi bi-pencil-fill"></i> Editar</button></td></tr>'

			listProduto.innerHTML = linhaTabela

		}

	}

	function falha(data) {
		alert("Erro ao Listar Produtos");
	}
}

window.onload = function() {

	buscarTodosProdutos();
	deleteProduto();
	updateProduto();

}