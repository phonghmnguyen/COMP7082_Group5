import { Card, CardContent } from "@/components/ui/card"

export default function StatCard({ icon: Icon, title, value }: { icon: React.ElementType, title: string, value: number }) {
    return (
        <Card>
            <CardContent className="flex flex-col items-center justify-center p-4">
                <Icon className="w-8 h-8 mb-2 text-primary" />
                <p className="text-sm text-center">{title}</p>
                <p className="text-2xl font-bold">{value}</p>
            </CardContent>
        </Card>
    )
}