package restApi.demo.controller;

import org.springframework.web.bind.annotation.*;
import restApi.demo.dto.CreateNoteRequest;
import restApi.demo.dto.UpdateNoteRequest;
import restApi.demo.entity.Note;
import restApi.demo.service.NoteService;

import java.util.List;

@RestController
@RequestMapping("/users")
public class NoteController {

    private final NoteService noteService;

    public NoteController(NoteService noteService) {
        this.noteService = noteService;
    }

    // Create a note for a user
    @PostMapping("/{userId}/notes")
    public Note createNote(@PathVariable Long userId, @RequestBody CreateNoteRequest request) {
        return noteService.createNote(userId, request.getNoteTitle(), request.getContent());
    }

    // Get all notes for a user
    @GetMapping("/{userId}/notes")
    public List<Note> getNotes(@PathVariable Long userId) {
        return noteService.getAllUserNotes(userId);
    }

    // Get a single note
    @GetMapping("/notes/{noteId}")
    public Note getNote(@PathVariable Long noteId) {
        return noteService.getNoteById(noteId);
    }

    // Update a note
    @PutMapping("/notes/{noteId}")
    public Note updateNote(@PathVariable Long noteId, @RequestBody UpdateNoteRequest request) {
        return noteService.updateNote(noteId, request.getNoteTitle(), request.getContent());
    }

    // Delete a note
    @DeleteMapping("/notes/{noteId}")
    public void deleteNote(@PathVariable Long noteId) {
        noteService.deleteNote(noteId);
    }
}
