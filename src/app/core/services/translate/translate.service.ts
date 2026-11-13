

import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';


@Injectable({
  providedIn: 'root',
})
export class MyTranslateService  {


  private readonly translateService = inject(TranslateService)
  private readonly platformid = inject(PLATFORM_ID)

  constructor(){

    if (isPlatformBrowser(this.platformid)) {
      
    
    let savedLang = localStorage.getItem('lang')

    if (savedLang) {
      this.translateService.use(savedLang)
    }
    else{
      this.translateService.setFallbackLang('en')
    }

    this.changeDirection()

    }
  }

  changeDirection(){

    if (localStorage.getItem('lang') === 'en') {
      document.documentElement.dir='ltr';
      document.documentElement.lang='en'
    }
    else if (localStorage.getItem('lang') === 'ar') {
      document.documentElement.dir = 'rtl'
      document.documentElement.lang = 'ar'
    }
  }

  changeLang(lang:string){
    localStorage.setItem('lang',lang);
    this.translateService.use(lang)
    this.changeDirection()
  }
}
