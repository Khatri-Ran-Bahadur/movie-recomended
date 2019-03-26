package com.ApiApp.movie_recomended.models;

import java.util.LinkedList;
import java.util.List;

import javax.persistence.*;

@Entity
@Table(name="movie")
public class Movie {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private String name;
	private String description;
	private String image;
	@OneToMany(cascade=CascadeType.ALL,fetch=FetchType.EAGER)
	
//	movie= Movie(id=1); movie.catetgories xa vane savai aafai load garera liyera aauxa EAGER le tara LAZY le paxi load garxa xuttai load garnaparxa category lai

	private List<Category> categories=new LinkedList<Category>();
	
	public List<Category> getCategories() {
		return categories;
	}
	public void setCategories(List<Category> categories) {
		this.categories = categories;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	
	
}
