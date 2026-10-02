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
  { title: "Bobber InVest in Safety", category: "poster", file: "Bobber_InVest_in_Safety_Poster&Coloring.pdf", spanishFile: "spanish/Bobber InVest in Safety - Spanish draft.pdf", image: "Bobber_InVest_in_Safety_Poster&Coloring_th_L7cc.png" },
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
  { title: "Fishing Is Best in a Life Vest", category: "poster", file: "Fishing is Best in a Life Vest Poster&Coloing.pdf", spanishFile: "spanish/Fishing is Best in a Life Vest - Spanish draft.pdf", image: "Fishing is Best in a Life Vest Poster&Coloing_th_L7cc.png" },
  { title: "A Holiday Visit from Bobber", category: "storybook", file: "241210-A-GC580-0001_Bobber_Hoilday_Book.pdf", image: "Bobber_Hoilday_Book_tb_L7cc.png" },
  { title: "Bobber Activity Book", category: "storybook", file: "Bobber Activity Book.pdf", image: "Bobber Activity Book_th_L7cc.png" },
  { title: "Bobber Fun Book", category: "storybook", file: "Bobber_Fun_Book_Printable.pdf", image: "Bobber_Fun_Book_Printable_Version_th_L7cc.png" },
  { title: "Bobber Goes to the Beach", category: "storybook", file: "Bobber Goes to the Beach Story Book.pdf", image: "Bobber Goes to the Beach Story Book_th_L7cc.png" },
  { title: "Bobber’s Birthday Story", category: "storybook", file: "250403-A-GC580-0001_Bobber_Birthday_Story.pdf", image: "Bobber_Birthday_Story_tb_L7cc.png" }
];

const categoryLabels = {
  en: { all: "All", activity: "Activity", poster: "Poster & coloring", storybook: "Storybook" },
  es: { all: "Todos", activity: "Actividad", poster: "Afiches y dibujos", storybook: "Cuento" }
};
const resourceTitlesEs = {
  "Bobber Boating Items": "Elementos para navegar con Bobber",
  "Bobber Bookmarks": "Marcapáginas de Bobber",
  "Bobber Cold Water Bookmarks": "Marcapáginas: agua fría",
  "Bobber Dot to Dot": "Une los puntos con Bobber",
  "Bobber Draw a Line": "Traza una línea con Bobber",
  "Bobber Floating Fun Puzzle": "Rompecabezas: diversión flotante",
  "Bobber Holiday Ornaments": "Adornos festivos de Bobber",
  "Bobber Life Jacket-o-lantern": "Calabaza con chaleco salvavidas",
  "Bobber Maze": "Laberinto de Bobber",
  "Bobber Predictifier": "Adivinanzas de Bobber",
  "Bobber Pumpkin Stencils and Mask": "Plantillas de calabaza y máscara",
  "Bobber Thanksgiving Puzzle": "Rompecabezas de Acción de Gracias",
  "Bobber Valentines Cards": "Tarjetas del Día de San Valentín",
  "Splash Trading Card Game": "Juego de cartas coleccionables Splash",
  "Bobber Never Dive": "Nunca te tires de cabeza",
  "Bobber 4th of July": "4 de julio con Bobber",
  "Bobber Best Friend": "El mejor amigo de Bobber",
  "Bobber Cold Water": "Agua fría",
  "Bobber Easter Bunny": "El conejo de Pascua",
  "Bobber Friends Make Friends": "Los amigos hacen amigos",
  "Bobber Good Pup": "Buen perrito",
  "Bobber Groundhog Day": "Día de la Marmota",
  "Bobber Happy Friday": "Feliz viernes",
  "Bobber Happy New Year": "Feliz Año Nuevo",
  "Bobber Inflatable Toys": "Juguetes inflables",
  "Bobber InVest in Safety": "Ponte el chaleco: invierte en seguridad",
  "Bobber Life Jacket": "Chaleco salvavidas",
  "Bobber Paddling": "A remar con seguridad",
  "Bobber Pals": "Amigos de Bobber",
  "Bobber Reach, Throw, Row—Don’t Go": "Alcanza, lanza o rema; no te metas",
  "Bobber Safe Boating Week": "Semana de la navegación segura",
  "Bobber Safe Hunters": "Cazadores seguros",
  "Bobber Season’s Greeting": "Saludos de temporada",
  "Bobber St. Patrick’s Day": "Día de San Patricio",
  "Bobber Swim with a Buddy": "Nada acompañado",
  "Bobber Thanksgiving": "Acción de Gracias",
  "Fishing Is Best in a Life Vest": "Pescar es mejor con chaleco salvavidas",
  "A Holiday Visit from Bobber": "Una visita festiva de Bobber",
  "Bobber Activity Book": "Libro de actividades de Bobber",
  "Bobber Fun Book": "Libro divertido de Bobber",
  "Bobber Goes to the Beach": "Bobber va a la playa",
  "Bobber’s Birthday Story": "El cumpleaños de Bobber"
};

