
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Dumbbell, Smartphone } from "lucide-react"

export default function NeuroFitLanding() {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="px-4 lg:px-6 h-14 flex items-center justify-between max-w-7xl mx-auto w-full">
                <a className="flex items-center justify-center" href="/">
                    <Brain className="h-6 w-6" />
                    <span className="ml-2 text-2xl font-bold">Neurofit</span>
                </a>
                <nav className="flex gap-4 sm:gap-6">
                    <a className="text-sm font-medium hover:underline underline-offset-4" href="#features">
                        Features
                    </a>
                    <a className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
                        Pricing
                    </a>
                    <a className="text-sm font-medium hover:underline underline-offset-4" href="#about">
                        About
                    </a>
                    <a className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
                        Contact
                    </a>
                </nav>
            </header>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                    Train Your Body. Sharpen Your Mind.
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                    Neurofit combines cutting-edge neuroscience with personalized fitness routines to optimize your physical and mental performance.
                                </p>
                            </div>
                            <div className="space-x-4">
                                <Button>Log In</Button>
                                <Button variant="outline">Sign Up</Button>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                    <div className="container mx-auto px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardContent className="flex flex-col items-center space-y-2 p-6">
                                    <Brain className="h-12 w-12 mb-2 text-primary" />
                                    <h3 className="text-xl font-bold">Cognitive Training</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                                        Enhance your mental acuity with brain-training exercises designed by neuroscientists.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="flex flex-col items-center space-y-2 p-6">
                                    <Dumbbell className="h-12 w-12 mb-2 text-primary" />
                                    <h3 className="text-xl font-bold">Adaptive Workouts</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                                        Personalized fitness routines that evolve with your progress and goals.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="flex flex-col items-center space-y-2 p-6">
                                    <Smartphone className="h-12 w-12 mb-2 text-primary" />
                                    <h3 className="text-xl font-bold">Mobile Integration</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                                        Seamlessly track your progress and access your routines on-the-go.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container mx-auto px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Our Users Say</h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardContent className="p-6">
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        "Neurofit has transformed my approach to fitness. I feel sharper and more energized than ever!"
                                    </p>
                                    <p className="mt-2 font-semibold">- Alex K.</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6">
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        "The cognitive exercises have improved my focus at work. It's like a gym for my brain!"
                                    </p>
                                    <p className="mt-2 font-semibold">- Sarah M.</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6">
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        "I love how Neurofit adapts to my progress. It keeps me challenged and motivated."
                                    </p>
                                    <p className="mt-2 font-semibold">- David L.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Transform Your Fitness Journey?</h2>
                                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                                    Join Neurofit today and experience the perfect synergy of physical and mental training.
                                </p>
                            </div>
                            <div className="space-x-4">
                                <Button size="lg">Learn More</Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="w-full py-6 border-t">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                        <p className="text-xs text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} Neurofit. All rights reserved.</p>
                        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                            <a className="text-xs hover:underline underline-offset-4" href="/terms">
                                Terms of Service
                            </a>
                            <a className="text-xs hover:underline underline-offset-4" href="/privacy">
                                Privacy
                            </a>
                        </nav>
                    </div>
                </div>
            </footer>
        </div>
    )
}