import * as React from 'react';
import AboutDescription from '../components/AboutDescription/AboutDescription';
import AboutMe from '../components/AboutMe/AboutMe';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';

interface IAboutPageProps {
}

const AboutPage: React.FunctionComponent<IAboutPageProps> = (props) => {
  React.useEffect(() => {
    window.scroll(0,0)
  }, [])
  return (
    <>
      <TopNavigation pageTitle="About Us" />
      <PageTop pageTitle="About Us" />
      <AboutMe />
      <AboutDescription />
      <Footer />
    </>
  );
};

export default AboutPage;
