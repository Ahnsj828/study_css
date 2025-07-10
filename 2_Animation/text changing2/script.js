document.addEventListener("DOMContentLoaded", () => {
  const words = document.querySelectorAll(".word");
  let currentIndex = 0; // 현재 보여지는 단어 인덱스
  const delay = 2000; // 각 단어가 보여지는 시간 (ms)

  const changeWord = () => {
    const currentWord = words[currentIndex];
    const nextIndex = (currentIndex + 1) % words.length; // 다음 단어 인덱스
    const nextWord = words[nextIndex];

    // 현재 단어를 위로 사라지게 설정
    currentWord.classList.remove("active");
    currentWord.classList.add("exit");

    // 다음 단어를 보이게 설정
    nextWord.classList.remove("exit");
    nextWord.classList.add("active");

    // 다음 단어로 이동
    currentIndex = nextIndex;
  };

  // 초기 설정: 첫 번째 단어 활성화
  words[0].classList.add("active");

  // 일정 시간마다 단어 변경
  setInterval(changeWord, delay);
});
