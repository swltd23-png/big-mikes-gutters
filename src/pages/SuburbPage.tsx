import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import LandingPage from '../../components/LandingPage';
import { LOCATIONS } from '../constants/locations';
import { SERVICES } from '../constants/services';

const SuburbPage: React.FC = () => {
  const { pageSlug } = useParams<{ pageSlug: string }>();
  
  if (!pageSlug) {
    return <Navigate to="/" />;
  }

  // Find matching service
  // We check if the pageSlug ends with "-{service.slug}"
  // We need to be careful with overlapping slugs, so maybe sort by length descending if needed,
  // but current services are distinct enough.
  
  const matchedService = SERVICES.find(service => pageSlug.endsWith(`-${service.slug}`));

  if (!matchedService) {
    return <Navigate to="/" />;
  }

  // Extract suburb slug
  // pageSlug = "{suburbSlug}-{serviceSlug}"
  // suburbSlug = pageSlug - "-{serviceSlug}"
  const suffix = `-${matchedService.slug}`;
  const suburbSlug = pageSlug.slice(0, -suffix.length);

  const matchedLocation = LOCATIONS.find(loc => loc.slug === suburbSlug);

  if (!matchedLocation) {
    return <Navigate to="/" />;
  }

  return <LandingPage location={matchedLocation} service={matchedService} />;
};

export default SuburbPage;
