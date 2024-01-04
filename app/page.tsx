import { Header } from "./components/header";
import { HeaderMobileMenu } from "./components/header-mobile-menu";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Testimonial } from "./components/testimonial";
import { FAQ } from "./components/faq";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";

export default function Home() {
    return (
        <>
            <Header />
            <HeaderMobileMenu />
            <Hero />
            <div className="w-full lg:bg-services-bg lg:bg-no-repeat lg:bg-contain">
                <About />
                <Services />
            </div>
            <Testimonial />
            <FAQ />
            <Contact />
            <Footer />
        </>
    );
}
