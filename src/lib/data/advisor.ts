export type AdvisorTheme = {
	name: string;
	accent: string;
	accent2: string;
	bg: string;
	text: string;
};

export type Stat = { label: string; value: string };
export type Method = { icon: string; title: string; description: string };
export type Service = { title: string; outcome: string; includes: string[] };

export type Training = { title: string; description: string };

export type BookingFeature = { icon: string; title: string; description: string };

export type Booking = {
	badge: string;
	heading: string;
	description: string;
	features: BookingFeature[];
	ctaLabel: string;
	ctaHref: string;
	subtext: string;
};

export type StorySection = {
	heading?: string;
	paragraphs: string[];
};

export type Story = {
	title: string;
	sections: StorySection[];
	training: Training[];
};

export type AboutHeader = {
	title: string;
	quote: string;
	cardHeading: string;
	cardDescription: string;
	backgroundSrc?: string;
};

export type Impressum = {
	name: string;
	address: string;
	country: string;
	contact: string;
	steuernummer: string;
	hinweis: string;
	haftung: string;
	urheberrecht: string;
	stand: string;
};

export type DatenschutzSection = { title: string; content: string };

export type Datenschutz = {
	subtitle: string;
	sections: DatenschutzSection[];
	stand: string;
};

export type Legal = {
	impressum: Impressum;
	datenschutz: Datenschutz;
};

export type AdvisorProfile = {
	displayName: string;
	tagline: string;
	heroHeadline: string;
	heroSubcopy: string;
	topics: string[];
	stats: Stat[];
	portraitSrc: string;
	aboutPortraitSrc: string;
	backgroundSrc: string;
	quotes: string[];
	aboutHeader: AboutHeader;

	story: Story;
	methods: Method[];
	services: Service[];

	booking: Booking;
	legal: Legal;
	theme: AdvisorTheme;
};

