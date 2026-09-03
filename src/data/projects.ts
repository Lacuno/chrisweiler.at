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
		image: '/projects/werkspur-terminal.webp',
		imageAlt: {
			de: 'Screenshot des Werkspur Werker-Terminals: Los-Etikett scannen und Warteschlange der Maschine',
			en: 'Screenshot of the Werkspur operator terminal: scanning a lot label and the machine queue',
		},
		mockup: 'dashboard',
	},
	{
		id: 'happyfoto',
		client: 'HappyFoto',
		url: 'https://www.happyfoto.at',
		title: {
			de: 'Fotobücher gestalten und bestellen per App',
			en: 'Design and order photo books from an app',
		},
		summary: {
			de: 'HappyFoto smart moments: Fotos auswählen, automatisch layouten, individuell anpassen und direkt bei Österreichs größtem Fotobuch-Produzenten bestellen.',
			en: "HappyFoto smart moments: pick photos, get an automatic layout, fine-tune it and order directly from Austria's largest photo-book producer.",
		},
		color: '#f2b727',
		image: '/projects/happyfoto-app.jpg',
		imageAlt: {
			de: 'Screenshot der HappyFoto smart moments App: Fotobuch-Seiten im Editor anpassen',
			en: 'Screenshot of the HappyFoto smart moments app: adjusting photo-book pages in the editor',
		},
		mockup: 'mobile',
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
