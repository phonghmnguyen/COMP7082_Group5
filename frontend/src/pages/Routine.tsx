import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Dumbbell, Clock, Calendar, Play, TrendingUp, Flame, Award } from 'lucide-react'
import StatCard from '@/components/StatCard'

// This would typically come from your API or state management
const workoutRoutine = {
    weeklyPlan: [
        {
            day: "Monday",
            focus: "Upper Body",
            exercises: [
                { name: "Push-ups", sets: 3, reps: 12, videoUrl: "https://example.com/pushups-video" },
                { name: "Dumbbell Rows", sets: 3, reps: 10, videoUrl: "https://example.com/dumbbell-rows-video" },
                { name: "Shoulder Press", sets: 3, reps: 10, videoUrl: "https://example.com/shoulder-press-video" },
                { name: "Bicep Curls", sets: 3, reps: 12, videoUrl: "https://example.com/bicep-curls-video" },
            ],
            caloriesBurned: 300,
        },
        {
            day: "Wednesday",
            focus: "Lower Body",
            exercises: [
                { name: "Squats", sets: 3, reps: 15, videoUrl: "https://example.com/squats-video" },
                { name: "Lunges", sets: 3, reps: 10, videoUrl: "https://example.com/lunges-video" },
                { name: "Calf Raises", sets: 3, reps: 20, videoUrl: "https://example.com/calf-raises-video" },
                { name: "Glute Bridges", sets: 3, reps: 12, videoUrl: "https://example.com/glute-bridges-video" },
            ],
            caloriesBurned: 350,
        },
        {
            day: "Friday",
            focus: "Full Body",
            exercises: [
                { name: "Burpees", sets: 3, reps: 10, videoUrl: "https://example.com/burpees-video" },
                { name: "Mountain Climbers", sets: 3, reps: 20, videoUrl: "https://example.com/mountain-climbers-video" },
                { name: "Plank", sets: 3, duration: "30 seconds", videoUrl: "https://example.com/plank-video" },
                { name: "Jump Rope", sets: 3, duration: "1 minute", videoUrl: "https://example.com/jump-rope-video" },
            ],
            caloriesBurned: 400,
        },
    ],
    progress: 65,
    caloriesBurned: 1050,
    workoutsCompleted: 12,
    streakDays: 21,
    personalBests: 5,
    muscleGroups: {
        arms: 30,
        legs: 40,
        core: 20,
        back: 10,
    },
    fitnessScore: 720,
}

export default function Routine() {
    const [activeDay, setActiveDay] = useState(workoutRoutine.weeklyPlan[0].day.toLowerCase())

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <div className="w-full max-w-4xl">
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold text-center">Your Neurofit Journey</CardTitle>
                        <CardDescription className="text-center">Personalized workout routine and progress tracker</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                            <StatCard icon={Flame} title="Calories Burned" value={workoutRoutine.caloriesBurned} />
                            <StatCard icon={Calendar} title="Workouts Completed" value={workoutRoutine.workoutsCompleted} />
                            <StatCard icon={TrendingUp} title="Day Streak" value={workoutRoutine.streakDays} />
                            <StatCard icon={Award} title="Personal Bests" value={workoutRoutine.personalBests} />
                        </div>

                        <Card className="mb-6">
                            <CardHeader>
                                <CardTitle className="text-xl">Overall Progress</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center justify-between mb-2">
                                    <span>Fitness Score</span>
                                    <span className="font-bold">{workoutRoutine.fitnessScore}</span>
                                </div>
                                <Progress value={workoutRoutine.fitnessScore / 10} className="w-full h-2" />
                                <div className="mt-4 grid grid-cols-2 gap-4">
                                    {Object.entries(workoutRoutine.muscleGroups).map(([muscle, percentage]) => (
                                        <div key={muscle} className="flex flex-col">
                                            <div className="flex justify-between items-center mb-1">
                                                <span className="capitalize">{muscle}</span>
                                                <span className="text-sm">{percentage}%</span>
                                            </div>
                                            <Progress value={percentage} className="w-full h-1" />
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <Tabs value={activeDay} onValueChange={setActiveDay} className="w-full">
                            <TabsList className="grid w-full grid-cols-3">
                                {workoutRoutine.weeklyPlan.map((day) => (
                                    <TabsTrigger key={day.day} value={day.day.toLowerCase()}>
                                        {day.day}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                            {workoutRoutine.weeklyPlan.map((day) => (
                                <TabsContent key={day.day} value={day.day.toLowerCase()}>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="text-2xl">{day.day} - {day.focus}</CardTitle>
                                            <CardDescription>Estimated calorie burn: {day.caloriesBurned}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                                                <div className="space-y-4">
                                                    {day.exercises.map((exercise, index) => (
                                                        <div key={index} className="flex items-center justify-between border-b pb-2">
                                                            <div className="flex items-center space-x-2">
                                                                <Dumbbell className="w-5 h-5" />
                                                                <span className="font-medium">{exercise.name}</span>
                                                            </div>
                                                            <div className="flex items-center space-x-2">
                                                                <Badge variant="secondary">
                                                                    {exercise.sets} sets
                                                                </Badge>
                                                                <Badge variant="secondary">
                                                                    {exercise.reps ? `${exercise.reps} reps` : exercise.duration}
                                                                </Badge>
                                                                <Sheet>
                                                                    <SheetTrigger asChild>
                                                                        <Button variant="outline" size="icon">
                                                                            <Play className="h-4 w-4" />
                                                                        </Button>
                                                                    </SheetTrigger>
                                                                    <SheetContent side="bottom" className="w-[100%] sm:w-[540px] sm:max-w-none">
                                                                        <SheetHeader>
                                                                            <SheetTitle>{exercise.name} Demonstration</SheetTitle>
                                                                        </SheetHeader>
                                                                        <div className="mt-4 aspect-video">
                                                                            <video
                                                                                controls
                                                                                className="w-full h-full rounded-lg"
                                                                                src={exercise.videoUrl}
                                                                            >
                                                                                Your browser does not support the video tag.
                                                                            </video>
                                                                        </div>
                                                                    </SheetContent>
                                                                </Sheet>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </ScrollArea>
                                        </CardContent>
                                        <CardFooter>
                                            <Button className="w-full">
                                                <Clock className="w-4 h-4 mr-2" />
                                                Start {day.day}'s Workout
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </TabsContent>
                            ))}
                        </Tabs>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

