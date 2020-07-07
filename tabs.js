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

function createTabsContent(tab, index) {}
