import type { Locale } from '../i18n';

export type MockupVariant = 'dashboard' | 'shop' | 'table' | 'mobile';

export interface Project {
	id: string;
	client: string;
	url?: string;
	title: Record<Locale, string>;
	summary: Record<Locale, string>;
	/** Card background; keep it a saturated brand-ish tone, text is white. */
	color: string;
	/** Optional real screenshot under /public, e.g. "/projects/werkspur.png". Replaces the CSS mockup. */
	image?: string;
	imageAlt?: Record<Locale, string>;
	mockup: MockupVariant;
}

// Titles and summaries are first drafts — adjust wording per project.
export const projects: Project[] = [
	{
		id: 'werkspur',
		client: 'Werkspur',
		url: 'https://werkspur.com',
		title: {
			de: 'Manufacturing Execution System für mittelständische Fertiger',
			en: 'Manufacturing execution system for mid-sized manufacturers',
		},
		summary: {
			de: 'Maschinendaten in Echtzeit, Werker-Terminals und Rückverfolgbarkeit. Läuft on-premise und ist in Tagen startklar.',
			en: 'Real-time machine data, operator terminals and traceability. Runs on-premise and is ready in days.',
		},
		color: '#1f4ed8',
		mockup: 'dashboard',
	},
	{
		id: 'happyfoto',
		client: 'HappyFoto',
		url: 'https://www.happyfoto.at',
		title: {
			de: 'Bestellplattform für personalisierte Fotoprodukte',
			en: 'Ordering platform for personalised photo products',
		},
		summary: {
			de: 'Für Österreichs größten Fotobuch-Produzenten: stabile Bestellprozesse und Anbindung an die Produktion.',
			en: "For Austria's largest photo-book producer: reliable ordering flows connected to production.",
		},
		color: '#f2b727',
		mockup: 'shop',
	},
	{
		id: 'neuman',
		client: 'Neuman Aluminium',
		url: 'https://www.neuman.at',
		title: {
			de: 'Digitale Prozesse für die Aluminium-Fertigung',
			en: 'Digital processes for aluminium manufacturing',
		},
		summary: {
			de: 'Interne Anwendungen für einen internationalen Zulieferer mit zwölf Werken weltweit.',
			en: 'Internal applications for an international supplier with twelve plants worldwide.',
		},
		color: '#2b6f8f',
		mockup: 'table',
	},
	{
		id: 'jetlevel',
		client: 'Jet Level',
		url: 'https://www.jetlevel.aero',
		title: {
			de: 'Digitale Abläufe für Privatjet-Eigentümer',
			en: 'Digital workflows for private jet owners',
		},
		summary: {
			de: 'Für ein Wiener Aviation Family Office, das Kauf, Betrieb und Charter von Business-Jets für seine Kunden abwickelt.',
			en: 'For a Vienna-based aviation family office that handles acquisition, operations and charter of business jets for its clients.',
		},
		color: '#1a1f3d',
		mockup: 'mobile',
	},
];
