import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Project { Name: string; Description?: string; Image?: string; Link?: string; Documentation?: string; }


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit {
  projects$!: Observable<Project[]>;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.projects$ = this.http.get<{ projects: Project[] }>('project.json')
      .pipe(map(data => data.projects));
  }
}
