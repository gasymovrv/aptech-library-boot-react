package ru.aptech.library.service;

import ru.aptech.library.entities.Author;

import java.util.List;

public interface AuthorService {

	List<Author> findAll();

	Author findById(Long id);

	List<Author> findByFio(String fio);

	Author saveOrUpdate(Author author);

	void deleteById(Long id);
}
