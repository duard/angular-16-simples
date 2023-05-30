import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Data,
  NavigationEnd,
  Router,
} from '@angular/router';

import {
  ExpandedLTR,
  ExpandedRTL,
  MultilevelNodes,
  SlideInOut,
} from 'ng-material-multilevel-menu';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'simples-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [SlideInOut, ExpandedLTR, ExpandedRTL],
})
export class SidenavComponent implements OnInit {
  @Output() sideNavClosed = new EventEmitter();
  @Output() menuReady = new EventEmitter();

  @Input() menuItens: any;

  subs: Array<Subscription> = [];

  constructor(private router: Router, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {}

  onMenuClick() {
    this.sideNavClosed.emit();
  }

  setExpandCollapseStatus(type: any) {
    // this.multilevelMenuService.setMenuExapandCollpaseStatus(type);
  }

  selectedItem(menu: any) {
    console.log('selectedItem', menu);
    // this.multilevelMenuService.selectMenuByID(menu.id);
  }

  selectedLabel(menu: any) {
    console.log('selectedLabel', menu);
    // this.multilevelMenuService.selectMenuByID(menu.id);
  }

  selectMenuID(MenuID: any) {
    // this.multilevelMenuService.selectMenuByID(MenuID);
    console.log('selectedLabel', MenuID);
  }

  menuIsReady(menus: MultilevelNodes[]) {
    // this.menuWithID = menus;
  }

  onAbout() {
    this.router.navigateByUrl('/about');
    this.sideNavClosed.emit(); // Emit event to parent component so it can tell sidenav to close
  }

  ngOnDestroy(): void {
    console.log('dESTRUIÇÃO SideNav');
    this.subs.forEach((s) => s.unsubscribe());
  }
}