const spanishText = {
  "Skip to content": "Saltar al contenido",
  "Water Safety Dog": "Perro de seguridad acuática",
  "Meet Bobber": "Conoce a Bobber",
  "Stay safe": "Cuídate",
  "Plan a visit": "Planifica tu visita",
  "Watch": "Videos",
  "Free resources": "Recursos gratis",
  "For educators": "Para educadores",
  "Explore the library": "Explora los recursos",
  "Dark": "Oscuro",
  "Tulsa District · U.S. Army Corps of Engineers": "Distrito de Tulsa · Cuerpo de Ingenieros del Ejército de EE. UU.",
  "Big fun.": "Diversión a lo grande.",
  "Water-safe": "Aventuras seguras",
  "adventures.": "en el agua.",
  "Say hello to Bobber, the Water Safety Dog. He’s here to help kids and families make every trip to the water a safer one.": "Te presentamos a Bobber, el perro de seguridad acuática. Está aquí para ayudar a niños y familias a disfrutar del agua con más seguridad.",
  "Learn the safety basics": "Aprende lo esencial para cuidarte",
  "Watch Bobber’s cartoons": "Mira los dibujos animados de Bobber",
  "Made for little learners, families, and the grown-ups who keep watch.": "Pensado para niños, familias y las personas adultas que los cuidan.",
  "Bobber’s lake-day reminder": "El consejo de Bobber para el lago",
  "Wear your life jacket.": "Usa tu chaleco salvavidas.",
  "Every trip. Every time you’re in, on, or around open water.": "En cada salida, siempre que estés dentro, sobre o cerca de aguas abiertas.",
  "See Bobber’s safety reminders": "Ver los consejos de seguridad de Bobber",
  "Start safe": "Empieza con seguridad",
  "Simple habits that matter": "Hábitos sencillos que importan",
  "Watch & learn": "Mira y aprende",
  "Cartoons in English & Spanish": "Dibujos animados en inglés y español",
  "Print & play": "Imprime y juega",
  "Free Bobber activities": "Actividades gratis de Bobber",
  "Your water safety sidekick": "Tu compañero de seguridad acuática",
  "Good dogs know:": "Los buenos perros saben:",
  "water safety comes first.": "la seguridad acuática es lo primero.",
  "Bobber helps young people learn how to enjoy lakes, rivers, pools, and beaches more safely. His advice is easy to remember, and even easier to share with your family.": "Bobber ayuda a niños y jóvenes a disfrutar de lagos, ríos, piscinas y playas con más seguridad. Sus consejos son fáciles de recordar y compartir en familia.",
  "Find something fun to print": "Encuentra algo divertido para imprimir",
  "Meet your lake-day buddy": "Conoce a tu compañero para el día de lago",
  "Bobber’s got your back.": "Bobber te acompaña y te cuida.",
  "Bobber’s water-wise reminders": "Los consejos de seguridad de Bobber",
  "Make safety": "Que la seguridad",
  "part of the fun.": "sea parte de la diversión.",
  "A few good habits go a long way. Talk through these reminders before your next day near the water.": "Unos buenos hábitos pueden marcar la diferencia. Repasa estos consejos antes de tu próxima salida al agua.",
  "Use the Español control in the header menu to show Spanish translations for these safety reminders.": "Usa el botón Inglés del encabezado para volver al inglés.",
  "Spanish translations are shown beneath each reminder. They are draft copy pending district review.": "La traducción al español está pendiente de revisión por el distrito.",
  "Wear your life jacket": "Usa tu chaleco salvavidas",
  "Wear a properly fitted, U.S. Coast Guard-approved life jacket when you’re in, on, or around open water.": "Usa un chaleco salvavidas aprobado por la Guardia Costera de EE. UU. y de la talla correcta cuando estés dentro, sobre o cerca de aguas abiertas.",
  "Swim with a buddy": "Nada acompañado",
  "Choose a designated swimming area, follow posted rules, and make sure a responsible adult is watching.": "Elige una zona designada para nadar, sigue las reglas publicadas y asegúrate de que un adulto responsable te vigile.",
  "Reach or throw. Don’t go.": "Alcanza o lanza; no te metas.",
  "If someone is in trouble, get an adult and call 911. Reach with something long or throw something that floats—don’t enter the water.": "Si alguien está en peligro, avisa a un adulto y llama al 911. Extiende algo largo o lanza algo que flote. No entres al agua.",
  "Respect cold water": "Ten cuidado con el agua fría",
  "Cold water can be dangerous even on a warm day. Dress for the water, stay alert, and don’t take chances.": "El agua fría puede ser peligrosa incluso en un día cálido. Usa ropa adecuada para el agua fría, mantente alerta y no corras riesgos.",
  "These reminders support—not replace—local rules, adult supervision, and guidance from water safety professionals.": "Estos consejos complementan, pero no sustituyen, las reglas locales, la supervisión de un adulto ni la orientación de profesionales de seguridad acuática.",
  "Your next lake day starts here": "Empieza a planificar tu próxima salida al lago",
  "Plan a safer visit.": "Planifica una visita más segura.",
  "Check official lake information before you go, and follow local notices and posted rules when you arrive.": "Consulta la información oficial del lago antes de salir y, al llegar, sigue los avisos locales y las reglas publicadas.",
  "Explore": "Explora",
  "Find a Tulsa District lake": "Encuentra un lago del Distrito de Tulsa",
  "Browse lake pages for recreation areas, facilities, local rules, and project news or notices.": "Consulta las páginas de los lagos para encontrar áreas recreativas, instalaciones, reglas locales y avisos del proyecto.",
  "Browse official lake pages": "Ver las páginas oficiales de los lagos",
  "Check": "Consulta",
  "Lake levels & water data": "Niveles del lago y datos del agua",
  "Open the Tulsa District Water Control site for reservoir levels and water-management information.": "Visita el sitio de control de aguas del Distrito de Tulsa para consultar niveles de embalses e información sobre la gestión del agua.",
  "View water data": "Consultar datos del agua",
  "Ask": "Pregunta",
  "Contact a lake office": "Comunícate con una oficina del lago",
  "Find project office phone numbers and the official contact form for lake-specific questions.": "Encuentra teléfonos de las oficinas y el formulario oficial para hacer preguntas sobre un lago.",
  "Get lake office contacts": "Ver contactos de las oficinas",
  "Reserve": "Reserva",
  "Find camping": "Encuentra campamentos",
  "Search federal recreation areas and campsites, then check the lake page for local details.": "Busca áreas recreativas y campamentos federales; luego consulta la página del lago para ver los detalles locales.",
  "Search Recreation.gov": "Buscar en Recreation.gov",
  "Before you go:": "Antes de salir:",
  "Water levels are not a measure of water quality or swimming safety. Check the individual lake’s current notices and follow all posted warnings and instructions.": "El nivel del agua no indica su calidad ni si es seguro nadar. Consulta los avisos vigentes del lago y sigue todas las advertencias e instrucciones publicadas.",
  "Screen time with a purpose": "Tiempo frente a la pantalla con propósito",
  "Watch Bobber in action.": "Mira a Bobber en acción.",
  "Short cartoons with big water safety lessons. Pick an episode and choose a language.": "Dibujos animados breves con importantes consejos de seguridad acuática. Elige un episodio y un idioma.",
  "Episode 01": "Episodio 01",
  "Dog Paddling Puppies": "Cachorros que nadan estilo perrito",
  "English": "Inglés",
  "Episode 02": "Episodio 02",
  "Don’t Blow a Day at the Beach": "No arruines un día en la playa",
  "Episode 03": "Episodio 03",
  "Sinker Has a Fit": "Sinker se enfada",
  "Episode 04": "Episodio 04",
  "Who’s Your Buddy?": "¿Quién es tu compañero?",
  "Videos open on YouTube. Content provided by the U.S. Army Corps of Engineers National Water Safety Program.": "Los videos se abren en YouTube. El contenido es del Programa Nacional de Seguridad Acuática del Cuerpo de Ingenieros del Ejército de EE. UU.",
  "Free downloads for curious kids": "Descargas gratis para niños curiosos",
  "The Bobber library.": "La biblioteca de Bobber.",
  "Color, play, and learn together. Every resource below is ready to open or print.": "Coloreen, jueguen y aprendan juntos. Abre o imprime los recursos que aparecen a continuación.",
  "Search activities, posters, books…": "Buscar actividades, afiches y libros…",
  "All": "Todos",
  "Activities": "Actividades",
  "Posters & coloring": "Afiches y dibujos para colorear",
  "Storybooks": "Cuentos",
  "42 resources": "42 recursos",
  "Activity": "Actividad",
  "Open printable PDF": "Abrir PDF para imprimir",
  "Read the story": "Leer el cuento",
  "🐾": "🐾",
  "No matching resources": "No se encontraron recursos",
  "Try another search or choose a different category.": "Prueba otra búsqueda o elige otra categoría.",
  "Show everything": "Mostrar todos los recursos",
  "These printable materials are shared by the": "Estos materiales para imprimir son del",
  "USACE National Water Safety Program": "Programa Nacional de Seguridad Acuática de USACE",
  ". Select a card to open its PDF. Spanish draft versions are available for some posters; other PDFs and previews may remain in their original language.": ". Selecciona una tarjeta para abrir su PDF. Algunos afiches tienen un borrador en español; otros PDF y miniaturas pueden conservar el idioma original.",
  "Bring Bobber to your program": "Lleva a Bobber a tu programa",
  "For educators & outreach teams.": "Para educadores y equipos de divulgación.",
  "Official USACE teaching and program materials for educators, lake staff, and community partners.": "Materiales oficiales de USACE para educadores, personal de los lagos y colaboradores comunitarios.",
  "Teaching guide · Grades 2–6": "Guía educativa · Grados 2–6",
  "Bobber & the PFD program": "Bobber y el programa de chalecos salvavidas",
  "An interpretive water-safety guide with a Bobber life-jacket program outline, activities, and presentation ideas.": "Guía educativa de seguridad acuática con un programa de chalecos salvavidas de Bobber, actividades e ideas para presentaciones.",
  "Open the USACE program guide": "Abrir la guía del programa de USACE",
  "Official program page": "Página oficial del programa",
  "Bobber’s Golden Rules": "Las reglas de oro de Bobber",
  "Visit the National Water Safety Program’s Bobber page for interpretive outlines, Golden Rules, and program information.": "Visita la página de Bobber del Programa Nacional de Seguridad Acuática para consultar guías educativas, las reglas de oro e información del programa.",
  "Explore Bobber program materials": "Ver los materiales del programa Bobber",
  "USACE staff resource": "Recurso para personal de USACE",
  "Costume care & use": "Cuidado y uso del disfraz",
  "Review official care and use guidance before planning a Bobber costume appearance or outreach event.": "Consulta las pautas oficiales antes de planificar una actividad de divulgación o una aparición con el disfraz de Bobber.",
  "Open costume guidelines": "Abrir las pautas del disfraz",
  "These resources are hosted by the USACE National Water Safety Program and may be updated there.": "Estos recursos están alojados en el Programa Nacional de Seguridad Acuática de USACE y podrían actualizarse allí.",
  "Before you head out": "Antes de salir",
  "Have a plan. Wear a life jacket. Look out for each other.": "Ten un plan. Usa un chaleco salvavidas. Cuídense entre todos.",
  "Remember the basics": "Recuerda lo esencial",
  "A water safety education resource from the U.S. Army Corps of Engineers, Tulsa District.": "Un recurso educativo de seguridad acuática del Cuerpo de Ingenieros del Ejército de EE. UU., Distrito de Tulsa.",
  "Keep exploring": "Sigue explorando",
  "Water safety basics": "Consejos básicos de seguridad acuática",
  "Plan a lake visit": "Planifica una visita al lago",
  "Bobber cartoons": "Dibujos animados de Bobber",
  "Printable resources": "Recursos para imprimir",
  "Educator materials": "Materiales para educadores",
  "Official resources": "Recursos oficiales",
  "National Water Safety Program ↗": "Programa Nacional de Seguridad Acuática ↗",
  "Bobber program ↗": "Programa Bobber ↗",
  "Tulsa District ↗": "Distrito de Tulsa ↗",
  "U.S. Army Corps of Engineers · Tulsa District": "Cuerpo de Ingenieros del Ejército de EE. UU. · Distrito de Tulsa",
  "Official U.S. Army website ↗": "Sitio web oficial del Ejército de EE. UU. ↗"
};

