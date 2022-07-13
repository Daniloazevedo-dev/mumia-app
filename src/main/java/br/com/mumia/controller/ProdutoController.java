package br.com.mumia.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import br.com.mumia.model.Produto;
import br.com.mumia.service.ProdutoService;

@RestController
@RequestMapping(path = "/produto")
public class ProdutoController {

	@Autowired
	private ProdutoService produtoService;

	@PostMapping(path = "/inserir")
	public Produto inserir(@RequestBody Produto produto) {
		return produtoService.inserirProduto(produto);
	}

	@PutMapping("/update")
	public Produto updateProduto(@RequestBody Produto produto) {
		return produtoService.updateProduto(produto);
	}
	@DeleteMapping("/delete")
	@ResponseStatus(HttpStatus.OK)
	public void deleteProduto(@RequestBody Produto produto) {
		 produtoService.deleteProduto(produto);
		
	}

}
