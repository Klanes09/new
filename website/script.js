const firebaseConfig = {
  apiKey: "AIzaSyA-JhD6l7C11C4-TpscRpGtgNlewoJK6cc",
  authDomain: "comments-c7d5e.firebaseapp.com",
  projectId: "comments-c7d5e",
  storageBucket: "comments-c7d5e.firebasestorage.app",
  messagingSenderId: "804320538281",
  appId: "1:804320538281:web:264522ae382bb64b0a43b8",
  measurementId: "G-LXMJZHFNYC"
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

    //para lang mag deploy or mag load yung website sa vercel