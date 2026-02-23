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
	displayName: 'Aurelia Mondlicht',
	tagline: 'Spirituelle Beratung mit Klarheit, Ruhe und Herz.',

	heroHeadline: 'Klarheit, Ruhe und eine sanfte Rückkehr zu deinem inneren Wissen.',
	heroSubcopy:
		'Mit über 22 Jahren Beratungserfahrung und mehr als 110.000 Beratungen begleite ich dich auf deinem Weg zu dir selbst. Mein Rundumblick mit den russischen Karten und meine hellsichtigen Fähigkeiten ermöglichen mir, bereits im ersten Moment zu spüren, welche Energie gerade gebraucht wird – ob auffangend, stärkend oder raumgebend.',
	
	topics: [
		'Partnerschaft & Liebe',
		'Russische Karten',
		'Spirituelle Entwicklung',
		'Energiearbeit',
		'Lebensberatung'
	],

	stats: [
		{ label: 'Jahre Erfahrung', value: '22+' },
		{ label: 'Beratungen', value: '110.000+' },
		{ label: 'Ansatz', value: 'Diskret & Einfühlsam' }
	],

	portraitSrc: '/images/ChatGPT Image Feb 22, 2026 at 11_46_09 PM.png',
	aboutPortraitSrc: '/images/about-portrait.png',
	backgroundSrc: '/images/bg-moonforest.webp',

	aboutHeader: {
		title: 'Meine Philosophie',
		quote: 'Nicht weil es schwer ist, wagen wir es nicht, sondern weil wir es nicht wagen, ist es schwer.',
		cardHeading: 'Gib der Möglichkeit eine Chance',
		cardDescription:
			'Bist du schon mal vom Leben positiv überrascht worden? Warst du schon mal so überzeugt davon, dass etwas nicht funktioniert und dann hat es plötzlich doch geklappt? In diesem Fall hat die Möglichkeit gesiegt! Vergiss deshalb nie den Samen der Möglichkeit auszusäen und schaue, was das Leben für dich bereithält. Lass dich überraschen!',
		backgroundSrc: '/images/bg-philosophy.png'
	},

	quotes: [
		'Durch Hellsicht und Energiearbeit öffne ich Räume, in denen sich Seelen erinnern dürfen, wer sie wirklich sind. Mit Orakelkarten, Engelkontakten und feiner Wahrnehmung übersetze ich das Unsichtbare in klare Impulse für Herz und Weg.',
		'Meine Aufgabe ist es nicht, Entscheidungen abzunehmen, sondern Licht in das innere Wissen zu bringen – damit du gestärkt und mit neuer Klarheit deinen nächsten Schritt gehen kannst.'
	],

	story: {
		title: 'Meine Geschichte',
		sections: [
			{
				paragraphs: [
					'Ich bin Aurelia Mondlicht und begleite seit über 22 Jahren Menschen auf ihrem Weg zu sich selbst. Mit mehr als 110.000 Beratungen durfte ich unzählige Menschen dabei unterstützen, Klarheit und inneren Frieden zu finden. Die Fragen "Wer bin ich wirklich?" und "Welchen Weg soll ich gehen?" begleiten viele von uns – und genau hier setze ich mit meiner Arbeit an.'
				]
			},
			{
				heading: 'Mein Weg zur Beratung',
				paragraphs: [
					'Schon als Kind war ich oft allein und suchte intuitiv die Nähe zur geistigen Welt. In dieser stillen Verbindung spürte ich Wärme, Geborgenheit und ein tiefes Einssein mit allem, was ist. Besonders geprägt hat mich meine Großmutter – sie war hellsichtig und sagte Dinge voraus, die später tatsächlich eintrafen. Dieses natürliche Vertrauen in das Unsichtbare hat mich schon früh fasziniert.'
				]
			},
			{
				heading: 'Der Wendepunkt',
				paragraphs: [
					'Der entscheidende Wendepunkt kam mit 30, als mein Körper plötzlich nicht mehr so funktionierte wie zuvor und Ärzte keine Ursache fanden. Diese Krise öffnete mir den Weg zu Reiki. Bereits während meiner Einweihung bekam ich klare Visionen über meinen weiteren Lebensweg. Das war der Moment, in dem ich bewusst wusste: Meine Aufgabe liegt in der spirituellen Begleitung.'
				]
			},
			{
				heading: 'Meine Arbeitsweise',
				paragraphs: [
					'Ich nehme die Energie und die Ausstrahlung bereits bei der Begrüßung wahr. Mein Rundumblick mit den russischen Karten zeigt mir, welche Energie gerade gebraucht wird – ob auffangend, stärkend oder raumgebend. Ich empfange die vielen Emotionen, ohne sie zu spiegeln, und bleibe stets neutral in meiner Beobachtung. Dadurch gebe ich dir die Möglichkeit, dir einfach mal alles von der Seele zu reden, ohne dabei bewertet zu werden.',
					'Ich freue mich darauf, dich auf deinem Weg begleiten zu dürfen und dir mit meiner Erfahrung zur Seite zu stehen.'
				]
			}
		],
		training: [
			{
				title: 'Vielfältige Ausbildungen',
				description:
					'Es erfolgten zahlreiche Ausbildungen und Weiterbildungen – Reiki, Prana Healing, Geistheilung, Quanten-Transformation, Telepathie und Telekinese sowie die Ausbildung zur Auraberaterin.'
			},
			{
				title: 'Wachstum & Vertiefung',
				description:
					'Jede Station hat meine Wahrnehmung vertieft und meinen eigenen Stil geformt.'
			},
			{
				title: 'Berufung seit 2003',
				description:
					'Seit 2003 arbeite ich hauptberuflich als spirituelle Lebensberaterin. Menschen energetisch zu unterstützen, ihnen Klarheit und Kraft zurückzugeben, ist für mich nicht nur ein Beruf, sondern meine Berufung.'
			}
		]
	},

	methods: [
		{
			icon: '♎',
			title: 'Erfahrung',
			description: 'Über 22 Jahre hauptberufliche Beratung, mehr als 110.000 Sitzungen'
		},
		{
			icon: '✦',
			title: 'Beratungsart',
			description: 'Intuitiv, ruhig, präsent – Rundumblick mit den russischen Karten'
		},
		{
			icon: '☽',
			title: 'Sternzeichen',
			description: 'Waage – Balance und Harmonie als Lebensprinzip'
		},
		{
			icon: '♡',
			title: 'Beratungsstil',
			description: 'Feinfühlig, empathisch, mit klarer innerer Haltung'
		},
		{
			icon: '◎',
			title: 'Hellwahrnehmung',
			description: 'Hellsehen, Hellfühlen, Hellhören und Hellwissen'
		},
		{
			icon: '❋',
			title: 'Energiearbeit',
			description: 'Reiki, Prana Healing, Chakren- und Aura-Arbeit'
		},
		{
			icon: '☊',
			title: 'Spirituelle Kontakte',
			description: 'Engelkontakte, Channeling, Verbindung zu geistigen Führern'
		},
		{
			icon: '✧',
			title: 'Mein Ansatz',
			description: 'Ganzheitlich, transformativ, auf dem Weg zu deinem wahren Selbst'
		}
	],

	services: [
		{
			title: 'Beziehungsklarheit',
			outcome: 'Erkennen, was unter der Oberfl\u00e4che geschieht.',
			includes: ['Bindungsmuster-Lesung', 'Dynamik-Mapping', 'Ehrliche N\u00e4chste-Schritte-Begleitung']
		},
		{
			title: 'Entscheidungskompass',
			outcome: 'Optionen aufzeigen, Werte kl\u00e4ren.',
			includes: ['Situations-Legung', 'Werte-Abgleich', 'Klarheit \u00fcber Abw\u00e4gungen']
		},
		{
			title: 'Beruf & Berufung',
			outcome: 'Richtung, Grenzen, Selbstvertrauen.',
			includes: ['Berufungsreflexion', 'Grenzen-Audit', 'Energie-Alignment-Lesung']
		},
		{
			title: 'Energetischer Reset',
			outcome: 'Ein kurzer integrativer Abschluss f\u00fcr tiefe Sitzungen.',
			includes: ['Atem-Anleitung', 'Visualisierung', 'Erdungspraxis']
		}
	],

	booking: {
		badge: 'Premium-Beratung auf LuniNora',
		heading: 'Buche jetzt deine pers\u00f6nliche Beratung',
		description:
		'Erlebe meine einfühlsame spirituelle Beratung auf LuniNora – mit Hellsicht, Rundumblick durch die russischen Karten und Energiearbeit. Über 22 Jahre Erfahrung und mehr als 110.000 Beratungen fließen in jede Sitzung ein, um dich auf deinem Weg zu Klarheit und innerem Frieden zu begleiten.',
		features: [
			{
				icon: '\ud83d\udcc5',
				title: 'Erste Sitzung',
				description: 'Online über LuniNora – bequem von zu Hause aus'
			},
			{
				icon: '\u2764\ufe0f',
				title: 'Einf\u00fchlsame Begleitung',
				description:
					'Mit über 22 Jahren Erfahrung und 110.000+ Beratungen an deiner Seite'
			},
			{
				icon: '\u2728',
				title: 'Ganzheitliche Wahrnehmung',
				description:
					'Hellsicht, Energiearbeit und spirituelle Führung vereint'
			}
		],
		ctaLabel: 'Jetzt Beratung auf LuniNora buchen',
		ctaHref: 'https://luninora.de',
		subtext: 'Sichere dir deinen Termin'
	},

	legal: {
		impressum: {
			name: 'Aurelia Mondlicht (fiktiv)',
			address: 'Musterstra\u00dfe 1\n10115 Berlin',
			country: 'Deutschland',
			contact: 'E-Mail: kontakt@aurelia-mondlicht.de',
			steuernummer: '000/000/00000',
			hinweis:
				'Diese Website dient ausschlie\u00dflich der Pr\u00e4sentation. Alle Beratungen finden ausschlie\u00dflich \u00fcber die Plattform LuniNora statt.',
			haftung:
				'Die Inhalte dieser Website wurden mit gr\u00f6\u00dfter Sorgfalt erstellt. F\u00fcr die Richtigkeit, Vollst\u00e4ndigkeit und Aktualit\u00e4t der Inhalte kann ich jedoch keine Gew\u00e4hr \u00fcbernehmen.',
			urheberrecht:
				'Die von mir erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.',
			stand: 'Stand: 22. Februar 2026'
		},
		datenschutz: {
			subtitle: 'Zuletzt aktualisiert: 22. Februar 2026',
			sections: [
				{
					title: '1. Verantwortliche Stelle',
					content:
						'Aurelia Mondlicht (fiktiv)\nMusterstra\u00dfe 1\n10115 Berlin\nE-Mail: kontakt@aurelia-mondlicht.de'
				},
				{
					title: '2. Art und Umfang der Datenverarbeitung',
					content:
						'Diese Website ist eine reine Informationsseite. Es werden keine Cookies gesetzt und keine personenbezogenen Daten erhoben oder gespeichert.'
				},
				{
					title: '3. Webanalyse mit Vercel Analytics',
					content:
						'Ich nutze Vercel Web Analytics, einen datenschutzfreundlichen Analysedienst von Vercel Inc. Dieser erfasst anonymisierte Nutzungsdaten ohne Cookies (Seitenaufrufe, Referrer, ungef\u00e4hrer Standort, Ger\u00e4tetyp). Es werden keine individuellen Nutzerprofile erstellt. Vercel Inc. ist unter dem EU-U.S. Data Privacy Framework zertifiziert.'
				},
				{
					title: '4. Hosting',
					content:
						'Diese Website wird bei Vercel Inc. (USA) gehostet. Beim Besuch werden technische Zugriffsdaten in Server-Logfiles gespeichert.'
				},
				{
					title: '5. Externe Links',
					content:
						'Diese Website enth\u00e4lt Links zu externen Plattformen, insbesondere zu LuniNora. F\u00fcr die Datenverarbeitung dort gelten deren Datenschutzerkl\u00e4rungen.'
				}
			],
			stand: 'Stand: 22. Februar 2026'
		}
	},

	theme: {
		name: 'moonlit',
		accent: '#b49cff',
		accent2: '#7ee0d6',
		bg: '#070712',
		text: '#f3f0ff'
	}
};
