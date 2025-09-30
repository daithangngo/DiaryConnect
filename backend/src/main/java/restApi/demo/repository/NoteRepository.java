package restApi.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import restApi.demo.entity.Note;
import restApi.demo.entity.User;

import java.util.List;

public interface NoteRepository extends JpaRepository<Note, Long> {
    List<Note> findByUser(User user);
}
