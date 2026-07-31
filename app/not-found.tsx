import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-5 text-center text-slate-950">
      <Image
        src="/texorweb-logo.png"
        alt="TexorWeb"
        width={220}
        height={90}
        className="h-auto w-40"
      />
      <p className="mt-10 text-sm font-black uppercase tracking-[0.2em] text-blue-600">
        Erreur 404
      </p>
      <h1 className="mt-4 max-w-xl text-4xl font-black tracking-[-0.04em] sm:text-5xl">
        Cette page n&apos;existe pas.
      </h1>
      <p className="mt-5 max-w-md text-lg leading-8 text-slate-600">
        Le lien est peut-être brisé ou la page a été déplacée. Retournez à
        l&apos;accueil pour continuer votre visite.
      </p>
      <Link
        href="/"
        className="mt-9 inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-blue-700"
      >
        Retour à l&apos;accueil
      </Link>
    </main>
  );
}
