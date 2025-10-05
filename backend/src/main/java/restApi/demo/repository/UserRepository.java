package restApi.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import restApi.demo.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
}
