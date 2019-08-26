import Slide from './slide.js';

export default class Slidenav extends Slide {
  addArrow(prev, next){
    this.prevElement = document.querySelector(prev);
    this.nextElement = document.querySelector(next);

    this.addArrowEvent();
  }

  addArrowEvent(){
    this.prevElement.addEventListener('click', this.activePrevSlide);
    this.nextElement.addEventListener('click', this.activeNextSlide);
  }
}