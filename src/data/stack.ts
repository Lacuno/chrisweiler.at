import {
	siOpenjdk,
	siKotlin,
	siSpring,
	siTypescript,
	siAngular,
	siReact,
	siNodedotjs,
	siPostgresql,
	siDocker,
	siKubernetes,
	siGitlab,
	siGithubactions,
} from 'simple-icons';

export interface StackItem {
	name: string;
	path: string;
	hex: string;
}

// Draft list — swap entries for whatever you actually use day to day.
export const stack: StackItem[] = [
	{ name: 'Java', path: siOpenjdk.path, hex: '437291' },
	{ name: 'Kotlin', path: siKotlin.path, hex: siKotlin.hex },
	{ name: 'Spring', path: siSpring.path, hex: siSpring.hex },
	{ name: 'TypeScript', path: siTypescript.path, hex: siTypescript.hex },
	{ name: 'Angular', path: siAngular.path, hex: 'DD0031' },
	{ name: 'React', path: siReact.path, hex: siReact.hex },
	{ name: 'Node.js', path: siNodedotjs.path, hex: siNodedotjs.hex },
	{ name: 'PostgreSQL', path: siPostgresql.path, hex: siPostgresql.hex },
	{ name: 'Docker', path: siDocker.path, hex: siDocker.hex },
	{ name: 'Kubernetes', path: siKubernetes.path, hex: siKubernetes.hex },
	{ name: 'GitLab', path: siGitlab.path, hex: siGitlab.hex },
	{ name: 'GitHub Actions', path: siGithubactions.path, hex: siGithubactions.hex },
];
