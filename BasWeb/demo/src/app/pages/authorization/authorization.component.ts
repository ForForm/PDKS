import { LanguageMap } from './../interfaces/language.interface';
import AppUtil from './../interfaces/util';
import { ChangeDetectionStrategy, Inject, ChangeDetectorRef, Component, OnInit, Injectable, ViewChild, ViewEncapsulation } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';
import icSmartphone from '@iconify/icons-ic/twotone-smartphone';
import icPerson from '@iconify/icons-ic/twotone-person';
import icArrowDropDown from '@iconify/icons-ic/twotone-arrow-drop-down';
import icMenu from '@iconify/icons-ic/twotone-menu';
import icCamera from '@iconify/icons-ic/twotone-camera';
import icPhone from '@iconify/icons-ic/twotone-phone';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { fadeInUp400ms } from '../../../@vex/animations/fade-in-up.animation';
import { stagger60ms } from '../../../@vex/animations/stagger.animation';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { SelectionModel } from '@angular/cdk/collections';
import { AuthorizationService } from '../services/authorization.service';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarConfig } from '@angular/material/snack-bar';
import icClose from '@iconify/icons-ic/twotone-close';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
// import { untilDestroyed } from 'ngx-take-until-destroy';
import { WaitComponent } from '../wait/wait.component';
import { LayoutService } from './../../../@vex/services/layout.service';
export class TodoItemNode {
  children: TodoItemNode[];
  item: string;
}
export class TodoItemFlatNode {
  item: string;
  level: number;
  expandable: boolean;
}
let TREE_DATA = {}
@Injectable()
export class ChecklistDatabase {
  dataChange = new BehaviorSubject<TodoItemNode[]>([]);
  get data(): TodoItemNode[] { return this.dataChange.value; }

  constructor(
    public authorizationService: AuthorizationService
  ) {
    this.initialize();
  }

  initialize() {
    this.getTreeView(sessionStorage.getItem('Lng'));
  }



  buildFileTree(obj: { [key: string]: any }, level: number): TodoItemNode[] {
    return Object.keys(obj).reduce<TodoItemNode[]>((accumulator, key) => {
      const value = obj[key];
      const node = new TodoItemNode();
      node.item = key;

      if (value != null) {
        if (typeof value === 'object') {
          node.children = this.buildFileTree(value, level + 1);
        } else {
          node.item = value;
        }
      }
      // console.log(node.children+node.item );

      return accumulator.concat(node);
    }, []);
  }

  getTreeView(lng) {
    this.authorizationService.GetTreeView(lng)
      .subscribe((res) => {
        TREE_DATA = res;
        const data = this.buildFileTree(TREE_DATA, 0);
        this.dataChange.next(data);
      }, err => {
        console.log(err);
      });
  }

  updateItem(node: TodoItemNode, name: string) {
    node.item = name;
    this.dataChange.next(this.data);
  }
}


// export interface GroupSelect {
//   ID: number;
//   Code: string;
//   Name: string;
//   CompanyID:string
// }


// export interface UserGroupSelect {
//   ID: number;
//   UserCode: string;
//   UserName: string;
//   GroupCode: string;
//   GroupName: string;
//   CompanyID:string
// }


@Component({
  selector: 'authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    stagger60ms,
    fadeInUp400ms
  ],
  providers: [ChecklistDatabase],


})

export class AuthorizationComponent implements OnInit {

  language: any = []; languageMap: LanguageMap = {};
  flatNodeMap = new Map<TodoItemFlatNode, TodoItemNode>();
  nestedNodeMap = new Map<TodoItemNode, TodoItemFlatNode>();
  selectedParent: TodoItemFlatNode | null = null;
  newItemName = '';
  treeControl: FlatTreeControl<TodoItemFlatNode>;
  treeFlattener: MatTreeFlattener<TodoItemNode, TodoItemFlatNode>;
  dataSource2: MatTreeFlatDataSource<TodoItemNode, TodoItemFlatNode>;
  checklistSelection = new SelectionModel<TodoItemFlatNode>(true /* multiple */);

