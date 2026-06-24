const COFFEES = [
  { name: "복실 라떼", note: "포근한 우유 거품이 기분까지 감싸 줍니다." },
  { name: "허니 아몬드 브루", note: "달콤한 꿀 향이 오후를 부드럽게 만듭니다." },
  { name: "콜드브루", note: "깊고 시원한 한 잔, 여유로운 시간에." },
  { name: "카페 모카", note: "초콜릿과 커피의 조화, 작은 위로." },
  { name: "플랫 화이트", note: "진한 에스프resso와 실크 같은 우유." },
  { name: "바닐라 라떼", note: "은은한 바닐라 향, 오늘의 작은 달콤함." },
];

const btnToday = document.getElementById("btn-today-coffee");
const todayResult = document.getElementById("today-result");
const header = document.querySelector(".header");

function pickTodayCoffee() {
  const dayIndex = new Date().getDate() % COFFEES.length;
  return COFFEES[dayIndex];
}

function showTodayCoffee() {
  const coffee = pickTodayCoffee();
  todayResult.textContent = `오늘의 추천 — ${coffee.name}. ${coffee.note}`;
  todayResult.classList.remove("hidden");
  requestAnimationFrame(() => {
    todayResult.classList.add("visible");
  });
}

btnToday.addEventListener("click", showTodayCoffee);

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 60);
});

header.classList.toggle("scrolled", window.scrollY > 60);
