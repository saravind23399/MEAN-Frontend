import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { UserComponent } from 'src/app/user/user.component';

const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'user', component: UserComponent }

];

export const routing = RouterModule.forRoot(APP_ROUTES);