import { collection, query, where, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore/lite';

class PostManager {
    constructor(db, user) {
        this.db = db;
        this.user = user;
        this.collection = collection(db, 'posts')
    }

    async fetchPosts() {
        const q = query(this.collection, where('userId', '==', this.user.uid));
        const response = await getDocs(q);
        return response.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    }

    savePost(post) {
        if (post.title.trim() !== '') {
            const postData = { userId: this.user.uid, title: post.title, body: post.body };
            if (post?.id) {
                return updateDoc(doc(this.db, 'posts', post.id), postData);
            }
            return addDoc(collection(this.db, 'posts'), postData);
        }
        return Promise.reject(new Error('Post title is required'));
    }

    deletePost(post) {
        if (post?.id) {
            return deleteDoc(doc(this.db, 'posts', post.id));
        }
        return Promise.reject(new Error('Post ID is required to delete a post'));
    }
}

export default PostManager;
