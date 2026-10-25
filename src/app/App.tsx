import { Route, Routes } from 'react-router-dom';
import { SiteLayout } from '../components/layout/SiteLayout';
import { HomePage } from '../pages/HomePage';
import { PgcetPage } from '../pages/PgcetPage';
import { CollegesPage } from '../pages/CollegesPage';
import { ResourcesPage } from '../pages/ResourcesPage';
import { CampusLifePage } from '../pages/CampusLifePage';
import { CareersPage } from '../pages/CareersPage';
import { CommunityPage } from '../pages/CommunityPage';
import { ContributePage } from '../pages/ContributePage';
import { AboutPage } from '../pages/AboutPage';
import { ContactPage } from '../pages/ContactPage';
import { PrivacyPage } from '../pages/PrivacyPage';
import { TermsPage } from '../pages/TermsPage';
import { NotFoundPage } from '../pages/NotFoundPage';

export default function App() {
  return <Routes><Route element={<SiteLayout />}><Route index element={<HomePage />} /><Route path="pgcet" element={<PgcetPage />} /><Route path="colleges" element={<CollegesPage />} /><Route path="learn" element={<ResourcesPage />} /><Route path="campus-life" element={<CampusLifePage />} /><Route path="careers" element={<CareersPage />} /><Route path="community" element={<CommunityPage />} /><Route path="contribute" element={<ContributePage />} /><Route path="about" element={<AboutPage />} /><Route path="contact" element={<ContactPage />} /><Route path="privacy" element={<PrivacyPage />} /><Route path="terms" element={<TermsPage />} /><Route path="*" element={<NotFoundPage />} /></Route></Routes>;
}