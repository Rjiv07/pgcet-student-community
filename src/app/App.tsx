import { Route, Routes } from 'react-router-dom';
import { SiteLayout } from '../components/layout/SiteLayout';
import { HomePage } from '../pages/HomePage';
import { PgcetPage } from '../pages/PgcetPage';
import { ResourcesPage } from '../pages/ResourcesPage';
import { CommunityPage } from '../pages/CommunityPage';
import { ContributePage } from '../pages/ContributePage';
import { AboutPage } from '../pages/AboutPage';
import { NotFoundPage } from '../pages/NotFoundPage';

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="pgcet" element={<PgcetPage />} />
        <Route path="learn" element={<ResourcesPage />} />
        <Route path="community" element={<CommunityPage />} />
        <Route path="contribute" element={<ContributePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}