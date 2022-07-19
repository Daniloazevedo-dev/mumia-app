function salvar() {

	event.preventDefault();

	if (form.checkValidity() === true) {

		$.ajax({
			type: "GET",
			url: url + "produto/buscarCodigoBarras/" + codigoBarra.value,
			async: true,
			contentType: "application/json; charset=utf-8",
			beforeSend: function() {
				spinner.removeAttribute('hidden');
			},
			success: function(data) {
				
				spinner.setAttribute('hidden', 'hidden');
				
				if (data === true) {

					alert('Já existe um Produto com essse Codigo de Barras!');

				} else {

					if (idProduto.value === '' || idProduto.value === null) {

						inserirProduto();

					} else {

						atualizarProduto();

					}
				}
			},
			error: function() {
				
				spinner.setAttribute('hidden', 'hidden');
				
				alert("Erro ao Buscar Produto por Codigo de Barras!");
			}
		});
	}
}

function inserirProduto() {

	var data = {
		"codigoBarras": codigoBarra.value,
		"descricao": descricao.value,
		"categoria": categoria.value,
		"preco": preco.value.replace(".", "").replace(",", ""),
		"quantidade": quantidade.value
	}

	$.ajax({
		type: "POST",
		url: url + "produto/inserir",
		async: true,
		contentType: "application/json; charset=utf-8",
		data: JSON.stringify(data),
		beforeSend: function() {
			spinner.removeAttribute('hidden');
		},
		success: function() {
			
			spinner.setAttribute('hidden', 'hidden');

			idProduto.value = "";
			descricao.value = "";
			preco.value = "";
			quantidade.value = "";
			categoria.value = "";
			codigoBarra.value = "";

			alert('Produto inserido com sucesso. ')

			buscarTodosProdutos();
		},
		error: function() {
			spinner.setAttribute('hidden', 'hidden');

			alert("Erro ao inserido Produto");
		}
	});
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
			"preco": preco.value.replace(".", "").replace(",", ""),
			"quantidade": quantidade.value
		}
		
		$.ajax({
			type: "PUT",
			url: url + "produto/update",
			async: true,
			contentType: "application/json; charset=utf-8",
			data: JSON.stringify(data),
			beforeSend: function() {

				spinner.removeAttribute('hidden');
			},
			success: function() {

				spinner.setAttribute('hidden', 'hidden');
				
				buscarTodosProdutos();

				idProduto.value = "";
				descricao.value = "";
				preco.value = "";
				quantidade.value = "";
				categoria.value = "";
				codigoBarra.value = "";

				alert('Produto Atualizado com sucesso. ')

			},
			error: function() {
				
				spinner.setAttribute('hidden', 'hidden');

				alert("Erro ao Atualizar Produto.");
			}
		});
	}
}

function deleteProduto() {

	$(function() {
		$(document).on('click', '#excluir', function(e) {
			e.preventDefault;
			var id = $(this).parent().parent().find('td').data('id');

			deletarProduto(id);
		});
	});

	buscarTodosProdutos();
}

function deletarProduto(id) {

	$.ajax({
		type: "DELETE",
		url: url + "produto/delete/" + id,
		async: true,
		contentType: "application/json; charset=utf-8",
		beforeSend: function() {
			spinner.removeAttribute('hidden');
		},
		success: function() {
			
			spinner.setAttribute('hidden', 'hidden');

			alert('Produto deletado com sucesso');

			buscarTodosProdutos();
		},
		error: function() {
			
			spinner.setAttribute('hidden', 'hidden');

			alert("Erro ao Buscar Produto");
		}
	});
}

function buscarProduto(id) {

	$.ajax({
		type: "GET",
		url: url + "produto/buscar/" + id,
		async: true,
		contentType: "application/json; charset=utf-8",
		beforeSend: function() {
			spinner.removeAttribute('hidden');
		},
		success: function(data) {

			spinner.setAttribute('hidden', 'hidden');

			idProduto.value = data.id;
			descricao.value = data.descricao;
			preco.value = data.preco;
			quantidade.value = data.quantidade;
			categoria.value = data.categoria;
			codigoBarra.value = data.codigoBarras;

		},
		error: function() {
			
			spinner.setAttribute('hidden', 'hidden');
			
			alert("Erro ao Buscar Produto");
		}
	});
}

function buscarTodosProdutos() {

	$.ajax({
		type: "GET",
		url: url + "produto/buscar-todos",
		async: true,
		contentType: "application/json; charset=utf-8",
		beforeSend: function() {
			spinner.removeAttribute('hidden');
		},
		success: function(data) {
			spinner.setAttribute('hidden', 'hidden')
			var linhaTabela = "";

			if (data.length === 0) {

				listProduto.innerHTML = "<td class='text-end'>Não há dados para serem mostrados.</td>";

			} else {

				for (var i = 0; i < data.length; i++) {

					linhaTabela = linhaTabela + '<tr><td data-id="' + data[i].id + '">' + data[i].id + '</td><td>' + data[i].descricao + '</td><td> ' + data[i].categoria + ' </td><td> ' + data[i].quantidade + ' </td><td> ' + data[i].preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + ' </td><td> ' + data[i].codigoBarras + ' </td><td><button id="excluir" title="Excluir" class="btn btn-dark" "><i class="bi bi-trash-fill"></i> Excluir</button><button id="editar" title="Editar" class="btn btn-secondary mx-1"><i class="bi bi-pencil-fill"></i> Editar</button></td></tr>'
					listProduto.innerHTML = linhaTabela
				}
			}
		},
		error: function() {
			spinner.setAttribute('hidden', 'hidden')
			alert("Erro ao Listar Produtos");
		}

	});
}

window.onload = function() {

	buscarTodosProdutos();
	deleteProduto();
	updateProduto();

}