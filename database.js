// =================================================================
// 🏛️ BASE DE DATOS CENTRALIZADA - WEB DEV ARENA v5.1 (TEORÍA EXTENDIDA)
// =================================================================

// 1. TEORÍA EXTENDIDA Y DETALLADA
const THEORY_DB = [
    {
        title: "HTML: Estructura Principal",
        icon: "fa-html5",
        content: `
            <div class="space-y-2">
                <p><strong>Esqueleto Básico:</strong></p>
                <ul class="list-disc pl-4 text-gray-400 text-sm">
                    <li><code>&lt;!DOCTYPE html&gt;</code>: Indica HTML5.</li>
                    <li><code>&lt;html lang="es"&gt;</code>: Raíz del documento.</li>
                    <li><code>&lt;head&gt;</code>: Configuración (Meta, Título, CSS). No visible.</li>
                    <li><code>&lt;body&gt;</code>: Contenido visible (textos, fotos...).</li>
                </ul>
                <p class="mt-2"><strong>Etiquetas de Texto:</strong></p>
                <ul class="list-disc pl-4 text-gray-400 text-sm">
                    <li><code>&lt;h1&gt;</code> a <code>&lt;h6&gt;</code>: Títulos por jerarquía.</li>
                    <li><code>&lt;p&gt;</code>: Párrafos de texto.</li>
                    <li><code>&lt;br&gt;</code>: Salto de línea forzado.</li>
                </ul>
            </div>`
    },
    {
        title: "HTML: Listas y Tablas",
        icon: "fa-table",
        content: `
            <div class="space-y-2">
                <p><strong>Listas:</strong></p>
                <ul class="list-disc pl-4 text-gray-400 text-sm">
                    <li><code>&lt;ul&gt;</code> (Desordenada): Usa puntos (bullets).</li>
                    <li><code>&lt;ol&gt;</code> (Ordenada): Usa números (1, 2, 3...).</li>
                    <li><code>&lt;li&gt;</code> (List Item): Cada elemento de la lista.</li>
                </ul>
                <p class="mt-2"><strong>Tablas (Estructura):</strong></p>
                <ul class="list-disc pl-4 text-gray-400 text-sm">
                    <li><code>&lt;table&gt;</code>: Contenedor padre.</li>
                    <li><code>&lt;tr&gt;</code> (Row): Fila horizontal.</li>
                    <li><code>&lt;th&gt;</code> (Header): Celda de título (negrita/centrada).</li>
                    <li><code>&lt;td&gt;</code> (Data): Celda de datos normal.</li>
                </ul>
            </div>`
    },
    {
        title: "HTML: Formularios y Media",
        icon: "fa-id-card",
        content: `
            <div class="space-y-2">
                <p><strong>Imágenes y Enlaces:</strong></p>
                <ul class="list-disc pl-4 text-gray-400 text-sm">
                    <li><code>&lt;img src="..." alt="..."&gt;</code>: 'alt' es vital para accesibilidad.</li>
                    <li><code>&lt;a href="..." target="_blank"&gt;</code>: Enlace. '_blank' abre pestaña nueva.</li>
                </ul>
                <p class="mt-2"><strong>Formularios <code>&lt;form&gt;</code>:</strong></p>
                <ul class="list-disc pl-4 text-gray-400 text-sm">
                    <li><code>input type="text"</code>: Texto corto.</li>
                    <li><code>input type="password"</code>: Oculta caracteres.</li>
                    <li><code>input type="submit"</code>: Botón para enviar.</li>
                    <li>Atributo <code>placeholder</code>: Texto de ayuda gris.</li>
                </ul>
            </div>`
    },
    {
        title: "CSS: Selectores Clave",
        icon: "fa-crosshairs",
        content: `
            <div class="space-y-2">
                <p><strong>Tipos de Selectores:</strong></p>
                <ul class="list-disc pl-4 text-gray-400 text-sm">
                    <li><strong class="text-yellow-300">#id</strong>: Único por página (ej: <code>#menu</code>).</li>
                    <li><strong class="text-blue-300">.clase</strong>: Para grupos (ej: <code>.boton</code>).</li>
                    <li><strong>Etiqueta</strong>: Afecta a todas (ej: <code>p</code>).</li>
                    <li><strong>Universal</strong>: <code>*</code> (afecta a todo).</li>
                </ul>
                <p class="mt-2"><strong>Pseudo-clases y Combinadores:</strong></p>
                <ul class="list-disc pl-4 text-gray-400 text-sm">
                    <li><code>a:hover</code>: Estilo al pasar el ratón por encima.</li>
                    <li><code>div p</code>: Selecciona párrafos DENTRO de un div.</li>
                </ul>
            </div>`
    },
    {
        title: "CSS: Estilos Visuales",
        icon: "fa-paint-brush",
        content: `
            <div class="space-y-2">
                <p><strong>Texto:</strong></p>
                <ul class="list-disc pl-4 text-gray-400 text-sm">
                    <li><code>color</code>: Color de la letra.</li>
                    <li><code>text-decoration: none/underline</code>: Quitar/Poner subrayado.</li>
                    <li><code>font-size</code>: Tamaño de letra.</li>
                    <li><code>font-weight: bold</code>: Negrita.</li>
                </ul>
                <p class="mt-2"><strong>Caja y Bordes:</strong></p>
                <ul class="list-disc pl-4 text-gray-400 text-sm">
                    <li><code>border: 1px solid black</code>: Grosor, tipo, color.</li>
                    <li><code>background-color</code>: Color de fondo.</li>
                    <li><code>padding</code>: Relleno interno.</li>
                    <li><code>margin</code>: Separación externa.</li>
                </ul>
            </div>`
    },
    {
        title: "JS: Arrays (Manipulación)",
        icon: "fa-layer-group",
        content: `
            <div class="space-y-2">
                <p><strong>Añadir y Eliminar:</strong></p>
                <ul class="list-disc pl-4 text-gray-400 text-sm">
                    <li><code>push(x)</code>: Añade al <strong>FINAL</strong>.</li>
                    <li><code>pop()</code>: Elimina del <strong>FINAL</strong>.</li>
                    <li><code>unshift(x)</code>: Añade al <strong>INICIO</strong>.</li>
                    <li><code>shift()</code>: Elimina del <strong>INICIO</strong> (Cuidado, desplaza índices).</li>
                </ul>
                <p class="mt-2"><strong>Utilidades:</strong></p>
                <ul class="list-disc pl-4 text-gray-400 text-sm">
                    <li><code>length</code>: Cantidad de elementos.</li>
                    <li><code>indexOf(x)</code>: Posición de x (devuelve -1 si no existe).</li>
                    <li><code>split(',')</code>: Convierte Texto ⮕ Array.</li>
                </ul>
            </div>`
    },
    {
        title: "JS: Funciones y Scope",
        icon: "fa-code",
        content: `
            <div class="space-y-2">
                <p><strong>Tipos de Funciones:</strong></p>
                <ul class="list-disc pl-4 text-gray-400 text-sm">
                    <li>Tradicional: <code>function suma(a,b) { return a+b; }</code></li>
                    <li>Flecha (ES6): <code>const suma = (a,b) => a+b;</code></li>
                </ul>
                <p class="mt-2 text-red-300"><strong>¡Ojo al Examen! (Referencias):</strong></p>
                <p class="text-sm text-gray-400">
                    Si pasas un <strong>Array</strong> o <strong>Objeto</strong> a una función y lo modificas dentro, 
                    <strong>SÍ cambia fuera</strong> (Paso por Referencia). <br>
                    Si pasas un número, <strong>NO cambia fuera</strong> (Paso por Valor).
                </p>
            </div>`
    },
    {
        title: "JS: Clases ES6",
        icon: "fa-cube",
        content: `
            <div class="space-y-2">
                <p><strong>Sintaxis:</strong></p>
                <code class="block bg-black/30 p-2 rounded text-xs">
class Persona {<br>
&nbsp;&nbsp;constructor(nombre) {<br>
&nbsp;&nbsp;&nbsp;&nbsp;this.nombre = nombre;<br>
&nbsp;&nbsp;}<br>
}
                </code>
                <ul class="list-disc pl-4 text-gray-400 text-sm mt-1">
                    <li><code>constructor</code>: Método que inicia el objeto.</li>
                    <li><code>this</code>: Referencia al objeto actual.</li>
                    <li><code>new</code>: Crea una nueva instancia.</li>
                    <li><code>export / import</code>: Para compartir clases entre archivos.</li>
                </ul>
            </div>`
    }
];

