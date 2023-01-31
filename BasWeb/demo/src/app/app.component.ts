// import { Component, Inject, LOCALE_ID, Renderer2 } from '@angular/core';
import { Component, Inject, LOCALE_ID,OnInit, ViewChild, ElementRef, Renderer2, Input, Output, EventEmitter, HostListener, OnDestroy  } from '@angular/core';
import { ConfigService } from '../@vex/services/config.service';
import { Settings } from 'luxon';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { NavigationService } from '../@vex/services/navigation.service';
import icLayers from '@iconify/icons-ic/twotone-layers';
import icAssigment from '@iconify/icons-ic/twotone-assignment';
import icContactSupport from '@iconify/icons-ic/twotone-contact-support';
import icDateRange from '@iconify/icons-ic/twotone-date-range';
import icChat from '@iconify/icons-ic/twotone-chat';
import icContacts from '@iconify/icons-ic/twotone-contacts';
import icAssessment from '@iconify/icons-ic/twotone-assessment';
import icLock from '@iconify/icons-ic/twotone-lock';
import icWatchLater from '@iconify/icons-ic/twotone-watch-later';
import icError from '@iconify/icons-ic/twotone-error';
import icAttachMoney from '@iconify/icons-ic/twotone-attach-money';
import icPersonOutline from '@iconify/icons-ic/twotone-person-outline';
import icReceipt from '@iconify/icons-ic/twotone-receipt';
import icHelp from '@iconify/icons-ic/twotone-help';
import icBook from '@iconify/icons-ic/twotone-book';
import icBubbleChart from '@iconify/icons-ic/twotone-bubble-chart';
import icFormatColorText from '@iconify/icons-ic/twotone-format-color-text';
import icStar from '@iconify/icons-ic/twotone-star';
import icViewCompact from '@iconify/icons-ic/twotone-view-compact';
import icPictureInPicture from '@iconify/icons-ic/twotone-picture-in-picture';
import icSettings from '@iconify/icons-ic/twotone-settings';
import { LayoutService } from '../@vex/services/layout.service';
import icUpdate from '@iconify/icons-ic/twotone-update';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { SplashScreenService } from '../@vex/services/splash-screen.service';
import { Style, StyleService } from '../@vex/services/style.service';
import icChromeReaderMode from '@iconify/icons-ic/twotone-chrome-reader-mode';
import { ConfigName } from '../@vex/interfaces/config-name.model';
import icMail from '@iconify/icons-ic/twotone-mail';
import { AuthorizationService } from './pages/services/authorization.service';
import { LoginService } from './pages/services/login.service';
import { NavigationDropdown, NavigationItem, NavigationLink, NavigationSubheading } from '../@vex/interfaces/navigation-item.interface';
import icStyle from '@iconify/icons-ic/style';
import icScore from '@iconify/icons-ic/baseline-score';
import icHoliday from '@iconify/icons-ic/home';
import icDescription from '@iconify/icons-ic/description';
import icReport from '@iconify/icons-ic/outline-table-chart';
import icSystem from '@iconify/icons-ic/personal-video';

import icFavorite from '@iconify/icons-ic/favorite';
import icFavoriteBorder from '@iconify/icons-ic/favorite-border';

