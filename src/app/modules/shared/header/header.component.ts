import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../services/shared/shared.service';
import { DataService } from '../../../services/data/data.service';
import { UserService } from '../../../services/user/user.service';
import { ShopService } from '../../../services/shop/shop.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  
    public data;
    public orderTotal;
    public catalog;
    
    constructor(private sharedService: SharedService,
                private dataService: DataService, 
                private shopService: ShopService, 
                private userService: UserService) {
        this.data = this.sharedService.data;
        this.shopService.orderTotal.subscribe(result => {
            this.orderTotal = result;
        });
    }

    ngOnInit() {
        this.dataService.getAll('api/catalog').subscribe((result) => { 
            this.catalog = result;            
        });

        this.userService.isUserSignin().subscribe((result) => {      
            var state:any = result; 
            this.sharedService.setUserSignIn(state.signin);      
        });        
    }

}