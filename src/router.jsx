import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './layouts/Layout';
import Hero from './pages/hero/Hero';
import VisitingSection from './components/VisitingSection';
import { NotFound } from './pages/NotFound';
import SectionVideo from './components/SectionVideo';
import SectionGallery from './pages/gallery/SectionGallery';
import SectionTicket from './pages/tickets/SectionTicket';
import Parallax from './components/Parallax';
import Contacts from './pages/contacts/Contacts';
import FormBuyTickets from './pages/tickets/formBuyTickets/FormBuyTickets';
import WelcomeSection from './pages/welcomeSection/WelcomeSection';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path: '/',
          element: <Hero/>,
          errorElement: <NotFound/>
        },
        {
          path: '/explore',
          element: <VisitingSection/>
        },
      
        {
          path: '/tour',
          element: <WelcomeSection />
        },
        {
          path: '/video',
          element: <SectionVideo/>
        },
        {
          path: '/gallery',
          element: <SectionGallery/>
        },
        {
          path: '/tickets',
          element: <SectionTicket/>
        },
        {
          path: '/buy',
          element: <FormBuyTickets/>
        },
        {
          path: '/parallax',
          element: <Parallax/>
        },
        {
          path: '/contacts',
          element: <Contacts/>
        },
      ]
    }
  ]
)