package restApi.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import restApi.demo.entity.Note;
import restApi.demo.entity.User;

import java.awt.*;
import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {
}
