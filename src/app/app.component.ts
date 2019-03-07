import { Component, NgZone } from '@angular/core';
import { ElectronService } from 'ngx-electron';

import { MenuService } from "./services/menu.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-electron';
  private remote;
  private menu;
  private shell;

  constructor( 
    private ngZone: NgZone,
    private _electronService: ElectronService,
    private _MenuService: MenuService
  ) {

    this.shell = this._electronService.shell;
    this.remote = this._electronService.remote;
    
    // this.ngZone.run(() => {} );
    this.menu = this.remote.Menu.buildFromTemplate( this._MenuService.getMenuTemplate() );
    this.remote.Menu.setApplicationMenu( this.menu );
  }

  launchWindow() {
    this.shell.openExternal('https://google.com');
  }
}