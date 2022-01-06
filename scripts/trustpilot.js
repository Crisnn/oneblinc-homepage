const desktopTrustpilotUI = document.querySelector('#desktop-trustpilot');
const mobileTabletTrustpilotUI = document.querySelector(
  '#mobile-tablet-trustpilot'
);

const initialWidth = document.body.clientWidth;

function isTabletOrMobile(width) {
  return width < 1025;
}

function handleShowTrustpilotWidget(width) {
  if (isTabletOrMobile(width)) {
    desktopTrustpilotUI.classList.add('none');
    mobileTabletTrustpilotUI.classList.remove('none');
  } else {
    desktopTrustpilotUI.classList.remove('none');
    mobileTabletTrustpilotUI.classList.add('none');
  }
}

handleShowTrustpilotWidget(initialWidth);

window.addEventListener('resize', e => {
  const width = document.body.clientWidth;
  handleShowTrustpilotWidget(width);
});
