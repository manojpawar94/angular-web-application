import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DeployScheduleTxn } from 'src/app/models/DeployScheduleTxn';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FakeService } from 'src/app/services/fake.service';
import { MatDialog } from '@angular/material/dialog';
import { NotificationService } from 'src/app/services/notification.service';
import { Data } from 'src/app/services/Data';
import { Confirmation } from 'src/app/models/Confirmation';
import { ConfirmationDialogComponent } from '../../shared/confirmation-dialog/confirmation-dialog.component';
import { BuildProgressComponent } from '../build-progress/build-progress.component';

@Component({
  selector: 'app-product-schedule',
  templateUrl: './product-schedule.component.html',
  styleUrls: ['./product-schedule.component.css']
})
export class ProductScheduleComponent implements OnInit {
/* scheduleId: string;
    releaseName: string;
    releaseDesc: string;
    buildName?: string
    tagName: string;
    sitApporval: string;
    username: string;
    linux?: string;
    status?: string;
    active?: boolean;*/
  displayedColumns: string[] = ['scheduleId', 'releaseName', 'releaseDesc', 'tagName', 'username', 'sitApporval', 'status','action'];
  dataSource: MatTableDataSource<DeployScheduleTxn>; //data to be display in table

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _fake: FakeService,
    public dialog: MatDialog,
    private notifier: NotificationService,
    private data: Data) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this._fake.getListOfHistory());
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  triggerTeamcityBuild(deployTxn) {
    //creating confirmation payload object to pass dailog
    let confirmation: Confirmation = {
      action: 'Trigger',
      title: `Are you sure to trigger Teamcity Build "${deployTxn.scheduleId}:${deployTxn.releaseName}"?`,
      message: `You are trying to trigger the "${deployTxn.scheduleId}:${deployTxn.releaseName}" deployement. Once click on Trigger, it can be stopped. Please make sure all this are properly setup!`,
      buttonColor: 'primary'
    }

    //opening dialong with reference to make descission
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '450px',
      data: confirmation
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'Trigger') {
        this.notifier.showNotification(`${deployTxn.scheduleId}:${deployTxn.releaseName} has been confirm to Trigger`);
      } else {
        this.notifier.showNotification(`${deployTxn.scheduleId}:${deployTxn.releaseName} has been denied to Trigger`);
      }
    });
  }

  viewResults(){
    this.dialog.open(BuildProgressComponent);
  }

  enableDeployTxn(deployTxn) {
    //creating confirmation payload object to pass dailog
    let confirmation: Confirmation = {
      action: 'Enable',
      title: `Are you sure to Enable the Deployment "${deployTxn.scheduleId}:${deployTxn.releaseName}"?`,
      message: `You are trying to enable the "${deployTxn.scheduleId}:${deployTxn.releaseName}" deployement. This deployment configuration has already been triggered and current status is ${deployTxn.status}.`,
      buttonColor: 'primary'
    }

    //opening dialong with reference to make descission
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '450px',
      data: confirmation
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'Enable') {
        this.notifier.showNotification(`${deployTxn.scheduleId}:${deployTxn.releaseName} has been confirm to enable`);
      } else {
        this.notifier.showNotification(`${deployTxn.scheduleId}:${deployTxn.releaseName} has been denied to enable`);
      }
    });
  }
}
