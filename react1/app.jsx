const root = document.querySelector("#root"); 
console.log(root);
const rootElement = ReactDOM.createRoot(root);
const h2 = React.createElement("h2",{},"ABES ENGINEERING COLLEGE");
const li1=React.createElement("li", {}, "React");
const li2=React.createElement("li", {}, "Java");
const li3=React.createElement("li", {}, "Python");
const ul=React.createElement("ul", {}, li1,li2,li3);
const name=React.createElement("h3", {}, "Abhinav Anand");
const image=React.createElement("img", {
    src: "https://cdn.prod.website-files.com/64949e4863d96e26a1da8386/64f5f56c78d05cf501922f99_64a2ef9774661044d9755e98_URL%2520-%2520Glossary.png",
    height: "200px",
    width: "600px" 
});
const wrapper=React.createElement("div", {}, h2, ul, image);
rootElement.render(wrapper);
