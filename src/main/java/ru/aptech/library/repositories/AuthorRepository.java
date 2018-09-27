package ru.aptech.library.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.aptech.library.entities.Author;
import ru.aptech.library.entities.Book;

import java.util.List;

public interface AuthorRepository extends JpaRepository<Author, Long> {
	
	List<Author> findByFio(String fio);

	void deleteById(Long id);

}