const staticEnglishTextNodes = [];
const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
while (textWalker.nextNode()) staticEnglishTextNodes.push({ node: textWalker.currentNode, original: textWalker.currentNode.nodeValue });

const grid = document.querySelector("#resource-grid");
const searchInput = document.querySelector("#resource-search");
const filterButtons = [...document.querySelectorAll(".filter-button")];
const resultsMessage = document.querySelector("#results-message");
const emptyState = document.querySelector("#empty-state");
let activeFilter = "all";
let currentLanguage = "en";

function assetPath(filename) {
  return `assets/${filename.split("/").map(encodeURIComponent).join("/")}`;
}

function makeCard(resource) {
  const displayTitle = currentLanguage === "es" ? (resourceTitlesEs[resource.title] || resource.title) : resource.title;
  const article = document.createElement("article");
  article.className = "resource-card";

  const preview = document.createElement("div");
  preview.className = "resource-thumb";
  const image = document.createElement("img");
  image.src = assetPath(`graphics/${resource.image}`);
  image.alt = currentLanguage === "es" ? `Vista previa para imprimir: ${displayTitle}` : `${displayTitle} printable preview`;
  image.loading = "lazy";
  image.decoding = "async";
  const type = document.createElement("span");
  type.className = "resource-type";
  type.textContent = categoryLabels[currentLanguage][resource.category];
  preview.append(image, type);

  const body = document.createElement("div");
  body.className = "resource-body";
  const title = document.createElement("h3");
  title.textContent = displayTitle;
  const spanishDraft = currentLanguage === "es" && resource.spanishFile;
  const link = document.createElement("a");
  link.className = "resource-link";
  link.href = assetPath(spanishDraft ? resource.spanishFile : resource.file);
  link.target = "_blank";
  link.rel = "noopener";
  link.setAttribute("aria-label", spanishDraft ? `Abrir el PDF en español de ${displayTitle}; borrador, en una pestaña nueva` : currentLanguage === "es" ? `Abrir el PDF de ${displayTitle} en una pestaña nueva` : `Open ${resource.title} PDF in a new tab`);
  const linkLabel = document.createElement("span");
  linkLabel.textContent = spanishDraft
    ? "PDF en español · borrador"
    : currentLanguage === "es"
      ? (resource.category === "storybook" ? "Leer el cuento" : "Abrir PDF para imprimir")
    : (resource.category === "storybook" ? "Read the story" : "Open printable PDF");
  const arrow = document.createElement("span");
  arrow.setAttribute("aria-hidden", "true");
  arrow.textContent = "↗";
  link.append(linkLabel, arrow);
  body.append(title, link);
  if (resource.spanishFile) {
    const alternateLink = document.createElement("a");
    alternateLink.className = "resource-link resource-link-alternate";
    alternateLink.href = assetPath(spanishDraft ? resource.file : resource.spanishFile);
    alternateLink.target = "_blank";
    alternateLink.rel = "noopener";
    const alternateLabel = document.createElement("span");
    alternateLabel.textContent = spanishDraft ? "Original en inglés" : "Spanish draft PDF";
    alternateLink.setAttribute("aria-label", spanishDraft ? `Abrir el PDF original en inglés de ${displayTitle} (se abre en una pestaña nueva)` : `Open the Spanish draft PDF for ${resource.title} (opens in a new tab)`);
    const alternateArrow = document.createElement("span");
    alternateArrow.setAttribute("aria-hidden", "true");
    alternateArrow.textContent = "↗";
    alternateLink.append(alternateLabel, alternateArrow);
    body.append(alternateLink);
  }
  article.append(preview, body);
  return article;
}

