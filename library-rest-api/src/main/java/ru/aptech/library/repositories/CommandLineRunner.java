package ru.aptech.library.repositories;

import org.springframework.stereotype.Component;
import ru.aptech.library.entities.Author;
import ru.aptech.library.entities.Book;
import ru.aptech.library.entities.Genre;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Random;

@Component
public class CommandLineRunner implements org.springframework.boot.CommandLineRunner {

    private final BookRepository bookRepository;
    private final AuthorRepository authorRepository;
    private final GenreRepository genreRepository;

    public CommandLineRunner(BookRepository br, AuthorRepository ar, GenreRepository gr) {
        this.bookRepository = br;
        this.authorRepository = ar;
        this.genreRepository = gr;
    }

    @Override
    public void run(String... strings) throws Exception {
        List<Genre> genres = new ArrayList<>();
        for (int i = 0; i < 5; i++) {
            genres.add(genreRepository.save(
                    new Genre(null,
                            "genre" + i,
                            null)
                    )
            );
        }
        List<Author> authors = new ArrayList<>();
        for (int i = 0; i < 5; i++) {
            authors.add(authorRepository.save(
                    new Author(null,
                            "author" + i,
                            LocalDate.now(), LocalDateTime.now(), 0L, new HashSet<>(0))
                    )
            );
        }
        for (int i = 0; i < 10; i++) {
            bookRepository.save(
                    new Book(
                            null,
                            "book" + i,
                            10 * i,
                            "isbn" + i,
                            genres.get(getRandomIntegerInRange(0, 4)),
                            authors.get(getRandomIntegerInRange(0, 4)),
                            1800 + i,
                            new byte[10],
                            "описание",
                            null,
                            null,
                            0L,
                            LocalDateTime.now(),
                            0L,
                            getRandomDoubleInRange(500, 1000),
                            ".pdf",
                            "application/pdf",
                            "10B"
                    )
            );
        }
    }

    private int getRandomIntegerInRange(int min, int max) {
        if (min >= max) {
            throw new IllegalArgumentException("max must be greater than min");
        }
        Random r = new Random();
        return r.nextInt((max - min) + 1) + min;
    }

    private double getRandomDoubleInRange(double min, double max) {
        if (min >= max) {
            throw new IllegalArgumentException("max must be greater than min");
        }
        return (Math.random() * ((max - min) + 1)) + min;
    }
}