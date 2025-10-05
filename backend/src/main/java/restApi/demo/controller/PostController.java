package restApi.demo.controller;

import org.springframework.web.bind.annotation.*;
import restApi.demo.dto.CreatePostRequest;
import restApi.demo.dto.UpdatePostRequest;
import restApi.demo.entity.Post;
import restApi.demo.service.PostService;

import java.util.List;

@RestController
@RequestMapping("/users")
public class PostController {

    private final PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    // Create a post for a user
    @PostMapping("/{userId}/posts")
    public Post createPost(@PathVariable Long userId, @RequestBody CreatePostRequest request) {
        return postService.createPost(userId, request.getPostTitle(), request.getContent());
    }

    // Get all posts for a user
    @GetMapping("/{userId}/posts")
    public List<Post> getPosts(@PathVariable Long userId) {
        return postService.getAllUserPosts(userId);
    }

    // Get a single post
    @GetMapping("/posts/{postId}")
    public Post getPost(@PathVariable Long postId) {
        return postService.getPostById(postId);
    }

    // Update a post
    @PutMapping("/posts/{postId}")
    public Post updatePost(@PathVariable Long postId, @RequestBody UpdatePostRequest request) {
        return postService.updatePost(postId, request.getPostTitle(), request.getContent());
    }

    // Delete a post
    @DeleteMapping("/posts/{postId}")
    public void deletePost(@PathVariable Long postId) {
        postService.deletePost(postId);
    }
}
