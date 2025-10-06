/* =====================================================
   script.js
   Purpose: Automatically make any webpage responsive
   when this script is included.
   Author: Your Name (GitHub Project)
   ===================================================== */

(function () {
  console.log("✅ Auto Responsive Script Activated");

  // 1️⃣ Ensure viewport meta tag exists for responsiveness
  let hasViewport = false;
  document.querySelectorAll("meta").forEach(meta => {
    if (meta.name === "viewport") hasViewport = true;
  });
  if (!hasViewport) {
    const meta = document.createElement("meta");
    meta.name = "viewport";
    meta.content = "width=device-width, initial-scale=1.0";
    document.head.appendChild(meta);
  }

  // 2️⃣ Apply base responsive classes dynamically
  function makeResponsive() {
    document.querySelectorAll("div, section, main, header, footer, article").forEach(el => {
      if (!el.classList.contains("resp-ignore")) {
        el.style.display = el.style.display || "flex";
        el.style.flexWrap = "wrap";
        el.style.justifyContent = "center";
        el.style.alignItems = "center";
        el.style.boxSizing = "border-box";
        el.style.maxWidth = "100%";
      }
    });

    // Make all images fluid
    document.querySelectorAll("img, video, iframe").forEach(media => {
      media.style.maxWidth = "100%";
      media.style.height = "auto";
      media.style.borderRadius = media.style.borderRadius || "8px";
    });

    // Wrap large tables in a scrollable container
    document.querySelectorAll("table").forEach(tbl => {
      if (!tbl.parentElement.classList.contains("table-wrapper")) {
        const wrapper = document.createElement("div");
        wrapper.className = "table-wrapper";
        wrapper.style.overflowX = "auto";
        wrapper.style.width = "100%";
        tbl.parentNode.insertBefore(wrapper, tbl);
        wrapper.appendChild(tbl);
      }
    });

    // Adjust font sizes dynamically
    document.querySelectorAll("p, h1, h2, h3, h4, h5, h6").forEach(txt => {
      txt.style.fontSize = "clamp(1rem, 2.5vw, 1.25rem)";
    });
  }

  // 3️⃣ Observe new elements added dynamically
  const observer = new MutationObserver(() => makeResponsive());
  observer.observe(document.body, { childList: true, subtree: true });

  // Run once on load
  window.addEventListener("load", makeResponsive);
})();
