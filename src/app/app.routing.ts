import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [

    // Redirect empty path to '/example'
    { path: '', pathMatch : 'full', redirectTo: 'student/connect' },

    // Redirect signed-in user to the '/connect'
    //
    // After the user signs in, the sign-in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    { path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'student/connect' },

    // Auth routes for guests
    {
        path: '',
        canMatch: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            { path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.module').then(m => m.AuthSignInModule)},
        ]
    },


    // Student routes
    {
        path: 'student',
        canMatch: [AuthGuard],
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        children: [
            { path: 'connect', loadChildren: () => import('app/modules/student/connect/connect.module').then(m => m.ConnectModule)},
            { path: 'events', loadChildren: () => import('app/modules/student/events/events.module').then(m => m.EventsModule)},
            { path: 'assignment', loadChildren: () => import('app/modules/student/assignment/assignment.module').then(m => m.AssignmentModule)},
            { path: 'test', loadChildren: () => import('app/modules/student/test/test.module').then(m => m.TestModule)},
            { path: 'support', loadChildren: () => import('app/modules/student/support/support.module').then(m => m.SupportModule)},
            { path: 'privacy-policy', loadChildren: () => import('app/modules/student/privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyModule)},
            { path: 'profile', loadChildren: () => import('app/modules/student/profile/profile.module').then(m => m.ProfileModule)},
            { path: 'notifications', loadChildren: () => import('app/modules/student/notifications/notifications.module').then(m => m.NotificationsModule)},
            { path: 'settings', loadChildren: () => import('app/modules/student/settings/settings.module').then(m => m.SettingsModule)},
            { path: 'clubs', loadChildren: () => import('app/modules/student/student-clubs/student-clubs.module').then(m => m.StudentClubsModule)},
            { path: 'announcement', loadChildren: () => import('app/modules/admin/announcements/announcement.module').then(m => m.AnnouncementModule)},
        ]
    },

    // Auth routes for authenticated users
    {
        path: '',
        canMatch: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            { path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.module').then(m => m.AuthSignOutModule)},
            { path: 'unlock-session', loadChildren: () => import('app/modules/auth/unlock-session/unlock-session.module').then(m => m.AuthUnlockSessionModule)}
        ]
    },

];
