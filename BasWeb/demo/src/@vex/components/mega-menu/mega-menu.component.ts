import { Component, OnInit } from '@angular/core';
import icLayers from '@iconify/icons-ic/twotone-layers';
import icAssigment from '@iconify/icons-ic/twotone-assignment';
import { Icon } from '@visurel/iconify-angular';
import icContactSupport from '@iconify/icons-ic/twotone-contact-support';
import icContacts from '@iconify/icons-ic/twotone-contacts';
import icAssessment from '@iconify/icons-ic/twotone-assessment';
import icBook from '@iconify/icons-ic/twotone-book';
import { PopoverRef } from '../popover/popover-ref';
import icPersonOutline from '@iconify/icons-ic/twotone-people-outline';
import icStyle from '@iconify/icons-ic/style';
import icScore from '@iconify/icons-ic/baseline-score';
import icHoliday from '@iconify/icons-ic/home';
import icSettings from '@iconify/icons-ic/twotone-settings';
import icFavorite from '@iconify/icons-ic/favorite';
import icFavoriteBorder from '@iconify/icons-ic/favorite-border';
import icDescription from '@iconify/icons-ic/description';
import icReport from '@iconify/icons-ic/outline-table-chart';
import icSystem from '@iconify/icons-ic/personal-video';
import { LanguageMap } from '../../../app/pages/interfaces/language.interface';
import AppUtil from '../../../app/pages/interfaces/util';
import { StyleService } from './../../services/style.service';
import { LoginService } from '../../../app/pages/services/login.service';
import { AuthorizationService } from '../../../app/pages/services/authorization.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationDropdown, NavigationItem, NavigationLink, NavigationSubheading } from '../../../@vex/interfaces/navigation-item.interface';

export interface MegaMenuFeature {
  icon: Icon;
  label: string;
  route: string;
}

export interface MegaMenuPage {
  label: string;
  route: string;
}

@Component({
  selector: 'vex-mega-menu',
  templateUrl: './mega-menu.component.html'
})
export class MegaMenuComponent implements OnInit {

  language: any = []; languageMap: LanguageMap = {};
  features: MegaMenuFeature[] = [
    {
      icon: icLayers,
      label: 'Dashboard',
      route: '/'
    },
    {
      icon: icAssigment,
      label: 'AIO-Table',
      route: '/apps/aio-table'
    },
    {
      icon: icContactSupport,
      label: 'Help Center',
      route: '/apps/help-center'
    },
    {
      icon: icContacts,
      label: 'Contacts',
      route: '/apps/contacts/grid'
    },
    {
      icon: icAssessment,
      label: 'Scrumboard',
      route: '/apps/scrumboard/1'
    },
    {
      icon: icBook,
      label: 'Documentation',
      route: '/documentation'
    }
  ];

  pages: MegaMenuPage[] = [
    {
      label: 'All-In-One Table',
      route: '/apps/aio-table'
    },
    {
      label: 'Authentication',
      route: '/login'
    },
    {
      label: 'Components',
      route: '/ui/components/overview'
    },
    {
      label: 'Documentation',
      route: '/documentation'
    },
    {
      label: 'FAQ',
      route: '/pages/faq'
    },
    {
      label: 'Form Elements',
      route: '/ui/forms/form-elements'
    },
    {
      label: 'Form Wizard',
      route: '/ui/forms/form-wizard'
    },
    {
      label: 'Guides',
      route: '/pages/guides'
    },
    {
      label: 'Help Center',
      route: '/apps/help-center'
    },
    {
      label: 'Scrumboard',
      route: '/apps/scrumboard'
    }
  ];
  lng = 'tr-TR';

  icPersonOutline = icPersonOutline;
  iicStyle = icStyle;
  icScore = icScore;
  icHoliday = icHoliday;
  icSettings = icSettings;
  icFavorite = icFavorite;
  icFavoriteBorder = icFavoriteBorder;
  icContactSupport = icContactSupport;
  icDescription = icDescription;
  icReport = icReport;
  icSystem = icSystem;
  isMobileLayout=false;
  constructor(private popoverRef: PopoverRef<MegaMenuComponent>,
    public loginService: LoginService,
    private styleService: StyleService,
    private route: ActivatedRoute,
    public authorizationService: AuthorizationService) { }

