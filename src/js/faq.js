document.querySelectorAll('.faq-list-item').forEach(item => {
  item.addEventListener('click', () => {
    const answer = item.querySelector('.faq-answer');
    const button = item.querySelector('.toggle-button');

    answer.classList.toggle('show');
    button.classList.toggle('rotated');

    document.querySelectorAll('.faq-answer.show').forEach(openAnswer => {
      if (openAnswer !== answer) {
        openAnswer.classList.remove('show');
        openAnswer
          .closest('.faq-list-item')
          .querySelector('.toggle-button')
          .classList.remove('rotated');
      }
    });
  });
});
