var data = [];
var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
alphabet.forEach(function (char) {
  data.push({
    lowerCase : char,
    upperCase : char.toUpperCase(),
    hex       : "0x" + char.charCodeAt(0).toString(16)
  });
});

console.table(data);