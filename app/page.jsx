import Hero from "@/components/hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { featuresData, howItWorksData, statsData, testimonialsData } from "@/data/landing";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="mt-40">
            <Hero />

            <section className="py-20 bg-blue-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {statsData.map((statsData, idx) => (
                            <div key={idx} className="text-center">
                                <div className="text-4xl font-bold text-blue-600 mb-2" >{statsData.value}</div>
                                <div className="text-gray-600" >{statsData.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Everything You Need to manage your finances</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" >
                        {featuresData.map((feature, idx) => (
                            <Card key={idx} className="p-6">

                                <CardContent className="space-y-4 pt-4" >
                                    {feature.icon}
                                    <h3 className="text-xl font-semibold" >{feature.title}</h3>
                                    <p className="text-gray-600" >{feature.description}</p>
                                </CardContent>

                            </Card>

                        ))}
                    </div>
                </div>

            </section>



            <section className="py-20 bg-blue-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8" >
                        {howItWorksData.map((step, idx) => (
                            <div key={idx} className="text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">{step.icon}</div>
                                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>

                        ))}
                    </div>
                </div>

            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        What Our User Say
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8" >
                        {testimonialsData.map((testimonial, idx) => (
                            <Card key={idx} className="p-6">

                                <CardContent className="pt-4" >
                                    <div className="flex items-center mb-4">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            width={40}
                                            height={40}
                                            className="rounded-full "
                                        />
                                        <div className="ml-4">
                                            <div className="font-semibold">{testimonial.name}</div>
                                            <div className="text-gray-600 text-sm">{testimonial.role}</div>

                                        </div>
                                    </div>
                                    <p className="text-gray-600">{testimonial.quote}</p>
                                </CardContent>

                            </Card>

                        ))}
                    </div>
                </div>

            </section>


            <section className="py-20 bg-blue-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-center mb-4">
                        Ready to Take Control of Your Finances?
                    </h2>

                    <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                        Join thousands of user who are already using our platform to manage their finances
                        smarter with our AI-powered tools.
                    </p>

                    <Link href={'/dashboard'}>
                        <Button
                            sixe="lg"
                            className="bg-white animate-bounce text-blue-600 hover:bg-blue-50"
                        >
                            Start Free Trial
                        </Button>

                    </Link>

                </div>

            </section>

        </div>
    )
}