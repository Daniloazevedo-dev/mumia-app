package br.com.mumia.model;

import java.math.BigDecimal;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "PRODUTO")
public class Produto {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "ID")
	private Long id;

	@Column(name = "CODIGO_BARRAS")
	@NotNull(message = "O CODIGO é obrigatorio.")
	private Integer codigo_barras;

	@Column(name = "DESCRICAO")
	@NotEmpty(message = "A descrição  é obrigatorio.")
	private String descricao;

	@Column(name = "CATEGORIA")
	@NotEmpty(message = "A CATEGORIA é obrigatorio.")
	private String categoria;

	@Column(name = "PRECO")
	@NotNull(message = "O PREÇO é obrigatorio.")
	private BigDecimal preco;

	@Column(name = "QUANTIDADE")
	@NotNull(message = "A QUANTIDADE é obrigatorio.")
	private Integer quantidade;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Integer getCodigo_barras() {
		return codigo_barras;
	}

	public void setCodigo_barras(Integer codigo_barras) {
		this.codigo_barras = codigo_barras;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getCategoria() {
		return categoria;
	}

	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}

	public BigDecimal getPreco() {
		return preco;
	}

	public void setPreco(BigDecimal preco) {
		this.preco = preco;
	}

	public Integer getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(Integer quantidade) {
		this.quantidade = quantidade;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Produto other = (Produto) obj;
		return Objects.equals(id, other.id);
	}

	

	

}
