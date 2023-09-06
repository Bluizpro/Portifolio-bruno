import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  hoveredOption: any = null;
  isListOpen: boolean = false;
  mouseleaveTimer: any = null;
  leftPosition: string = '0px';



 

  tabs = [
    { label: 'Inicio', link: '/dashboard' },
    { label: 'Contatos', link: '/contatos', },
    { label: 'Portifolio', link: '/portifolio', },
    { label: 'Sobre', link: '/sobre', },
  ];

  setLeftPosition(event: MouseEvent) {
    const offsetLeft = (event.target as HTMLElement).offsetLeft;
    this.leftPosition = `${offsetLeft}px`;
  }

  onMouseLeave() {
    clearTimeout(this.mouseleaveTimer);
    this.mouseleaveTimer = setTimeout(() => {
      this.isListOpen = false;
  
    }, 100);
  }

  onMouseEnter(){
    clearTimeout(this.mouseleaveTimer);
    this.isListOpen = true;
  }



  openMenu(){
    this.isListOpen = true;
  }

  ngOnInit() {
  }
}
