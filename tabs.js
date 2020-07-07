window.onload = function loadData() {
  fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.forEach((tab, index) => {
        createTabs(tab, index);
        createTabsContent(tab, index);
      });
    });
};

function createTabs(tab, index) {
  const button = document.createElement("button");

  button.innerText = tab.title;
  button.addEventListener("click", handleTabClick);

  // Attribute to verify what is the content that is related to that tab
  button.setAttribute("tab_num", tab.id);

  index == 0
    ? button.classList.add("tab", "active")
    : button.classList.add("tab");

  let tabs = document.querySelector("#tabs");
  tabs.append(button);
}

function createTabsContent(tab, index) {
  const div = document.createElement("div");

  // Attribute to verify what is the tab that is related to that content
  div.setAttribute("tab_num", tab.id);

  index == 0
    ? div.classList.add("tab-content", "active")
    : div.classList.add("tab-content");

  // Content Title
  const h1 = document.createElement("h1");
  h1.classList.add("content", "content-title");
  h1.innerText = tab.content.title;
  div.append(h1);

  // Content Paragraphs
  tab.content.pagragraphs.forEach((p) => {
    const paragraph = document.createElement("p");
    paragraph.classList.add("content", "content-paragraph");
    paragraph.innerText = p;
    div.append(paragraph);
  });

  let tabsContent = document.querySelector("#tabs-content");
  tabsContent.append(div);
}

function handleTabClick(e) {}
