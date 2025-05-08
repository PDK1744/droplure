"use server"

import { encodedRedirect } from "@/utils/utils"
import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const signUpAction = async (formData) => {
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();
    const confirmPassword = formData.get("confirmPassword")?.toString();
    const supabase = await createClient();
    

    if (!email || !password || !confirmPassword) {
        return encodedRedirect(
            "error",
            "/sign-up",
            "Email and password are required",
        );
    }

    if (password !== confirmPassword) {
        return encodedRedirect(
            "error",
            "/sign-up",
            "Passwords do not match",
        );
    }

    const { data,error } = await supabase.auth.signUp({
        email,
        password,
        // options: {
        //     emailRedirectTo: `${origin}/auth/callback`,
        // },
    });

    if (error) {
        console.error(error.code + " ", error.message)
        return encodedRedirect("error", "/sign-up", error.message);
    } else if (data?.user?.identities?.length === 0) {
        return encodedRedirect(
            "error",
            "/sign-in",
            "Email already registered. Please sign in.",
        )

    } else {
        return encodedRedirect(
            "success",
            "/dashboard",
            "Thanks for signing up! Please check your email to verify your account.",
        );
    }
    
};

export const signInAction = async (formData) => {
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();
    const supabase = await createClient();
    
    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,

    });

    if (error) {
        return encodedRedirect("error", "/sign-in", error.message);

    }
    return redirect("/dashboard")
};

export const forgotPasswordAction = async (formData) => {
    const email = formData.get("email")?.toString();
    const supabase = await createClient()
    const origin = (await headers()).get("origin");
    const callbackUrl = formData.get("callbackUrl")?.toString();

    if (!email) {
        return encodedRedirect(
            "error",
            "/forgot-password",
            "Email is required",
        )
    }

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${origin}/auth/callback?redirect_to=/dashbaord/reset-password`,
    });

    if (error) {
        console.error(error.message)
        return encodedRedirect(
            "error",
            "/forgot-password",
            "Could not reset password",
        )
    }

    if (callbackUrl) {
        return redirect(callbackUrl);
    }

    return encodedRedirect(
        "success",
        "/forgot-password",
        "If your email is in our system, you will receive instructions about how to reset your password",
    )
};

export const resetPasswordAction = async (formData) => {
    const supabase = await createClient();

    const password = formData.get("password")?.toString();
    const confirmPassword = formData.get("confirmPassword")?.toString();

    if (!password || !confirmPassword) {
        encodedRedirect(
            "error",
            "/dashboard/reset-password",
            "Password and confirm password are required",
        )
    }

    if (password !== confirmPassword) {
        encodedRedirect(
            "error",
            "/dashboard/reset-password",
            "Passwords do not match",
        )
    }

    const { error} = await supabase.auth.updateUser({
        password
    });

    if (error) {
        encodedRedirect(
            "error",
            "/dashboard/reset-password",
            "Password update failed",
        )
    }

    encodedRedirect(
        "sucess",
        "/dashboard/reset-password",
        "Password updated",
    )
};
export const signOutAction = async () => {
    const supabase = await createClient()
    await supabase.auth.signOut();
    return redirect("/");
}