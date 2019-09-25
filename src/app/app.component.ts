  
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent {
//   title = 'away-team';
// }

export class AppComponent { todoArray=[]
  deleteItem(){   console.log("delete item")  };
  addTodo(value){this.todoArray.push(value)} };
