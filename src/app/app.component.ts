import { Component} from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from './MyComponents/todos/todos.component';
import {FormsModule} from '@angular/forms'
import { AboutComponent } from './MyComponents/about/about.component';
import { AppRoutingModule } from './app.routes';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppModule { }

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TodosComponent,FormsModule,AboutComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'cwh-todo-list';
  // constructor(){
  //   setTimeout(()=>{
  //     this.title="changed title"
  //   },2000);
  // }
}
