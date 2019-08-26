import Slide from './slide.js';

export default class Slidenav extends Slide {
  constructor(slide, wrapper){
    super(slide, wrapper);

    this.bindControlEvent();
  }
  addArrow(prev, next){
    this.prevElement = document.querySelector(prev);
    this.nextElement = document.querySelector(next);

    this.addArrowEvent();
  }

  addArrowEvent(){
    this.prevElement.addEventListener('click', this.activePrevSlide);
    this.nextElement.addEventListener('click', this.activeNextSlide);
  }

  createControl(){
    const control = document.createElement('ul');
    control.dataset.control = 'slide';
    
    this.slideArray.forEach((item, index)=> {
      control.innerHTML += `<li><a href="#slide${index + 1}">${index + 1}</a></li>`
    });
    this.wrapper.appendChild(control);

    return control;
  }

  eventControl(item, index){
    item.addEventListener('click', (event) => {
      event.preventDefault();
      this.changeSlide(index);
    });
    this.wrapper.addEventListener('changeEvent', this.activeControlItem);
  }

  activeControlItem(){
    this.controlArray.forEach((item) => item.classList.remove(this.activeClass));
    this.controlArray[this.index.active].classList.add(this.activeClass)
  }

  addControl(customControl){
    this.control = document.querySelector(customControl) || this.createControl();
    
    this.controlArray = [...this.control.children]
    this.controlArray.forEach(this.eventControl);
    this.activeControlItem();
  }

  bindControlEvent(){
    this.eventControl = this.eventControl.bind(this);
    this.activeControlItem = this.activeControlItem.bind(this);
  }
}
