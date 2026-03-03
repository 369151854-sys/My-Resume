/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import IntroSection from './components/IntroSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';

export default function App() {
  return (
    <div className="bg-[#f5f2ed] text-[#1a1a1a] font-sans selection:bg-zinc-300">
      <IntroSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
}
