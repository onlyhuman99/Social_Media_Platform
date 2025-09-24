package com.example.demo.service;

import com.example.demo.entity.Post;
import com.example.demo.repository.PostRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class PostService {
    private final PostRepository postRepository;
    public PostService(PostRepository postRepository) { this.postRepository = postRepository; }

    public List<Post> getAllPosts() { return postRepository.findAll(); }
    public Optional<Post> getPostById(Long id) { return postRepository.findById(id); }
    public Post createPost(Post post) { return postRepository.save(post); }
}
