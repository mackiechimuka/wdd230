function toggleMenu() {
    document.getElementById("gridviewBtn").classList.toggle("open");
    document.getElementById("listsviewBtn").classList.toggle("open");
    document.getElementById("defgridview").classList.toggle("open");
  }
  
  const xo = document.getElementById("gridviewBtn");
  xo.onclick = toggleMenu;
  
  const ox = document.getElementById("listsviewBtn");
  ox.onclick = toggleMenu;
  
  var viewtype = "a";
  var ww = window.innerWidth;
  
  if (ww >= 592 && ww <= 991) {
    toggleMenu();
    viewtype = "b";
  }
  
  function checkWidth() {
    ww = window.innerWidth;
    if (ww >= 592 && ww <= 991) {
      if (viewtype != "b") {
        toggleMenu();
        viewtype = "b";
      }
    } else {
      if (viewtype == "n") {
        toggleMenu();
        viewtype = "a";
      }
    }
  }