  ngOnInit() {

    window.onresize = () => { this.isMobileLayout = window.innerWidth <= 991; }
    this.isMobileLayout = window.innerWidth <= 991;

    this.route.paramMap.subscribe(params => {

      this.features = [];
      this.pages = [];
      this.languageMap = AppUtil.getLabels();
      this.loginGetMenu();

      console.log(this.styleService.style$);
    })
  }

  
  loginGetMenu() {
    this.loginService.LoginGetMenu(localStorage.getItem('Lng')).subscribe(menuItems => {
      // this.navigationService.items=<NavigationItem[]>(menuItems);

      console.log(<NavigationItem[]>(menuItems));

      Object.keys(menuItems).forEach((key) => {
        // if (menuItems[key].favorite) {
        if (menuItems[key].children.length > 0 && menuItems[key].type == "dropdown") {
          if (menuItems[key].favorite) {
            if (menuItems[key].icon == "icContactSupport")
              menuItems[key].icon = icContactSupport;
            else if (menuItems[key].icon == "icPersonOutline")
              menuItems[key].icon = icPersonOutline;
            else if (menuItems[key].icon == "icStyle")
              menuItems[key].icon = icStyle;
            else if (menuItems[key].icon == "icScore")
              menuItems[key].icon = icScore;
            else if (menuItems[key].icon == "icHoliday")
              menuItems[key].icon = icHoliday;
            else if (menuItems[key].icon == "icSettings")
              menuItems[key].icon = icSettings;
            else if (menuItems[key].icon == "icDescription")
              menuItems[key].icon = icDescription;
            else if (menuItems[key].icon == "icReport")
              menuItems[key].icon = icReport;
            else if (menuItems[key].icon == "icSystem")
              menuItems[key].icon = icSystem;

            this.features.push({

              icon: menuItems[key].icon,
              label: menuItems[key].label,
              route: menuItems[key].children[0].route
            });

          }

          Object.keys(menuItems[key].children).forEach((key2) => {

            if (menuItems[key].children[key2].children.length > 0 && menuItems[key].children[key2].type == "dropdown") {

              if (menuItems[key].children[key2].favorite) {

                if (menuItems[key].children[key2].icon == "icContactSupport")
                  menuItems[key].children[key2].icon = icContactSupport;
                else if (menuItems[key].children[key2].icon == "icPersonOutline")
                  menuItems[key].children[key2].icon = icPersonOutline;
                else if (menuItems[key].children[key2].icon == "icStyle")
                  menuItems[key].children[key2].icon = icStyle;
                else if (menuItems[key].children[key2].icon == "icScore")
                  menuItems[key].children[key2].icon = icScore;
                else if (menuItems[key].children[key2].icon == "icHoliday")
                  menuItems[key].children[key2].icon = icHoliday;
                else if (menuItems[key].children[key2].icon == "icSettings")
                  menuItems[key].children[key2].icon = icSettings;
                else if (menuItems[key].children[key2].icon == "icDescription")
                  menuItems[key].children[key2].icon = icDescription;
                else if (menuItems[key].children[key2].icon == "icReport")
                  menuItems[key].children[key2].icon = icReport;
                else if (menuItems[key].children[key2].icon == "icSystem")
                  menuItems[key].children[key2].icon = icSystem;

                this.features.push({

                  icon: menuItems[key].children[key2].icon,
                  label: menuItems[key].children[key2].label,
                  route: menuItems[key].children[key2].children[0].route
                });
              }

              Object.keys(menuItems[key].children[key2].children).forEach((key3) => {
                if (menuItems[key].children[key2].children[key3].favorite) {

                  this.pages.push({
                    label: menuItems[key].children[key2].children[key3].label,
                    route: menuItems[key].children[key2].children[key3].route
                  });

                }
              });

            }
            else {
 
              if (menuItems[key].children[key2].favorite)
              this.pages.push({
                label: menuItems[key].children[key2].label,
                route: menuItems[key].children[key2].route
              });
            }


          });

        }
        else {
          if (menuItems[key].favorite)
          this.pages.push({
            label: menuItems[key].label,
            route: menuItems[key].route
          }
          );
        }
        // }
      });

    })

  }

  close() {
    this.popoverRef.close();
  }
}
