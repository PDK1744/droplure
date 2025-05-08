export default async function Layout({ children }) {
    return (
        <div className="min-h-screen w-full max-w-[30%] min-w-[320px] mx-auto flex items-center justify-center p-4">{children}</div>
    )
}