  // groupSelection; userGroupSelection;
  @ViewChild("usrSorter", { static: true }) usrSort: MatSort;

  dataSourceC: MatTableDataSource<any> | null;
  dataSourceG: MatTableDataSource<any> | null;
  dataSourceU: MatTableDataSource<any> | null;
  layoutCtrl = new FormControl('boxed');
  searchCtrl = new FormControl();
  selectionC = new SelectionModel<any>(true, []);
  groupSelection = new SelectionModel<any>(true, []);
  userGroupSelection = new SelectionModel<any>(true, []);


  public GroupForm: FormGroup;
  public UserGroupForm: FormGroup;
  public SelectForm: FormGroup;
  columns = ['select', 'Code', 'Name', 'Delete'];
  usrColumns = ['select', 'UserCode', 'UserName', 'GroupCode', 'GroupName', 'Delete'];
  columnsC = ['Auth', 'ID', 'Code', 'Name'];

  // dataSource = ELEMENT_DATA;
  selectedIndex = 0;

  breadcrumbs: string[];
  inputType = 'password';
  visible = false;
  treeViewTitle = '';
  treeViewSubmit = false;
  icPhone = icPhone;
  icCamera = icCamera;
  icMenu = icMenu;
  icArrowDropDown = icArrowDropDown;
  icSmartphone = icSmartphone;
  icPerson = icPerson;
  icVisibility = icVisibility;
  icVisibilityOff = icVisibilityOff;
  icMoreVert = icMoreVert;
  result: string;
  href: string = "";
  users: any; groups: any;
  isMobileLayout = false;
  constructor(public authorizationService: AuthorizationService,
    private cd: ChangeDetectorRef,
    private _database: ChecklistDatabase,
    private layoutService: LayoutService,
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private dialog: MatDialog,
    private route: ActivatedRoute,
  ) {


    this.GroupForm = fb.group({
      ID: ['', [Validators.required]],
      GroupCode: ['', [Validators.required]],
      GroupName: [''],

    });

    this.UserGroupForm = fb.group({
      ID: ['', [Validators.required]],
      GroupCode: ['', [Validators.required]],
      GroupName: ['', Validators.required],
      UserCode: ['', [Validators.required]],
      UserName: ['', Validators.required]

    });

    this.SelectForm = fb.group({
      IsChecked: false
    });

    this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel,
      this.isExpandable, this.getChildren);
    this.treeControl = new FlatTreeControl<TodoItemFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource2 = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
    _database.dataChange.subscribe(data => {
      this.dataSource2.data = data;
    });

  }

  getLevel = (node: TodoItemFlatNode) => node.level;

  isExpandable = (node: TodoItemFlatNode) => node.expandable;

  getChildren = (node: TodoItemNode): TodoItemNode[] => node.children;

  hasChild = (_: number, _nodeData: TodoItemFlatNode) => _nodeData.expandable;

  hasNoContent = (_: number, _nodeData: TodoItemFlatNode) => _nodeData.item === '';

  transformer = (node: TodoItemNode, level: number) => {
    const existingNode = this.nestedNodeMap.get(node);
    const flatNode = existingNode && existingNode.item === node.item
      ? existingNode
      : new TodoItemFlatNode();
    flatNode.item = node.item;
    flatNode.level = level;
    flatNode.expandable = !!node.children;
    this.flatNodeMap.set(flatNode, node);
    this.nestedNodeMap.set(node, flatNode);
    return flatNode;
  }

  myObservable(observer) {
    setTimeout(() => {
      observer.next("");
      observer.complete();
    }, 1000);
  }

  resize(type) {
    if (type == 'fullwidth')
      this.layoutService.collapseSidenav();
    else
      this.layoutService.expandSidenav();

  }

  add() {
    this.GroupForm.reset();
  }

  // showWaitScreen(observable: Observable<Object>) {
  //   let dialogRef: MatDialogRef<WaitComponent> = this.dialog.open(WaitComponent, {
  //     panelClass: 'transparent',
  //     disableClose: true
  //   });
  //   let subscription = observable.subscribe(
  //     (response: any) => {
  //       subscription.unsubscribe();        
  //       console.log(response);
  //       dialogRef.close();
  //     },
  //     (error) => {
  //       subscription.unsubscribe();
  //       dialogRef.close();
  //     }
  //   );
  // }



  /** Whether all the descendants of the node are selected. */
  descendantsAllSelected(node: TodoItemFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected = descendants.every(child =>
      this.checklistSelection.isSelected(child)
    );
    return descAllSelected;
  }


  /** Whether part of the descendants are selected */
  descendantsPartiallySelected(node: TodoItemFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some(child => this.checklistSelection.isSelected(child));
    return result && !this.descendantsAllSelected(node);
  }

  /** Toggle the to-do item selection. Select/deselect all the descendants node */
  todoItemSelectionToggle(node: TodoItemFlatNode): void {
    this.checklistSelection.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    this.checklistSelection.isSelected(node)
      ? this.checklistSelection.select(...descendants)
      : this.checklistSelection.deselect(...descendants);

    // Force update for the parent
    descendants.every(child =>
      this.checklistSelection.isSelected(child)
    );
    this.checkAllParentsSelection(node);
  }

  /** Toggle a leaf to-do item selection. Check all the parents to see if they changed */
  todoLeafItemSelectionToggle(node: TodoItemFlatNode): void {
    this.checklistSelection.toggle(node);
    // console.log(this.checklistSelection);
    this.checkAllParentsSelection(node);
  }

  /* Checks all the parents when a leaf node is selected/unselected */
  checkAllParentsSelection(node: TodoItemFlatNode): void {
    let parent: TodoItemFlatNode | null = this.getParentNode(node);
    while (parent) {
      this.checkRootNodeSelection(parent);
      parent = this.getParentNode(parent);
    }
  }


  /** Check root node checked state and change it accordingly */
  checkRootNodeSelection(node: TodoItemFlatNode): void {
    const nodeSelected = this.checklistSelection.isSelected(node);
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected = descendants.every(child =>
      this.checklistSelection.isSelected(child)
    );
    if (nodeSelected && !descAllSelected) {
      this.checklistSelection.deselect(node);
    } else if (!nodeSelected && descAllSelected) {
      this.checklistSelection.select(node);
    }
  }

  getParentNode(node: TodoItemFlatNode): TodoItemFlatNode | null {
    const currentLevel = this.getLevel(node);

    if (currentLevel < 1) {
      return null;
    }

    const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;

    for (let i = startIndex; i >= 0; i--) {
      const currentNode = this.treeControl.dataNodes[i];

      if (this.getLevel(currentNode) < currentLevel) {
        return currentNode;
      }
    }
    return null;
  }


  selectAll(e) {
    this.checklistSelection.clear();
    console.log(this.treeControl.dataNodes);
    if (e.checked)
      for (let i = 0; i < this.treeControl.dataNodes.length; i++) {
        // console.log(this.treeControl.dataNodes[i].item);
        // console.log(this.treeControl.dataNodes[i]);
        

        if (!this.checklistSelection.isSelected(this.treeControl.dataNodes[i]) 
            &&  (this.treeControl.dataNodes[i].item !== 'Sistem' && 
                !this.treeControl.dataNodes[i].item.includes('Kullanıcı İşlemleri') && 
                !this.treeControl.dataNodes[i].item.includes('Kullanıcı Grup') && 
                !this.treeControl.dataNodes[i].item.includes('Kullanıcı Tanımlama')   ))
          this.checklistSelection.toggle(this.treeControl.dataNodes[i]);
      }
    else
      for (let i = 0; i < this.treeControl.dataNodes.length; i++) {
        if (this.checklistSelection.isSelected(this.treeControl.dataNodes[i]) 
        &&  (this.treeControl.dataNodes[i].item !== 'Sistem' && 
            !this.treeControl.dataNodes[i].item.includes('Kullanıcı İşlemleri') && 
            !this.treeControl.dataNodes[i].item.includes('Kullanıcı Grup') && 
            !this.treeControl.dataNodes[i].item.includes('Kullanıcı Tanımlama')   ))
          this.checklistSelection.toggle(this.treeControl.dataNodes[i]);
      }

  }

  ngOnInit() {

    // console.log(this.selectedIndex);
    window.onresize = () => this.isMobileLayout = window.innerWidth <= 991;
    this.isMobileLayout = window.innerWidth <= 991;

    let observable = new Observable(this.myObservable);
    // this.showWaitScreen(observable);
    this.languageMap = AppUtil.getLabels();
    this.getCompaniesAuth(null);
    // this.getGroups();
    this.getUsers();
    this.getMenuUser();
    this.getMenuGroups();

    this.breadcrumbs = [this.languageMap['Sistem'].labelName, this.languageMap['Kullanıcı İşlemleri'].labelName, this.languageMap['Kullanıcı Grup Yetkileri'].labelName];

    this.getUrl().subscribe(data => { this.href = data })

  }


  postMenuGroup() {


    let observable = new Observable(this.myObservable);
    // this.showWaitScreen(observable);

    this.authorizationService.PostMenuGroup(this.GroupForm.value)
      .subscribe((res: any[]) => {

        this.getMenuGroups();
      }, err => {

        console.log(err);
      });
  }

  refresh() {
    this.cd.detectChanges();

  }

  getMenuGroups() {
    this.authorizationService.GetMenuGroups()
      .subscribe((res: any[]) => {

        this.dataSourceG = new MatTableDataSource();
        this.dataSourceG.data = res;
        this.refresh();

        this.groups = [];
        Object.keys(res).forEach(key => {
          const item = { Code: res[key].Code, Name: res[key].Name };
          this.groups.push(item);

        });


      }, err => {
        console.log(err);
      });
  }



  getMenuUser() {

    this.authorizationService.GetMenuUser()
      .subscribe((res: any[]) => {

        this.dataSourceU = new MatTableDataSource();
        this.dataSourceU.data = res;
        this.refresh();

      }, err => {
        console.log(err);
      });
  }


  selectRow(row) {

    // console.log(row);
    // this.form.patchValue({ ID: row.ID, Code: row.Code, Name: row.Name, Address: row.Address, Telephone1: row.Telephone1, Telephone2: row.Telephone2, Fax: row.Fax, Mail: row.Mail })

  }

  detailToggle(row) {
    this.selectionC.toggle(row);
  }


  isAllSelected() {
    const numSelected = this.selectionC.selected.length;
    const numRows = this.dataSourceC.data.length;
    return numSelected === numRows;
  }


  masterToggle() {
    this.isAllSelected() ?
      this.selectionC.clear() :
      this.dataSourceC.data.forEach(row => this.selectionC.select(row));
  }



  getCompaniesAuth(groupCode) {

    this.authorizationService.GetCompaniesAuth(groupCode)
      .subscribe((res: any[]) => {

        this.selectionC.clear();
        this.dataSourceC = new MatTableDataSource();
        this.dataSourceC.data = res;
        this.refresh();

        if (groupCode !== null)
          Object.keys(res).forEach(key => {
            this.dataSourceC.data.forEach(row => { if (row.ID === res[key].ID && res[key].Auth) this.selectionC.select(row); }
            );
          });


      });


  }

  openDialog(Code) {


    let say = 0;
    Object.keys(this.dataSourceU.data).forEach(key => {
      if (this.dataSourceU.data[key].GroupCode == Code)
        say++;
    });



    this.dialog.open(DemoDialogComponent, {
      data: {
        temp1: say.toString() + ' adet Kullanıcı Gruba tanımlıdır.' + this.languageMap['Gruba ait tüm yetkiler silinecektir.'].labelName, temp2: this.languageMap['Devam etmek istediğinize emin misiniz?'].labelName, Evet: this.languageMap['Evet'].labelName,
        Hayir: this.languageMap['Hayır'].labelName
      },
      disableClose: false,
      width: '400px'
    }).afterClosed().subscribe(result => {
      this.result = result;
      if (this.result === "Yes") {
        if (this.selectedIndex === 0)
          this.authorizationService.DeleteMenuGroup(Code)
            .subscribe((res: any[]) => {
              this.getMenuGroups();
              this.getCompaniesAuth(null);
              this.getMenuGroupUser(null);
              this.refresh();
            }, err => {
              console.log(err);
            });
        else
          this.authorizationService.DeleteMenuUser(Code)
            .subscribe((res: any[]) => {
              this.getMenuUser();
              this.getCompaniesAuth(null);
              this.getMenuGroupUser(null);
              this.refresh();
            }, err => {
              console.log(err);
            });

      }
    });
  }




  getMenuGroup(row) {
    this.authorizationService.GetMenuGroup(row.Code)
      .subscribe((res) => {
        this.GroupForm.patchValue({ ID: row.ID, GroupCode: row.Code, GroupName: row.Name });
        this.treeViewTitle = this.GroupForm.value.GroupCode + ' - ' + this.GroupForm.value.GroupName;
        let obj = [];
        this.checklistSelection.clear();
        Object.keys(res).forEach(key => { obj[key] = res[key] });
        for (let i = 0; i < this.treeControl.dataNodes.length; i++) {
          for (let j = 0; j < obj.length; j++) {
            if (this.treeControl.dataNodes[i].item === obj[j].Item && this.treeControl.dataNodes[i].level === obj[j].Level &&
              this.treeControl.dataNodes[i].expandable === (obj[j].Expandable === 1 ? true : false)) {
              this.checklistSelection.toggle(this.treeControl.dataNodes[i]);
              // console.log(this.treeControl.dataNodes[i]);
            }
          }
          // this.treeControl.expand(this.treeControl.dataNodes[i]);

        }


        // this.waitProgressDismiss();
      }, err => {
        console.log(err);
      });
  }

  getMenuGroupUser(row) {

    if (row == null) { this.checklistSelection.clear(); return; }

    this.authorizationService.GetMenuGroup(row.GroupCode)
      .subscribe((res) => {
        //  this.UserGroupForm.patchValue({ID:row.ID,GroupCode:row.Code,GroupName:row.Name});
        this.UserGroupForm.patchValue({ ID: row.ID, UserCode: row.UserCode, UserName: row.UserName, GroupCode: row.GroupCode, GroupName: row.GroupName });
        this.treeViewTitle = this.UserGroupForm.value.GroupCode + ' - ' + this.UserGroupForm.value.GroupName;
        let obj = [];
        this.checklistSelection.clear();
        Object.keys(res).forEach(key => { obj[key] = res[key] });
        for (let i = 0; i < this.treeControl.dataNodes.length; i++) {
          for (let j = 0; j < obj.length; j++) {
            if (this.treeControl.dataNodes[i].item === obj[j].Item && this.treeControl.dataNodes[i].level === obj[j].Level && this.treeControl.dataNodes[i].expandable === (obj[j].Expandable === 1 ? true : false)) { this.checklistSelection.toggle(this.treeControl.dataNodes[i]); }
          }
          // this.treeControl.expand(this.treeControl.dataNodes[i]);
        }
        // this.waitProgressDismiss();
      }, err => {
        console.log(err);
      });
  }

  groupMasterToggle(row) {
    // this.waitProgress('İşlem yapılıyor. Lütfen Bekleyiniz...', undefined);


    // let observable = new Observable(this.myObservable);
    // this.showWaitScreen(observable);

    this.groupSelection.clear();
    this.groupSelection.toggle(row);
    this.getCompaniesAuth(row.Code);
    this.getMenuGroup(row);
    this.SelectForm.patchValue({ IsChecked: false });
  }

  PostMenuUser() {


    this.authorizationService.PostMenuUser(this.UserGroupForm.value)
      .subscribe((res: any[]) => {
        this.getMenuUser();

      }, err => {
        console.log(err);
      });
  }


  getUsers() {
    this.authorizationService.GetUsers()
      .subscribe((res: any[]) => {
        this.users = res;
      }, err => {
      });

  }

  getGroups() {
    this.authorizationService.GetGroups()
      .subscribe((res: any[]) => {
        this.groups = res;
      }, err => {
        // this.waitProgress(err, 3000);
      });
  }



  onTabChanged($event) {
    // this.waitProgress( $event.index ,1000);


    this.selectedIndex = $event.index;
    this.treeViewSubmit = ($event.index === 1 ? true : false);

    if (this.selectedIndex == 0) this.getMenuGroups();
    else { this.getMenuUser(); this.getUsers(); }


  }


  // waitProgress(message, timer) {
  //   this.snackbar.dismiss();
  //   let config = new MatSnackBarConfig();
  //   if (timer !== undefined) {
  //     config.duration = timer;
  //   }
  //   config.panelClass = ['message-position'];
  //   this.snackbar.open(message, "", config);

  // }

  // waitProgressDismiss() {
  //   this.snackbar.dismiss();
  // }



  postMenuTree() {

    //  this.waitProgress('İşlem yapılıyor. Lütfen Bekleyiniz...', undefined);

    // obj[key].groupName=this.GroupForm.value.GroupName;
    // let observable = new Observable(this.myObservable);
    // this.showWaitScreen(observable);



    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });

    let obj = [];

    // const aaa = this.checklistSelection.selected.filter((item, i, arr) => arr.findIndex((t) => t.item === item.item) === i)
    Object.keys(this.checklistSelection.selected).forEach(key => {
      obj[key] = this.checklistSelection.selected[key];
      obj[key].groupCode = this.GroupForm.value.GroupCode;
      obj[key].groupName = this.GroupForm.value.GroupName;
      obj[key].Username = JSON.parse(sessionStorage.getItem('Username'));
      obj[key].CompanyId = JSON.parse(sessionStorage.getItem('CompanyId'));
    });

    // this.checklistSelection.selected
    let object = { todoItemFlatNode: obj, companyAuth: this.selectionC.selected };

    this.authorizationService.PostMenuTree(object)
      .subscribe((res: any[]) => {

        if (res == null) {
          //  this.waitProgressDismiss(); 
          dialogRef.close();
          return;
        }

        if (res.length == 0) {
          //  this.waitProgressDismiss();
          dialogRef.close();
          return;
        }

        if (res[0]['ReturnCode'] !== '200') {
          dialogRef.close();
          // this.waitProgress(res[0]['ReturnDscr'], 3000); 
        }
        else {
          dialogRef.close();
          // this.waitProgressDismiss();
        }
        
        // this.authGetTreeView();
      }, err => {
        console.log(err);

        dialogRef.close();
        // this.toster.error(err.message);
      });
  }


  deleteSelected(Code) {
    this.openDialog(Code);
  }

  getUrl(): Observable<any> {
    let response = this.route.url; return response;
  }



  togglePassword() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }




  userGroupMasterToggle(row) {


    let observable = new Observable(this.myObservable);
    // this.showWaitScreen(observable);
    this.userGroupSelection.clear();
    this.userGroupSelection.toggle(row);
    this.getCompaniesAuth(row.GroupCode);
    this.getMenuGroupUser(row);


  }



  ngOnDestroy() {
  }
}




@Component({
  selector: 'definitions',
  template: `
  <div mat-dialog fxLayout="row" fxLayoutAlign="space-between center"  >
  <div><h3>{{data.temp1}}</h3></div>
</div>

<mat-dialog-content>
  <p>{{data.temp2}}  </p>
  <br/>
</mat-dialog-content>


<mat-dialog-actions align="end">
<button mat-button color="primary" (click)="close('Yes')">{{data.Evet}}</button>
<button mat-button (click)="close('No')">{{data.Hayir}}</button>
</mat-dialog-actions>
  `
})

export class DemoDialogComponent {

  icClose = icClose;

  constructor(private dialogRef: MatDialogRef<DemoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
  }

  close(answer: string) {
    this.dialogRef.close(answer);
  }
}
