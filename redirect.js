(function () {
  var base = 'https://thomascasali.github.io/presentazione-memoteca';
  var p = location.pathname.replace(/^\/presentazione-kb-workflow/, '');
  location.replace(base + (p || '/') + location.search + location.hash);
})();
