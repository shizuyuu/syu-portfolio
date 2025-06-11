import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
// @ts-ignore
import nunjucks from "vite-plugin-nunjucks";

export default {
  plugins: [
    nunjucks({
      variables: {
        "index.html": {
          title: "Alani Syu Portfolio",
          description:
            "Even if I am a little cog,I still want to make the world beautiful.即使是個小螺絲，也要把世界變美。.Alani portfolio { Web RWD Design; APP Design; UI Design; AI Painting; Other; }",
          url: "index.html",
          image: "images/og-image.jpg",
        },
      },
    }),
    tailwindcss(),
  ],
};
