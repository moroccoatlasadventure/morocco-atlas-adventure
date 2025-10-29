import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import MainLayout from '../components/layout/MainLayout';
import ErrorBoundary from '../components/common/ErrorBoundary/ErrorBoundary';

const Home = lazy(() => import('../pages/Home/Home.jsx'));
const About = lazy(() => import('../pages/About/About.jsx'));
const Tours = lazy(() => import('../pages/Tours/Tours.jsx'));
const Destinations = lazy(() => import('../pages/Destinations/Destinations.jsx'));
const Gallery = lazy(() => import('../pages/Gallery/Gallery.jsx'));
const Contact = lazy(() => import('../pages/Contact/Contact.jsx'));
import TourDetailPage from '../features/tours/pages/TourDetailPage.jsx'
import IndividualTourDetailPage from '../features/tours/pages/IndividualTourDetailPage.jsx'
import TrikkingTripsPage from '../features/trikkingTrips/pages/TrikkingTripsPage.jsx';

const LoadingSpinner = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    minHeight: '100vh' 
  }}>
    <div className="spinner">Loading...</div>
  </div>
);

const AppRoutes = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="tours" element={<Tours />} />
            <Route path="destinations" element={<Destinations />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<Contact />} />
            <Route path="/tour/:city" element={<TourDetailPage />} />
            <Route path="/tour-detail/:tourId" element={<IndividualTourDetailPage />} />
            <Route path="/trekking/:trikking" element={<TrikkingTripsPage />} />
          </Route>
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default AppRoutes;
