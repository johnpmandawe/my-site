window.addEventListener('pageshow', function () {
  // ================ declaring arrays ==================
  const chat_app_array = [
    'chat_app.PNG',
    'signup.PNG',
    'chat_section.PNG',
    'conversation.PNG',
  ];
  const tdl_app_array = [
    'tdl_app.PNG',
    'create.PNG',
    'view.PNG',
    'check.PNG',
    'edit.PNG',
  ];
  const social_app_array = [
    'login.PNG',
    'signup.PNG',
    'home.PNG',
    'update_post.PNG',
    'posts.PNG',
    'friends.PNG',
    'profile.PNG',
    'notifs.PNG',
    'visits.PNG',
  ];
  // =============== indexes for the arrays =====================
  let chat_app_array_index = 0,
    tdl_app_array_index = 0,
    social_app_array_index = 0;
  // =================== declaring constants ====================
  const left_arrow = document.querySelectorAll('.fa-angle-left'),
    right_arrow = document.querySelectorAll('.fa-angle-right');
  // ======================== function to get the file name of a src attribute ====================
  const changeSource = (source, newFileName) => {
    let splitted = source.src.split('/');
    splitted[splitted.length - 1] = newFileName;
    return splitted.join('/');
  };
  // ========================== events here ==================================
  right_arrow.forEach((arrow) => {
    arrow.addEventListener('click', function () {
      const child = this.closest('.slider').children[0];
      if (child.classList.contains('chat_app_holder')) {
        chat_app_array_index === 3
          ? (chat_app_array_index = 0)
          : chat_app_array_index++;
        let source = changeSource(child, chat_app_array[chat_app_array_index]);
        child.src = source;
      } else if (child.classList.contains('tdl_app_holder')) {
        tdl_app_array_index === 4
          ? (tdl_app_array_index = 0)
          : tdl_app_array_index++;
        let source = changeSource(child, tdl_app_array[tdl_app_array_index]);
        child.src = source;
      } else if (child.classList.contains('social_app_holder')) {
        social_app_array_index === 8
          ? (social_app_array_index = 0)
          : social_app_array_index++;
        let source = changeSource(
          child,
          social_app_array[social_app_array_index]
        );
        child.src = source;
      }
    });
  });
  left_arrow.forEach((arrow) => {
    arrow.addEventListener('click', function () {
      const child = this.closest('.slider').children[0];
      if (child.classList.contains('chat_app_holder')) {
        chat_app_array_index === 0
          ? (chat_app_array_index = 3)
          : chat_app_array_index--;
        let source = changeSource(child, chat_app_array[chat_app_array_index]);
        child.src = source;
      } else if (child.classList.contains('tdl_app_holder')) {
        tdl_app_array_index === 0
          ? (tdl_app_array_index = 4)
          : tdl_app_array_index--;
        let source = changeSource(child, tdl_app_array[tdl_app_array_index]);
        child.src = source;
      } else if (child.classList.contains('social_app_holder')) {
        social_app_array_index === 0
          ? (social_app_array_index = 8)
          : social_app_array_index--;
        let source = changeSource(
          child,
          social_app_array[social_app_array_index]
        );
        child.src = source;
      }
    });
  });
});
