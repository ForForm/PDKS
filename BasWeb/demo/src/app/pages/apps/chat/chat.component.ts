import { LanguageMap } from '../../interfaces/language.interface';
import AppUtil from '../../interfaces/util';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import icSearch from '@iconify/icons-ic/twotone-search';
import icChat from '@iconify/icons-ic/twotone-chat';
import { fadeInUp400ms } from '../../../../@vex/animations/fade-in-up.animation';
import { Observable, of } from 'rxjs';
import { delay, filter } from 'rxjs/operators';
import { trackById } from '../../../../@vex/utils/track-by';
import { stagger20ms } from '../../../../@vex/animations/stagger.animation';
// import { chats } from '../../../../static-data/chats';
import { stagger80ms } from '../../../../@vex/animations/stagger.animation';
import icCheckCircle from '@iconify/icons-ic/twotone-check-circle';
import icAccessTime from '@iconify/icons-ic/twotone-access-time';
import icDoNotDisturb from '@iconify/icons-ic/twotone-do-not-disturb';
import icOfflineBolt from '@iconify/icons-ic/twotone-offline-bolt';
import { OnlineStatus } from '../../../../@vex/layout/toolbar/toolbar-user/toolbar-user-dropdown/toolbar-user-dropdown.component';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ChatService } from './chat.service';
import { MessageService } from './../../services/message.service'
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import icMenu from '@iconify/icons-ic/twotone-menu';
import icSend from '@iconify/icons-ic/twotone-send';
import { ScrollbarComponent } from '../../../../@vex/components/scrollbar/scrollbar.component';
import { SearchService } from '../../../../@vex/services/search.service';


export interface Chat {
  id: number;
  imageSrc: string;
  from: string;
  status: string;
  message: string;
  unreadCount: number;
  timestamp: string;
}

export interface ChatMessage {
  id: number;
  from: 'me' | 'partner';
  message: string;
}


@UntilDestroy()
@Component({
  selector: 'vex-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeInUp400ms,
    stagger80ms,
    fadeInUp400ms,
    stagger20ms
  ]
})
export class ChatComponent implements OnInit, OnDestroy {

  getMessageCount$: Observable<any>;
  chatFrom: string;
  chatImage: string = 'assets/img/avatars/who.png';
  language: any = []; languageMap: LanguageMap = {};
  icMenu = icMenu;
  icSend = icSend;
  mobileQuery = this.mediaMatcher.matchMedia('(max-width: 959px)');
  drawerOpen$ = this.chatService.drawerOpen$;
  messages: ChatMessage[] = [];

  statuses: OnlineStatus[] = [
    {
      id: 'online',
      label: 'Online',
      icon: icCheckCircle,
      colorClass: 'text-green'
    },
    {
      id: 'away',
      label: 'Away',
      icon: icAccessTime,
      colorClass: 'text-orange'
    },
    {
      id: 'dnd',
      label: 'Do not disturb',
      icon: icDoNotDisturb,
      colorClass: 'text-red'
    },
    {
      id: 'offline',
      label: 'Offline',
      icon: icOfflineBolt,
      colorClass: 'text-gray'
    }
  ];

  activeStatus: OnlineStatus = this.statuses[0];

  icCheckCircle = icCheckCircle;
  icSearch = icSearch;
  icChat = icChat;
  trackById = trackById;
  chats: any[];
  chatsOrj: any[];
  chatsSearch: any[];
  formC: FormGroup;
  searchCtrl = new FormControl();
  private _mobileQueryListener: () => void;
  @ViewChild(ScrollbarComponent, { static: true }) scrollbar: ScrollbarComponent;
  @ViewChild('searchInput', { static: true }) input: ElementRef;

  constructor(private cd: ChangeDetectorRef,
    private router: Router,
    public messageService: MessageService,
    private mediaMatcher: MediaMatcher,
    private fb: FormBuilder,
    private searchService: SearchService,
    private chatService: ChatService) { }

