import Tag from "@/components/Tag";
import FeatureCard from "@/components/FeatureCard";

const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    return(
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center ">
                <Tag>Features</Tag>
                </div>
                <h2 className="text-6xl font-medium text-center mt-6">
                    Where power meets
                     <span className="text-lime-400">simplicity
                        </span>
                        </h2>
                <div className="mt-12 grid grid-cols-1 gap-8">
                     <FeatureCard 
                     title="Real time Collaboration" 
                     description="Work together seamlessly with conflict-free editing"
                     >
                        

                     </FeatureCard>

                     <FeatureCard 
                     title="Interactive Prototyping" 
                     description="Engage your clients with prototypes that react to user">
                        
                     </FeatureCard>

                     <FeatureCard 
                     title="Keyboard Quick Actions" 
                     description="Powerful commands to help you create designs more quickly">
                        
                     </FeatureCard>
                    
                </div>
                <div>
                    {features.map(feature =>(
                            <div key={feature}>
                                <span></span>
                                <span>{features}</span>
                            </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
