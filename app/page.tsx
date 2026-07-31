import Image from "next/image";
import ContactForm from "./components/ContactForm";

const services = [
  {
    number: "01",
    title: "Création de sites web",
    description:
      "Des sites vitrines modernes, professionnels et adaptés à votre entreprise pour présenter clairement vos services.",
  },
  {
    number: "02",
    title: "Refonte de site",
    description:
      "Modernisation de votre site existant afin d’améliorer son apparence, sa rapidité et son efficacité.",
  },
  {
    number: "03",
    title: "Design personnalisé",
    description:
      "Une identité visuelle cohérente avec votre entreprise, vos couleurs et les attentes de vos clients.",
  },
  {
    number: "04",
    title: "Maintenance et soutien",
    description:
      "Modifications, mises à jour et accompagnement après la mise en ligne de votre site.",
  },
];

const benefits = [
  "Design professionnel et personnalisé",
  "Compatible avec les téléphones et tablettes",
  "Chargement rapide et structure optimisée",
  "Communication simple et transparente",
  "Accompagnement jusqu’à la mise en ligne",
  "Solution adaptée aux petites entreprises",
];

const projects = [
  {
    category: "Projet de démonstration",
    title: "Entreprise de construction",
    description:
      "Un site moderne conçu pour présenter les services, les réalisations et faciliter les demandes de soumission.",
  },
  {
    category: "Projet de démonstration",
    title: "Restaurant local",
    description:
      "Une présence en ligne chaleureuse permettant de présenter le menu, les horaires et les coordonnées.",
  },
  {
    category: "Projet de démonstration",
    title: "Travailleur autonome",
    description:
      "Une page professionnelle claire pour mettre en valeur une expertise, des services et générer des contacts.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-950">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#accueil" aria-label="Retour à l’accueil">
            <Image
              src="/texorweb-logo.png"
              alt="TexorWeb"
              width={270}
              height={110}
              priority
              className="h-auto w-44 sm:w-52"
            />
          </a>
          <nav
            aria-label="Navigation principale"
            className="hidden items-center gap-8 md:flex"
          >
            <a className="nav-link" href="#services">
              Services
            </a>
            <a className="nav-link" href="#realisations">
              Réalisations
            </a>
            <a className="nav-link" href="#apropos">
              À propos
            </a>
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </nav>
          <a
            href="#contact"
            className="hidden rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700 md:inline-flex"
          >
            Demander une soumission
          </a>
          <a
            href="#contact"
            className="rounded-full bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white md:hidden"
          >
            Contact
          </a>
        </div>
      </header>

      <section
        id="accueil"
        className="relative flex min-h-screen items-center pt-28"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-[-10rem] top-32 h-96 w-96 rounded-full bg-blue-100 blur-3xl" />
          <div className="absolute right-[-8rem] top-20 h-[30rem] w-[30rem] rounded-full bg-cyan-100/70 blur-3xl" />
          <div className="hero-grid absolute inset-0 opacity-40" />
        </div>
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              Création de sites web au Québec
            </div>
            <h1 className="max-w-4xl text-5xl font-black tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl">
              Votre entreprise mérite un site web{" "}
              <span className="text-blue-600">à sa hauteur.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              TexorWeb conçoit des sites modernes, rapides et adaptés aux
              petites entreprises qui souhaitent améliorer leur présence en
              ligne et générer davantage de demandes.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-4 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Obtenir une soumission gratuite
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-4 font-bold text-slate-900 transition hover:-translate-y-1 hover:border-blue-300 hover:text-blue-700"
              >
                Découvrir nos services
              </a>
            </div>
            <div className="mt-11 grid max-w-2xl grid-cols-2 gap-5 sm:grid-cols-3">
              <div>
                <p className="text-2xl font-black text-slate-950">100 %</p>
                <p className="mt-1 text-sm text-slate-500">Adapté au mobile</p>
              </div>
              <div>
                <p className="text-2xl font-black text-slate-950">Rapide</p>
                <p className="mt-1 text-sm text-slate-500">Chargement optimisé</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-2xl font-black text-slate-950">
                  Sur mesure
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Pour votre entreprise
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-8 -z-10 rounded-full bg-blue-200/50 blur-3xl" />
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 p-3 shadow-2xl shadow-slate-950/20">
              <div className="rounded-[1.4rem] bg-white p-6 sm:p-8">
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-400" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  </div>
                  <div className="h-3 w-24 rounded-full bg-slate-100" />
                </div>
                <Image
                  src="/texorweb-logo.png"
                  alt="Logo TexorWeb"
                  width={800}
                  height={350}
                  priority
                  className="mx-auto h-auto w-full"
                />
                <div className="mt-8 grid grid-cols-3 gap-3">
                  <div className="h-24 rounded-2xl bg-slate-100" />
                  <div className="h-24 rounded-2xl bg-blue-600" />
                  <div className="h-24 rounded-2xl bg-slate-100" />
                </div>
                <div className="mt-4 h-4 w-2/3 rounded-full bg-slate-100" />
                <div className="mt-3 h-4 w-1/2 rounded-full bg-slate-100" />
              </div>
            </div>
            <div className="absolute -bottom-7 -left-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:-left-10">
              <p className="text-sm font-semibold text-slate-500">
                Site professionnel
              </p>
              <p className="mt-1 font-black text-slate-950">
                Conçu pour convertir
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-7 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
          {[
            "Design moderne",
            "Site responsive",
            "Performance optimisée",
            "Service personnalisé",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center justify-center gap-3 text-center text-sm font-semibold sm:justify-start"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs">
                ✓
              </span>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="section-label">Nos services</p>
            <h2 className="section-title">
              Une solution web pensée pour votre réalité.
            </h2>
            <p className="section-description">
              TexorWeb vous accompagne de la première idée jusqu’à la mise en
              ligne avec une approche simple, claire et personnalisée.
            </p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="group rounded-[1.75rem] border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60 sm:p-9"
              >
                <div className="flex items-start justify-between gap-5">
                  <span className="text-sm font-black text-blue-600">
                    {service.number}
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-xl text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    ↗
                  </span>
                </div>
                <h3 className="mt-10 text-2xl font-black tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <p className="section-label">Notre méthode</p>
            <h2 className="section-title">
              Un processus simple, du premier contact à la mise en ligne.
            </h2>
            <p className="section-description">
              Chaque projet est structuré pour éviter les mauvaises surprises
              et vous permettre de suivre facilement son avancement.
            </p>
          </div>
          <div className="space-y-4">
            {[
              [
                "01",
                "Discussion",
                "Nous parlons de votre entreprise, de vos objectifs et de vos besoins.",
              ],
              [
                "02",
                "Proposition",
                "Vous recevez une offre claire avec le prix, les délais et les éléments inclus.",
              ],
              [
                "03",
                "Création",
                "Le site est conçu et développé en fonction de votre image.",
              ],
              [
                "04",
                "Mise en ligne",
                "Nous vérifions le site, connectons le domaine et procédons au lancement.",
              ],
            ].map(([number, title, description]) => (
              <article
                key={number}
                className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-600 font-black text-white">
                  {number}
                </span>
                <div>
                  <h3 className="text-lg font-black">{title}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="realisations" className="section-padding bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="section-label text-blue-400">Nos réalisations</p>
            <h2 className="section-title text-white">
              Des projets conçus pour inspirer confiance.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-400">
              Ces projets de démonstration présentent le style et les
              possibilités offertes par TexorWeb. Ils seront progressivement
              remplacés par de véritables réalisations.
            </p>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5"
              >
                <div className="flex aspect-[4/3] items-end bg-gradient-to-br from-blue-600 via-blue-800 to-slate-950 p-7">
                  <div className="w-full rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur">
                    <div className="mb-8 flex gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
                    </div>
                    <p className="text-5xl font-black text-white/20">
                      0{index + 1}
                    </p>
                  </div>
                </div>
                <div className="p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-400">
                    {project.category}
                  </p>
                  <h3 className="mt-4 text-2xl font-black">{project.title}</h3>
                  <p className="mt-4 leading-7 text-slate-400">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="apropos" className="section-padding bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-blue-600 p-8 text-white sm:p-12">
            <Image
              src="/texorweb-logo.png"
              alt="TexorWeb"
              width={700}
              height={320}
              className="h-auto w-full rounded-2xl bg-white p-5"
            />
            <div className="mt-8 border-t border-white/20 pt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">
                Notre mission
              </p>
              <p className="mt-4 text-2xl font-black leading-snug">
                Rendre le web professionnel accessible aux petites entreprises.
              </p>
            </div>
          </div>
          <div>
            <p className="section-label">À propos</p>
            <h2 className="section-title">
              Une jeune entreprise québécoise tournée vers le numérique.
            </h2>
            <div className="mt-7 space-y-5 text-lg leading-8 text-slate-600">
              <p>
                TexorWeb aide les petites entreprises, commerces locaux et
                travailleurs autonomes à bâtir une présence en ligne moderne et
                crédible.
              </p>
              <p>
                Notre approche repose sur la simplicité, une communication
                claire et des solutions adaptées aux besoins réels de chaque
                entreprise.
              </p>
              <p>
                Nous croyons qu’un bon site web ne doit pas seulement être beau.
                Il doit aussi présenter clairement votre valeur, fonctionner sur
                tous les appareils et faciliter le passage à l’action.
              </p>
            </div>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center font-bold text-blue-600 hover:text-blue-800"
            >
              Discuter de votre projet
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="section-label">Pourquoi TexorWeb</p>
              <h2 className="section-title">
                Une collaboration claire et un résultat professionnel.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 font-black text-blue-700">
                    ✓
                  </span>
                  <p className="font-bold text-slate-800">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="overflow-hidden rounded-[2.25rem] bg-slate-950">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="p-8 text-white sm:p-12 lg:p-14">
                <p className="section-label text-blue-400">Parlons-en</p>
                <h2 className="text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                  Prêt à améliorer votre présence en ligne?
                </h2>
                <p className="mt-6 max-w-lg text-lg leading-8 text-slate-400">
                  Présentez-nous votre entreprise et votre projet. Nous vous
                  répondrons avec une solution adaptée à vos besoins.
                </p>
                <div className="mt-10 space-y-5">
                  <div>
                    <p className="text-sm font-semibold text-slate-500">
                      Courriel
                    </p>
                    <a
                      href="mailto:contact@texorweb.com"
                      className="mt-1 block text-lg font-bold hover:text-blue-400"
                    >
                      contact@texorweb.com
                    </a>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-500">
                      Zone de service
                    </p>
                    <p className="mt-1 text-lg font-bold">Québec, Canada</p>
                  </div>
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
          <Image
            src="/texorweb-logo.png"
            alt="TexorWeb"
            width={240}
            height={100}
            className="h-auto w-40"
          />
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-600">
            <a href="#services" className="hover:text-blue-600">
              Services
            </a>
            <a href="#realisations" className="hover:text-blue-600">
              Réalisations
            </a>
            <a href="#apropos" className="hover:text-blue-600">
              À propos
            </a>
            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
          </div>
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} TexorWeb. Tous droits réservés.
          </p>
        </div>
      </footer>
    </main>
  );
}
