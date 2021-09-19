import React from "react";
import logo from "./logo-acecova.webp";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contact}>
        <p class={styles.title}>Contacto</p>
        <div>
          <a href="tel:+34601239497">
            <img
              height={15}
              alt="icon phone"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABiElEQVRIib3Vv0tXYRTH8ZdGfnNQS6lRTAycikD9C8RBCFqLcrJRSG1wDo2gJkdtEJwMclAKIgedhJqiGsRfRDkUtLi1RMPzfPHhy/0i936vfpbLOffc532fc55zHs5YFzJ8tzGBP/jVKKC5xn6INfyLz85GAakm8QXXoz2L5bIWH8EOria+lgi8UwZgDlMZ/kF8R0fRhas1OER/xvtPWK0DzwX4gLu4mBHTguOigFRvcb/GdwM/NZCiVAPYxaXE91oD6cnSIl4k9iNso1IWoB0HGE5883gju+sLaVDIe7XhmrGCV2gqCzKGr+iKdgXvI6S0ncwIfdCeQFaEdFVrchlP8FSdk1Y77FI9xwbW0Ya/uIcjbGIa39ATf+IzRvPuoimCPjpJF4zH3fQlviEhrUu4khc0Ez/uPSWugmfC/LqZFzImnK7h0wKFUT+bF0Do9n28RGudmF78wK0iAEJBF7EnzK50QF4TCv+g6OKpBvAOv7EgzKwdPE6DyujMbuFG7MGWMPrPT/8BPi1BB2tog6kAAAAASUVORK5CYII="
            />
            +34 601 23 94 97
          </a>
        </div>
        <div>
          <a href="https://goo.gl/maps/tdQU5bEetn8kALFy6">
            <svg
              height="16"
              viewBox="0 0 21 21"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                fill="none"
                fill-rule="evenodd"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                transform="translate(4 2)"
              >
                <path d="m6.5 16.5407715.6311176-.7118691c.71585099-.8191184 1.36011688-1.5983525 1.93279767-2.3377022l.4733382-.6239608c1.97516433-2.6615039 2.96274653-4.77276704 2.96274653-6.33378943 0-3.33218241-2.6862915-6.03344997-6-6.03344997s-6 2.70126756-6 6.03344997c0 1.56102239.98758218 3.67228553 2.96274653 6.33378943l.4733382.6239608c.73630387.9505925 1.5909423 1.9671163 2.56391527 3.0495713z" />
                <circle cx="6.5" cy="6.5" r="2.5" />
              </g>
            </svg>
            Carrer d’Aparicio Albiñana 2, Valencia, España
          </a>
        </div>
      </div>
      <div className={styles.partner}>
        <p class={styles.title}>Socio Colaborador</p>
        <img
          src={logo}
          alt="Logo Asociación de Celiacos de la Comunidad Valenciana"
        ></img>
      </div>
    </footer>
  );
};
