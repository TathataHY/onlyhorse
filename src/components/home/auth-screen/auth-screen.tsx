import RotatedText from "@/components/decorators/rotated-text";
import UnderlinedText from "@/components/decorators/underlined-text";
import Pricing from "@/components/pricing";
import Features from "./features";
import HeroSection from "./hero-section";
import MasonryGrid from "./masonry-grid";
import Team from "./team";
import Testimonials from "./testimonials";
import TodaysHighlight from "./todays-highlight";

const AuthScreen = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />

      <div className="mb-20 mt-12">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-3xl md:text-5xl tracking-tight mt-4 mb-8 font-semibold text-center">
            Today's{" "}
            <UnderlinedText className="underline-offset-8 md:underline-offset-[12px] decoration-wavy">
              Highlight
            </UnderlinedText>
            <span className="text-2xl md:text-4xl ml-1">👇</span>
          </p>

          {/* Featured Post */}
          <div className="flex flex-col gap-10 mt-10">
            <TodaysHighlight />

            <div className="mt-24">
              <p className="text-2xl md:text-5xl text-center tracking-tighter font-bold">
                Meet the <RotatedText>Stars</RotatedText> of Our Farm
              </p>

              <MasonryGrid />
            </div>

            <Features />
            <Testimonials />
            <Pricing />
            <Team />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AuthScreen;
