import { Component, computed, signal } from '@angular/core';
import { navigation, navigation3 } from './menu';
import { Router, ActivatedRoute } from '@angular/router';
import { MultilevelMenuService } from 'ng-material-multilevel-menu';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Angular';
  count = signal(0);
  doubleCount = computed(() => this.count() * 2);
  options: FormGroup;

  appitems = navigation;
  navItems = navigation3;

  leftSideBarOpened = true;
  menuItens = [
    {
      label: 'NPM',
      imageIcon: '/assets/batman.jpg',
      link: 'https://www.npmjs.com/package/ng-material-multilevel-menu',
      externalRedirect: true,
      hrefTargetType: '_blank', // _blank|_self|_parent|_top|framename
    },
    {
      label: 'Item 1 (with Font awesome icon)',
      faIcon: 'fab fa-500px',
      items: [
        {
          label: 'Item 1.1',
          link: '/item-1-1',
          faIcon: 'fab fa-accusoft',
        },
        {
          label: 'Item 1.2',
          faIcon: 'fab fa-accessible-icon',
          disabled: true,
          items: [
            {
              label: 'Item 1.2.1',
              link: '/item-1-2-1',
              faIcon: 'fa-allergies', // Font awesome default prefix is fas
            },
            {
              label: 'Item 1.2.2',
              faIcon: 'fas fa-ambulance',
              items: [
                {
                  label: 'Item 1.2.2.1',
                  faIcon: 'fas fa-anchor', // Still you can specify if you want to
                  onSelected: function () {
                    console.log('Item 1.2.2.1');
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      label: 'Item 2',
      icon: 'alarm',
      items: [
        {
          label: 'Item 2.1',
          link: '/item-2-1',
          icon: 'favorite_border',
          activeIcon: 'favorite',
          disabled: true,
        },
        {
          label: 'Item 2.2',
          link: '/item-2-2',
          icon: 'favorite_border',
          activeIcon: 'favorite',
          navigationExtras: {
            queryParams: { order: 'popular', filter: 'new' },
          },
        },
      ],
    },
    {
      label: 'Item 3',
      icon: 'offline_pin',
      onSelected: function () {
        console.log('Item 3');
      },
    },
    {
      label: 'Item 4',
      link: '/item-4',
      icon: 'star_rate',
      hidden: true,
    },
  ];
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.options = fb.group({
      bottom: 0,
      fixed: true,
      top: 0,
    });
  }

  ngOnInit() {
    setTimeout(() => {
      this.count.set(1);
      console.log(`SETED`, this.count);
    }, 3000);
  }
  onChangeLeftSideNav() {
    console.log('onChangeLeftSideNav ');
  }
}
