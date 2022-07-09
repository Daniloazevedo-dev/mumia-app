package br.com.mumia.model;

import java.util.Objects;

public class Produto {
	private int id;
	private int codigo_barras;
	private String descricao;
	private String categoria;
	private float preco;
	private int quantidade;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getCodigo_barras() {
		return codigo_barras;
	}

	public void setCodigo_barras(int codigo_barras) {
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

	public float getPreco() {
		return preco;
	}

	public void setPreco(float preco) {
		this.preco = preco;
	}

	public int getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(int quantidade) {
		this.quantidade = quantidade;
	}

	@Override
	public int hashCode() {
		return Objects.hash(categoria, codigo_barras, descricao, id, preco, quantidade);
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
		return Objects.equals(categoria, other.categoria) && codigo_barras == other.codigo_barras
				&& Objects.equals(descricao, other.descricao) && id == other.id
				&& Float.floatToIntBits(preco) == Float.floatToIntBits(other.preco) && quantidade == other.quantidade;
	}

}
