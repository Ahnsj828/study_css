const words = ["HTML", "CSS", "JS", "React", "Node.js", "Express", "MongoDB"];
let index = 0;

const wordElement = document.querySelector(".word");

if (wordElement) {
  setInterval(() => {
    index = (index + 1) % words.length;
    wordElement.style.animation = "none"; // 애니메이션 초기화
    wordElement.offsetHeight; // 리플로우 강제 트리거
    wordElement.style.animation = ""; // 애니메이션 재시작
    wordElement.textContent = words[index];
  }, 4000); // Change word every 4 seconds
} else {
  console.error("Element with class 'word' not found.");
}
