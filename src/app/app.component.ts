import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hw';

  username: string='';
  email: string='';
  selectedExperiences: string[] = [];
  languages: string[] = ['Java', 'Python', 'C++', 'C'];
  selectedLanguages: string[] = [];
  description: string='';

  experiences = [
      'beginner',
      'Intermediate',
      'Advanced',
      'Expert'
  ];

  onSubmit() {
      if (this.selectedExperiences.includes('Intermediate'))
        {
          alert('Congrats azad your skills are impresive');
      } else {
          console.log('Form submitted:', this);
      }
  }
}