export const advisor: AdvisorProfile = {
	displayName: 'Maris',
	tagline: 'Der heutige Tag bringt Licht und eine Wendung.',

	heroHeadline: 'Der heutige Tag bringt Licht und eine Wendung.',
	heroSubcopy:
		'Ich begleite dich hellfühlig auf deinem Weg zu mehr Ruhe, innerem Frieden und Klarheit. Mit Seelenreinigung, der Neutralisation negativer Energien, Trauerbegleitung, der Lösung seelischer Blockaden und einfühlsamer Tierkommunikation darf dein Weg wieder leichter werden.',
	
	topics: [
		'Seelenreinigung',
		'Negative Energien',
		'Trauerbegleitung',
		'Seelische Blockaden',
		'Tierkommunikation'
	],

	stats: [
		{ label: 'Jahre Erfahrung', value: '20+' },
		{ label: 'Beratungen', value: '6.000+' },
		{ label: 'Beratungsstil', value: 'Einfühlsam & direkt' }
	],

	portraitSrc: '/images/maris-portrait.png',
	aboutPortraitSrc: '/images/maris-portrait-about.jpg',
	backgroundSrc: '/images/maris-hero-bg.png',

	aboutHeader: {
		title: 'Ruhe und Vertrauen',
		quote: 'Ruhe und Vertrauen sind die Pfeiler meiner Zeit mit dir.',
		cardHeading: 'Wenn sich alles zu schwer anfühlt',
		cardDescription:
			'Trauer, unerklärliche dunkle Energien, Blockaden, offene Fragen und Angst können dein ganzes Leben überschatten. Gemeinsam bringen wir Licht in das, was dich belastet, damit du wieder ruhiger schlafen, das Gedankenkarussell anhalten und deinen Alltag leichter leben kannst.',
		backgroundSrc: '/images/maris-bg-about.jpg'
	},

	quotes: [
		'Ich erspüre Blockaden, Belastungen und offene Fragen, die ein normales Leben nahezu unmöglich machen – damit du wieder leichter atmen und deinen Weg sehen kannst.',
		'Ruhe und Vertrauen sind die Pfeiler meiner Zeit mit dir. In einem geschützten Raum darf alles da sein – ohne Bewertung, ohne Druck.'
	],

	story: {
		title: 'Meine Geschichte',
		sections: [
			{
				paragraphs: [
					'„Ich wurde verflucht, ich spüre es!“ – solche Hilferufe bekomme ich heute beinahe täglich. Dahinter steht oft der tiefe Wunsch nach Selbstheilung und innerem Frieden. Lange Zeit wusste ich selbst nicht, was mit mir geschieht, wenn sich vor meinem inneren Auge wie von selbst Bilder, Gefühle und offene Seiten eines Buches zeigen.',
					'Es dauerte Jahre, bis ich verstand, was da bei mir vorging: Hellfühligkeit. Endlich hatte ich einen Namen für das, was mich schon so lange begleitet hatte. Seitdem helfe ich Menschen, die sich von dunklen Energien, Trauer, Angst und inneren Blockaden nahezu gelähmt fühlen – und bin dankbar, so vielen seelische Erleichterung und Frieden schenken zu dürfen.'
				]
			},
			{
				heading: 'Ein Schlüsselmoment mit Tatze',
				paragraphs: [
					'Zudem empfange ich seit einiger Zeit Botschaften von Tieren. Ein Schlüsselmoment war der Abschied von Tatze, dem Kater einer Bekannten. Sie saß auf meinem Sofa, in tiefer Trauer und mit der quälenden Frage, ob sie ihn zu spät zum Tierarzt gebracht hatte.',
					'Aus einem Impuls heraus sagte ich: „Du hättest nichts tun können, es war an der Zeit. Er wollte zu Hause gehen. Bei dir. Und er liebt dich so sehr.“ Ich wusste es einfach – ich „hörte“ seine Gefühle. In diesem Moment weinten wir gemeinsam. Seitdem ist die Tierkommunikation eine Herzensaufgabe für mich geworden.'
				]
			},
			{
				heading: 'Mein Ansatz in der Beratung',
				paragraphs: [
					'Ich freue mich, dich auf deinem Weg zu mehr Lebensfreude und Klarheit begleiten zu dürfen. Trauer, unerklärliche dunkle Energien, Blockaden, offene Fragen und Angst können dein Leben und dein Sein tief negativ beeinflussen. Gemeinsam schauen wir dorthin, wo es wehtut – in deinem Tempo und in einem sicheren Rahmen.',
					'Durch meine Hellfühligkeit, unterstützt durch Healing Water Orakel Karten sowie meine Meeres Steine, ist es mir möglich, starke negative Energien zu entkräften, deine Seele zu reinigen, Trauer zu mildern und in tieferen Kontakt mit dir selbst zu kommen. Ruhe und Vertrauen sind die Pfeiler meiner Zeit mit dir.'
				]
			}
		],
		training: [
			{
				title: '20+ Jahre Erfahrung',
				description:
					'Seit über 20 Jahren begleite ich Menschen hellfühlig durch schwere Zeiten, Krisen und Übergänge – mit besonderem Fokus auf Seelenreinigung, Trauer und negative Energien.'
			},
			{
				title: 'Hellfühligkeit & Werkzeuge',
				description:
					'Meine Arbeit vereint Hellfühligkeit mit Healing Water Orakel Karten und Meeres Steinen. Diese Werkzeuge unterstützen dabei, Unsichtbares sichtbar zu machen und belastende Energien zu wandeln.'
			},
			{
				title: 'Tierkommunikation als Herzensaufgabe',
				description:
					'Die Begleitung von Mensch und Tier – besonders in Zeiten von Verlust und Abschied – ist ein wichtiger Teil meiner Arbeit geworden. Botschaften aus der Tierseele können Trost, Verständnis und Frieden schenken.'
			}
		]
	},

	methods: [
		{
			icon: '◎',
			title: 'Hellfühligkeit',
			description:
				'Ich erspüre Blockaden, Belastungen und offene Fragen, die wie dunkle Energien auf deiner Seele liegen und dein Leben schwer machen.'
		},
		{
			icon: '🌊',
			title: 'Healing Water Orakel',
			description:
				'Orakelkarten, die Bilder, Gefühle und Zusammenhänge an die Oberfläche bringen und so Klarheit und Orientierung schenken.'
		},
		{
			icon: '🪨',
			title: 'Meeres Steine',
			description:
				'Erdende und klärende Begleiter, die während der Sitzung Ruhe, Stabilität und einen sicheren Anker geben.'
		},
		{
			icon: '🐾',
			title: 'Tierkommunikation',
			description:
				'Feinfühliger Kontakt zu Tierseelen – besonders in Zeiten von Verlust, Trauer oder offenen Fragen rund um dein Tier.'
		},
		{
			icon: '♡',
			title: 'Beratungsstil',
			description: 'Einfühlsam, ehrlich, direkt und verständnisvoll – auf Augenhöhe und ohne Bewertung.'
		},
		{
			icon: '✦',
			title: 'Erfahrung',
			description: 'Über 20 Jahre gelebte Praxis mit tausenden Beratungen und ein tiefes Verständnis für seelische Prozesse.'
		}
	],

	services: [
		{
			title: 'Seelenreinigung',
			outcome: 'Wenn sich deine Seele schwer anf\u00fchlt und du wieder frei atmen m\u00f6chtest.',
			includes: [
				'Behutsames Ersp\u00fcren dessen, was dich belastet',
				'Energiearbeit zur Kl\u00e4rung und Reinigung',
				'Impulse, wie du Leichtigkeit in deinen Alltag holen kannst'
			]
		},
		{
			title: 'Negative Energien neutralisieren',
			outcome: 'Wenn du das Gef\u00fchl hast, von dunklen Energien umgeben zu sein.',
			includes: [
				'Aufsp\u00fcren von energetischen Belastungen',
				'St\u00e4rkung deiner eigenen Kraft und deines Schutzes',
				'Kl\u00e4rende Impulse f\u00fcr deinen weiteren Weg'
			]
		},
		{
			title: 'Begleitung bei Trauer',
			outcome: 'Wenn Verlust und Schmerz deinen Alltag bestimmen.',
			includes: [
				'Gesch\u00fctzter Raum f\u00fcr alle Gef\u00fchle',
				'Sanfte Entlastung und Stabilisierung',
				'Unterst\u00fctzung, um Schritt f\u00fcr Schritt wieder ins Leben zu finden'
			]
		},
		{
			title: 'Seelische Blockaden l\u00f6sen',
			outcome: 'Wenn dein Leben \u201esteht\u201c und du nicht wei\u00dft, warum.',
			includes: [
				'Hellf\u00fchlige Wahrnehmung innerer Blockaden',
				'Deutung von Mustern und Wiederholungen',
				'Licht in Themen bringen, die dich schon lange begleiten'
			]
		},
		{
			title: 'Tierkommunikation',
			outcome: 'Wenn du dein Tier vermisst oder offene Fragen bleiben.',
			includes: [
				'Feinf\u00fchliger Kontakt zu deinem Tier',
				'Botschaften, die Trost, Verst\u00e4ndnis und Frieden schenken k\u00f6nnen',
				'Unterst\u00fctzung im Umgang mit Abschied, Schuldgef\u00fchlen oder Unsicherheit'
			]
		}
	],

	booking: {
		badge: 'Beratung auf LuniNora',
		heading: 'Buche jetzt deine Beratung mit Maris',
		description:
			'Ich begleite dich hellfühlig und klar – mit Seelenreinigung, der Neutralisation negativer Energien, Trauerbegleitung, der Lösung seelischer Blockaden und Tierkommunikation. In jeder Sitzung geht es darum, dass du leichter, ruhiger und mit mehr innerem Frieden weitergehen kannst.',
		features: [
			{
				icon: '📞',
				title: 'Einfacher Start',
				description: 'Die Beratung findet bequem online über LuniNora statt – von überall aus.'
			},
			{
				icon: '♡',
				title: 'Einfühlsame Begleitung',
				description: 'Mit über 20 Jahren Erfahrung und tausenden Beratungen an deiner Seite.'
			},
			{
				icon: '✨',
				title: 'Klarheit & Ruhe',
				description: 'Hellfühligkeit, Orakelkarten und Meeres Steine vereint für mehr Licht auf deinem Weg.'
			}
		],
		ctaLabel: 'Jetzt Beratung auf LuniNora starten',
		ctaHref: 'https://luninora.de',
		subtext: 'Du musst das nicht alleine tragen.'
	},

	legal: {
		impressum: {
			name: 'Maris [Nachname – Platzhalter]',
			address: '[Straße, Hausnummer]\n[PLZ] [Ort]',
			country: 'Deutschland',
			contact: 'E-Mail: [E-Mail-Adresse von Maris einfügen]',
			steuernummer: '[Steuernummer ergänzen]',
			hinweis:
				'Diese Website dient ausschlie\u00dflich der Pr\u00e4sentation. Alle Beratungen finden ausschlie\u00dflich \u00fcber die Plattform LuniNora statt.',
			haftung:
				'Die Inhalte dieser Website wurden mit gr\u00f6\u00dfter Sorgfalt erstellt. F\u00fcr die Richtigkeit, Vollst\u00e4ndigkeit und Aktualit\u00e4t der Inhalte kann ich jedoch keine Gew\u00e4hr \u00fcbernehmen.',
			urheberrecht:
				'Die von mir erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.',
			stand: 'Stand: 04. März 2026'
		},
		datenschutz: {
			subtitle: 'Zuletzt aktualisiert: 04. März 2026',
			sections: [
				{
					title: '1. Verantwortliche Stelle',
					content:
						'Maris [Nachname – Platzhalter]\n[Straße, Hausnummer]\n[PLZ] [Ort]\nE-Mail: [E-Mail-Adresse von Maris einfügen]'
				},
				{
					title: '2. Art und Umfang der Datenverarbeitung',
					content:
						'Diese Website ist eine reine Informationsseite. Es werden keine Cookies gesetzt und keine personenbezogenen Daten über diese Seite erhoben oder gespeichert.'
				},
				{
					title: '3. Webanalyse',
					content:
						'Derzeit wird kein Webanalyse-Dienst eingesetzt, der personenbezogene Daten verarbeitet. Sollte sich dies ändern, wird diese Datenschutzerklärung entsprechend aktualisiert.'
				},
				{
					title: '4. Hosting',
					content:
						'Diese Website wird bei einem externen Dienstleister gehostet. Beim Besuch der Seite können technische Zugriffsdaten (z. B. IP-Adresse, Zeitpunkt des Zugriffs, verwendeter Browser) in Server-Logfiles gespeichert werden. Diese Daten dienen der Sicherstellung des technischen Betriebs und werden nicht zu Marketingzwecken ausgewertet.'
				},
				{
					title: '5. Externe Links',
					content:
						'Diese Website enthält Links zu externen Plattformen, insbesondere zu LuniNora. Für die Datenverarbeitung auf diesen externen Seiten gelten ausschließlich die dortigen Datenschutzerklärungen.'
				}
			],
			stand: 'Stand: 04. März 2026'
		}
	},

	theme: {
		name: 'ocean-light',
		accent: '#5db8c8',
		accent2: '#c8a96e',
		bg: '#080e14',
		text: '#f0ede6'
	}
};
