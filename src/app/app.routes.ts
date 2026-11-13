import { Routes } from '@angular/router';
import { AuthlayoutComponent } from './layout/authlayout/authlayout.component';
import { LoginloginComponent } from './features/loginlogin/loginlogin.component';
import { RegisterregisterComponent } from './features/registerregister/registerregister.component';
import { MainlayoutComponent } from './layout/mainlayout/mainlayout.component';
import { NotfoundnotfoundComponent } from './features/notfoundnotfound/notfoundnotfound.component';

import { loggedGuard } from './core/guards/logged-guard';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'',canActivate:[loggedGuard],component:AuthlayoutComponent,children:[
        {path:'login',loadComponent:()=>import('./features/loginlogin/loginlogin.component').then((c)=>c.LoginloginComponent),title: 'Route | login'},
        {path:'register',loadComponent:()=>import('./features/registerregister/registerregister.component').then((c)=>c.RegisterregisterComponent),title: 'Route | register'},
    ]},
    {path:'',
        component:MainlayoutComponent,
        canActivate:[authGuard],
        children:[
        {path:'feeds',loadComponent:()=>import('./features/feedsfeeds/feedsfeeds.component').then((c)=>c.FeedsfeedsComponent)},
        {path:'profile',loadComponent:()=>import('./features/profileprofile/profileprofile.component').then((c)=>c.ProfileprofileComponent)},
        {path:'notifcation',loadComponent:()=>import('./features/notifcationnotifcation/notifcationnotifcation.component').then((c)=>c.NotifcationnotifcationComponent)},
        {path:'postdetails/:id',loadComponent:()=>import('./features/post-details/post-details.component').then((c)=>c.PostDetailsComponent)}


    ]},
    {path:'**',component:NotfoundnotfoundComponent,title:'error'}
];
