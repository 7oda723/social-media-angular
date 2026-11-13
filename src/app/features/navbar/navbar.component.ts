import { Component, HostListener, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { AuthService } from '../../core/services/auth/auth.service';
import { MyTranslateService } from '../../core/services/translate/translate.service';
import { initDropdowns, initFlowbite } from 'flowbite';
import { TranslatePipe } from '@ngx-translate/core';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive,TranslatePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  open:boolean = false;

   ngAfterViewInit(): void {
    initFlowbite();
  }
  
  isOpen():void {
    this.open = !this.open;
  }

  private readonly logout = inject(AuthService);
  private readonly myTranslateService = inject(MyTranslateService)


  logoutNav(){
    this.logout.logout()
  }

  change(lang:string){
    this.myTranslateService.changeLang(lang)
  }

}
