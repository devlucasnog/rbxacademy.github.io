document.addEventListener('DOMContentLoaded', () => {
  // Initialize state on page load
  document.querySelectorAll('.faq-item').forEach(item => {
    const answer = item.querySelector('.faq-answer');
    answer.style.maxHeight = item.classList.contains('open')
      ? answer.scrollHeight + 'px'
      : '0px';
  });

  // Toggle on click
  document.querySelectorAll('.faq-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const answer = item.querySelector('.faq-answer');
      const isOpen = item.classList.contains('open');

      answer.style.maxHeight = isOpen ? '0px' : answer.scrollHeight + 'px';
      item.classList.toggle('open');
    });
  });
});
