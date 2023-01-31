import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
// import { Observable, of, ReplaySubject } from 'rxjs';
import icGroup from '@iconify/icons-ic/twotone-group';
import icPageView from '@iconify/icons-ic/twotone-pageview';
import icCloudOff from '@iconify/icons-ic/twotone-cloud-off';
import icTimer from '@iconify/icons-ic/twotone-timer';
import { defaultChartOptions } from '../../../../@vex/utils/default-chart-options';
import { Order, tableSalesData } from '../../../../static-data/table-sales-data';
import { TableColumn } from '../../../../@vex/interfaces/table-column.interface';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
// import theme from '../../../../@vex/utils/tailwindcss';
import { NavigationService } from '../../../../@vex/services/navigation.service';
import { DashboardService } from '../../services/dashboard.service';
import { WaitComponent } from '../../wait/wait.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'vex-dashboard-analytics',
  templateUrl: './dashboard-analytics.component.html',
  styleUrls: ['./dashboard-analytics.component.scss']
})
export class DashboardAnalyticsComponent<T> implements OnInit {

  saleData: any[];
  multiData: any[];
  dataSourceGrid: MatTableDataSource<any> | null;
  columnsArray: any[] = [];
  // section11: boolean = false;
  // section12: boolean = false;
  // section21: boolean = false;
  // section22: boolean = false;


  multi11: any[];
  // dataSourceGrid11: MatTableDataSource<any> | null, dataSourceGrid12: MatTableDataSource<any> | null, dataSourceGrid21: MatTableDataSource<any> | null, dataSourceGrid22: MatTableDataSource<any> | null, dataSourceGrid31: MatTableDataSource<any> | null, dataSourceGrid32: MatTableDataSource<any> | null,
  // dataSourceGrid41: MatTableDataSource<any> | null, dataSourceGrid42: MatTableDataSource<any> | null, dataSourceGrid51: MatTableDataSource<any> | null, dataSourceGrid52: MatTableDataSource<any> | null, dataSourceGrid61: MatTableDataSource<any> | null, dataSourceGrid62: MatTableDataSource<any> | null,
  // dataSourceGrid71: MatTableDataSource<any> | null, dataSourceGrid72: MatTableDataSource<any> | null, dataSourceGrid81: MatTableDataSource<any> | null, dataSourceGrid82: MatTableDataSource<any> | null, dataSourceGrid91: MatTableDataSource<any> | null, dataSourceGrid92: MatTableDataSource<any> | null,
  // dataSourceGrid101: MatTableDataSource<any> | null, dataSourceGrid102: MatTableDataSource<any> | null,

