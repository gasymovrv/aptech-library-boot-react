package ru.aptech.library.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.aptech.library.entities.Book;
import ru.aptech.library.service.BookService;

import java.util.List;


@RestController
@RequestMapping("/books")
public class BookController {

    @Autowired
    private BookService bookService;

    @GetMapping("/findAll")
    public List<Book> findAll() {
        return bookService.findAll();
    }

    @GetMapping("/findByName/{name}")
    public Iterable<Book> findByName(@PathVariable String name) {
        return bookService.findByName(name);
    }

    @GetMapping("/findByAuthorFio/{fio}")
    public Iterable<Book> findByAuthorFio(@PathVariable String fio) {
        return bookService.findByAuthorFio(fio);
    }

//    @RequestMapping(
//            value = "/api/rest",
//            method = RequestMethod.PUT)
//    @ResponseBody
//    public List<User> ormInsertUserById(
//            @RequestParam(value = "name") String name,
//            @RequestParam(value = "role") String role,
//            @RequestParam(value = "password") String password
//    ) {
//        return bookService.insertUser(name, role, password);
//    }
//
//    @RequestMapping(
//            value = "/api/rest",
//            method = RequestMethod.DELETE)
//    @ResponseBody
//    public List<User>  ormDeleteUserById(@RequestParam(value = "id") Integer id) {
//        return bookService.deleteUserById(id);
//    }

}
