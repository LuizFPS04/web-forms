let notes = [];

function addNote() {
    const title = document.getElementById('note-title').value;
    const content = document.getElementById('note-content').value;

    if (title && content) {
        notes.push({ title, content });
        document.getElementById('note-title').value = '';
        document.getElementById('note-content').value = '';
        displayNotes();
    }
}

function displayNotes() {
    const container = document.getElementById('notes-container');
    container.innerHTML = '';

    notes.forEach((note) => {
        const noteElement = document.createElement('div');
        noteElement.className = 'note';
        noteElement.innerHTML = `
            <div class="note-title">${note.title}</div>
            <div class="note-content">${note.content}</div>
        `;
        container.appendChild(noteElement);
    });
}

function filterNotes() {
    const searchValue = document.getElementById('search-input').value.toLowerCase();
    const filteredNotes = notes.filter(note => 
        note.title.toLowerCase().includes(searchValue) || 
        note.content.toLowerCase().includes(searchValue)
    );

    const container = document.getElementById('notes-container');
    container.innerHTML = '';

    filteredNotes.forEach(note => {
        const noteElement = document.createElement('div');
        noteElement.className = 'note';
        noteElement.innerHTML = `
            <div class="note-title">${note.title}</div>
            <div class="note-content">${note.content}</div>
        `;
        container.appendChild(noteElement);
    });
}