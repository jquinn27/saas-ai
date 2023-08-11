import LandingContent from "@/components/landing-content";
import LandingFooter from "@/components/landing-footer";
import LandingHero from "@/components/landing-hero";
import LandingNavbar from "@/components/landing-navbar";

type Props = {};

export default async function LandingPage({}: Props) {
  return (
    <div className="h-full bg-neutral-900">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
      <LandingFooter />
    </div>
  );
}