  ngOnInit() {

    this.formC = this.fb.group({ message: '', userId: 0 });
    this.languageMap = AppUtil.getLabels();
    this.mobileQuery.matches ? this.closeDrawer() : this.openDrawer();
    this._mobileQueryListener = () => {
      this.mobileQuery.matches ? this.closeDrawer() : this.openDrawer();
      this.cd.detectChanges();
    };

    this.searchCtrl.valueChanges.pipe(
      untilDestroyed(this)
    ).subscribe(value => this.searchService.valueChangesSubject.next(value));

    this.mobileQuery.addEventListener('change', this._mobileQueryListener);

    this.getUserMessages();

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      filter(() => this.mobileQuery.matches),
      untilDestroyed(this)
    ).subscribe(() => this.closeDrawer());
  }


  getUserMessages() {

    this.messageService.GetUserMessage(0, 0)
      .subscribe((res: any[]) => {

        let say = 0;
        Object.keys(res).forEach((key) => {
          say += res[key].unreadCount;
          sessionStorage.setItem('MessageCount', JSON.stringify(say));
          this.getMessageCount$ = this.messageService.getMessageCount;
        });

        this.chats = res;
        this.chatsOrj = res;


        this.cd.detectChanges();

      }, err => {
        console.log(err);

      });

  }



  postUserMessage() {



    let obj = { CompanyId: JSON.parse(sessionStorage.getItem('CompanyId')), Username: JSON.parse(sessionStorage.getItem('Username')), ToUserID: this.formC.value.userId, Message: this.formC.value.message };
    this.messageService.PostUserMessage(obj)
      .subscribe((res) => {
 
        this.getUserMessage(this.formC.value.userId);
        this.formC.patchValue({ message: '' });
        this.cd.detectChanges();
        // this.getUserMessages();
        this.scrollToBottom();
        this.cd.detectChanges();

      }
        , err => {
          console.log(err);
          // this.waitProgress(err.message, 3000);
          // dialogRef.close();

        });

  }

  postUserMessagesRead(Id, chatFrom, chatImage) {
    this.searchCtrl.setValue(null);
    this.chatFrom = chatFrom;
    this.chatImage = chatImage;
    let obj = { CompanyId: JSON.parse(sessionStorage.getItem('CompanyId')), Username: JSON.parse(sessionStorage.getItem('Username')), Id: Id };
    this.messageService.PostUserMessageRead(obj)
      .subscribe((res) => {
        this.messages = [];
        this.getUserMessage(Id);
        this.getUserMessages();
      }
        , err => {
          console.log(err);
          // this.waitProgress(err.message, 3000);
          // dialogRef.close();
        });

  }




  search() {
    this.chatsSearch = [];
    this.chatsOrj.forEach(element => {

      if (element.from !== undefined)
        if (element.from.toLowerCase().includes(this.searchCtrl.value.toLowerCase())) {
          this.chatsSearch.push({ from: element.from, timestamp: element.timestamp, unreadCount: element.unreadCount, id: element.id });
        }
    });

    if (this.searchCtrl.value.length > 0)
      this.chats = this.chatsSearch;
    else
      this.chats = this.chatsOrj;
  }

  getUserMessage(chatId) {
    this.messageService.GetUserMessage(2, chatId)
      .subscribe((res: any[]) => {

        this.formC.patchValue({ userId: chatId })

        this.messages = res;
        this.cd.detectChanges();
        this.scrollToBottom();

      }, err => {
        console.log(err);
      });

  }

  scrollToBottom() {
    this.scrollbar.scrollbarRef.getScrollElement().scrollTo({
      behavior: 'smooth',
      top: this.scrollbar.scrollbarRef.getContentElement().clientHeight
    });
  }
  setStatus(status: OnlineStatus) {
    this.activeStatus = status;
    this.cd.markForCheck();
  }

  drawerChange(drawerOpen: boolean) {
    this.chatService.drawerOpen.next(drawerOpen);
  }

  openDrawer() {
    this.chatService.drawerOpen.next(true);
    this.cd.markForCheck();
  }

  closeDrawer() {
    this.chatService.drawerOpen.next(false);
    this.cd.markForCheck();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }
}
