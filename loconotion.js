const showToggle = (content, arrow) => {
  arrow.style.transform = "rotateZ(180deg)";
  content.style.display = "block";
};

const hideToggle = (content, arrow) => {
  arrow.style.transform = "rotateZ(90deg)";
  content.style.display = "none";
};

const toggleButtons = document.getElementsByClassName("loconotion-toggle-button");
for (let i = 0; i < toggleButtons.length; i++) {
  const toggleButton = toggleButtons.item(i);
  const toggleId = toggleButton.getAttribute("loconotion-toggle-id");
  const toggleContent = document.querySelector(`.loconotion-toggle-content[loconotion-toggle-id='${toggleId}']`);
  const toggleArrow = toggleButton.querySelector("svg");
  if (toggleButton && toggleContent) {
    hideToggle(toggleContent, toggleArrow);
    toggleButton.addEventListener("click", () => {
      if (toggleContent.style.display == "none") {
        showToggle(toggleContent, toggleArrow);
      } else {
        hideToggle(toggleContent, toggleArrow);
      }
    });
  }
}

const pendingIframes = document.getElementsByClassName("loconotion-iframe-target");
for (let i = 0; i < pendingIframes.length; i++) {
  const pendingIframe = pendingIframes.item(i);
  const iframeSrc = pendingIframe.getAttribute("loconotion-iframe-src");
  const iframe = document.createElement("iframe");

  pendingIframe.style.opacity = 0;
  iframe.onload = () => {
    pendingIframe.style.opacity = 1;
  };

  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.position = "absolute";
  iframe.style.left = 0;
  iframe.style.top = 0;
  iframe.style.pointerEvents = "auto";

  iframe.setAttribute("src", iframeSrc);
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute(
    "sandbox",
    "allow-scripts allow-popups allow-top-navigation-by-user-activation allow-forms allow-same-origin"
  );

  pendingIframe.appendChild(iframe);
}

const collectionSearchBoxes = document.getElementsByClassName("collectionSearch");
for (let i = 0; i < collectionSearchBoxes.length; i++) {
  const collectionSearchBox = collectionSearchBoxes.item(i).parentElement();
  collectionSearchBox.style.display = "none";
}
