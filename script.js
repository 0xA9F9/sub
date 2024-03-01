document.addEventListener("DOMContentLoaded", function() {
  fetch("videos.json")
    .then(response => response.json())
    .then(data => {
      const videosContainer = document.getElementById("videos");

      data.videos.forEach(video => {
        const iframe = document.createElement("iframe");
        iframe.width = "560";
        iframe.height = "315";
        iframe.src = `https://www.youtube.com/embed/${getVideoId(video.url)}`;
        iframe.title = video.title;
        iframe.allowFullscreen = true;
        videosContainer.appendChild(iframe);
      });
    })
    .catch(error => console.error("Error loading videos:", error));
});

function getVideoId(url) {
  const match = url.match(/[?&]v=([^?&]+)/);
  return match ? match[1] : null;
}
