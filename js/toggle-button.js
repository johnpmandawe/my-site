window.addEventListener('pageshow', function () {
  // ================== declaring constants ==========================
  const toggle_btn = document.querySelector('#toggle_button'),
    page = document.querySelector('#html');
  // =============== defining functions ========================
  const enableDark = () => {
    localStorage.setItem('darkmode', '1');
  };
  const disableDark = () => {
    localStorage.setItem('darkmode', '0');
  };
  // =================== event here ===========================
  toggle_btn.onclick = () => {
    let darkmode = localStorage.getItem('darkmode');
    page.classList.toggle('darkmode');
    if (darkmode === '0') {
      enableDark();
    } else {
      disableDark();
    }
  };
});
