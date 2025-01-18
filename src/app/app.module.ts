import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent // Certifique-se de que o AppComponent está aqui
  ],
  imports: [
    BrowserModule, // Módulos necessários
  ],
  bootstrap: [AppComponent] // O componente raiz deve ser declarado aqui
})
export class AppModule {}
