< 📁 CSS 레포지토리 폴더 구조 추천 >
css-cheatsheet/
├── README.md
├── reset/
│ └── reset_css.css
├── layout/
│ ├── flex.html
│ ├── grid.html
│ └── float.html
├── position/
│ ├── position.html
│ ├── z-index.html
│ └── top_bottom_left_right.html
├── display/
│ └── display.html
├── typography/
│ ├── font-family.html
│ ├── line-height.html
│ └── text-align.html
├── color/
│ ├── color.html
│ ├── background-color.html
│ └── mix-blend-mode.html ← ✅ 여기 들어감!
├── effect/
│ ├── filter.html
│ ├── box-shadow.html
│ └── backdrop-filter.html
├── animation/
│ ├── transition.html
│ └── keyframes.html
├── unit/
│ └── rem_em_px_vw_vh.html
└── custom/
└── custom-property.html

css-cheatsheet/
├── README.md
├── reset/ # 리셋 관련 CSS
│ └── reset_css.css
├── layout/ # 레이아웃 속성 (flex, grid 등)
│ ├── flex.html
│ ├── grid.html
│ └── float.html
├── position/ # 위치 관련 속성
│ ├── position.html
│ ├── z-index.html
│ └── top_bottom_left_right.html
├── display/
│ └── display.html
├── typography/ # 폰트, 타이포 속성
│ ├── font-family.html
│ ├── line-height.html
│ └── text-align.html
├── color/ # 색상 관련
│ ├── color.html
│ ├── background-color.html
│ └── mix-blend-mode.html
├── effect/ # 시각 효과 관련
│ ├── filter.html
│ ├── box-shadow.html
│ └── backdrop-filter.html
├── animation/ # 애니메이션 관련
│ ├── transition.html
│ └── keyframes.html
├── unit/ # 단위 관련
│ └── rem_em_px_vw_vh.html
├── custom/ # 사용자 정의 변수 등
│ └── custom-property.html
├── ui-effects/ # 💡 효과 위주 예제 (신규)
│ ├── battery-charging/
│ ├── text-masking/
│ ├── mouse-hover-effect/
│ ├── mouse-follow-effect/
│ └── button-effect/
├── examples/ # 💡 기타 테스트 코드
│ ├── overflow-scroll/
│ ├── input-effects/
│ └── image-mask/
└── framework-examples/ # Bootstrap, Tailwind 등 외부 프레임워크 예제
├── bootstrap/
└── animation-lib/

< ✨ 정리 기준 팁 >
분류 | 포함할 속성 예시
layout | flex, grid, float, clear
position | position, z-index, top, bottom, etc.
display | display, visibility
typography | font, letter-spacing, line-height
color | color, background-color, blend-mode
effect | box-shadow, filter, backdrop-filter
animation | transition, animation, keyframes
unit | rem, em, %, vw, vh
custom | CSS 변수(--var) 등

---

폴더명 | 내용 요약
reset | 브라우저 기본 스타일 초기화
layout | 레이아웃 관련 핵심 속성 (flex, grid 등)
position | 위치 설정 및 z-index
display | display 속성 중심
typography | 글자 속성 (font, line-height, text-align 등)
color | 색상 및 혼합 관련
effect | 필터, 그림자, 블렌드 등 시각 효과 속성
animation | 전환/키프레임 애니메이션
unit | %, em, rem, vh, vw 등 단위 관련 정리
custom | 사용자 정의 변수 --var() 등
ui-effects 🆕 | 실험/효과 위주 구현 (배터리 충전, 텍스트 마스킹, 버튼, 마우스 등)
examples 🆕 | 실험적인 예제, input이나 overflow 등 구조보다 예제 중심인 경우
framework-examples🆕 | Bootstrap, Tailwind 등 외부 프레임워크 관련 예제 분리

- css-cheatsheet 레포지토리는 CSS 속성을 카테고리별로 정리
- 속성 위주의 구조를 유지하고, 실험적 예제나 시각 효과 위주의 코드는 `ui-effects/` 또는 `examples/`로 분리
- 외부 프레임워크 활용 예제는 `framework-examples/`에 정리
- 폴더명을 기능별로 통일하여 유지보수와 검색 편의성 확보
