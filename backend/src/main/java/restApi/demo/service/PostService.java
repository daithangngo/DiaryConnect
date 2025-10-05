package restApi.demo.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import restApi.demo.entity.Post;
import restApi.demo.entity.User;
import restApi.demo.repository.PostRepository;
import restApi.demo.repository.UserRepository;

import java.util.List;

@Service
public class PostService {

    private final PostRepository postRepository;
    private final UserRepository userRepository;

    public PostService(PostRepository postRepository, UserRepository userRepository) {
        this.postRepository = postRepository;
        this.userRepository = userRepository;
    }

    // Create a post and update user post count
    @Transactional
    public Post createPost(Long userId, String postTitle, String content) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Post post = Post.builder()
                .user(user)
                .postTitle(postTitle)
                .content(content)
                .build();

        postRepository.save(post);
        return post;
    }

    // Get all posts for a user
    public List<Post> getAllUserPosts(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return postRepository.findByUser(user);
    }

    // Get a single post by ID
    public Post getPostById(Long postId) {
        return postRepository.findById(postId)
                .orElseThrow(() -> new RuntimeException("Post not found"));
    }

    // Update a post
    @Transactional
    public Post updatePost(Long postId, String postTitle, String content) {
        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new RuntimeException("Post not found"));

        post.setPostTitle(postTitle);
        post.setContent(content);

        return postRepository.save(post);
    }

    // Delete a post
    @Transactional
    public void deletePost(Long postId) {
        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new RuntimeException("Post not found"));

        postRepository.delete(post);
    }
}
