document.addEventListener("DOMContentLoaded", function() {
  fetch("videos.json")
    .then(response => response.json())
    .then(data => {
      const videosContainer = document.getElementById("videos");

      function renderVideos(videos) {
        videosContainer.innerHTML = "";
        videos.forEach(video => {
          const iframe = document.createElement("iframe");
          iframe.width = "560";
          iframe.height = "315";
          iframe.src = `https://www.youtube.com/embed/${getVideoId(video.url)}`;
          iframe.title = video.title;
          iframe.allowFullscreen = true;
          videosContainer.appendChild(iframe);
        });
      }

      function searchVideos(query) {
        const filteredVideos = data.videos.filter(video =>
          video.title.toLowerCase().includes(query.toLowerCase()) ||
          video.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
        );
        renderVideos(filteredVideos);
      }

      function getVideoId(url) {
        const match = url.match(/[?&]v=([^?&]+)/);
        return match ? match[1] : null;
      }

      renderVideos(data.videos);

      const searchInput = document.getElementById("searchInput");
      searchInput.addEventListener("input", function() {
        searchVideos(this.value.trim());
      });
    })
    .catch(error => console.error("Error loading videos:", error));
});
