package ru.aptech.library.service.impl;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.aptech.library.entities.Author;
import ru.aptech.library.entities.Book;
import ru.aptech.library.repositories.AuthorRepository;
import ru.aptech.library.service.AuthorService;

import java.util.List;

@Service
@Slf4j
public class AuthorServiceImpl implements AuthorService {

	@Autowired
	AuthorRepository authorRepository;

	@Override
	public List<Author> findAll() {
		return authorRepository.findAll();
	}

	@Override
	public Author saveOrUpdate(Author author) {
		return authorRepository.save(author);
	}

	@Override
	public boolean deleteById(Long id) {
		boolean success = false;
		try {
			authorRepository.deleteById(id);
			success = true;
		} catch (Exception e) {
			log.error("Не удалось удалить запись с id = " + id, e);
		}
		return success;
	}

	@Override
	public List<Author> findByFio(String fio) {
		return authorRepository.findByFio(fio);
	}

}
