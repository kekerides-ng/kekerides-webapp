import SplashScreen from "@/components/features/(onboarding-auth)/SplashScreen";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <main className="min-h-screen w-full py-8 px-6 bg-white">
        <SplashScreen />
      </main>
    </div>
  );
}