// 2. GLOSARIO
const DICT_DB = [
    { term: "Alt", def: "Texto alternativo para imágenes." },
    { term: "Array", def: "Lista de datos [0,1,2]. Se pasa por referencia." },
    { term: "Boolean", def: "True o False." },
    { term: "Callback", def: "Función pasada a otra (ej. en forEach)." },
    { term: "Class", def: "Plantilla para objetos en POO." },
    { term: "Constructor", def: "Método que inicia la clase al hacer new." },
    { term: "DOM", def: "Estructura del documento HTML en memoria." },
    { term: "Export", def: "Saca una clase/función para usarla en otro archivo." },
    { term: "ForEach", def: "Bucle para recorrer arrays." },
    { term: "Head", def: "Metadatos del HTML (CSS, título)." },
    { term: "Hover", def: "CSS al pasar el ratón." },
    { term: "Href", def: "Link de destino en etiqueta <a>." },
    { term: "Import", def: "Trae una clase/función de otro archivo." },
    { term: "IndexOf", def: "Posición de un elemento (-1 si no está)." },
    { term: "Length", def: "Longitud de array o string." },
    { term: "Null", def: "Valor vacío intencional." },
    { term: "Pop", def: "Sacar del final del array." },
    { term: "Push", def: "Meter al final del array." },
    { term: "Shift", def: "Sacar del inicio del array." },
    { term: "Split", def: "Romper string en array." },
    { term: "Src", def: "Fuente de imagen o script." },
    { term: "This", def: "Objeto actual." },
    { term: "Undefined", def: "Valor no definido (por defecto)." }
];

