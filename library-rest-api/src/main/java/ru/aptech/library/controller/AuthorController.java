package ru.aptech.library.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.aptech.library.entities.Author;
import ru.aptech.library.service.AuthorService;

import java.util.List;


@RestController
@RequestMapping("/authors")
public class AuthorController {

    @Autowired
    private AuthorService authorService;

    @GetMapping("/findAll")
    public List<Author> findAll() {
        return authorService.findAll();
    }

    @PostMapping("/save")
    public Author save(@RequestBody Author author){
        return authorService.saveOrUpdate(author);
    }

    @DeleteMapping("/delete/{id}")
    public boolean deleteById(@PathVariable Long id) {
        return authorService.deleteById(id);
    }
}
