function handleStaggeredScroll() {
  const leftCol = document.querySelector(".works-section .column.left");
  const rightCol = document.querySelector(".works-section .column.right");
  const worksSection = document.querySelector(".works-section");
  if (!leftCol || !rightCol || !worksSection) return;

  // 取得 section 的位置
  const rect = worksSection.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;

  // 只在 section 進入視窗時觸發
  if (rect.top < windowHeight && rect.bottom > 0 && window.innerWidth >= 768) {
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
