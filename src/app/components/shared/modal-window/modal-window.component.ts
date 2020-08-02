import { Component, OnInit, AfterViewInit, OnDestroy, Type } from '@angular/core';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})
export class ModalWindowComponent implements OnInit, AfterViewInit, OnDestroy {

  childComponentType: Type<any>;

  ngOnInit(): void {}
  
  ngAfterViewInit() {}

  ngOnDestroy() {}

  onOverlayClicked(evt: MouseEvent) {}

  onDialogClicked(evt: MouseEvent) {
    evt.stopPropagation()
  }
}