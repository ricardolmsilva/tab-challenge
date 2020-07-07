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

function createTabs(tab, index) {}
function createTabsContent(tab, index) {}
