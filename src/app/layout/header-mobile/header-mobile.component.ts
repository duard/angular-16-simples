import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'simples-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss'],
})
export class HeaderMobileComponent implements OnInit {
  showBackArrow = true;

  @Output() sideNavClosed = new EventEmitter();
  @Input() windowTitle = 'Normal Window';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onLeftSideNavBackClick() {
    this.sideNavClosed.emit();
  }

  onMenuClick() {
    console.log('Clicou no menu da janela', this.windowTitle);
  }

  onChangeProfileImage() {}

  themeChangeHandler(themeToSet: any) {}

  open(menu: any) {
    menu.openMenu();
  }
}
