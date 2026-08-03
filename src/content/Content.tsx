import { AboutSection } from './About'
import { CareerSection } from './Career'
import { CareerDescriptionSection } from './CareerDescription'
import { CredentialsSection } from './Credentials'
import { EducationSection } from './Education'
import { LinksSection } from './Links'
import { OverviewSection } from './Overview'
import { SkillsSection } from './Skills'

/** 본문 섹션 순서 — header/navItems.ts의 순서와 맞춥니다. */
export function Content() {
  return (
    <main>
      <OverviewSection />
      <AboutSection />
      <SkillsSection />
      <CareerSection />
      <CareerDescriptionSection />
      <EducationSection />
      <CredentialsSection />
      <LinksSection />
    </main>
  )
}
