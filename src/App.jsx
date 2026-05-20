export default function PortfolioShell() {
  const projects = [
    {
      title: "BuildBattle Minecraft",
      category: "GameDev",
      description: "Plugin Minecraft inspiré des mini-jeux Hypixel avec système de vote et gestion de parties.",
    },
    {
      title: "TuClick",
      category: "Web / Streaming",
      description: "Plateforme de streaming vidéo inspirée de YouTube avec backend personnalisé.",
    },
    {
      title: "VPN Infrastructure",
      category: "Infrastructure",
      description: "Architecture VPN et monitoring pour serveurs Minecraft sous Linux.",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Navbar */}
      <header className="border-b border-zinc-800 bg-zinc-950/90 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">
            Alex<span className="text-zinc-400">Dev</span>
          </h1>

          <nav className="hidden md:flex gap-6 text-sm text-zinc-300">
            <a href="#about" className="hover:text-white transition">
              À propos
            </a>
            <a href="#projects" className="hover:text-white transition">
              Projets
            </a>
            <a href="#skills" className="hover:text-white transition">
              Compétences
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-zinc-400 uppercase tracking-[0.3em] text-sm mb-4">
            Portfolio GameDev & Infrastructure
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Développeur passionné par le GameDev et les systèmes.
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed max-w-xl mb-8">
            Étudiant en informatique spécialisé dans les projets Minecraft,
            l'infrastructure Linux, Docker et le développement backend.
          </p>

          <div className="flex gap-4 flex-wrap">
            <button className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition">
              Voir les projets
            </button>

            <button className="border border-zinc-700 px-6 py-3 rounded-2xl hover:bg-zinc-900 transition">
              GitHub
            </button>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
          <div className="aspect-video rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center text-zinc-500 text-lg">
            Screenshot / Vidéo projet
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="max-w-7xl mx-auto px-6 py-20 border-t border-zinc-900"
      >
        <div className="max-w-3xl">
          <h3 className="text-4xl font-bold mb-6">À propos</h3>

          <p className="text-zinc-400 leading-relaxed text-lg">
            Je développe des projets autour du GameDev, des serveurs Minecraft,
            du backend et de l'infrastructure Linux. J'aime concevoir des
            systèmes complets mêlant gameplay, réseau, Docker et monitoring.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="max-w-7xl mx-auto px-6 py-20 border-t border-zinc-900"
      >
        <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
          <div>
            <h3 className="text-4xl font-bold mb-2">Projets</h3>
            <p className="text-zinc-400">
              Une sélection de mes projets techniques et GameDev.
            </p>
          </div>

          <input
            type="text"
            placeholder="Rechercher un projet..."
            className="bg-zinc-900 border border-zinc-800 rounded-2xl px-4 py-3 text-sm w-full md:w-72 outline-none"
          />
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:-translate-y-1 transition duration-300 shadow-lg"
            >
              <div className="aspect-video bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center text-zinc-500">
                Image Projet
              </div>

              <div className="p-6">
                <span className="text-xs uppercase tracking-widest text-zinc-500">
                  {project.category}
                </span>

                <h4 className="text-2xl font-bold mt-2 mb-3">
                  {project.title}
                </h4>

                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex gap-3">
                  <button className="bg-white text-black px-4 py-2 rounded-xl text-sm font-medium hover:scale-105 transition">
                    Voir
                  </button>

                  <button className="border border-zinc-700 px-4 py-2 rounded-xl text-sm hover:bg-zinc-800 transition">
                    GitHub
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="max-w-7xl mx-auto px-6 py-20 border-t border-zinc-900"
      >
        <h3 className="text-4xl font-bold mb-12">Compétences</h3>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {[
            "Java / Spigot",
            "Linux / Rocky Linux",
            "Docker",
            "Networking / VPN",
            "Symfony / PHP",
            "C# / Avalonia",
            "Monitoring",
            "Game Systems",
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center text-zinc-300 hover:bg-zinc-800 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="max-w-7xl mx-auto px-6 py-20 border-t border-zinc-900"
      >
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 text-center">
          <h3 className="text-4xl font-bold mb-4">Contact</h3>

          <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
            Disponible pour une école spécialisée GameDev, des projets techniques
            et des collaborations autour du développement et de l'infrastructure.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition">
              Email
            </button>

            <button className="border border-zinc-700 px-6 py-3 rounded-2xl hover:bg-zinc-800 transition">
              GitHub
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 py-8 mt-10 text-center text-zinc-500 text-sm">
        © 2026 AlexDev — Portfolio GameDev & Infrastructure
      </footer>
    </div>
  );
}
