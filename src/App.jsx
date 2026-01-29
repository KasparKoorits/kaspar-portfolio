import { memo, lazy, Suspense } from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import SceneHero from "./components/SceneHero.jsx";

// Lazy load sections below hero - improves initial page load
const SceneAbout = lazy(() => import("./components/SceneAbout.jsx"));
const SceneProjects = lazy(() => import("./components/SceneProjects.jsx"));
const SceneSkills = lazy(() => import("./components/SceneSkills.jsx"));
const SceneEducation = lazy(() => import("./components/SceneEducation.jsx"));
const SceneContact = lazy(() => import("./components/SceneContact.jsx"));

const backgrounds = ['bgBase', 'bgGrid', 'bgGrain', 'bgScanlines'].map((cls, i) =>
  memo(() => <div className={cls} />, { displayName: cls })
);

export default function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      {backgrounds.map((BgComponent, i) => <BgComponent key={i} />)}

      <Header />

      <main>
        <SceneHero />
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          {/* Suspense shows fallback while sections load */}
          <Suspense fallback={<div className="min-h-[400px]" />}>
            <SceneAbout />
            <SceneEducation />
            <SceneProjects />
            <SceneSkills />
            <SceneContact />
          </Suspense>
        </div>
        <Footer />
      </main>
    </LazyMotion>
  );
}
