import React from 'react'
import { Header } from './components/Header'
import { AboutUsSection } from './components/Sections/AboutUsSection'
import { FAQSection } from './components/Sections/FAQSection'
import { PortfolioSection } from './components/Sections/PortfolioSection'
import { LocationSection } from './components/Sections/LocationSection'
import { FeaturesSection } from './components/Sections/FeaturesSection'

import '../src/stylesheet/fullpage.scss'

export function App() {
  return (
    <React.Fragment>
      <Header />
      <div id='fullpage'>
        <AboutUsSection />
        <PortfolioSection />
        <FeaturesSection />
        <FAQSection />
        <LocationSection />
      </div>
    </React.Fragment>
  )
}