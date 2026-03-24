import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';

import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo';

type StatusFilter = 'all' | 'completed' | 'pending';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoList implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();
  private status: StatusFilter = 'all';

  allTodos: Todo[] = [];
  filteredTodos: Todo[] = [];

  totalCount = 0;
  showingCount = 0;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly todoService: TodoService,
  ) {}

  ngOnInit(): void {
    this.todoService.getTodos()
      .pipe(takeUntil(this.destroy$))
      .subscribe((todos) => {
        this.allTodos = todos.slice(0, 30);
        this.applyFilter();
      });

    // React to query param filter changes
    this.route.queryParamMap
      .pipe(takeUntil(this.destroy$))
      .subscribe((params) => {
        const raw = (params.get('status') ?? '').trim();
        this.status =
          raw === 'completed' ? 'completed' :
            raw === 'pending' ? 'pending' :
              'all';

        this.applyFilter();
      });
  }

  addTodo(title: string): void {
    const trimmed = title.trim();
    if (!trimmed) return;

    const nextId =
      this.allTodos.length === 0
        ? 1
        : Math.max(...this.allTodos.map(t => t.id)) + 1;

    const newTodo: Todo = {
      id: nextId,
      userId: 1,
      title: trimmed,
      completed: false,
    };

    this.allTodos = [newTodo, ...this.allTodos];
    this.applyFilter();
  }

  toggleTodo(todo: Todo): void {
    todo.completed = !todo.completed;
    this.applyFilter();
  }

  deleteTodo(todo: Todo): void {
    this.allTodos = this.allTodos.filter(t => t.id !== todo.id);
    this.applyFilter();
  }

  trackById(_: number, todo: Todo): number {
    return todo.id;
  }

  private applyFilter(): void {
    const base = this.allTodos;

    this.filteredTodos =
      this.status === 'completed'
        ? base.filter(t => t.completed)
        : this.status === 'pending'
          ? base.filter(t => !t.completed)
          : base;

    this.totalCount = this.allTodos.length;
    this.showingCount = this.filteredTodos.length;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
