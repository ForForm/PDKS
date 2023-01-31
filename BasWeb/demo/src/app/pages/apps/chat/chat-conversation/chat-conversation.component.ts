import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Chat, ChatMessage } from '../chat.component';
import { chatMessages } from '../../../../../static-data/chat-messages';
import { trackById } from '../../../../../@vex/utils/track-by';
import { chats } from '../../../../../static-data/chats';
import { map } from 'rxjs/operators';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icSend from '@iconify/icons-ic/twotone-send';
import icCheckCircle from '@iconify/icons-ic/twotone-check-circle';
import icAccountCircle from '@iconify/icons-ic/twotone-account-circle';
import icClearAll from '@iconify/icons-ic/twotone-clear-all';
import icVolumeMute from '@iconify/icons-ic/twotone-volume-mute';
import { fadeInUp400ms, } from '../../../../../@vex/animations/fade-in-up.animation';
import { FormControl, FormGroup } from '@angular/forms';
import { stagger20ms } from '../../../../../@vex/animations/stagger.animation';
import { ScrollbarComponent } from '../../../../../@vex/components/scrollbar/scrollbar.component';
import { ChatService } from '../chat.service';
import icMenu from '@iconify/icons-ic/twotone-menu';
import { MessageService } from './../../../services/message.service'

@UntilDestroy()
@Component({
  selector: 'vex-chat-conversation',
  templateUrl: './chat-conversation.component.html',
  styleUrls: ['./chat-conversation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeInUp400ms,
    stagger20ms
  ]
})
export class ChatConversationComponent implements OnInit {

  chat: Chat;
  messages: ChatMessage[] = [];

  form = new FormGroup({
    message: new FormControl(),
    userId: new FormControl()
  });

  icAccountCircle = icAccountCircle;
  icClearAll = icClearAll;
  icVolumeMute = icVolumeMute;
  icCheckCircle = icCheckCircle;
  icMoreVert = icMoreVert;
  icSend = icSend;
  icMenu = icMenu;
  trackById = trackById;

  @ViewChild(ScrollbarComponent, { static: true }) scrollbar: ScrollbarComponent;

  constructor(private route: ActivatedRoute,
    private chatService: ChatService,
    public messageService: MessageService,
    private cd: ChangeDetectorRef) { }

  ngOnInit() {

    this.route.paramMap.pipe(
      map(paramMap => +paramMap.get('chatId')),
      untilDestroyed(this)
    ).subscribe(chatId => {

      this.cd.detectChanges();
      this.form.patchValue({ message: '', userId: chatId });
      this.getUserMessage(chatId);
      this.cd.detectChanges();
      this.scrollToBottom();
    });
  }


  getUserMessage(chatId) {
    this.messageService.GetUserMessage(2, chatId)
      .subscribe((res: any[]) => {
        this.messages = res;
      }, err => {
        console.log(err);

      });

  }


  postUserMessage() {



    let obj = { CompanyId: JSON.parse(sessionStorage.getItem('CompanyId')), Username: JSON.parse(sessionStorage.getItem('Username')), ToUserID: this.form.value.userId, Message: this.form.value.message };
    this.messageService.PostUserMessage(obj)
      .subscribe((res) => {

        this.getUserMessage(this.form.value.userId);
        this.form.patchValue({ message: '' });
        this.cd.detectChanges();
        this.scrollToBottom();

      }
        , err => {
          console.log(err);
          // this.waitProgress(err.message, 3000);
          // dialogRef.close();

        });

  }

  filterMessages(id: ChatMessage['id']) {
    this.messages = chatMessages.filter(message => message.id === id);
  }

  send() {
    // this.messages.push({
    //   id: this.chat.id,
    //   from: 'me',
    //   message: this.form.get('message').value
    // });

    // 

    // console.log(this.chat.id);

  }

  scrollToBottom() {
    this.scrollbar.scrollbarRef.getScrollElement().scrollTo({
      behavior: 'smooth',
      top: this.scrollbar.scrollbarRef.getContentElement().clientHeight
    });
  }

  openDrawer() {
    this.chatService.drawerOpen.next(true);
    this.cd.markForCheck();
  }

  closeDrawer() {
    this.chatService.drawerOpen.next(false);
    this.cd.markForCheck();
  }
}
