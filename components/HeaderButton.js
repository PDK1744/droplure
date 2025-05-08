import { signOutAction } from "@/app/actions"
import Link from "next/link"
import { Button } from "./ui/button"
import { createClient } from "@/utils/supabase/server"


export default async function HeaderButton() {
    const supabase = await createClient();

    const { data: { user } } = await supabase.auth.getUser();

    return user ? (
        <div className="space-x-4 flex">
            <form action={signOutAction} className="">
                <Button size="sm" variant={"destructive"} type="submit">Sign Out</Button>
            </form>
            <Button size="sm" variant={"blue"}>
                <Link href="/dashboard">Dashboard</Link>
            </Button>
           

        </div>
    ) : (
        <div className="space-x-4 flex">
            <Button size="sm" variant={"happy"}>
                <Link href="/sign-in">Sign In</Link>
            </Button>
            <Button size="sm" variant={"blue"}>
                <Link href="/sign-up">Sign Up</Link>
            </Button>
        </div>
    )
}