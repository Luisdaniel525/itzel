function openLetter() {
    const flap = document.getElementById('flap');
    const letter = document.getElementById('letter');
    const music = document.getElementById('music');
    const instruction = document.querySelector('.open-instruction');

    flap.style.transform = 'rotateX(180deg)';
    instruction.style.opacity = '0';

    setTimeout(() => {
      letter.classList.add('open');
      music.play();
    }, 900);
  }