const resources = [
  { title: "Bobber Boating Items", category: "activity", file: "Bobber Boating Items Actitvty Sheet.pdf", image: "Bobber Boating Items Actitvty Sheet_th_L7cc.png" },
  { title: "Bobber Bookmarks", category: "activity", file: "Bobber Bookmarks Activity Sheets.pdf", image: "Bobber Bookmarks Activity Sheets_th_L7cc.png" },
  { title: "Bobber Cold Water Bookmarks", category: "activity", file: "Bobber Cold Water Bookmarks Activity Sheet.pdf", image: "Bobber Cold Water Bookmarks Activity Sheet_th_L7cc.png" },
  { title: "Bobber Dot to Dot", category: "activity", file: "Bobber Dot to Dot Activity Sheet.pdf", image: "Bobber Dot to Dot Activity Sheet_th_L7cc.png" },
  { title: "Bobber Draw a Line", category: "activity", file: "Bobber Draw A Line Activity Sheet.pdf", image: "Bobber Draw A Line Activity Sheet_th_L7cc.png" },
  { title: "Bobber Floating Fun Puzzle", category: "activity", file: "Bobber Floating Fun Puzzle Activity Sheet.pdf", image: "Bobber Floating Fun Puzzle Activity Sheet_th_L7cc.png" },
  { title: "Bobber Holiday Ornaments", category: "activity", file: "Bobber Holiday Ornaments Activity Sheet.pdf", image: "Bobber Holiday Ornaments Activity Sheet_th_L7cc.png" },
  { title: "Bobber Life Jacket-o-lantern", category: "activity", file: "Bobber Life_Jacket-o-lantern Activity Sheet.pdf", image: "Bobber Life_Jacket-o-lantern Activity Sheet_th_L7cc.png" },
  { title: "Bobber Maze", category: "activity", file: "Bobber Maze Activity Sheet.pdf", image: "Bobber Maze Activity Sheet_th_L7cc.png" },
  { title: "Bobber Predictifier", category: "activity", file: "Bobber Predictifier Activity Sheet.pdf", image: "Bobber Predictifier Activity Sheet_th_L7cc.png" },
  { title: "Bobber Pumpkin Stencils and Mask", category: "activity", file: "Bobber Pumpkin Stencils and Mask Activity Sheets.pdf", image: "Bobber Pumpkin Stencils and Mask Activity Sheets_th_L7cc.png" },
  { title: "Bobber Thanksgiving Puzzle", category: "activity", file: "Bobber Thanksgiving Puzzle Activity Sheet.pdf", image: "Bobber Thanksgiving Puzzle Activity Sheet_th_L7cc.png" },
  { title: "Bobber Valentines Cards", category: "activity", file: "Bobber Valentines Cards Activity Sheets.pdf", image: "Bobber Valentines Cards Activity Sheets_th_L7cc.png" },
  { title: "Splash Trading Card Game", category: "activity", file: "Splash_Trading_Card_Game.pdf", image: "Splash_Trading_Card_Game_th_L7cc.png" },
  { title: "Bobber Never Dive", category: "poster", file: "Bobber  Never Dive Poster and Coloring Sheet.pdf", image: "Bobber Never Dive Poster and Coloring Sheet_th_L7cc.png" },
  { title: "Bobber 4th of July", category: "poster", file: "Bobber 4th of July Poster and Coloring Sheet.pdf", image: "Bobber 4th of July Poster and Coloring Sheet_th_L7cc.png" },
  { title: "Bobber Best Friend", category: "poster", file: "Bobber Best Friend Poster and Coloring Sheet.pdf", image: "Bobber Best Friend Poster and Coloring Sheet_th_L7cc.png" },
  { title: "Bobber Cold Water", category: "poster", file: "Bobber Cold Water Poster and Coloring Sheet.pdf", image: "Bobber Cold Water Poster and Coloring Sheet_th_L7cc.png" },
  { title: "Bobber Easter Bunny", category: "poster", file: "Bobber Easter Bunny Poster and Coloring Sheet.pdf", image: "Bobber Easter Bunny Poster and Coloring Sheet_th_L7cc.png" },
  { title: "Bobber Friends Make Friends", category: "poster", file: "Bobber Friends Make Friends Poster and Coloring Sheet.pdf", image: "Bobber Friends Make Friends Poster and Coloring Sheet_t_L7cc.png" },
  { title: "Bobber Good Pup", category: "poster", file: "Bobber Good Pup Poster and Coloring Sheet.pdf", image: "Bobber Good Pup Poster and Coloring Sheet_th_L7cc.png" },
  { title: "Bobber Groundhog Day", category: "poster", file: "Bobber Groundhog Day Poster and Coloring Sheet.pdf", image: "Bobber Groundhog Day Poster and Coloring Sheet_th_L7cc.png" },
  { title: "Bobber Happy Friday", category: "poster", file: "Bobber Happy Friday Poster and Coloring Sheet.pdf", image: "Bobber Happy Friday Poster and Coloring Sheet_th_L7cc.png" },
  { title: "Bobber Happy New Year", category: "poster", file: "Bobber Happy New Year Poster and Coloring Sheet.pdf", image: "Bobber Happy New Year Poster and Coloring Sheet_th_L7cc.png" },
  { title: "Bobber Inflatable Toys", category: "poster", file: "Bobber Inflatable Toys Poster and Coloring Sheet.pdf", image: "Bobber Inflatable Toys Poster and Coloring Sheet_th_L7cc.png" },
  { title: "Bobber InVest in Safety", category: "poster", file: "Bobber_InVest_in_Safety_Poster&Coloring.pdf", image: "Bobber_InVest_in_Safety_Poster&Coloring_th_L7cc.png" },
  { title: "Bobber Life Jacket", category: "poster", file: "Bobber Life Jacket Coloring Sheet.pdf", image: "Bobber Life Jacket Coloring Sheet_th_L7cc.png" },
  { title: "Bobber Paddling", category: "poster", file: "Bobber Paddling Poster and Coloring Sheet.pdf", image: "Bobber Paddling Poster and Coloring Sheet_th_L7cc.png" },
  { title: "Bobber Pals", category: "poster", file: "Bobber Pals Posters and Coloring Sheets.pdf", image: "Bobber Pals Posters and Coloring Sheets_th_L7cc.png" },
  { title: "Bobber Reach, Throw, Row—Don’t Go", category: "poster", file: "Bobber Reach Throw Row Don't Go Poster and Coloring Sheet.pdf", image: "Bobber Reach Throw Row Don't Go Poster and Coloring She_L7cc.png" },
  { title: "Bobber Safe Boating Week", category: "poster", file: "Bobber Safe Boating Week Poster and coloring sheet.pdf", image: "Bobber Safe Boating Week Poster and coloring sheet_th_L7cc.png" },
  { title: "Bobber Safe Hunters", category: "poster", file: "Bobber Safe Hunters Poster and Coloring Sheet.pdf", image: "Bobber Safe Hunters Poster and Coloring Sheet_th_L7cc.png" },
  { title: "Bobber Season’s Greeting", category: "poster", file: "Bobber Season's Greeting Poster and Coloring Sheet.pdf", image: "Bobber Season's Greeting Poster and Coloring Sheet_th_L7cc.png" },
  { title: "Bobber St. Patrick’s Day", category: "poster", file: "Bobber St. Patrick's Day Poster and Coloring Sheet.pdf", image: "Bobber St. Patrick's Day Poster and Coloring Sheet_th_L7cc.png" },
  { title: "Bobber Swim with a Buddy", category: "poster", file: "Bobber Swim with a Buddy Poster and Coloring Sheet.pdf", image: "Bobber Swim with a Buddy Poster and Coloring Sheet_th_L7cc.png" },
  { title: "Bobber Thanksgiving", category: "poster", file: "Bobber Thanksgiving Poster and Coloring Sheet.pdf", image: "Bobber Thanksgiving Poster and Coloring Sheet_th_L7cc.png" },
  { title: "Fishing Is Best in a Life Vest", category: "poster", file: "Fishing is Best in a Life Vest Poster&Coloing.pdf", image: "Fishing is Best in a Life Vest Poster&Coloing_th_L7cc.png" },
  { title: "A Holiday Visit from Bobber", category: "storybook", file: "241210-A-GC580-0001_Bobber_Hoilday_Book.pdf", image: "Bobber_Hoilday_Book_tb_L7cc.png" },
  { title: "Bobber Activity Book", category: "storybook", file: "Bobber Activity Book.pdf", image: "Bobber Activity Book_th_L7cc.png" },
  { title: "Bobber Fun Book", category: "storybook", file: "Bobber_Fun_Book_Printable.pdf", image: "Bobber_Fun_Book_Printable_Version_th_L7cc.png" },
  { title: "Bobber Goes to the Beach", category: "storybook", file: "Bobber Goes to the Beach Story Book.pdf", image: "Bobber Goes to the Beach Story Book_th_L7cc.png" },
  { title: "Bobber’s Birthday Story", category: "storybook", file: "250403-A-GC580-0001_Bobber_Birthday_Story.pdf", image: "Bobber_Birthday_Story_tb_L7cc.png" }
];

