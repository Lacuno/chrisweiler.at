import type { Locale } from '../i18n';

export interface Capability {
	emoji: string;
	title: Record<Locale, string>;
	items: Record<Locale, string[]>;
}

export const capabilities: Capability[] = [
	{
		emoji: '🧭',
		title: { de: 'Beraten', en: 'Consulting' },
		items: {
			de: ['Anforderungen klären', 'Software-Architektur', 'Technische Machbarkeit', 'Team-Setup & Prozesse', 'Code Reviews & Audits'],
			en: ['Clarifying requirements', 'Software architecture', 'Technical feasibility', 'Team setup & processes', 'Code reviews & audits'],
		},
	},
	{
		emoji: '🛠️',
		title: { de: 'Entwickeln', en: 'Building' },
		items: {
			de: ['Backend in Java & Kotlin', 'Frontend in TypeScript', 'REST & GraphQL APIs', 'Integrationen & Schnittstellen', 'Cloud- & On-Premise-Deployment'],
			en: ['Backend in Java & Kotlin', 'Frontend in TypeScript', 'REST & GraphQL APIs', 'Integrations & interfaces', 'Cloud & on-premise deployment'],
		},
	},
	{
		emoji: '🔁',
		title: { de: 'Weiterentwickeln', en: 'Maintaining' },
		items: {
			de: ['Betrieb & Monitoring', 'Performance & Stabilität', 'Refactoring von Altsystemen', 'Dokumentation', 'Übergabe an interne Teams'],
			en: ['Operations & monitoring', 'Performance & stability', 'Refactoring legacy systems', 'Documentation', 'Handover to internal teams'],
		},
	},
];
