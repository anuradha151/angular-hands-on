import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Recipe One', 'Testing recipe one', 'https://s3-ap-southeast-1.amazonaws.com/govi-bucket/image/IMAGE_MARKETING_1632480347.jpg'),
    new Recipe('Recipe Two', 'Testing recipe two', 'https://s3-ap-southeast-1.amazonaws.com/govi-bucket/image/IMAGE_MARKETING_1632413403.jpg'),
    new Recipe('Recipe Three', 'Testing recipe three', 'https://s3-ap-southeast-1.amazonaws.com/govi-bucket/image/IMAGE_MARKETING_1632216958.jpg'),
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