// 3. DOJO ALGORITMOS (Retos de código)
const CHALLENGE_DB = [
    {
        title: "El Mayor",
        desc: "Encuentra el número más alto sin Math.max.",
        code: `let nums = [5, 20, 2];\nlet max = nums[0];\nfor(let i=1; i<{{0}}; i++) {\n  if({{1}}) max = nums[i];\n}`,
        ans: ["nums.length", "nums[i]>max"],
        hint: "Recorre hasta length. Compara nums[i] con max."
    },
    {
        title: "Invertir Array",
        desc: "Invierte el array manualmente.",
        code: `let orig = [1, 2, 3];\nlet inv = [];\nfor(let i={{0}}; i>=0; i--) {\n  inv.push(orig[i]);\n}`,
        ans: ["orig.length-1"],
        hint: "Empieza por el último índice (length-1)."
    },
    {
        title: "Buscar Elemento",
        desc: "Busca el 5 y para el bucle.",
        code: `let data = [1, 5, 9];\nlet found = false;\nfor(let i=0; i<data.length; i++) {\n  if(data[i] === 5) {\n    found = true;\n    {{0}};\n  }\n}`,
        ans: ["break"],
        hint: "break rompe el bucle."
    },
    {
        title: "Clase Gestor",
        desc: "Clase que guarda tareas.",
        code: `class Gestor {\n  constructor() {\n    {{0}} = [];\n  }\n  add(t) {\n    {{0}}.push(t);\n  }\n}`,
        ans: ["this.lista"],
        hint: "Usa this.nombrePropiedad."
    },
    {
        title: "CSV a Lista",
        desc: "Limpia el string.",
        code: `let csv = "ID,A,B";\nlet arr = csv.{{0}}(",");\narr.{{1}}(); // Quita ID`,
        ans: ["split", "shift"],
        hint: "split corta, shift quita el primero."
    }
];

