import Button from "@/components/ui/Button";
import Image from "next/image";

const SplashScreen = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-white gap-2 px-6 h-screen overflow-hidden">
      <figure>
        <Image
          src="/keke-logo.jpg"
          alt="Keke Logo"
          width={240}
          height={10}
          className="object-contain"
        />
      </figure>

      <figure>
        <Image
          src="/images/amico.png"
          alt="Amico Illustration"
          width={120}
          height={120}
          className="object-contain"
        />
      </figure>

      <h2 className="text-primary-base font-extrabold text-center text-2xl md:text-4xl">
        Connecting Rural Communities
      </h2>
      <p className="text-black text-sm sm:text-base text-center max-w-xl">
        Your reliable transport solution in rural areas. Book rides, track
        vehicles, and manage your trips with ease.
      </p>

      <div className="mt-2">
        <Button href="/get-started">Get Started</Button>
      </div>
    </section>
  );
};

export default SplashScreen;
