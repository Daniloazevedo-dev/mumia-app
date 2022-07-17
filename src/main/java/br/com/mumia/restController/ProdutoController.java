package br.com.mumia.restController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

	@DeleteMapping("/delete/{id}")
	public void deleteProduto(@PathVariable Long id) {
		produtoService.deleteProduto(id);
	}
	
	@GetMapping("/buscar/{id}")
	public Produto buscarProduto(@PathVariable Long id) {
		return produtoService.buscarProduto(id);
		
	}
	
	@GetMapping("/buscar-todos")
	public List<Produto> buscarTodos() {
		return produtoService.buscarTodos();
	}

}