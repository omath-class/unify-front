import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslateModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'unify-front';

  constructor(public translate: TranslateService) {
    const browserLang = navigator.language.split('-')[0]; // Detecta o idioma do navegador
    translate.use(browserLang.match(/en|pt/) ? browserLang : 'en'); // Usa 'en' como padrão
  }  
}
