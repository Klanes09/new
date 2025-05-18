const firebaseConfig = {
      apiKey: "AIzaSyAs9PIZbovAsGWgtEQ9HZJZ0Dto14wb89c",
      authDomain: "comments-b3497.firebaseapp.com",
      databaseURL: "https://comments-b3497-default-rtdb.firebaseio.com",
      projectId: "comments-b3497",
      storageBucket: "comments-b3497.firebasestorage.app",
      messagingSenderId: "923449456117",
      appId: "1:923449456117:web:38e674de5c47db1ece9cbc",
      measurementId: "G-PT2GYS218F"
    };

    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();

    async function loadComments() {
      const snapshot = await db.collection("comments").orderBy("timestamp", "desc").get();
      const container = document.getElementById("commentsContainer");
      container.innerHTML = "";
      snapshot.forEach(doc => {
        const data = doc.data();
        const div = document.createElement("div");
        div.innerHTML = `<strong>${data.name}</strong>: ${data.text}`;
        container.appendChild(div);
      });
    }

    document.getElementById("commentForm").addEventListener("submit", async (e) => {
      e.preventDefault();

      const nameInput = document.getElementById("nameInput");
      const commentInput = document.getElementById("commentInput");

      const name = nameInput.value.trim();
      const text = commentInput.value.trim();

      if (name && text) {
        await db.collection("comments").add({
          name,
          text,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        nameInput.value = "";
        commentInput.value = "";
        loadComments();
      }
    });

    loadComments();