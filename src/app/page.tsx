import Navbar from "@/sections/Navbar"
import Hero from "@/sections/Hero";
import LogoTicker from "@/sections/LogoTicker";
import Interaction from "@/sections/Interaction";
import Feature from "@/sections/Features";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <LogoTicker />
            <Interaction />
            <Feature />
        </>
    );
}
