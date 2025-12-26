import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PageLoader } from '@/components/common/PageLoader';

const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Team = lazy(() => import('@/pages/Team'));
const TeamMemberProfile = lazy(() => import('@/pages/TeamMemberProfile'));
const EventDetails = lazy(() => import('@/pages/EventDetails'));
const Services = lazy(() => import('@/pages/Services'));
const Contact = lazy(() => import('@/pages/Contact'));
const Waitlist = lazy(() => import('@/pages/Waitlist'));
const NotFound = lazy(() => import('@/pages/NotFound'));

export const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team/:id" element={<TeamMemberProfile />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/waitlist" element={<Waitlist />} />
        {/* <Route path='/quotes' element={<Quotes />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
