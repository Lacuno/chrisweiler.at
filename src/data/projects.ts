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
		client: 'Jetlevel',
		url: 'https://www.jetlevel.com',
		title: {
			de: 'Charter-Buchung für Privatjets, rund um die Uhr',
			en: 'Around-the-clock private jet charter booking',
		},
		summary: {
			de: 'Anfrage- und Buchungsplattform für einen US-Charteranbieter mit Zugriff auf über 5.000 Flugzeuge.',
			en: 'Quote and booking platform for a US charter provider with access to more than 5,000 aircraft.',
		},
		color: '#1a1f3d',
		mockup: 'mobile',
	},
];