// 4. RELLENAR HUECOS (FILL-IN)
const PRACTICE_DB = [
    { topic: "HTML Base", text: `<!DOCTYPE html>\n<html>\n<head>\n<link rel="{{0}}" href="style.css">\n</head>\n<body>\n<img {{1}}="foto.jpg">\n</body>\n</html>`, ans: ["stylesheet", "src"], hint: "stylesheet, src" },
    { topic: "HTML Listas", text: `\n<{{0}}>\n  <li>1. Item</li>\n</{{0}}>\n\n<{{1}}>\n  <li>. Item</li>\n</{{1}}>`, ans: ["ol", "ul"], hint: "ol, ul" },
    { topic: "HTML Tabla", text: `<table>\n  <{{0}}> \n    <{{1}}>Dato</{{1}}>\n  </{{0}}>\n</table>`, ans: ["tr", "td"], hint: "tr, td" },
    { topic: "CSS Hover", text: `a { color: blue; }\na:{{0}} { color: red; }`, ans: ["hover"], hint: "hover" },
    { topic: "JS Push/Pop", text: `let a = [1];\na.{{0}}(2); // [1,2]\na.{{1}}(); // [1]`, ans: ["push", "pop"], hint: "push, pop" },
    { topic: "JS Shift", text: `let a = [1,2];\na.{{0}}(); // [2]`, ans: ["shift"], hint: "shift" },
    { topic: "JS Split", text: `let s = "a,b";\nlet a = s.{{0}}(",");`, ans: ["split"], hint: "split" },
    { topic: "JS Class", text: `{{0}} Persona {\n  {{1}}(n) {\n    this.n = n;\n  }\n}`, ans: ["class", "constructor"], hint: "class, constructor" },
    { topic: "JS Instancia", text: `let p = {{0}} Persona("Ana");`, ans: ["new"], hint: "new" },
    { topic: "JS Export", text: `// Sacar\n{{0}} class A {}\n// Traer\n{{1}} { A } from "./A.js";`, ans: ["export", "import"], hint: "export, import" },
    { topic: "JS Loop", text: `let a = [1,2];\nfor(let i=0; i < a.{{0}}; i++) {}`, ans: ["length"], hint: "length" },
    { topic: "JS Arrow", text: `const f = (x) {{0}} x * 2;`, ans: ["=>"], hint: "=>" }
];