const categoryLabels = { activity: "Activity", poster: "Poster & coloring", storybook: "Storybook" };
const grid = document.querySelector("#resource-grid");
const searchInput = document.querySelector("#resource-search");
const filterButtons = [...document.querySelectorAll(".filter-button")];
const resultsMessage = document.querySelector("#results-message");
const emptyState = document.querySelector("#empty-state");
let activeFilter = "all";

function assetPath(filename) {
  return `assets/${filename.split("/").map(encodeURIComponent).join("/")}`;
}

function makeCard(resource) {
  const article = document.createElement("article");
  article.className = "resource-card";

  const preview = document.createElement("div");
  preview.className = "resource-thumb";
  const image = document.createElement("img");
  image.src = assetPath(`graphics/${resource.image}`);
  image.alt = `${resource.title} printable preview`;
  image.loading = "lazy";
  image.decoding = "async";
  const type = document.createElement("span");
  type.className = "resource-type";
  type.textContent = categoryLabels[resource.category];
  preview.append(image, type);

  const body = document.createElement("div");
  body.className = "resource-body";
  const title = document.createElement("h3");
  title.textContent = resource.title;
  const link = document.createElement("a");
  link.className = "resource-link";
  link.href = assetPath(resource.file);
  link.target = "_blank";
  link.rel = "noopener";
  link.setAttribute("aria-label", `Open ${resource.title} PDF in a new tab`);
  const linkLabel = document.createElement("span");
  linkLabel.textContent = resource.category === "storybook" ? "Read the story" : "Open printable PDF";
  const arrow = document.createElement("span");
  arrow.setAttribute("aria-hidden", "true");
  arrow.textContent = "↗";
  link.append(linkLabel, arrow);
  body.append(title, link);
  article.append(preview, body);
  return article;
}

