import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
    return (
        <>
        <MainNavigation />
        <main>
            <h1>An error occurred!</h1>
            <p>Page doesn't exist</p>
        </main>
    </>
    );
}
export  default ErrorPage;