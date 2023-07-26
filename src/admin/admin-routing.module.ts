import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component'; 
import { UserComponent } from './pages/user/user.component';
import { RightsComponent } from './pages/rights/rights.component';
import { DashboardComponent } from './pages';

const routes: Routes = [
    {
        path: '', component: AdminComponent, 
        children: [
            {path: 'dashboard', component: DashboardComponent},
            {path: 'user', component: UserComponent},
            {path: 'rights', component: RightsComponent}
        ]

    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {}

