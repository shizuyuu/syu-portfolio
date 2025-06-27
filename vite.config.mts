import { defineConfig } from "vite";
// import { fileURLToPath } from "node:url";
// import path from "node:path";

import tailwindcss from "@tailwindcss/vite";
// @ts-ignore
import nunjucks from "vite-plugin-nunjucks";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

export default {
  root: "src/",
  publicDir: "../static/",
  base: "./", // 靜態站點建議加這行
  server: {
    host: true,
  },
  build: {
    outDir: "../dist", // 輸出資料夾
    emptyOutDir: true, // 每次建置前清空輸出資料夾
    sourcemap: false, // 是否產生 source map
    minify: false, // 預設壓縮方式
    rollupOptions: {
      // 多頁面入口可在這裡設定
      input: {
        index: "src/index.html",
        product1: "src/product-1.html",
        product2: "src/product-2.html",
        product3: "src/product-3.html",
      },
      output: {
        entryFileNames: "assets/[name].js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name][extname]",
      },
    },
  },
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
        "product-1.html": {
          title: "Perfectcorp.com & DemoStore｜Alani Syu Portfolio",
          description:
            "Even if I am a little cog,I still want to make the world beautiful.即使是個小螺絲，也要把世界變美。.Alani portfolio { Web RWD Design; APP Design; UI Design; AI Painting; Other; }",
          url: "product-1.html",
          image: "images/og-image.jpg",
          productTitle: "Perfectcorp.com & DemoStore",
          productProjects: "玩美移動 — AI/AR 美妝科技",
          productSub:
            "定義並設計 Hyperlink 樣式，持續優化和延伸整體設計方向。同時主導制定 Figma 與 ProtoPie 元件，提升設計團隊的協作效率並確保樣式一致性。",
          skillList: [
            "Web RWD Design",
            "UI Design",
            "AI Painting",
            "Component",
            "Visual Design",
          ],
          productImgs: [
            { mobile: "mb-p1-content-1.jpg", desktop: "dt-p1-content-1.jpg" },
            { mobile: "mb-p1-content-2.jpg", desktop: "dt-p1-content-2.jpg" },
            { mobile: "mb-p1-content-3.jpg", desktop: "dt-p1-content-3.jpg" },
            { mobile: "mb-p1-content-4.jpg", desktop: "dt-p1-content-4.jpg" },
            { mobile: "mb-p1-content-5.jpg", desktop: "dt-p1-content-5.jpg" },
            { mobile: "mb-p1-content-6.jpg", desktop: "dt-p1-content-6.jpg" },
            { mobile: "mb-p1-content-7.jpg", desktop: "dt-p1-content-7.jpg" },
            { mobile: "mb-p1-content-8.jpg", desktop: "default.jpg" },
          ],
          otherLeft: {
            title: "YouCam Online Editor",
            sub: "一款基於 AI 技術的線上編輯工具，提供直觀的界面和強大的影像處理功能。用戶可以輕鬆進行照片修飾、創造圖片、更換髮型、擴充底圖、趣味應用等編輯，提升影像品質。",
            imgs: "./static/images/p02-banner.jpg",
            url: "product-2.html",
            list: ["Web RWD Design", "UI Design", "AI Painting", "Component"],
          },
          otherRight: {
            title: "NFTs Product Showcase",
            sub: "為 NFT 設計的產品頁面，專案強調創新的視覺呈現，吸引收藏家與愛好者，並提供直觀的操作體驗，讓使用者輕鬆探索並擁有限量版 NFT，開啟數位藝術的全新世界。",
            imgs: "./static/images/p03-banner.jpg",
            url: "product-3.html",
            list: ["Web RWD Design", "UI Design", "Visual Design"],
          },
        },
        "product-2.html": {
          title: "YouCam Online Editor｜Alani Syu Portfolio",
          description:
            "Even if I am a little cog,I still want to make the world beautiful.即使是個小螺絲，也要把世界變美。.Alani portfolio { Web RWD Design; APP Design; UI Design; AI Painting; Other; }",
          url: "product-2.html",
          image: "images/og-image.jpg",
          productTitle: "YouCam Online Editor",
          productProjects: "玩美移動 — AI/AR 美妝科技",
          productSub:
            "一款基於 AI 技術的線上編輯工具，提供直觀的界面和強大的影像處理功能。用戶可以輕鬆進行照片修飾、創造圖片、更換髮型、擴充底圖、趣味應用等編輯，提升影像品質。",
          skillList: [
            "Web RWD Design",
            "UI Design",
            "AI Painting",
            "Component",
            "Visual Design",
          ],
          productImgs: [
            { mobile: "mb-p2-content-1.jpg", desktop: "dt-p2-content-1.jpg" },
            { mobile: "mb-p2-content-2.jpg", desktop: "dt-p2-content-2.jpg" },
            { mobile: "mb-p2-content-3.jpg", desktop: "dt-p2-content-3.jpg" },
            { mobile: "mb-p2-content-4.jpg", desktop: "dt-p2-content-4.jpg" },
            { mobile: "mb-p2-content-5.jpg", desktop: "dt-p2-content-5.jpg" },
            { mobile: "mb-p2-content-6.jpg", desktop: "dt-p2-content-6.jpg" },
            { mobile: "mb-p2-content-7.jpg", desktop: "dt-p2-content-7.jpg" },
            { mobile: "mb-p2-content-8.jpg", desktop: "dt-p2-content-8.jpg" },
          ],
          otherLeft: {
            title: "Perfectcorp.com & DemoStore",
            sub: "定義並設計 Hyperlink 樣式，持續優化和延伸整體設計方向。同時主導制定 Figma 與 ProtoPie 元件，提升設計團隊的協作效率並確保樣式一致性。",
            imgs: "./static/images/p01-banner.jpg",
            url: "product-1.html",
            list: [
              "Web RWD Design",
              "UI Design",
              "AI Painting",
              "Component",
              "Visual Design",
            ],
          },
          otherRight: {
            title: "NFTs Product Showcase",
            sub: "為 NFT 設計的產品頁面，專案強調創新的視覺呈現，吸引收藏家與愛好者，並提供直觀的操作體驗，讓使用者輕鬆探索並擁有限量版 NFT，開啟數位藝術的全新世界。",
            imgs: "./static/images/p03-banner.jpg",
            url: "product-3.html",
            list: ["Web RWD Design", "UI Design", "Visual Design"],
          },
        },
        "product-3.html": {
          title: "NFTs Product Showcase｜Alani Syu Portfolio",
          description:
            "Even if I am a little cog,I still want to make the world beautiful.即使是個小螺絲，也要把世界變美。.Alani portfolio { Web RWD Design; APP Design; UI Design; AI Painting; Other; }",
          url: "product-3.html",
          image: "images/og-image.jpg",
          productTitle: "NFTs Product Showcase",
          productProjects: "玩美移動 — AI/AR 美妝科技",
          productSub:
            "為 NFT 設計的產品頁面，專案強調創新的視覺呈現，吸引收藏家與愛好者，並提供直觀的操作體驗，讓使用者輕鬆探索並擁有限量版 NFT，開啟數位藝術的全新世界。",
          skillList: ["Web RWD Design", "UI Design", "Visual Design"],
          productImgs: [
            { mobile: "mb-p3-content-1.jpg", desktop: "dt-p3-content-1.jpg" },
            { mobile: "mb-p3-content-2.jpg", desktop: "dt-p3-content-2.jpg" },
            { mobile: "mb-p3-content-3.jpg", desktop: "dt-p3-content-3.jpg" },
            { mobile: "mb-p3-content-4.jpg", desktop: "dt-p3-content-4.jpg" },
            { mobile: "mb-p3-content-5.jpg", desktop: "dt-p3-content-5.jpg" },
            { mobile: "default.jpg", desktop: "dt-p3-content-6.jpg" },
          ],
          otherLeft: {
            title: "YouCam Online Editor",
            sub: "一款基於 AI 技術的線上編輯工具，提供直觀的界面和強大的影像處理功能。用戶可以輕鬆進行照片修飾、創造圖片、更換髮型、擴充底圖、趣味應用等編輯，提升影像品質。",
            imgs: "./static/images/p02-banner.jpg",
            url: "product-2.html",
            list: ["Web RWD Design", "UI Design", "AI Painting", "Component"],
          },
          otherRight: {
            title: "China Airlines Cargo Services",
            sub: "重點改善手機介面的操作體驗。透過重新設計，提升地勤人員與顧客的互動效率，降低送單錯誤率，並加快現場點貨與訂單建立的速度，顯著提升業務流程的流暢度與準確性。",
            imgs: "./static/images/p04-banner.jpg",
            url: "product-4.html",
            list: ["Web RWD Design", "UI Design", "Visual Design"],
          },
        },
      },
    }),
    tailwindcss(),
  ],
};
