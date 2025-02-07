import Button from "@/components/Button";
import DesignExampleUm from "@/assets/images/design-example-1.png"
import DesignExampleDois from "@/assets/images/design-example-2.png"
import Image from "next/image";

export default function Hero() {
    return (
        <section className="py-24 overflow-x-clip">
            <div className="container relative ">
                <div className="absolute -left-32 top-16">
                    <Image 
                     src={DesignExampleUm}
                     alt="Example1" 
                     />
                </div>
                <div className="absolute -right-64 -top-16">
                <Image 
                     src={DesignExampleDois}
                     alt="Example2" 
                     />
                </div>
                <div className="flex justify-center ">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg text-neutral-950 font-semibold">
                        ✨ $7.5M donated for peoples
                    </div>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">Impactful design, created Alvarenga</h1>
                <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">Deign tools shouldn&apos;t slow you down. Layers combines powerful features with an intuitive interface
                    that keeps you in your creative flow.
                </p>

                <form className="flex border border-white/15 rounded-lg p-2 mt-8 md:max-w-lg mx-auto">
                    <input type="email" placeholder="Enter your email" className="bg-transparent px-4 md:flex-1" />
                    <Button size="sm" variant="primary" type="submit" className="whitespace-nowrap ml-[-30px]">Sign Up</Button>
                </form>
            </div>
        </section>

    );
}
