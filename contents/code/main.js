var browsers = {
  chromium: "Picture in picture",
  firefox: "Picture-in-Picture",
};

function alignWindow(window) {
  if (
    !window.normalWindow ||
    !Object.keys(browsers).includes(window.resourceName) ||
    window.caption !== browsers[window.resourceName]
  )
    return;

  var area = workspace.clientArea(KWin.MaximizeArea, window);
  var pipHeightRatio = 0.35;
  var height = workspace.workspaceHeight * pipHeightRatio;
  var width = (window.width * height) / window.height;
  var x = area.width - width;
  var y = area.height - height;

  window.frameGeometry = { x, y, width, height };
  window.skipTaskbar = true;
  window.keepAbove = true;
}

workspace.windowAdded.connect(alignWindow);
