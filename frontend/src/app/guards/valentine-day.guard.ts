import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { isFullExperienceDay } from '../services/valentine-week';
import { ValentineAccessService } from '../services/valentine-access';

/** Allows access on 14 Feb or when the user unlocked the full experience from the Valentine tab. */
export const valentineDayGuard: CanActivateFn = () => {
  const router = inject(Router);
  const access = inject(ValentineAccessService);
  if (isFullExperienceDay(new Date())) return true;
  if (access.isUnlocked()) return true;
  const fromButton = router.getCurrentNavigation()?.extras?.state?.['fromValentineButton'];
  if (fromButton) {
    access.setUnlocked();
    return true;
  }
  return router.createUrlTree(['/']);
};
