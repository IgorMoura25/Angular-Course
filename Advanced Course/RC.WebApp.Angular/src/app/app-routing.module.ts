import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./navigation/not-found/not-found.component";
import { AuthGuard } from "./services/app.guard";

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/menu/home', pathMatch: 'full' },
    { path: 'menu', redirectTo: '/menu/home', pathMatch: 'full' },
    { path: 'menu', loadChildren: () => import('./navigation/navigation.module').then(m => m.NavigationModule) },
    { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
    { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), 
        canLoad: [AuthGuard] },

    { path: '**', component: NotFoundComponent }
];
@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        RouterModule.forRoot(rootRouterConfig, { useHash: false })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
