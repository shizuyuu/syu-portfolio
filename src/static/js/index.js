import AOS from 'aos';
import 'aos/dist/aos.css';

function handleStaggeredScroll() {
  const leftCol = document.querySelector("#works-section .column.left");
  const rightCol = document.querySelector("#works-section .column.right");
  const worksSection = document.querySelector("#works-section");
  if (!leftCol || !rightCol || !worksSection) return;

  // 取得 section 的位置
  const rect = worksSection.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;

  // 只在 section 進入視窗時觸發
  if (rect.top < windowHeight && rect.bottom > 0 && window.innerWidth >= 1024) {
    // 計算進入區塊的滾動百分比
    const scrollY = window.scrollY || window.pageYOffset;
    const sectionTop = worksSection.offsetTop;
    const sectionHeight = worksSection.offsetHeight;
    const progress = Math.min(
      Math.max(
        (scrollY + windowHeight - sectionTop) / (sectionHeight + windowHeight),
        0
      ),
      1
    );

    // 想要的最大位移 px
    const maxOffset = 80;
    leftCol.style.transform = `translateY(${-progress * maxOffset}px)`;
    rightCol.style.transform = `translateY(${progress * maxOffset}px)`;
  } else {
    // 滾動到區塊外或小於 768 闊時重置
    leftCol.style.transform = "";
    rightCol.style.transform = "";
  }
}

window.addEventListener("scroll", handleStaggeredScroll);
window.addEventListener("resize", handleStaggeredScroll);
document.addEventListener("DOMContentLoaded", handleStaggeredScroll);

// 影片載入動畫
const video = document.getElementById('main-video');
const loading = document.getElementById('loading-overlay');
const path = window.location.pathname || '';
const isEnIndex = path === '/en/' || path === '/en/index.html' || path.startsWith('/en/index');

// 如果是在 /en 的首頁，直接隱藏 loading 並初始化 AOS（避免相對路徑 /en/ 導致 overlay 一直顯示）
if (isEnIndex && loading) {
  loading.style.display = 'none';
  sessionStorage.setItem('indexLoaded', '1');
  window.addEventListener('load', () => {
    loadAOS();
  });
} else if (video && sessionStorage.getItem('indexLoaded') !== '1') {
  video.addEventListener('canplaythrough', () => {
    if (loading) loading.classList.add('hide');
    sessionStorage.setItem('indexLoaded', '1');
    // 等 loading 動畫結束再初始化 AOS
    setTimeout(() => {
      loadAOS();
    }, 1000);
  });
} else if (loading) {
  loading.style.display = 'none';
  window.addEventListener('load', () => {
    loadAOS();
  });
} else {
  // production 直接載入 AOS
  window.addEventListener('load', () => {
    loadAOS();
  });
}
// AOS 初始化
function loadAOS() {
AOS.init({
      duration: 1000,
      offset: 100,
  });
}