@Component({
  selector: 'vex-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnDestroy  {
  title = 'vex';
  menuList: NavigationItem[];
  constructor(private configService: ConfigService,
    private styleService: StyleService,
    private renderer: Renderer2,
    private platform: Platform,
    @Inject(DOCUMENT) private document: Document,
    @Inject(LOCALE_ID) private localeId: string,
    
    private layoutService: LayoutService,
    private route: ActivatedRoute,
    private navigationService: NavigationService,
    private splashScreenService: SplashScreenService,
    public authorizationService: AuthorizationService,
    public loginService: LoginService
  ) 
  
  
  
  {
    Settings.defaultLocale = this.localeId;

    if (this.platform.BLINK) {
      this.renderer.addClass(this.document.body, 'is-blink');
    }


    // @HostListener('window:beforeunload')
    // async ngOnDestroy()
    // {
    //   await this.myService.AddItem().subscribe();
    // }
    /**
     * Customize the template to your needs with the ConfigService
     * Example:
     *  this.configService.updateConfig({
     *    sidenav: {
     *      title: 'Custom App',
     *      imageUrl: '//placehold.it/100x100',
     *      showCollapsePin: false
     *    },
     *    footer: {
     *      visible: false
     *    }
     *  });
     */

    /**
     * Config Related Subscriptions
     * You can remove this if you don't need the functionality of being able to enable specific configs with queryParams
     * Example: example.com/?layout=apollo&style=default
     */
    this.route.queryParamMap.pipe(
      filter(queryParamMap => queryParamMap.has('rtl')),
      map(queryParamMap => coerceBooleanProperty(queryParamMap.get('rtl'))),
    ).subscribe(isRtl => {
      this.configService.updateConfig({
        rtl: isRtl
      });
    });

    this.route.queryParamMap.pipe(
      filter(queryParamMap => queryParamMap.has('layout'))
    ).subscribe(queryParamMap => this.configService.setConfig(queryParamMap.get('layout') as ConfigName));

    this.route.queryParamMap.pipe(
      filter(queryParamMap => queryParamMap.has('style'))
    ).subscribe(queryParamMap => this.styleService.setStyle(queryParamMap.get('style') as Style));


    let menuArray: any[] = <NavigationItem[]>(JSON.parse(sessionStorage.getItem('Menus')));
    if (menuArray !== null) {
      Object.keys(menuArray).forEach((key) => {
        if (menuArray[key].icon == "icContactSupport")
          menuArray[key].icon = icContactSupport;
        else if (menuArray[key].icon == "icPersonOutline")
          menuArray[key].icon = icPersonOutline;
        else if (menuArray[key].icon == "icStyle")
          menuArray[key].icon = icStyle;
        else if (menuArray[key].icon == "icScore")
          menuArray[key].icon = icScore;
        else if (menuArray[key].icon == "icHoliday")
          menuArray[key].icon = icHoliday;
        else if (menuArray[key].icon == "icSettings")
          menuArray[key].icon = icSettings;
        else if (menuArray[key].icon == "icDescription")
          menuArray[key].icon = icDescription;
        else if (menuArray[key].icon == "icReport")
          menuArray[key].icon = icReport;
        else if (menuArray[key].icon == "icSystem")
          menuArray[key].icon = icSystem;


        if (menuArray[key].children !== null) {
          Object.keys(menuArray[key].children).forEach((key2) => {
            if (menuArray[key].children[key2].icon == "icContactSupport")
              menuArray[key].children[key2].icon = icContactSupport;
            else if (menuArray[key].children[key2].icon == "icPersonOutline")
              menuArray[key].children[key2].icon = icPersonOutline;
            else if (menuArray[key].children[key2].icon == "icStyle")
              menuArray[key].children[key2].icon = icStyle;
            else if (menuArray[key].children[key2].icon == "icScore")
              menuArray[key].children[key2].icon = icScore;
            else if (menuArray[key].children[key2].icon == "icHoliday")
              menuArray[key].children[key2].icon = icHoliday;
            else if (menuArray[key].children[key2].icon == "icSettings")
              menuArray[key].children[key2].icon = icSettings;
            else if (menuArray[key].children[key2].icon == "icDescription")
              menuArray[key].children[key2].icon = icDescription;
            else if (menuArray[key].children[key2].icon == "icReport")
              menuArray[key].children[key2].icon = icReport;
            else if (menuArray[key].children[key2].icon == "icSystem")
              menuArray[key].children[key2].icon = icSystem;
          });
        }

        // menuArray[key].favorite=icFavoriteBorder;

      });
    }

    this.menuList = menuArray;
    this.navigationService.items = this.menuList;
  }


  
  @HostListener('window:beforeunload')
  async ngOnDestroy()
  {

    let obj:any={};
    obj.Username=JSON.parse(sessionStorage.getItem('Username'));
    obj.CompanyId=JSON.parse(sessionStorage.getItem('CompanyId'));
    obj.Active=false;
    await this.authorizationService.PostUserSession(obj)
    .subscribe((res) => {
      Object.keys(res).forEach((key) => {});
    }, err => {
      console.log(err);

    });

    // await this.myService.AddItem().subscribe();
  }
}