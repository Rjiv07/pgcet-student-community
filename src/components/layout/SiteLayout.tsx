import { Outlet } from 'react-router-dom';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';

export function SiteLayout() {
  return (
    <div className="min-h-screen">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}