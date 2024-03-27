import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title!: string;
  desc!: string;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const todo = {
      sno:8,
      title:this.title,
      desc:this.desc,
      active:true
    }
  }

}
