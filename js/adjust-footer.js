window.addEventListener('pageshow', function () {
  const footer = document.querySelector('#footer'),
    page = document.querySelector('#html');
  footer.classList.toggle('fixed', page.clientHeight === page.scrollHeight);
  setInterval(() => {
    footer.classList.toggle('fixed', page.clientHeight === page.scrollHeight);
  }, 500);
});
