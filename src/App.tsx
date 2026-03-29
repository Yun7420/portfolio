import { BackgroundMusic } from './components/BackgroundMusic'
import { Header } from './components/Header'
import { SiteFooter } from './components/SiteFooter'
import { ConnectSection } from './components/sections/ConnectSection'
import { EducationSection } from './components/sections/EducationSection'
import { ExperienceSection } from './components/sections/ExperienceSection'
import { ExpertiseSection } from './components/sections/ExpertiseSection'
import { OverviewSection } from './components/sections/OverviewSection'
import { WorkSection } from './components/sections/WorkSection'

function App() {
  return (
    <div className="min-h-svh bg-[var(--color-surface)] text-zinc-200">
      <Header />
      <main>
        <OverviewSection />
        <ExpertiseSection />
        <ExperienceSection />
        <WorkSection />
        <EducationSection />
        <ConnectSection />
      </main>
      <SiteFooter />
      <BackgroundMusic />
    </div>
  )
}

export default App
