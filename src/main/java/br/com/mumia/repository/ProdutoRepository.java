package br.com.mumia.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import br.com.mumia.model.Produto;

@Repository
@RepositoryRestResource(exported = false)
public interface ProdutoRepository extends CrudRepository<Produto, Long> {
	
	Produto findByCodigoBarras(Long codigoBarras );
}
