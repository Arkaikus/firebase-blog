import { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore/lite';

function EditModal({ post, onClose, onSave, db }) {
    const [editedTitle, setEditedTitle] = useState(post.title);

    const handleSave = async () => {
        await updateDoc(doc(db, 'posts', post.id), { title: editedTitle });
        onSave();
        onClose();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Edit Post</h2>
                <textarea
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                    rows="4"
                    cols="50"
                />
                <div>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default EditModal;