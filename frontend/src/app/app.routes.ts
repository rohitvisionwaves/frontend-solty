import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome';
import { MemoryComponent } from './components/memory/memory';
import { ThankYouComponent } from './components/thank-you/thank-you';
import { ProposalComponent } from './components/proposal/proposal';
import { valentineDayGuard } from './guards/valentine-day.guard';

export const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'memories', component: MemoryComponent, canActivate: [valentineDayGuard] },
    { path: 'thank-you', component: ThankYouComponent, canActivate: [valentineDayGuard] },
    { path: 'proposal', component: ProposalComponent, canActivate: [valentineDayGuard] },
    { path: '**', redirectTo: '' }
];
