package restApi.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import restApi.demo.entity.Post;
import restApi.demo.entity.User;

import java.util.List;

public interface PostRepository extends JpaRepository<Post, Long> {
    List<Post> findByUser(User user);
}
