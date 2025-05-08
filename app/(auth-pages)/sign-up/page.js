import { signUpAction } from "@/app/actions";
import { FormMessage } from "@/components/form-message";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Login(props) {
  const searchParams = await props.searchParams;
  return (
    
    <form className="w-full p-8 rounded-xl shadow-md  bg-gray-200 mx-auto">
      <h1 className="text-2xl font-medium">Sign up</h1>
      <p className="text-sm text-foreground">
        Already have an account?{" "}
        <Link className="text-foreground font-medium underline " href="/sign-in">
          Sign In
        </Link>
      </p>
      <div className="flex flex-col gap-4 [&>input]:b-3 mt-8">
        <Label htmlFor="email">Email</Label>
        <Input name="email" placeholder="you@example.com" className="border-gray-700 hover:border-blue-500" required />
        <div className="flex justify-between items-center">
          <Label htmlFor="password">Password</Label>
          <Link
            className="text-xs text-foreground underline "
            href="/forgot-password"
          >
            Forgot password?
          </Link>
        </div>
        <Input
          type="password"
          name="password"
          placeholder="Your password"
          className="border-gray-700 hover:border-blue-500"
          minLength={8}
          required
        />
        <Label htmlFor="confirmPassword">Confrim Password</Label>
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Your password"
          className="border-gray-700 hover:border-blue-500"
          
          required
        />
        <Button type="submit" formAction={signUpAction} className="hover:bg-amber-700">
          Sign up
        </Button>
        <FormMessage message={searchParams} />
      </div>
    </form>
  );
}
