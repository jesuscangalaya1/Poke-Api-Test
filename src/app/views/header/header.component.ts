import { Component } from '@angular/core';
import { PipeService } from 'src/app/services/pipe.service';
import { debounceTime, Subject } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    searchValue = '';
    filtro = new Subject<string>();

    constructor(private readonly pipeService: PipeService) {
        this.filtro.pipe(debounceTime(200)).subscribe(value => {
            this.pipeService.SendMessage(value);
        })
    }

    onFilterClick() {
        this.filtro.next(this.searchValue);
    }

}
