function initCarousel() {
  const $divInner = document.querySelector('.carousel__inner')
  const $buttonRight = document.querySelector('.carousel__arrow_right')
  const $buttonLeft = document.querySelector('.carousel__arrow_left')


  $buttonRight.addEventListener('click', slideRight)
  $buttonLeft.addEventListener('click', slideLeft)

  $buttonLeft.style.display = 'none' //hide left button

  let count = 0
  const step = $divInner.offsetWidth
  let currentSlideNumber = 0

  function slideLeft() {
    $buttonRight.style.display = 'flex' //show right button
    console.log('click-left');
    count -= step
    currentSlideNumber--
    
    // debugger

    for (; count >= 0;) {
      if (count == 0) {
        $buttonLeft.style.display = 'none' //hide left button
      }
      return $divInner.style.transform = `translateX(-${count}px)`
    }
  }


  function slideRight() {
    console.log('click-right');

    count += step
    currentSlideNumber++

    $buttonLeft.style.display = '' //show left button

    // debugger    

    for (; count < step * 4;) {
      if (currentSlideNumber === 3) {
       $buttonRight.style.display = 'none' //hide right button
  
      }
      
      return $divInner.style.transform = `translateX(-${count}px)`      
    }
   
  }
}
