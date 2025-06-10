const socket = io("https://real-time-collaborative-editor-rmi1.onrender.com");
let editor;
let currentTheme = "vs-dark";
let isTyping = false;
let typingTimeout;

require.config({ paths: { vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs" } });
require(["vs/editor/editor.main"], function () {
  editor = monaco.editor.create(document.getElementById("editor-container"), {
    value: "// Start typing code...",
    language: "javascript",
    theme: currentTheme,
    automaticLayout: true,
  });

  editor.onDidChangeModelContent(() => {
    const code = editor.getValue();
    socket.emit("text-change", code);
    if (!isTyping) {
      isTyping = true;
      socket.emit("typing", true);
      clearTimeout(typingTimeout);
      typingTimeout = setTimeout(() => {
        isTyping = false;
        socket.emit("typing", false);
      }, 1000);
    }
  });

  socket.on("text-change", (code) => {
    if (editor.getValue() !== code) {
      editor.setValue(code);
    }
  });

  socket.on("typing", (status) => {
    const typingIndicator = document.getElementById("typing-indicator");
    typingIndicator.textContent = status ? "Someone is typing..." : "";
  });

  socket.on("update-users", (users) => {
    const usersList = document.getElementById("users-list");
    usersList.innerHTML = "";
    users.forEach(user => {
      const li = document.createElement("li");
      li.textContent = user;
      usersList.appendChild(li);
    });
  });

  document.getElementById("language").addEventListener("change", (e) => {
    const lang = e.target.value;
    monaco.editor.setModelLanguage(editor.getModel(), lang);
  });

  document.getElementById("theme-toggle").addEventListener("click", () => {
    currentTheme = currentTheme === "vs-dark" ? "vs-light" : "vs-dark";
    monaco.editor.setTheme(currentTheme);
  });

  document.getElementById("save-btn").addEventListener("click", () => {
    const code = editor.getValue();
    const blob = new Blob([code], { type: "text/plain;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "code.txt";
    a.click();
  });
});


