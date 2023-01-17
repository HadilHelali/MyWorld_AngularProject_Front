import { TodoStatusEnum } from "../enum/todo-status.enum";

export class Todo {
    id: number;
    title: string;
    date: Date;
    description:string;
     status: TodoStatusEnum ;

  constructor(id=0,title='',date,description='',isCompleted=false ){
    this.id=id
    this.title=title
    this.date=date
    this.description=description
    this.status== TodoStatusEnum.waiting
  }
}
