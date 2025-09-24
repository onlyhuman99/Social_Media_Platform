package com.example.demo.controller;

import com.example.demo.entity.*;
import com.example.demo.repository.*;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/posts")
@CrossOrigin(origins = "http://localhost:5173")
public class PostController {

    private final PostRepository postRepository;
    private final UserRepository userRepository;
    private final CommentRepository commentRepository;
    private final LikeRepository likeRepository;

    public PostController(PostRepository postRepository, UserRepository userRepository,
                          CommentRepository commentRepository, LikeRepository likeRepository) {
        this.postRepository = postRepository;
        this.userRepository = userRepository;
        this.commentRepository = commentRepository;
        this.likeRepository = likeRepository;
    }

    @GetMapping
    public List<Post> feed() {
        return postRepository.findAllByOrderByCreatedAtDesc();
    }

    @PostMapping
    public Post createPost(@RequestBody Map<String, Object> payload) {
        Long authorId = ((Number)payload.get("authorId")).longValue();
        String content = (String) payload.get("content");
        Optional<User> u = userRepository.findById(authorId);
        if (u.isEmpty()) return null;
        Post p = new Post();
        p.setAuthor(u.get());
        p.setContent(content);
        p.setCreatedAt(LocalDateTime.now());
        return postRepository.save(p);
    }

    @PostMapping("/{postId}/comment")
    public Comment addComment(@PathVariable Long postId, @RequestBody Map<String, Object> payload) {
        Long authorId = ((Number)payload.get("authorId")).longValue();
        String text = (String) payload.get("text");
        Optional<Post> op = postRepository.findById(postId);
        Optional<User> ou = userRepository.findById(authorId);
        if (op.isEmpty() || ou.isEmpty()) return null;
        Comment c = new Comment();
        c.setPost(op.get());
        c.setAuthor(ou.get());
        c.setText(text);
        c.setCreatedAt(LocalDateTime.now());
        return commentRepository.save(c);
    }

    @PostMapping("/{postId}/like")
    public Map<String, Object> like(@PathVariable Long postId, @RequestBody Map<String, Object> payload) {
        Long userId = ((Number)payload.get("userId")).longValue();
        Map<String, Object> result = new HashMap<>();
        Optional<Post> op = postRepository.findById(postId);
        Optional<User> ou = userRepository.findById(userId);
        if (op.isEmpty() || ou.isEmpty()) { result.put("ok", false); return result; }
        Optional<Like> existing = likeRepository.findByPostIdAndUserId(postId, userId);
        if (existing.isPresent()) {
            // unlike
            likeRepository.delete(existing.get());
            result.put("liked", false);
        } else {
            Like l = new Like();
            l.setPost(op.get());
            l.setUser(ou.get());
            likeRepository.save(l);
            result.put("liked", true);
        }
        Long count = likeRepository.countByPostId(postId);
        result.put("likes", count);
        result.put("ok", true);
        return result;
    }

    @GetMapping("/{postId}/comments")
    public List<Comment> getComments(@PathVariable Long postId) {
        return commentRepository.findByPostIdOrderByCreatedAtAsc(postId);
    }

    @GetMapping("/{postId}/likes")
    public Map<String, Long> getLikes(@PathVariable Long postId) {
        Long count = likeRepository.countByPostId(postId);
        return Map.of("likes", count);
    }
}
