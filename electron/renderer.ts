window.addEventListener("DOMContentLoaded", () => {
  const info = document.getElementById("info");

  if (info) {
    // Affiche les informations système
    info.innerText = `Platform: ${window.electronAPI.getPlatform()}`;

    // Envoie un message au processus principal
    window.electronAPI.sendMessage("Hello from renderer!");

    // Écoute les réponses
    const cleanup = window.electronAPI.onReply((reply) => {
      info.innerText += `\nRéponse du main: ${reply}`;
    });

    // Nettoyage lors du déchargement de la page
    window.addEventListener("unload", cleanup);
  }
});
