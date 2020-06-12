import { DriverComponent } from './driver/driver/driver.component';
import { CustomerComponent } from './customer/customer/customer.component';
import { AdminComponent } from './admin/admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberListResolver } from './_resolver/member-list.resolver';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always',
    children: [
      {
        path: 'members',
        component: MemberListComponent,
        resolve: { users: MemberListResolver },
      },
      {
        path: 'admin',
        component: AdminComponent,
        data: { roles: ['Admin', 'Moderator'] },
      },
      {
        path: 'customer',
        component: CustomerComponent,
        data: { member: 'customer' },
      },
      {
        path: 'driver',
        component: DriverComponent,
        data: { member: 'driver' },
      },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
