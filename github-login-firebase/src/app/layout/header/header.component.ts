import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  email = null;

  constructor(private auth : AuthService,
     private toastr : ToastrService,
     private router : Router) {
       auth.getUser().subscribe((user) => {
         this.email = user?.email;
       });
      }

  ngOnInit(): void {
  }

  async handleSignOut(){
    try{
      await this.auth.signOut();
      this.router.navigateByUrl('/signin');
      this.toastr.info("Login Again to Continue!")
      this.email = null;
    }
    catch(error){
      this.toastr.error('Something is wrong!')
    }

  }
}
