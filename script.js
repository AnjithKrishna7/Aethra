document.addEventListener("DOMContentLoaded", function () {
  const flipbook = document.getElementById("flipbook");

  const pageFlip = new St.PageFlip(flipbook, {
    width: 600,
    height: 800,
    size: "stretch",
    minWidth: 315,
    minHeight: 420,
    maxWidth: 1200,
    maxHeight: 1600,
    showCover: true,
    mobileScrollSupport: false,
    usePortrait: false,
    autoSize: true,
    startPage: 0,
    flippingTime: 700
  });

  // Auto-generate pages (e.g., 1.jpg to 24.jpg)
  const totalPages = 10;
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(`pages/${i}.jpg`);
  }
  pageFlip.loadFromImages(pages);

  // Fullscreen toggle
  document.getElementById("fullscreen-btn").addEventListener("click", () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  });

  // Zoom toggle
  document.getElementById("zoom-btn").addEventListener("click", () => {
    flipbook.classList.toggle("zoomed");
  });
});