function renderResources() {
  const query = searchInput.value.trim().toLocaleLowerCase();
  const visibleResources = resources.filter((resource) => {
    const matchesCategory = activeFilter === "all" || resource.category === activeFilter;
    const matchesQuery = !query || resource.title.toLocaleLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  });

  grid.replaceChildren(...visibleResources.map(makeCard));
  emptyState.hidden = visibleResources.length !== 0;
  resultsMessage.textContent = `${visibleResources.length} ${visibleResources.length === 1 ? "resource" : "resources"}${query ? ` matching “${searchInput.value.trim()}”` : ""}`;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle("is-active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    renderResources();
  });
});

searchInput.addEventListener("input", renderResources);
document.querySelector("#reset-search").addEventListener("click", () => {
  searchInput.value = "";
  activeFilter = "all";
  filterButtons.forEach((button) => {
    const selected = button.dataset.filter === "all";
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  renderResources();
  searchInput.focus();
});
document.querySelector("#count-all").textContent = resources.length;

const menuToggle = document.querySelector("#menu-toggle");
const siteNav = document.querySelector("#site-nav");
menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? "Open navigation" : "Close navigation");
  siteNav.classList.toggle("is-open", !isExpanded);
});
siteNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
  siteNav.classList.remove("is-open");
}));
document.addEventListener("keydown", (event) => {
  if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    searchInput.focus();
  }
});

const themeToggle = document.querySelector("#theme-toggle");
const themeIcon = themeToggle.querySelector(".theme-icon");
const themeLabel = themeToggle.querySelector(".theme-label");

function updateThemeControl() {
  const isDark = document.documentElement.dataset.theme === "dark";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} mode`);
  themeToggle.title = `Switch to ${isDark ? "light" : "dark"} mode`;
  themeIcon.textContent = isDark ? "☼" : "◐";
  themeLabel.textContent = isDark ? "Light" : "Dark";
  document.querySelector('meta[name="theme-color"]').content = isDark ? "#101c20" : "#123c45";
}

themeToggle.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem("bobber-theme", nextTheme);
  updateThemeControl();
});
updateThemeControl();

renderResources();
