import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-card.component.html',
  styleUrl: './gifs-card.component.css'
})
export class GifsCardComponent implements OnInit {

  @Input() public gifsCard: Gif[]= [];
  
 ngOnInit(): void {
  if(!this.gifsCard)throw new Error('Method not implemented.');
 }

}
