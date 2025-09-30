package restApi.demo.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import restApi.demo.entity.Note;
import restApi.demo.entity.User;
import restApi.demo.repository.NoteRepository;
import restApi.demo.repository.UserRepository;

import java.util.List;

@Service
public class NoteService {

    private final NoteRepository noteRepository;
    private final UserRepository userRepository;

    public NoteService(NoteRepository noteRepository, UserRepository userRepository) {
        this.noteRepository = noteRepository;
        this.userRepository = userRepository;
    }

    // Create a note and update user note count
    @Transactional
    public Note createNote(Long userId, String noteTitle, String content) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Note note = Note.builder()
                .user(user)
                .noteTitle(noteTitle)
                .content(content)
                .build();

        noteRepository.save(note);
        return note;
    }

    // Get all notes for a user
    public List<Note> getAllUserNotes(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return noteRepository.findByUser(user);
    }

    // Get a single note by ID
    public Note getNoteById(Long noteId) {
        return noteRepository.findById(noteId)
                .orElseThrow(() -> new RuntimeException("Note not found"));
    }

    // Update a note
    @Transactional
    public Note updateNote(Long noteId, String noteTitle, String content) {
        Note note = noteRepository.findById(noteId)
                .orElseThrow(() -> new RuntimeException("Note not found"));

        note.setNoteTitle(noteTitle);
        note.setContent(content);

        return noteRepository.save(note);
    }

    // Delete a note
    @Transactional
    public void deleteNote(Long noteId) {
        Note note = noteRepository.findById(noteId)
                .orElseThrow(() -> new RuntimeException("Note not found"));

        noteRepository.delete(note);
    }
}