// 5. EXAMEN TEST (+100 Preguntas)
const MEGA_DB = {
    htmlcss: [
        { q: "Etiqueta raíz HTML", opts: ["head", "body", "html", "root"], ans: 2, expl: "<html> envuelve todo." },
        { q: "Metadatos van en...", opts: ["body", "head", "footer", "section"], ans: 1, expl: "<head>." },
        { q: "Título principal", opts: ["header", "title", "h1", "top"], ans: 2, expl: "<h1>." },
        { q: "Salto de línea", opts: ["lb", "br", "break", "ln"], ans: 1, expl: "<br>." },
        { q: "Lista puntos", opts: ["ol", "ul", "li", "dl"], ans: 1, expl: "<ul>." },
        { q: "Lista números", opts: ["ul", "list", "ol", "nl"], ans: 2, expl: "<ol>." },
        { q: "Item de lista", opts: ["el", "li", "item", "ul-item"], ans: 1, expl: "<li>." },
        { q: "Contenedor tabla", opts: ["tab", "table", "grid", "t"], ans: 1, expl: "<table>." },
        { q: "Fila tabla", opts: ["row", "td", "tr", "line"], ans: 2, expl: "<tr>." },
        { q: "Celda datos", opts: ["dc", "td", "th", "cell"], ans: 1, expl: "<td>." },
        { q: "Celda cabecera", opts: ["head", "td", "th", "top"], ans: 2, expl: "<th>." },
        { q: "Img alt sirve para", opts: ["título", "src", "accesibilidad", "link"], ans: 2, expl: "Descripción texto." },
        { q: "Link destino", opts: ["src", "link", "href", "to"], ans: 2, expl: "href." },
        { q: "Nueva pestaña", opts: ["target='_new'", "target='_blank'", "window='new'", "href='_blank'"], ans: 1, expl: "_blank." },
        { q: "Input password", opts: ["hidden", "secure", "password", "text"], ans: 2, expl: "Oculta texto." },
        { q: "Input enviar", opts: ["send", "submit", "button", "enter"], ans: 1, expl: "submit." },
        { q: "Selector ID", opts: [".menu", "menu", "#menu", "*menu"], ans: 2, expl: "#." },
        { q: "Selector Clase", opts: ["#btn", "btn", ".btn", ":btn"], ans: 2, expl: "." },
        { q: "Selector etiqueta p", opts: [".p", "#p", "p", "all-p"], ans: 2, expl: "p." },
        { q: "Selector descendiente", opts: ["div+p", "div p", "div>p", "div~p"], ans: 1, expl: "div p." },
        { q: "Color texto", opts: ["font-color", "text-color", "color", "background"], ans: 2, expl: "color." },
        { q: "Quitar subrayado", opts: ["decoration:none", "style:no", "text-decoration:none", "off"], ans: 2, expl: "text-decoration:none." },
        { q: "Cursiva", opts: ["font-style:italic", "weight:italic", "decoration:italic", "cursive"], ans: 0, expl: "font-style." },
        { q: "Ratón encima", opts: [":mouse", ":focus", ":active", ":hover"], ans: 3, expl: ":hover." },
        { q: "Enlazar CSS", opts: ["style src", "link rel='stylesheet'", "script href", "css link"], ans: 1, expl: "<link>." }
    ],
    js: [
        { q: "Primer índice array", opts: ["1", "0", "-1", "A"], ans: 1, expl: "0." },
        { q: "a[99] en array corto", opts: ["20", "null", "undefined", "Error"], ans: 2, expl: "undefined." },
        { q: "Longitud array", opts: ["size", "count", "length", "index"], ans: 2, expl: "length." },
        { q: "Último elemento", opts: ["arr.last()", "arr[arr.length]", "arr[arr.length-1]", "arr[-1]"], ans: 2, expl: "length-1." },
        { q: "Añadir final", opts: ["push", "pop", "shift", "add"], ans: 0, expl: "push." },
        { q: "Quitar último", opts: ["delete", "pop", "remove", "shift"], ans: 1, expl: "pop." },
        { q: "Quitar primero", opts: ["pop", "shift", "unshift", "cut"], ans: 1, expl: "shift." },
        { q: "Añadir inicio", opts: ["push", "insert", "unshift", "shift"], ans: 2, expl: "unshift." },
        { q: "String a Array", opts: ["split", "join", "cut", "slice"], ans: 0, expl: "split." },
        { q: "Array a String", opts: ["split", "join", "add", "concat"], ans: 1, expl: "join." },
        { q: "indexOf no encontrado", opts: ["0", "null", "false", "-1"], ans: 3, expl: "-1." },
        { q: "Bucle estándar", opts: ["for(;;)", "loop", "repeat", "while"], ans: 0, expl: "for." },
        { q: "Romper bucle", opts: ["stop", "break", "exit", "return"], ans: 1, expl: "break." },
        { q: "AND lógico", opts: ["&", "&&", "||", "AND"], ans: 1, expl: "&&." },
        { q: "OR lógico", opts: ["|", "OR", "||", "!"], ans: 2, expl: "||." },
        { q: "Definir función", opts: ["def", "function", "func", "fn"], ans: 1, expl: "function." },
        { q: "Flecha", opts: ["()=>{}", "()->{}", "=>(){}", "fn=>"], ans: 0, expl: "=>." },
        { q: "Sin return devuelve", opts: ["0", "error", "undefined", "null"], ans: 2, expl: "undefined." },
        { q: "Callback es", opts: ["llamada", "función argumento", "error", "var"], ans: 1, expl: "Función argumento." },
        { q: "Primitivos paso por", opts: ["ref", "valor", "clase", "mix"], ans: 1, expl: "Valor." },
        { q: "Arrays paso por", opts: ["valor", "referencia", "copia", "const"], ans: 1, expl: "Referencia." },
        { q: "Crear clase", opts: ["object", "struct", "class", "model"], ans: 2, expl: "class." },
        { q: "Inicializador clase", opts: ["start", "init", "main", "constructor"], ans: 3, expl: "constructor." },
        { q: "Nueva instancia", opts: ["create", "new", "make", "instance"], ans: 1, expl: "new." },
        { q: "Objeto actual", opts: ["file", "global", "this", "parent"], ans: 2, expl: "this." },
        { q: "Sacar módulo", opts: ["public", "export", "share", "extern"], ans: 1, expl: "export." },
        { q: "Traer módulo", opts: ["include", "require", "import", "using"], ans: 2, expl: "import." },
        { q: "Seleccionar ID", opts: ["getElement", "querySelector('#id')", "getElementById", "2 y 3"], ans: 3, expl: "Ambos." },
        { q: "Cambiar HTML", opts: ["innerText", "innerHTML", "content", "val"], ans: 1, expl: "innerHTML." },
        { q: "Evento clic", opts: ["hover", "press", "click", "mouse"], ans: 2, expl: "click." },
        { q: "DOM Cargado", opts: ["load", "DOMReady", "DOMContentLoaded", "onload"], ans: 2, expl: "DOMContentLoaded." },
        { q: "Añadir clase CSS", opts: ["push", "classList.add", "className", "style"], ans: 1, expl: "classList.add." }
    ]
};