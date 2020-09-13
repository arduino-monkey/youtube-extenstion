(function () {
  var mutationObserver = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (
        window.location.pathname == "/" ||
        window.location.pathname == "/feed/trending" ||
        window.location.pathname == "/feed/subscriptions"
      ) {
        if (mutation.target.tagName == "YTD-BROWSE") {
          mutation.target.remove();
        }
      }

      if (window.location.pathname == "/watch") {
        if (mutation.target.id == "secondary-inner") {
          mutation.target.remove();
        }
      }
    });
  });

  mutationObserver.observe(document.getElementById("page-manager"), {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true,
  });

  if (window.location.pathname == "/watch") {
    console.log("On watch video Page");
    console.log(document.getElementById("secondary-inner"));
    document.getElementById("secondary-inner").remove();
  }
  if (
    window.location.pathname == "/" ||
    window.location.pathname == "/feed/trending" ||
    window.location.pathname == "/feed/subscriptions"
  ) {
    console.log("on home page");
    var element = document.getElementById("page-manager");
    for (const child of element.children) {
      if (child.tagName == "YTD-BROWSE") child.remove();
    }
  }
})();
