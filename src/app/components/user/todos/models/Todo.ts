import { TodoStatusEnum } from "../enum/todo-status.enum";

export class Todo {
    id: number;
    name: string;
    date: Date;
    description:string;
     status: TodoStatusEnum ;

  constructor(id=0,name='',date,description='',isCompleted=false ){
    this.id=id
    this.name=name
    this.date=date
    this.description=description
    this.status== TodoStatusEnum.waiting
  }
}
