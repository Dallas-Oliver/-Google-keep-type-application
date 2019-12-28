import uuid from "uuid/v4";

class Task {
  constructor(text) {
    this.text = text;
    this.uid = uuid();
    this.completed = false;
  }
}

export class CheckListNote {
  constructor() {
    this.tasks = [];
    this.completedList = [];
  }

  addItem(text) {
    if (text !== null || text !== "") {
      this.tasks.push(new Task(text));
    }
  }

  completeItem(taskIndex) {
    if (this.tasks[taskIndex]) {
      let finishedItem = this.tasks.splice(taskIndex, 1);
      this.completedList.push(finishedItem);
      finishedItem[0].completed = true;
      this.completedList.flat();
    }
  }
}

let checklist = new CheckListNote();

checklist.addItem("get groceries");
