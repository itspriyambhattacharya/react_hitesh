const customRender = (root, reactElem) => {
  const newElem = document.createElement(reactElem.type);
  newElem.innerHTML = reactElem.children;
  newElem.setAttribute("href", reactElem.props.href);
  newElem.setAttribute("target", reactElem.props.target);
  root.appendChild(newElem);
  console.log(newElem);
};

const reactElem = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click Me to visit google.",
};

const root = document.querySelector("#id");
customRender(root, reactElem);
