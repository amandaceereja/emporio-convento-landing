# Empório Convento — Landing Page

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit-2ea44f)](https://TU-USUARIO.github.io/TU-REPO/)

Landing page **mobile-first** para Empório Convento orientada a **conversión** (reservas y pedidos por WhatsApp).  
Incluye héroe ilustrado, menú en zig-zag, galería, módulo de reservas, bloque de Instagram, mapa y **CTA flotante de WhatsApp**.

---

## Features

- **Hero interactivo** con animaciones suaves (ilustración en destaque + CTA)
- **Navbar sticky** animada con subrayado fluido en los links
- **Secciones en Zig-Zag** para menú digital (entradas, platos principales, etc.)
- **Galería animada en marquee** (scroll automático y GPU-friendly)
- **Formulario de Reservas** integrado a **WhatsApp**
- **Botón flotante de WhatsApp (FAB)** siempre visible
- **Integración con feed de Instagram** (fotos y videos)
- **Páginas legales**: Política de Privacidad & Cookies
- **Mapa embebido (Google Maps)** en contacto

---

## Tecnologías

- **HTML5** — estructura semántica  
- **CSS3** — responsive con `clamp`, `grid` y media queries  
- **JavaScript (ES6)** — interactividad y animaciones  
- **Intersection Observer API** — revelar elementos al hacer scroll  
- **WhatsApp API** — reservas/pedidos por mensaje  
- **Google Maps Embed** — ubicación  
- **Instagram Embed/Feed** — prueba social

---

## Estructura

│── index.html
│── /css
│ ├── styles.css
│ └── legal.css
│── /js
│ └── main.js
│── /img
│ ├── icon/
│ ├── insta/
│ └── preview/
│ ├── EmporioConventoMockup1.png
│ ├── EmporioConventoMockup2.png
│ └── EmporioConventoMockup.mp4
│
│── politica-privacidade.html
│── politica-cookies.html
└── README.md


## Breakpoints (sin interferencias)

El proyecto separa estilos por rangos para evitar solapes entre “móvil grande” y “tablet”:

- **XS**: `@media (max-width: 399px)`
- **Mobile**: `@media (min-width: 400px) and (max-width: 767px)`
- **Tablet**: `@media (min-width: 768px) and (max-width: 1023px)`
- **Desktop**: `@media (min-width: 1024px) and (max-width: 1439px)`
- **XXL**: `@media (min-width: 1440px)`

## Preview

<p align="center">
  <a href="https://TU-USUARIO.github.io/TU-REPO/" target="_blank" rel="noopener noreferrer">
    <img alt="Live Demo" src="https://img.shields.io/badge/Live%20Demo-Open%20site-28a745?style=for-the-badge">
  </a>
</p>

<p align="center">
  <img src="img/preview/EmporioConventoMockup1.png" alt="Empório Convento — mockup responsive 1" width="900">
</p>

<p align="center">
  <img src="img/preview/EmporioConventoMockup2.png" alt="Empório Convento — mockup responsive 2" width="900">
</p>

<details>
  <summary><strong>🎬 Ver video MP4 (click para desplegar)</strong></summary>

  <p align="center">
    <video controls muted playsinline style="max-width:100%; height:auto; border-radius:12px;">
      <source src="img/preview/EmporioConventoMockup.mp4" type="video/mp4">
      Tu navegador no soporta video embebido.
    </video>
  </p>

  <p align="center">
    Si no ves el reproductor, abre el video directamente:
    <a href="https://raw.githubusercontent.com/TU-USUARIO/TU-REPO/main/img/preview/EmporioConventoMockup.mp4">raw MP4</a>
  </p>
</details>

---

## License

Este proyecto fue desarrollado con fines **educativos y de portafolio**.  
Puedes utilizarlo y adaptarlo libremente, pero el uso **comercial sin autorización** está prohibido.

## Author

Desarrollado por: **Amanda Cereja**  
GitHub: [@amandaceereja](https://github.com/amandaceereja)  
Contacto: amandacereja027@outlook.com
