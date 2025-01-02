// < 전체가 같이 통통 튀는 모션 >
// const spans = document.querySelectorAll("h1 span");

// spans.forEach((span, index) => {
//   span.computedStyleMap.animationDelay = `${index * 0.1}s`;
// });

// -----------------------------------------------------------------

// < 순서대로 튀는 모션 >
const spans = document.querySelectorAll("h1 span");

spans.forEach((span, index) => {
  span.style.animationDelay = `${index * 0.1}s`; // animationDelay를 올바르게 설정
});
