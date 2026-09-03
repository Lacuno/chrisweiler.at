/**
 * Client logos shown in the proof strip. Each entry renders as a styled
 * wordmark unless `logo` points to an SVG in /public/logos/, in which case
 * the image is used instead.
 */
export interface Client {
	name: string;
	url?: string;
	/** Optional path to an SVG under /public, e.g. "/logos/happyfoto.svg". */
	logo?: string;
	/** Wordmark styling used when no logo file exists. */
	style: 'bold' | 'wide' | 'rounded' | 'italic' | 'mono' | 'light';
}

export const clients: Client[] = [
	{ name: 'Werkspur', url: 'https://werkspur.com', style: 'bold' },
	{ name: 'HappyFoto', url: 'https://www.happyfoto.at', logo: '/logos/happyfoto.svg', style: 'rounded' },
	{ name: 'Neuman Aluminium', url: 'https://www.neuman.at', style: 'wide' },
	{ name: 'Jet Level', url: 'https://www.jetlevel.aero', style: 'italic' },
	{ name: 'EOS', style: 'mono' },
	{ name: 'Tricentis', url: 'https://www.tricentis.com', style: 'light' },
];
