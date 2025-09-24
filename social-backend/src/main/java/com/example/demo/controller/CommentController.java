package com.example.demo.controller;

import com.example.demo.entity.Comment;
import com.example.demo.service.CommentService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/comments")
public class CommentController {
    private final CommentService commentService;
    public CommentController(CommentService commentService) { this.commentService = commentService; }

    @GetMapping
    public List<Comment> getAllComments() { return commentService.getAllComments(); }

    @PostMapping
    public Comment createComment(@RequestBody Comment comment) { return commentService.createComment(comment); }
}
