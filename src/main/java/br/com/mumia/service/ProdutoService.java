package br.com.mumia.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.mumia.model.Produto;
import br.com.mumia.repository.ProdutoRepository;

@Service
public class ProdutoService {

	@Autowired
	private ProdutoRepository produtoRepository;

	public Produto inserirProduto(Produto produto) {
		return produtoRepository.save(produto);
	}

	public Produto updateProduto(Produto produto) {
		return produtoRepository.save(produto);
	}

	public void deleteProduto(Long id) {
		produtoRepository.deleteById(id);
	}

	public Produto buscarProduto(Long id) {
		return produtoRepository.findById(id).get();
	}

	public List<Produto> buscarTodos() {
		return (List<Produto>) produtoRepository.findAll();
	}

	public boolean buscarCodigoBarras(Long codigoBarras) {

		Produto produto = produtoRepository.findByCodigoBarras(codigoBarras);

		if (produto == null) {
			return false;
		}
		return true;

	}

}