const socialsPic = [
    { src: "behance.png", id: 1, name: "behance" },
    { src: "gitlab.png", id: 4, name: "gitlab" },
    { src: "google-cloud.png", id: 5, name: "google-cloud" },
    { src: "figma.png", id: 3, name: "figma" },
    { src: "bitbucket.png", id: 2, name: "bitbucket" },
    { src: "google-drive.png", id: 6, name: "google-drive" },
    { src: "ln.png", id: 9, name: "ln" },
    { src: "pinterest.png", id: 10, name: "pinterest" },
    { src: "slack.png", id: 11, name: "slack" },
    { src: "google-maps.png", id: 7, name: "google-maps" },
    { src: "spotify.png", id: 12, name: "spotify" },
    { src: "trello.png", id: 13, name: "trello" },
    { src: "twitter.png", id: 14, name: "twitter" },
    { src: "google-photos.png", id: 8, name: "google-photos" },
]

const massages = [
    { id: 1, src: "images/avatar.webp", inTime: 10, name: "Ali shams", readed: true, textTitle: "نظر.", clock: "12:33", month: "Feb", day: 20, year: 2023, status: true },
    { id: 2, src: "images/avatar.webp", inTime: 24, name: "Mohammad Seif", readed: false, textTitle: "پسند.", clock: "12:19", month: "Feb", day: 20, year: 2023, status: true },
    { id: 3, src: "images/avatar.webp", inTime: 33, name: "Reza Saberi", readed: false, textTitle: "نظر.", clock: "12:00", month: "Feb", day: 20, year: 2023, status: false },
    { id: 4, src: "images/avatar.webp", inTime: 43, name: "Dina Karami", readed: false, textTitle: "پاسخ.", clock: "11:50", month: "Feb", day: 30, year: 2023, status: true },
    { id: 5, src: "images/avatar.webp", inTime: 55, name: "Raha Jalil", readed: true, textTitle: "نظر.", clock: "11:38", month: "Feb", day: 30, year: 2023, status: false }
]

const sidebarDatas = [

    {
        header: "",
        data: {
            icon: "bi bi-pie-chart-fill",
            title: "Home",
            arrow: true,
            contents: ["E-commerce", "مدیریت پروژه", "CRM",""],
            innerContents: []
        },
    },
    {
        header: "form",
        data: {
            icon: "I",
            title: "E commerce",
            arrow: false,
            contents: [],
            innerContents: [
                { icon: "i", title: "Home1", arrow: false, contents: ["x2", "y2", "z2"], innerContents: [{}, {}] },
                { icon: "i", title: "Home2", arrow: false, contents: ["x3", "y3", "z3"], innerContents: [{}, {}] },
                { icon: "i", title: "Home3", arrow: false, contents: ["x4", "y4", "z4"], innerContents: [{}, {}] },
                { icon: "i", title: "Home4", arrow: false, contents: ["x5", "y5", "z5"], innerContents: [{}, {}] },
                { icon: "i", title: "Home5", arrow: false, contents: ["x6", "y6", "z6"], innerContents: [{}, {}] },
            ]
        },
    },
    {
        header: "",
        data: {
            icon: "bi-alarm",
            title: "E commerce",
            arrow: false,
            contents: [],
            innerContents: [
                { icon: "i", title: "Home1", arrow: false, contents: ["x2", "y2", "z2"], innerContents: [{}, {}] },
                { icon: "i", title: "Home2", arrow: false, contents: ["x3", "y3", "z3"], innerContents: [{}, {}] },
                { icon: "i", title: "Home3", arrow: false, contents: ["x4", "y4", "z4"], innerContents: [{}, {}] },
                { icon: "i", title: "Home4", arrow: false, contents: ["x5", "y5", "z5"], innerContents: [{}, {}] },
                { icon: "i", title: "Home5", arrow: false, contents: ["x6", "y6", "z6"], innerContents: [{}, {}] },
            ]
        },
    },
    {
        header: "",
        data: {
            icon: "I",
            title: "پیام ها",
            arrow: false,
            contents: [],
            innerContents: []
        },
    },
    {
        header: "",
        data: {
            icon: "I",
            title: "E commerce",
            arrow: false,
            contents: [],
            innerContents: [
                { icon: "i", title: "Home1", arrow: false, contents: ["x2", "y2", "z2"], innerContents: [{}, {}] },
                { icon: "i", title: "Home2", arrow: false, contents: ["x3", "y3", "z3"], innerContents: [{}, {}] },
                { icon: "i", title: "Home3", arrow: false, contents: ["x4", "y4", "z4"], innerContents: [{}, {}] },
                { icon: "i", title: "Home4", arrow: false, contents: ["x5", "y5", "z5"], innerContents: [{}, {}] },
                { icon: "i", title: "Home5", arrow: false, contents: ["x6", "y6", "z6"], innerContents: [{}, {}] },
            ]
        },
    },
    {
        header: "",
        data: {
            icon: "I",
            title: "E commerce",
            arrow: false,
            contents: [],
            innerContents: [
                { icon: "i", title: "Home1", arrow: false, contents: ["x2", "y2", "z2"], innerContents: [{}, {}] },
                { icon: "i", title: "Home2", arrow: false, contents: ["x3", "y3", "z3"], innerContents: [{}, {}] },
                { icon: "i", title: "Home3", arrow: false, contents: ["x4", "y4", "z4"], innerContents: [{}, {}] },
                { icon: "i", title: "Home4", arrow: false, contents: ["x5", "y5", "z5"], innerContents: [{}, {}] },
                { icon: "i", title: "Home5", arrow: false, contents: ["x6", "y6", "z6"], innerContents: [{}, {}] },
            ]
        },
    },
    {
        header: "",
        data: {
            icon: "I",
            title: "E commerce",
            arrow: false,
            contents: [],
            innerContents: [
                { icon: "i", title: "Home1", arrow: false, contents: ["x2", "y2", "z2"], innerContents: [{}, {}] },
                { icon: "i", title: "Home2", arrow: false, contents: ["x3", "y3", "z3"], innerContents: [{}, {}] },
                { icon: "i", title: "Home3", arrow: false, contents: ["x4", "y4", "z4"], innerContents: [{}, {}] },
                { icon: "i", title: "Home4", arrow: false, contents: ["x5", "y5", "z5"], innerContents: [{}, {}] },
                { icon: "i", title: "Home5", arrow: false, contents: ["x6", "y6", "z6"], innerContents: [{}, {}] },
            ]
        },
    },
    
]
export { socialsPic, massages, sidebarDatas }