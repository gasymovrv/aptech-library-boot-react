package ru.aptech.library.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.aptech.library.entities.Author;

import java.util.List;
import java.util.Optional;

public interface AuthorRepository extends JpaRepository<Author, Long> {
	
	List<Author> findByFio(String fio);

	Optional<Author> findById(Long id);

	void deleteById(Long id);

}