function renderResources() {
  const query = searchInput.value.trim().toLocaleLowerCase();
  const visibleResources = resources.filter((resource) => {
    const matchesCategory = activeFilter === "all" || resource.category === activeFilter;
    const searchableTitle = currentLanguage === "es" ? `${resource.title} ${resourceTitlesEs[resource.title] || ""}` : resource.title;
    const matchesQuery = !query || searchableTitle.toLocaleLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  });

  grid.replaceChildren(...visibleResources.map(makeCard));
  emptyState.hidden = visibleResources.length !== 0;
  resultsMessage.textContent = currentLanguage === "es"
    ? `${visibleResources.length} ${visibleResources.length === 1 ? "recurso" : "recursos"}${query ? ` para “${searchInput.value.trim()}”` : ""}`
    : `${visibleResources.length} ${visibleResources.length === 1 ? "resource" : "resources"}${query ? ` matching “${searchInput.value.trim()}”` : ""}`;
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
function menuButtonLabel(isOpen) {
  if (currentLanguage === "es") return isOpen ? "Cerrar el menú" : "Abrir el menú";
  return isOpen ? "Close navigation" : "Open navigation";
}

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", menuButtonLabel(!isExpanded));
  siteNav.classList.toggle("is-open", !isExpanded);
});
siteNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", menuButtonLabel(false));
  siteNav.classList.remove("is-open");
}));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", menuButtonLabel(false));
    siteNav.classList.remove("is-open");
    menuToggle.focus();
  }
  if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    searchInput.focus();
  }
});