  ChartConfig = {
    dataSourceGrid11: [], dataSourceGrid12: [], dataSourceGrid21: [], dataSourceGrid22: [], dataSourceGrid31: [], dataSourceGrid32: [],
    dataSourceGrid41: [], dataSourceGrid42: [], dataSourceGrid51: [], dataSourceGrid52: [], dataSourceGrid61: [], dataSourceGrid62: [],
    dataSourceGrid71: [], dataSourceGrid72: [], dataSourceGrid81: [], dataSourceGrid82: [], dataSourceGrid91: [], dataSourceGrid92: [],
    dataSourceGrid101: [], dataSourceGrid102: [],

    view11: [], view12: [], view21: [], view22: [], view31: [], view32: [],
    view41: [], view42: [], view51: [], view52: [], view61: [], view62: [],
    view71: [], view72: [], view81: [], view82: [], view91: [], view92: [],
    view101: [], view102: [],

    singleData11: [], singleData12: [], singleData21: [], singleData22: [], singleData31: [], singleData32: [],
    singleData41: [], singleData42: [], singleData51: [], singleData52: [], singleData61: [], singleData62: [],
    singleData71: [], singleData72: [], singleData81: [], singleData82: [], singleData91: [], singleData92: [],
    singleData101: [], singleData102: [],

    multiData11: [], multiData12: [], multiData21: [], multiData22: [], multiData31: [], multiData32: [],
    multiData41: [], multiData42: [], multiData51: [], multiData52: [], multiData61: [], multiData62: [],
    multiData71: [], multiData72: [], multiData81: [], multiData82: [], multiData91: [], multiData92: [],
    multiData101: [], multiData102: [],


    type11: '', type12: '', type21: '', type22: '', type31: '', type32: '',
    type41: '', type42: '', type51: '', type52: '', type61: '', type62: '',
    type71: '', type72: '', type81: '', type82: '', type91: '', type92: '',
    type101: '', type102: '',

    top11: '', top12: '', top21: '', top22: '', top31: '', top32: '',
    top41: '', top42: '', top51: '', top52: '', top61: '', top62: '',
    top71: '', top72: '', top81: '', top82: '', top91: '', top92: '',
    top101: '', top102: '',

    left11: '', left12: '', left21: '', left22: '', left31: '', left32: '',
    left41: '', left42: '', left51: '', left52: '', left61: '', left62: '',
    left71: '', left72: '', left81: '', left82: '', left91: '', left92: '',
    left101: '', left102: '',

    showXAxis11: false, showXAxis12: false, showXAxis21: false, showXAxis22: false, showXAxis31: false, showXAxis32: false,
    showXAxis41: false, showXAxis42: false, showXAxis51: false, showXAxis52: false, showXAxis61: false, showXAxis62: false,
    showXAxis71: false, showXAxis72: false, showXAxis81: false, showXAxis82: false, showXAxis91: false, showXAxis92: false, showXAxis101: false, showXAxis102: false,


    showXAxisLabel11: false, showXAxisLabel12: false, showXAxisLabel21: false, showXAxisLabel22: false, showXAxisLabel31: false, showXAxisLabel32: false,
    showXAxisLabel41: false, showXAxisLabel42: false, showXAxisLabel51: false, showXAxisLabel52: false, showXAxisLabel61: false, showXAxisLabel62: false,
    showXAxisLabel71: false, showXAxisLabel72: false, showXAxisLabel81: false, showXAxisLabel82: false, showXAxisLabel91: false, showXAxisLabel92: false,
    showXAxisLabel101: false, showXAxisLabel102: false,

    showYAxis11: false, showYAxis12: false, showYAxis21: false, showYAxis22: false, showYAxis31: false, showYAxis32: false,
    showYAxis41: false, showYAxis42: false, showYAxis51: false, showYAxis52: false, showYAxis61: false, showYAxis62: false,
    showYAxis71: false, showYAxis72: false, showYAxis81: false, showYAxis82: false, showYAxis91: false, showYAxis92: false,
    showYAxis101: false, showYAxis102: false,

    showYAxisLabel11: false, showYAxisLabel12: false, showYAxisLabel21: false, showYAxisLabel22: false, showYAxisLabel31: false, showYAxisLabel32: false,
    showYAxisLabel41: false, showYAxisLabel42: false, showYAxisLabel51: false, showYAxisLabel52: false, showYAxisLabel61: false, showYAxisLabel62: false,
    showYAxisLabel71: false, showYAxisLabel72: false, showYAxisLabel81: false, showYAxisLabel82: false, showYAxisLabel91: false, showYAxisLabel92: false,
    showYAxisLabel101: false, showYAxisLabel102: false,

    xAxisLabel11: '', xAxisLabel12: '', xAxisLabel21: '', xAxisLabel22: '', xAxisLabel31: '', xAxisLabel32: '',
    xAxisLabel41: '', xAxisLabel42: '', xAxisLabel51: '', xAxisLabel52: '', xAxisLabel61: '', xAxisLabel62: '',
    xAxisLabel71: '', xAxisLabel72: '', xAxisLabel81: '', xAxisLabel82: '', xAxisLabel91: '', xAxisLabel92: '',
    xAxisLabel101: '', xAxisLabel102: '',

    yAxisLabel11: '', yAxisLabel12: '', yAxisLabel21: '', yAxisLabel22: '', yAxisLabel31: '', yAxisLabel32: '',
    yAxisLabel41: '', yAxisLabel42: '', yAxisLabel51: '', yAxisLabel52: '', yAxisLabel61: '', yAxisLabel62: '',
    yAxisLabel71: '', yAxisLabel72: '', yAxisLabel81: '', yAxisLabel82: '', yAxisLabel91: '', yAxisLabel92: '',
    yAxisLabel101: '', yAxisLabel102: '',

    showLegend11: false, showLegend12: false, showLegend21: false, showLegend22: false, showLegend31: false, showLegend32: false,
    showLegend41: false, showLegend42: false, showLegend51: false, showLegend52: false, showLegend61: false, showLegend62: false,
    showLegend71: false, showLegend72: false, showLegend81: false, showLegend82: false, showLegend91: false, showLegend92: false,
    showLegend101: false, showLegend102: false,

    legendTitle11: '', legendTitle12: '', legendTitle21: '', legendTitle22: '', legendTitle31: '', legendTitle32: '',
    legendTitle41: '', legendTitle42: '', legendTitle51: '', legendTitle52: '', legendTitle61: '', legendTitle62: '',
    legendTitle71: '', legendTitle72: '', legendTitle81: '', legendTitle82: '', legendTitle91: '', legendTitle92: '',
    legendTitle101: '', legendTitle102: '',

    backgroundColor11: '', backgroundColor12: '', backgroundColor21: '', backgroundColor22: '', backgroundColor31: '', backgroundColor32: '',
    backgroundColor41: '', backgroundColor42: '', backgroundColor51: '', backgroundColor52: '', backgroundColor61: '', backgroundColor62: '',
    backgroundColor71: '', backgroundColor72: '', backgroundColor81: '', backgroundColor82: '', backgroundColor91: '', backgroundColor92: '',
    backgroundColor101: '', backgroundColor102: '',

    view13: [], view23: [], view33: [], view43: [], view53: [], view63: [],
    view73: [], view83: [], view93: [], view103: [],

    singleData13: [], singleData23: [], singleData33: [], singleData43: [], singleData53: [], singleData63: [],
    singleData73: [], singleData83: [], singleData93: [], singleData103: [],

    multiData13: [], multiData23: [], multiData33: [], multiData43: [], multiData53: [], multiData63: [],
    multiData73: [], multiData83: [], multiData93: [], multiData103: [],

    type13: '', type23: '', type33: '', type43: '', type53: '', type63: '',
    type73: '', type83: '', type93: '', type103: '',
    showXAxis13: false, showXAxis23: false, showXAxis33: false, showXAxis43: false, showXAxis53: false, showXAxis63: false,
    showXAxis73: false, showXAxis83: false, showXAxis93: false, showXAxis103: false,
    showXAxisLabel13: false, showXAxisLabel23: false, showXAxisLabel33: false, showXAxisLabel43: false, showXAxisLabel53: false, showXAxisLabel63: false,
    showXAxisLabel73: false, showXAxisLabel83: false, showXAxisLabel93: false, showXAxisLabel103: false,
    showYAxis13: false, showYAxis23: false, showYAxis33: false, showYAxis43: false, showYAxis53: false, showYAxis63: false,
    showYAxis73: false, showYAxis83: false, showYAxis93: false, showYAxis103: false,
    showYAxisLabel13: false, showYAxisLabel23: false, showYAxisLabel33: false, showYAxisLabel43: false, showYAxisLabel53: false, showYAxisLabel63: false,
    showYAxisLabel73: false, showYAxisLabel83: false, showYAxisLabel93: false, showYAxisLabel103: false,
    xAxisLabel13: '', xAxisLabel23: '', xAxisLabel33: '', xAxisLabel43: '', xAxisLabel53: '', xAxisLabel63: '',
    xAxisLabel73: '', xAxisLabel83: '', xAxisLabel93: '', xAxisLabel103: '',
    yAxisLabel13: '', yAxisLabel23: '', yAxisLabel33: '', yAxisLabel43: '', yAxisLabel53: '', yAxisLabel63: '',
    yAxisLabel73: '', yAxisLabel83: '', yAxisLabel93: '', yAxisLabel103: '',
    showLegend13: false, showLegend23: false, showLegend33: false, showLegend43: false, showLegend53: false, showLegend63: false,
    showLegend73: false, showLegend83: false, showLegend93: false, showLegend103: false,
    legendTitle13: '', legendTitle23: '', legendTitle33: '', legendTitle43: '', legendTitle53: '', legendTitle63: '',
    legendTitle73: '', legendTitle83: '', legendTitle93: '', legendTitle103: '',
    backgroundColor13: '', backgroundColor23: '', backgroundColor33: '', backgroundColor43: '', backgroundColor53: '', backgroundColor63: '',
    backgroundColor73: '', backgroundColor83: '', backgroundColor93: '', backgroundColor103: ''


  };


  yCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  xCount = [1, 2, 3];
  view21: any[];
  view22: any[];


  objectRes: MatDialogRef<WaitComponent>;
  // tableData:any[];
  columns: Array<keyof T | string>;
  icGroup = icGroup;
  icPageView = icPageView;
  icCloudOff = icCloudOff;
  icTimer = icTimer;
  icMoreVert = icMoreVert;
  // theme = theme;
  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  cardColor: string = '#232837';
  @ViewChild("usrPaginator", { static: false }) usrPaginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private cd: ChangeDetectorRef,
    public navigationService: NavigationService,
    public dashboardService: DashboardService,
    private dialog: MatDialog) { }


  getReportDef() {

    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });

    this.dashboardService.GetReportingDef()
      .subscribe((res: any[]) => {



        Object.keys(res).forEach(key => {

          let top = res[key].Top;
          let topCalc = res[key].Section.split(',')[0];
          if (topCalc > 1)
            for (let n = 0; n <= topCalc; n++) {
              Object.keys(res).forEach(key1 => {
                if (res[key1].Section.split(',')[0] == n
                  && res[key].Section.split(',')[1] == res[key1].Section.split(',')[1]
                  && res[key].Section.split(',')[0] != res[key1].Section.split(',')[0]) {
                  top += JSON.parse(res[key1].View)[1] + res[key1].Top;
                  // if (res[key1].Type === "grid" && res[key1].ShowDetail === true) top += 30;
                }
              });
            }

          let left = 10 + res[key].Left;
          let leftCalc = res[key].Section.split(',')[1];
          if (leftCalc > 1)
            for (let n = 0; n <= leftCalc; n++) {
              Object.keys(res).forEach(key2 => {
                if (res[key2].Section.split(',')[1] == n
                  && res[key].Section.split(',')[0] == res[key2].Section.split(',')[0]
                  && res[key].Section.split(',')[1] != res[key2].Section.split(',')[1])
                  left += JSON.parse(res[key2].View)[0] + res[key2].Left;
              });
            }



          let splitSection = res[key].Section.split(',')[0] + res[key].Section.split(',')[1];
          // this.ChartConfig['yAxisLabel' + splitSection] = res[key].Ylabel;
          // this.ChartConfig['xAxisLabel' + splitSection] = res[key].Xlabel;
          this.ChartConfig['view' + splitSection] = JSON.parse(res[key].View);
          this.ChartConfig['showXAxis' + splitSection] = res[key].ShowX;
          this.ChartConfig['showYAxis' + splitSection] = res[key].ShowY;
          this.ChartConfig['showXAxisLabel' + splitSection] = res[key].ShowX;
          this.ChartConfig['showYAxisLabel' + splitSection] = res[key].ShowY;
          this.ChartConfig['showLegend' + splitSection] = res[key].ShowDetail;
          this.ChartConfig['legendTitle' + splitSection] = res[key].DetailLabel;
          this.ChartConfig['backgroundColor' + splitSection] = res[key].BackgroundColor;
          this.ChartConfig['type' + splitSection] = res[key].Type;
          this.ChartConfig['top' + splitSection] = top + 'px';
          this.ChartConfig['left' + splitSection] = left + 'px';

          if (res[key].Type === 'vertical' || res[key].Type === 'horizontal' || res[key].Type === 'pie' || res[key].Type === 'gauge'
            || res[key].Type === 'card' || res[key].Type === 'tree' || res[key].Type === 'advancedpie' || res[key].Type === 'piegrid'
          )
            this.execReport(res[key].SpName, splitSection);

          if (res[key].Type === 'grid')
            this.execReportGrid(res[key].SpName, splitSection);

          if (res[key].Type === 'vertical2d' || res[key].Type === 'horizontal2d' || res[key].Type === 'line'
            || res[key].Type === 'stacked' || res[key].Type === 'normalized' || res[key].Type === 'horizontalNormalized'
            || res[key].Type === 'heatmap' || res[key].Type === 'polar')
            this.execReportGroup(res[key].SpName, splitSection);

          // console.log('top' + splitSection); 
          // console.log(this.ChartConfig['top' + splitSection]); 
          // console.log('left' + splitSection); 
          // console.log(this.ChartConfig['left' + splitSection]); 
        });


        dialogRef.close();
      }, err => {
        console.log(err);
        dialogRef.close();
      });
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  labelFormatting(c) {
    return `${(c.label)} Dağılım`;
  }

  execReport(spName, split) {

    const dialogRef = this.dialog.open(WaitComponent, {
      panelClass: 'transparent',
      disableClose: true
    });

    this.dashboardService.GetReporting(spName)
      .subscribe((res: any[]) => {
        this.ChartConfig['singleData' + split] = res;
        this.ChartConfig['yAxisLabel' + split] = res["value"];
        this.ChartConfig['xAxisLabel' + split] = res["name"];
        dialogRef.close();
      }, err => {
        console.log(err);
        dialogRef.close();
      });
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


  myObservable(observer) {
    setTimeout(() => {
      observer.next("");
      observer.complete();
    }, 1000);
  }



  execReportGrid(spName, split) {

    // const dialogRef = this.dialog.open(WaitComponent, {
    //   panelClass: 'transparent',
    //   disableClose: true
    // });

    // let observable = new Observable(this.myObservable);
    // this.showWaitScreen(observable);

    console.log(spName);
    this.dashboardService.GetReportingGrid(spName)
      .subscribe((res: any[]) => {

        this.ChartConfig['singleData' + split] = res;

        this.ChartConfig['dataSourceGrid' + split] = new MatTableDataSource();
        this.ChartConfig['dataSourceGrid' + split].paginator = this.usrPaginator;
        this.ChartConfig['dataSourceGrid' + split].sort = this.sort;
        if (res.length == 0) {
          //  dialogRef.close();
          return;
        }


        Object.keys(res[0]).forEach(element => {
          this.columnsArray.push({ label: element, property: element });
        });
        this.columns = this.columnsArray.map(column => column.property);
        this.ChartConfig['dataSourceGrid' + split].data = res;

        //  dialogRef.close();
      }, err => {
        console.log(err);
        // dialogRef.close();
      });
  }

  execReportGroup(spName, split) {

    // const dialogRef = this.dialog.open(WaitComponent, {
    //   panelClass: 'transparent',
    //   disableClose: true
    // });

    this.dashboardService.GetReportingGroup(spName)
      .subscribe((res: any[]) => {
        console.log(res);
        this.ChartConfig['multiData' + split] = res;

        // dialogRef.close();
      }, err => {
        console.log(err);
        // dialogRef.close();
      });
  }



  ngOnInit() {
    this.getReportDef();

  }

}
