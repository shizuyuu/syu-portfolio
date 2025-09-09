import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
// @ts-ignore
import nunjucks from "vite-plugin-nunjucks";

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
        product4: "src/product-4.html",
        product5: "src/product-5.html",
        product6: "src/product-6.html",
      },
      output: {
        entryFileNames: "assets/[name].js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name][extname]",
      },
    },
  },
  plugins: [
    tailwindcss(),
    nunjucks({
      variables: {
        "index.html": {
          title: "Alani Syu Portfolio",
          description:
            "Even if I am a little cog,I still want to make the world beautiful.即使是個小螺絲，也要把世界變美。.Alani portfolio { Web RWD Design; APP Design; UI Design; AI Painting; Other; }",
          url: "index.html",
          image: "./static/images/og-image.jpg",
        },
        "product-1.html": {
          title: "Perfectcorp.com & DemoStore｜Alani Syu Portfolio",
          description:
            "Even if I am a little cog,I still want to make the world beautiful.即使是個小螺絲，也要把世界變美。.Alani portfolio { Web RWD Design; APP Design; UI Design; AI Painting; Other; }",
          url: "product-1.html",
          image: "./static/images/p01-banner.jpg",
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
            { mobile: "mb-p1-content-8.jpg", desktop: "dt-p1-content-8.jpg" },
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
          image: "./static/images/p02-banner.jpg",
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
            { mobile: "default.jpg", desktop: "dt-p2-content-9.jpg" },
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
          image: "./static/images/p03-banner.jpg",
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
        "product-4.html": {
          title: "China Airlines Cargo Services｜Alani Syu Portfolio",
          description:
            "Even if I am a little cog,I still want to make the world beautiful.即使是個小螺絲，也要把世界變美。.Alani portfolio { Web RWD Design; APP Design; UI Design; AI Painting; Other; }",
          url: "product-4.html",
          image: "./static/images/p04-banner.jpg",
          productTitle: "China Airlines Cargo Services",
          productProjects: "好事互動媒體設計",
          productSub:
            "重點改善手機介面的操作體驗。透過重新設計，提升地勤人員與顧客的互動效率，降低送單錯誤率，並加快現場點貨與訂單建立的速度，顯著提升業務流程的流暢度與準確性。",
          skillList: ["Web RWD Design", "UI Design", "Visual Design"],
          productImgs: [
            { mobile: "mb-p4-content-1.jpg", desktop: "dt-p4-content-1.jpg" },
            { mobile: "mb-p4-content-2.jpg", desktop: "dt-p4-content-2.jpg" },
            { mobile: "mb-p4-content-3.jpg", desktop: "dt-p4-content-3.jpg" },
            { mobile: "mb-p4-content-4.jpg", desktop: "dt-p4-content-4.jpg" },
            { mobile: "mb-p4-content-5.jpg", desktop: "dt-p4-content-5.jpg" },
            { mobile: "mb-p4-content-6.jpg", desktop: "dt-p4-content-6.jpg" },
            { mobile: "mb-p4-content-7.jpg", desktop: "dt-p4-content-7.jpg" },
            { mobile: "mb-p4-content-8.jpg", desktop: "dt-p4-content-8.jpg" },
          ],
          otherLeft: {
            title: "NFTs Product Showcase",
            sub: "為 NFT 設計的產品頁面，專案強調創新的視覺呈現，吸引收藏家與愛好者，並提供直觀的操作體驗，讓使用者輕鬆探索並擁有限量版 NFT，開啟數位藝術的全新世界。",
            imgs: "./static/images/p03-banner.jpg",
            url: "product-3.html",
            list: ["Web RWD Design", "UI Design", "Visual Design"],
          },
          otherRight: {
            title: "Qwalker",
            sub: "提升保戶日常運動動機，並以輕鬆有趣的方式增加品牌黏著度。介面設計強調易操作與視覺趣味性，鼓勵用戶每日開啟 App 進行步數紀錄、任務挑戰與福利兌換。",
            imgs: "./static/images/p05-banner.jpg",
            url: "product-5.html",
            list: ["APP", "UI Design", "Visual Design"],
          },
        },
        "product-5.html": {
          title: "Qwalker｜Alani Syu Portfolio",
          description:
            "Even if I am a little cog,I still want to make the world beautiful.即使是個小螺絲，也要把世界變美。.Alani portfolio { Web RWD Design; APP Design; UI Design; AI Painting; Other; }",
          url: "product-5.html",
          image: "./static/images/p05-banner.jpg",
          productTitle: "Qwalker",
          productProjects: "好事互動媒體設計",
          productSub:
            "提升保戶日常運動動機，並以輕鬆有趣的方式增加品牌黏著度。介面設計強調易操作與視覺趣味性，鼓勵用戶每日開啟 App 進行步數紀錄、任務挑戰與福利兌換。",
          skillList: ["APP", "UI Design", "Visual Design"],
          productImgs: [
            { mobile: "mb-p5-content-1.jpg", desktop: "dt-p5-content-1.jpg" },
            { mobile: "mb-p5-content-2.jpg", desktop: "dt-p5-content-2.jpg" },
            { mobile: "mb-p5-content-3.jpg", desktop: "dt-p5-content-3.jpg" },
            { mobile: "mb-p5-content-4.jpg", desktop: "dt-p5-content-4.jpg" },
            { mobile: "mb-p5-content-5.jpg", desktop: "dt-p5-content-5.jpg" },
            { mobile: "mb-p5-content-6.jpg", desktop: "dt-p5-content-6.jpg" },
            { mobile: "mb-p5-content-7.jpg", desktop: "dt-p5-content-7.jpg" },
            { mobile: "mb-p5-content-8.jpg", desktop: "dt-p5-content-8.jpg" },
          ],
          otherLeft: {
            title: "China Airlines Cargo Services",
            sub: "重點改善手機介面的操作體驗。透過重新設計，提升地勤人員與顧客的互動效率，降低送單錯誤率，並加快現場點貨與訂單建立的速度，顯著提升業務流程的流暢度與準確性。",
            imgs: "./static/images/p04-banner.jpg",
            url: "product-4.html",
            list: ["Web RWD Design", "UI Design", "Visual Design"],
          },
          otherRight: {
            title: "Cathay United bank ATM @ Family Mart",
            sub: "活動網站以簡潔歡樂的插畫風格，搭配活潑明亮的視覺設計，運用了合作品牌的主色系，圖文搭配的排版設計不僅提升閱讀清晰度，也增添互動趣味，進一步吸引使用者參與活動。",
            imgs: "./static/images/p06-banner.jpg",
            url: "product-6.html",
            list: ["Web RWD Design", "Visual Design"],
          },
        },
        "product-6.html": {
          title: "Cathay United bank ATM @ Family Mart｜Alani Syu Portfolio",
          description:
            "Even if I am a little cog,I still want to make the world beautiful.即使是個小螺絲，也要把世界變美。.Alani portfolio { Web RWD Design; APP Design; UI Design; AI Painting; Other; }",
          url: "product-6.html",
          image: "./static/images/p06-banner.jpg",
          productTitle: "Cathay United bank ATM @ Family Mart",
          productProjects: "好事互動媒體設計",
          productSub:
            "活動網站以簡潔歡樂的插畫風格，搭配活潑明亮的視覺設計，運用了合作品牌的主色系，圖文搭配的排版設計不僅提升閱讀清晰度，也增添互動趣味，進一步吸引使用者參與活動。",
          skillList: ["Web RWD Design", "Visual Design"],
          productImgs: [
            { mobile: "mb-p6-content-1.jpg", desktop: "dt-p6-content-1.jpg" },
            { mobile: "mb-p6-content-2.jpg", desktop: "dt-p6-content-2.jpg" },
            { mobile: "mb-p6-content-3.jpg", desktop: "dt-p6-content-3.jpg" },
            { mobile: "mb-p6-content-4.jpg", desktop: "dt-p6-content-4.jpg" },
            { mobile: "mb-p6-content-5.jpg", desktop: "dt-p6-content-5.jpg" },
            { mobile: "mb-p6-content-6.jpg", desktop: "dt-p6-content-6.jpg" },
            { mobile: "default.jpg", desktop: "dt-p6-content-7.jpg" },
          ],
          otherLeft: {
            title: "Qwalker",
            sub: "提升保戶日常運動動機，並以輕鬆有趣的方式增加品牌黏著度。介面設計強調易操作與視覺趣味性，鼓勵用戶每日開啟 App 進行步數紀錄、任務挑戰與福利兌換。",
            imgs: "./static/images/p05-banner.jpg",
            url: "product-5.html",
            list: ["APP", "UI Design", "Visual Design"],
          },
          otherRight: {
            title: "Perfectcorp.com & DemoStore",
            sub: "定義並設計 Hyperlink 樣式，持續優化和延伸整體設計方向。同時主導制定 Figma 與 ProtoPie 元件，提升設計團隊的協作效率並確保樣式一致性。",
            imgs: "./static/images/p01-banner.jpg",
            url: "product-1.html",
            list: ["Web RWD Design", "UI Design", "AI Painting", "Component", "Visual Design"],
          },
        },
      },
    }),
  ],
};
