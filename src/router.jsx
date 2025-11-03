import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './layouts/Layout';
import Hero from './components/Hero';
import VisitingSection from './components/VisitingSection';
import { NotFound } from './pages/NotFound';
import SectionVideo from './components/SectionVideo';
import SectionGallery from '../src/pages/gallery/SectionGallery';
import SectionTicket from './components/SectionTicket';
import Parallax from './components/Parallax';
import Contacts from '../src/pages/contacts/Contacts';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path: '/museum',
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