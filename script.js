function showParagraphCode() {
  var code = '<p>This is a sample paragraph.</p>';
  displayCode(code);
}

function showHeadingCode() {
  var code = '<h1>This is a heading</h1>';
  displayCode(code);
}

function showButtonCode() {
  var code = '<button>Click Me</button>';
  displayCode(code);
}

function showJavascriptCode() {
  var code = '<script>\n// Your JavaScript code goes here\n</script>';
  displayCode(code);
}

function displayCode(code) {
  document.getElementById('code-display').value = code;
}
