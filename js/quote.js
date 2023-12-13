const quotes =[
    {
        quote : "내일을 실현하는 데 있어 우리의 유일한 한계는 오늘의 의심이다.",
        author : "Franklin Roosevelt",
        link : "https://namu.wiki/w/%ED%94%84%EB%9E%AD%ED%81%B4%EB%A6%B0%20D.%20%EB%A3%A8%EC%8A%A4%EB%B2%A8%ED%8A%B8",
    },
    {
        quote : "성공은 최종적인 것이 아니며, 실패는 치명적인 것이 아니다: 중요한 것은 계속 나아가려는 용기이다.",
        author : "Winston Churchill",
        link : "https://namu.wiki/w/%EC%9C%88%EC%8A%A4%ED%84%B4%20%EC%B2%98%EC%B9%A0",
    },
    {
        quote : "어려움의 한가운데에는 항상 기회가 있다.",
        author : "Albert Einstein",
        link : "https://namu.wiki/w/%EC%95%8C%EB%B2%A0%EB%A5%B4%ED%8A%B8%20%EC%95%84%EC%9D%B8%EC%8A%88%ED%83%80%EC%9D%B8?from=%EC%95%8C%EB%B2%84%ED%8A%B8%20%EC%95%84%EC%9D%B8%EC%8A%88%ED%83%80%EC%9D%B8",

    },
    {
        quote : "당신이 세상에서 보고 싶은 변화가 되어라.",
        author : "Mahatma Gandhi",
        link : "https://namu.wiki/w/%EB%AA%A8%ED%95%9C%EB%8B%A4%EC%8A%A4%20%EC%B9%B4%EB%9E%8C%EC%B0%AC%EB%93%9C%20%EA%B0%84%EB%94%94?from=%EB%A7%88%ED%95%98%ED%8A%B8%EB%A7%88%20%EA%B0%84%EB%94%94",

    },
    {
        quote : "진정한 삶의 의미는 변화에 있다. 완벽해지려는 우리의 끊임없는 노력 속에서 의미가 찾아진다.",
        author : "Leo Tolstoy",
        link : "https://namu.wiki/w/%EB%A0%88%ED%94%84%20%ED%86%A8%EC%8A%A4%ED%86%A0%EC%9D%B4?from=%EB%A0%88%EC%98%A4%20%ED%86%A8%EC%8A%A4%ED%86%A0%EC%9D%B4",
    },
    {
        quote : "강한 종이 생존하는 것이 아니며, 가장 지능적인 종도 아니다. 변화에 가장 잘 적응하는 종이 생존한다.",
        author : "Charles Darwin",
        link : "https://namu.wiki/w/%EC%B0%B0%EC%8A%A4%20%EB%8B%A4%EC%9C%88",
    },
    {
        quote : "진정한 지식은 자기 자신을 아는 데서 시작한다.",
        author : "공자",
        link : "https://namu.wiki/w/%EA%B3%B5%EC%9E%90",
    },
    {
        quote : "지난 20년간 내가 후회하는 것들 중에는, 내가 한 일보다 내가 하지 않은 일이 더 많다.",
        author : "Mark Twain",
        link : "https://namu.wiki/w/%EB%A7%88%ED%81%AC%20%ED%8A%B8%EC%9B%A8%EC%9D%B8",
    },
    {
        quote : "목표를 향해 나아가라. 꿈을 실현하는 것은 인생을 향한 전진이다.",
        author : "Henry David Thoreau",
        link : "https://namu.wiki/w/%ED%97%A8%EB%A6%AC%20%EB%8D%B0%EC%9D%B4%EB%B9%84%EB%93%9C%20%EC%86%8C%EB%A1%9C",
    },
    {
        quote : "나의 실패들을 기반으로 나는 성공했다. 내가 계속 시도하고, 계속 실패하는 것은 내가 계속 전진하고 있다는 증거이다.",
        author : "Michael Jordan",
        link : "https://namu.wiki/w/%EB%A7%88%EC%9D%B4%ED%81%B4%20%EC%A1%B0%EB%8D%98",
    },
    {
        quote : "작은 변화가 모여 위대한 변혁을 이룬다.",
        author : "Robert F. Kennedy",
        link : "https://namu.wiki/w/%EB%A1%9C%EB%B2%84%ED%8A%B8%20F.%20%EC%BC%80%EB%84%A4%EB%94%94?from=%EB%A1%9C%EB%B2%84%ED%8A%B8%20%EC%BC%80%EB%84%A4%EB%94%94",
    },
    {
        quote : "진보는 자신의 과거에 대한 배반에서 비롯된다.",
        author : "Khalil Gibran",
        link : "https://namu.wiki/w/%EC%B9%BC%EB%A6%B4%20%EC%A7%80%EB%B8%8C%EB%9E%80",
    }
]

const quote = document.querySelector("#quotes span:first-child");
const authorLink = document.querySelector("#quoteAuthor");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
authorLink.innerText = "-" + todayQuote.author;
authorLink.href = todayQuote.link; // 동적으로 링크 설정