package com.example.demo.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Message;
import com.example.demo.repository.MessageRepository;
import java.util.List;

@RestController
@RequestMapping("/messages")
@CrossOrigin(origins = "http://localhost:5173")
public class MessageController {
    private final MessageRepository repo;
    public MessageController(MessageRepository repo) { this.repo = repo; }

    @GetMapping
    public List<Message> getMessages() {
        return repo.findAll();
    }

    @PostMapping
    public Message sendMessage(@RequestBody Message msg) {
        return repo.save(msg);
    }
}
