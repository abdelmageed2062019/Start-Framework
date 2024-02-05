import { Component } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { User } from '../user';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
  providers: [MyServiceService]
})

export class NotFoundComponent {

usersList: User[] = []

constructor(usersList: MyServiceService) {
  console.log(usersList);
}

}