const headerLanguageToggle = document.querySelector("#header-language-toggle");
const spanishSafetyCopy = [...document.querySelectorAll(".spanish-copy")];
const englishSafetyCopy = [...document.querySelectorAll(".safety-card > p")];
function updateExternalLinkLabels() {
  document.querySelectorAll('a[target="_blank"]').forEach((link) => {
    if (link.hasAttribute("aria-label") && link.dataset.autoExternalLabel !== "true") return;
    const label = [...link.childNodes]
      .map((node) => node.nodeType === Node.ELEMENT_NODE && node.hasAttribute("aria-hidden") ? "" : node.textContent)
      .join(" ")
      .replace(/[↗→]\s*$/, "")
      .replace(/\s+/g, " ")
      .trim();
    if (!label) return;
    link.dataset.autoExternalLabel = "true";
    link.setAttribute("aria-label", currentLanguage === "es" ? `${label} (se abre en una pestaña nueva)` : `${label} (opens in a new tab)`);
  });
}

function setLanguage(language) {
  currentLanguage = language;
  const isSpanish = language === "es";
  document.documentElement.lang = language;
  document.documentElement.dataset.locale = language;
  localStorage.setItem("bobber-language", language);
  document.title = isSpanish ? "Bobber, el perro de seguridad acuática | Distrito de Tulsa, USACE" : "Bobber the Water Safety Dog | Tulsa District, USACE";
  document.querySelector('meta[name="description"]').content = isSpanish
    ? "Conoce a Bobber y encuentra consejos de seguridad acuática en español, dibujos animados y recursos para imprimir del Distrito de Tulsa del Cuerpo de Ingenieros del Ejército de EE. UU."
    : "Meet Bobber the Water Safety Dog. Explore family-friendly water safety videos, printable activities, posters, coloring sheets, and storybooks from the U.S. Army Corps of Engineers Tulsa District.";

  for (const { node, original } of staticEnglishTextNodes) {
    if (!node.isConnected) continue;
    const text = original.trim();
    const translated = isSpanish ? spanishText[text] : undefined;
    node.nodeValue = translated ? original.replace(text, translated) : original;
  }

  document.querySelector("#hero-title").innerHTML = isSpanish
    ? "Disfruta del agua<br><span>con seguridad</span>."
    : "Big fun.<br><span>Water-safe</span> adventures.";

  const languageCode = headerLanguageToggle.querySelector(".language-code");
  const languageName = headerLanguageToggle.querySelector(".language-name");
  languageCode.textContent = isSpanish ? "EN" : "ES";
  languageName.textContent = isSpanish ? "Inglés" : "Español";
  languageName.lang = "es";
  headerLanguageToggle.setAttribute("aria-pressed", String(isSpanish));
  headerLanguageToggle.setAttribute("aria-label", isSpanish ? "Cambiar el sitio a inglés / Switch to English" : "Switch the entire page to Spanish / Cambiar a español");
  headerLanguageToggle.title = isSpanish ? "Cambiar el sitio a inglés / Switch to English" : "Switch the entire page to Spanish / Cambiar a español";

  menuToggle.setAttribute("aria-label", menuButtonLabel(menuToggle.getAttribute("aria-expanded") === "true"));
  siteNav.setAttribute("aria-label", isSpanish ? "Navegación principal" : "Main navigation");
  document.querySelector(".skip-link").setAttribute("aria-label", isSpanish ? "Saltar al contenido" : "Skip to content");
  document.querySelector(".brand").setAttribute("aria-label", isSpanish ? "Inicio de Bobber, el perro de seguridad acuática" : "Bobber water safety home");
  document.querySelector(".quick-strip").setAttribute("aria-label", isSpanish ? "Explora el sitio" : "Explore the site");
  document.querySelector(".filters").setAttribute("aria-label", isSpanish ? "Filtrar recursos" : "Filter resources");
  document.querySelector("#resource-search").setAttribute("aria-label", isSpanish ? "Buscar recursos de Bobber" : "Search Bobber resources");
  document.querySelector("#resource-search").placeholder = isSpanish ? "Buscar actividades, afiches y cuentos…" : "Search activities, posters, books…";
  document.querySelector(".hero-feature").setAttribute("aria-label", isSpanish ? "Consejo de seguridad acuática de Bobber" : "Bobber’s water safety reminder");
  document.querySelector(".bobber-note img").alt = isSpanish ? "Bobber, el perro de seguridad acuática, con Ranger Buck" : "Bobber the Water Safety Dog with Ranger Buck";

  englishSafetyCopy.forEach((copy) => { copy.hidden = isSpanish; });
  spanishSafetyCopy.forEach((copy) => { copy.hidden = !isSpanish; });
  spanishSafetyCopy.forEach((copy) => {
    const label = copy.querySelector(":scope > span");
    if (label) label.textContent = isSpanish ? "BORRADOR · TRADUCCIÓN" : "ESPAÑOL · BORRADOR";
  });

  filterButtons.forEach((button) => {
    const key = button.dataset.filter;
    const label = button.querySelector("span");
    if (label) {
      button.firstChild.textContent = `${categoryLabels[language][key]} `;
    } else {
      button.textContent = categoryLabels[language][key];
    }
  });
  renderResources();
  updateThemeControl();
  updateExternalLinkLabels();
}

