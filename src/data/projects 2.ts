export const personalRows = [
    [
        {
            id: "flashcard",
            size: "big",
            tile: {
                title: {
                    en: "Flashcard tool",
                    de: "Karteikarten-Tool",
                },
                image: "/flashcard-tool/flashcard-tool_landingpage.png",
                imageAlt: "Flashcard tool landing page",
            },
            preview: {
                title: {
                    en: "A flashcard tool I actually wanted to use",
                    de: "Ein Karteikarten-Tool, das ich wirklich nutzen wollte",
                },
                eyebrow: { en: "Web app", de: "Web-App" },
                description: {
                    en: "A web-based flashcard app with audio input, decks, and a review-scheduling algorithm. Works in any browser, on mobile and desktop.",
                    de: "Eine webbasierte Karteikarten-App mit Audio-Eingabe, Decks und einem Wiederholungsalgorithmus. Läuft in jedem Browser, mobil und am Desktop.",
                },
                liveHref: "https://flashcard-tool.pages.dev",
                liveLabel: { en: "Try it", de: "Ausprobieren" },
                mockupImage:
                    "/flashcard-tool/Mockuuups Free Transparent MacBook Neo Mockup.png",
                mockupAlt: "Flashcard tool shown on a MacBook",
                mockupBgClass:
                    "bg-gradient-to-br from-rose-100 via-fuchsia-100 to-indigo-100",
            },
        },
        {
            id: "logo",
            size: "small",
            tile: {
                title: { en: "S<st logo", de: "S<st-Logo" },
                image: "/logo-sest/logo_2F4F2F_linear_hor.svg",
                imageAlt: "S<st logo",
                imageFit: "contain",
                imagePadding: "p-8",
                bgClass: "bg-stone-100",
            },
            preview: {
                title: {
                    en: "Designing a logo from concept to final mark",
                    de: "Vom Konzept zum fertigen Logo",
                },
                eyebrow: { en: "Brand identity", de: "Markenidentität" },
                description: {
                    en: "A custom logotype for S<st: wordmark exploration, color studies, and final mockups.",
                    de: "Eine maßgeschneiderte Wortmarke für S<st: Schriftzug-Konzepte, Farbstudien und finale Mockups.",
                },
                githubHref: "https://github.com/emtchy/logo-sest",
                githubLabel: {
                    en: "View on GitHub",
                    de: "Auf GitHub ansehen",
                },
                mockupImage: "/logo-sest/logo_2F4F2F_quad_1024px.png",
                mockupAlt: "S<st logo, square mark",
                mockupBgClass: "bg-stone-100",
            },
        },
    ],
    [
        {
            id: "obsidian",
            size: "small",
            tile: {
                title: {
                    en: "Obsidian to-do plugin",
                    de: "Obsidian-To-do-Plugin",
                },
                gradient: "from-violet-400 via-violet-500 to-indigo-600",
                initial: "✓",
            },
            preview: {
                title: {
                    en: "A focused to-do view for Obsidian",
                    de: "Eine fokussierte To-do-Ansicht für Obsidian",
                },
                eyebrow: { en: "Plugin · Obsidian", de: "Plugin · Obsidian" },
                description: {
                    en: "A small Obsidian plugin that surfaces checklist items from across the vault into a single focused view. TypeScript, Obsidian API.",
                    de: "Ein kleines Obsidian-Plugin, das Checklisten-Einträge aus dem gesamten Vault in einer fokussierten Ansicht zusammenfasst. TypeScript, Obsidian-API.",
                },
                githubHref: "https://github.com/emtchy/obsidian-to-do-plugin",
                githubLabel: {
                    en: "View on GitHub",
                    de: "Auf GitHub ansehen",
                },
                mockupGradient: "from-violet-400 via-violet-500 to-indigo-600",
                mockupInitial: "✓",
            },
        },
        {
            id: "site",
            size: "big",
            tile: {
                title: { en: "This website", de: "Diese Website" },
                gradient: "from-amber-300 via-orange-400 to-rose-500",
                initial: "</>",
            },
            preview: {
                title: {
                    en: "The site you're reading",
                    de: "Die Seite, die du gerade liest",
                },
                eyebrow: { en: "Personal site", de: "Persönliche Website" },
                description: {
                    en: "Built with Astro and Tailwind, deployed via GitHub Pages. Designed to feel calm, image-led, and scroll-driven.",
                    de: "Gebaut mit Astro und Tailwind, gehostet auf GitHub Pages. Konzipiert als ruhige, bildgeführte und scroll-gesteuerte Seite.",
                },
                githubHref: "https://github.com/emtchy/emtchy.github.io",
                githubLabel: {
                    en: "View on GitHub",
                    de: "Auf GitHub ansehen",
                },
                mockupGradient: "from-amber-300 via-orange-400 to-rose-500",
                mockupInitial: "</>",
            },
        },
    ],
];

export const university = [
    {
        id: "os-cpp",
        tile: {
            title: { en: "An OS in C++", de: "Ein OS in C++" },
            gradient: "from-slate-700 via-slate-800 to-zinc-900",
            initial: "OS",
        },
        preview: {
            title: {
                en: "Building a tiny OS in C++",
                de: "Ein kleines OS in C++ entwickeln",
            },
            eyebrow: {
                en: "Systems · Coursework",
                de: "Systeme · Studium",
            },
            description: {
                en: "A small operating system kernel written in C++ for a systems course. Process & memory management, scheduling, syscalls.",
                de: "Ein kleiner Betriebssystem-Kernel in C++ für einen Systems-Kurs. Prozess- und Speicherverwaltung, Scheduling, Syscalls.",
            },
            githubHref: "#",
            githubLabel: { en: "View on GitHub", de: "Auf GitHub ansehen" },
        },
    },
    {
        id: "osm",
        tile: {
            title: {
                en: "OpenStreetMap explorer",
                de: "OpenStreetMap-Explorer",
            },
            gradient: "from-emerald-400 via-teal-500 to-sky-600",
            initial: "OSM",
        },
        preview: {
            title: {
                en: "An OpenStreetMap explorer",
                de: "Ein OpenStreetMap-Explorer",
            },
            eyebrow: { en: "Full-stack · OOP2", de: "Full-Stack · OOP2" },
            description: {
                en: "A Spring Boot full-stack app built on top of OpenStreetMap data. Search, filtering, and map-based browsing. Team project for OOP2.",
                de: "Eine Spring-Boot-Full-Stack-App auf Basis von OpenStreetMap-Daten. Suche, Filterung und kartenbasiertes Browsing. Teamprojekt für OOP2.",
            },
            githubHref: "#",
            githubLabel: { en: "View on GitHub", de: "Auf GitHub ansehen" },
        },
    },
];
