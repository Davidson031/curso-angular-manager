import { Component, OnInit } from "@angular/core";
import { Course } from './course';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit{

    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '/assets/images/forms.png',
                price: 100,
                code: 'XPS-8888',
                duration: 120,
                rating: 5,
                releaseDate: 'December, 2, 2019'
            },
            {
                id: 2,
                name: 'Django: Forms',
                imageUrl: '/assets/images/http.png',
                price: 150,
                code: 'XPS-1000',
                duration: 100,
                rating: 4,
                releaseDate: 'December, 3, 2019'
            }
        ]
    }

}