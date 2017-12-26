import { Component } from '@angular/core';
import { Hero } from './hero';

@Component ({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html'
})

export class HeroFormComponent {
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck OverStreet')

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
  newHero() {
    this.model = new Hero(42, '', '');
  }
  // 返回這個模型的 JSON 形式
  get diagnostic() {
    return JSON.stringify(this.model);
  }
}
