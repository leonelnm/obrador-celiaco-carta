export const CATEGORIES = ["panaderia", "bolleria", "pasteleria", "temporada"];

export const CATEGORIES_INFO = {
  panaderia: {
    path: "/",
    label_es: "Panadería",
    label_en: "Translate panaderia",
    component: "panaderia",
    filter: "panaderia",
    title: "Panaderia | Celiaco",
    description: ""
  },
  bolleria: {
    path: "/bolleria",
    label_es: "Bollería",
    label_en: "Translate bolleria",
    component: "bolleria",
    filter: "bolleria",
    title: "Bolleria | Celiaco",
    description: "Bollería "
  },
  pasteleria: {
    path: "/pasteleria",
    label_es: "Pastelería",
    label_en: "Translate pasteleria",
    component: "pasteleria",
    filter: "pasteleria",
    title: "Pasteleria | Celiaco",
    description: ""
  },
  temporada: {
    path: "/temporada",
    label_es: "De Temporada",
    label_en: "Translate temporada",
    component: "temporada",
    filter: "temporada",
    title: "Productos de Temporada | Celiaco",
    description: ""
  },
};

export const CATEGORIES_FILTER = {
  PANADERIA: ["panadería", "panaderia"],
  BOLLERIA: ["bolleria", "bollería"],
  PASTELERIA: ["pasteleria", "pastelería"],
  TEMPORADA: ["productos de temporada"],
};
