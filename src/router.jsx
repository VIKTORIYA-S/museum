import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './layouts/Layout';
import Hero from './components/Hero';
import VisitingSection from './components/VisitingSection';
import { NotFound } from './pages/NotFound';
import SectionVideo from './components/SectionVideo';
import SectionGallery from './pages/gallery/SectionGallery';
import SectionTicket from './pages/tickets/SectionTicket';
import Parallax from './components/Parallax';
import Contacts from './pages/contacts/Contacts';
import FormBuyTickets from './pages/tickets/formBuyTickets/FormBuyTickets';

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
          path: '/visiting',
          element: <VisitingSection/>
        },
      
        {
          path: '/explore',
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