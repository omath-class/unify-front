import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { IftaLabelModule } from 'primeng/iftalabel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IftaLabelModule, InputTextModule, TranslateModule, RouterOutlet],
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
