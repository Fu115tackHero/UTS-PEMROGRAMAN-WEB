document.addEventListener("DOMContentLoaded", () => {
  const htmlElement = document.documentElement;
  const toggleContainer = document.getElementById("darkModeToggleContainer");

  if (toggleContainer) {
    const toggleButton = document.createElement("button");

    const applyTheme = (theme) => {
      // Reset kelas sebelum menambahkan yang baru untuk menghindari tumpukan
      toggleButton.className =
        "px-4 py-2 font-semibold text-sm rounded-lg transition-all duration-300 flex items-center gap-2 border";

      if (theme === "dark") {
        htmlElement.classList.add("dark");
        htmlElement.classList.remove("light");
        toggleButton.innerHTML = '<i class="fa-solid fa-sun"></i> Terang';
        toggleButton.classList.add(
          "bg-yellow-400/80",
          "text-yellow-900",
          "hover:bg-yellow-400",
          "border-yellow-400/20"
        );
      } else {
        htmlElement.classList.remove("dark");
        htmlElement.classList.add("light");
        toggleButton.innerHTML = '<i class="fa-solid fa-moon"></i> Gelap';
        toggleButton.classList.add(
          "bg-sky-900/80",
          "text-white",
          "hover:bg-sky-900",
          "border-sky-900/20"
        );
      }
    };

    // Cek tema dari localStorage atau default ke 'dark'
    const savedTheme = localStorage.getItem("theme") || "dark";
    applyTheme(savedTheme);
    toggleContainer.appendChild(toggleButton);

    toggleButton.addEventListener("click", () => {
      const newTheme = htmlElement.classList.contains("dark")
        ? "light"
        : "dark";
      localStorage.setItem("theme", newTheme);
      applyTheme(newTheme);
    });
  }
});

const hamburgerBtn = document.getElementById("hamburgerBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const closeSidebar = document.getElementById("closeSidebar");

hamburgerBtn.addEventListener("click", () => {
  sidebar.classList.remove("-translate-x-full");
  overlay.classList.remove("hidden");
  overlay.classList.add("show");
});

closeSidebar.addEventListener("click", () => {
  sidebar.classList.add("-translate-x-full");
  overlay.classList.add("hide");
  setTimeout(() => {
    overlay.classList.remove("show", "hide");
    overlay.classList.add("hidden");
  }, 300);
});

overlay.addEventListener("click", () => {
  sidebar.classList.add("-translate-x-full");
  overlay.classList.add("hide");
  setTimeout(() => {
    overlay.classList.remove("show", "hide");
    overlay.classList.add("hidden");
  }, 300);
});