headerLanguageToggle.addEventListener("click", () => {
  setLanguage(currentLanguage === "en" ? "es" : "en");
});

const themeToggle = document.querySelector("#theme-toggle");
const themeIcon = themeToggle.querySelector(".theme-icon");
const themeLabel = themeToggle.querySelector(".theme-label");

function updateThemeControl() {
  const isDark = document.documentElement.dataset.theme === "dark";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  const nextMode = currentLanguage === "es" ? (isDark ? "claro" : "oscuro") : (isDark ? "light" : "dark");
  themeToggle.setAttribute("aria-label", currentLanguage === "es" ? `Cambiar al modo ${nextMode}` : `Switch to ${nextMode} mode`);
  themeToggle.title = currentLanguage === "es" ? `Cambiar al modo ${nextMode}` : `Switch to ${nextMode} mode`;
  themeIcon.textContent = isDark ? "☼" : "◐";
  themeLabel.textContent = currentLanguage === "es" ? (isDark ? "Claro" : "Oscuro") : (isDark ? "Light" : "Dark");
  document.querySelector('meta[name="theme-color"]').content = isDark ? "#101c20" : "#123c45";
}

themeToggle.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem("bobber-theme", nextTheme);
  updateThemeControl();
});
setLanguage(document.documentElement.dataset.locale === "es" ? "es" : "en");
