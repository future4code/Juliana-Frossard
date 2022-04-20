CREATE TABLE TodoListResponsibleUserTaskRelation (
	task_id VARCHAR(255),
    responsible_user_id VARCHAR(255),
    FOREIGN KEY (task_id) REFERENCES ToDoList(id),
    FOREIGN KEY (responsible_user_id) REFERENCES CreateTask(id)
);

INSERT INTO TodoListResponsibleUserTaskRelation(task_id, responsible_user_id)
VALUES(
"003",
"a"
);