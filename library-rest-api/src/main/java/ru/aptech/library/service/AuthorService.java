package ru.aptech.library.service;

import ru.aptech.library.entities.Author;

import java.util.List;

public interface AuthorService {

	List<Author> findAll();

	List<Author> findByFio(String fio);

	Author saveOrUpdate(Author author);

	boolean deleteById(Long id);
}
