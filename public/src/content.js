module.exports = {
	hu: {},
	en: {
		language: 'en',
		name: 'Gergely Dániel',
		description: '',
		email: 'grant@d7gr.net',
		github: 'https://github.com/daniel7grant/',
		languages: [
			{
				id: 'js',
				name: 'JavaScript',
				icon: '/icons/javascript/javascript-original.svg',
				level: 'expert',
				description: '<p>I started using JavaScript as a supplementary tool to build enhanced websites, mainly DOM manipulation with vanilla JS and jQuery, and with AJAX to load content without refresh.</p><p>Since then I have improved a lot, I try to implement ES6-compliant functional approach in my development. Nowadays I mainly use JavaScript to write frontend-heavy web applications. I started with Angular, however I later found Vue.js simpler and more powerful, and so I prefer to use that mostly.</p><p>I use JavaScript on server-side as well, mainly as small Express-based Node.js backends.</p>',
				modules: [{
					name: 'Vue.js',
					icon: '/icons/vuejs/vuejs-original.svg'
				}, {
					name: 'jQuery',
					icon: '/icons/jquery/jquery-original.svg'
				}, {
					name: 'Webpack',
					icon: '/icons/webpack/webpack-original.svg'
				}, {
					name: 'Node.js',
					icon: '/icons/nodejs/nodejs-original.svg'
				}, {
					name: 'Express',
					icon: '/icons/express/express-original.svg'
				}]
			}, {
				id: 'sitebuilding',
				name: 'Sitebuilding',
				icon: '/icons/html5/html5-original.svg',
				level: 'expert',
				description: '<p>I worked with HTML and CSS for more than I could remember. I started with the usual middle-school treatment, creating my best 90\'s website impression. Soon I became familiar with CSS, and been fascinated by the shadows, gradients and animations. I learnt many of the quirks of the CSS, I even centered divs vertically some times (with flex, but still counts).</p><p>I\'ve recently discovered SCSS and now I can write CSS more elegantly, maintanably and easily than ever before.</p>',
				modules: [{
					name: 'HTML5',
					icon: '/icons/html5/html5-original.svg'
				}, {
					name: 'CSS3',
					icon: '/icons/css3/css3-original.svg'
				}, {
					name: 'SCSS',
					icon: '/icons/sass/sass-original.svg'
				}]
			}, {
				id: 'php',
				name: 'PHP',
				icon: '/icons/php/php-original.svg',
				level: 'advanced',
				description: '<p>As most people in backend development, I started my path with hacking and slashing PHP. I developed a whole application with my own authentication and session management, before I learnt how to use Composer to simplify my life.</p><p>Sadly after I widened my perspective, I quickly realized how poor PHP is in certain aspects. The missing security and routing actively made the developer\'s life harder, so I mostly try to keep distance from PHP as I can. </p><p>This does not mean I hate PHP, nowadays I use PHP with the two most popular Content Management Systems avaliable, Wordpress and Drupal. Either writing plugins or using their REST API with a frontend, I prefer them to plain old PHP.</p>',
				modules: [{
					name: 'Wordpress',
					icon: '/icons/wordpress/wordpress-plain-light.svg'
				}, {
					name: 'Laravel',
					icon: '/icons/laravel/laravel-plain.svg'
				}]
			}, {
				id: 'db',
				name: 'Databases',
				icon: '/icons/database.svg',
				level: 'advanced',
				description: '<p>For most of my time I worked with SQL-like databases, namely MySQL/MariaDB, because it was the most convenient coming from a PHP background. Its declarative, readable syntax made it rather easy to learn (and forget), that\'s why I still prefer to use it. I have some experience maintaining MariaDB on servers.</p><p>While developing to Android, I worked with SQLite Databases; throughout my Node.js works, according to the latest trends I implemented the most popular NoSQL database, MongoDB. Despite of my limited practice I feel I have a decent knowledge of both the non-standard database systems.</p>',
				modules: [{
					name: 'MySQL',
					icon: '/icons/mysql/mysql-original.svg'
				}, {
					name: 'MariaDB',
					icon: '/vendor-icons/mariadb-seal.svg'
				}, {
					name: 'Redis',
					icon: '/icons/redis/redis-original.svg'
				}, {
					name: 'MongoDB',
					icon: '/icons/mongodb/mongodb-original.svg'
				}]
			}, {
				id: 'c',
				name: 'System prog.',
				icon: '/icons/c/c-original.svg',
				level: 'capable',
				description: '<p>Throughout most of my studies, I were confronted with C-family languages. I started with the incredibly performant albeit primitive structure of C. The lack of security and abstraction makes it really hard to write usable and maintainable code, that\'s why I prefer other languages, like C++, to C.</p><p>C++ was the language I learnt OOP with, it preserved the simplicity of C with enabling abstraction to a high level. I took some time to learn the basics of C#, however haven\'t used it for any larger project.</p><p>Even though I spent most of my time at the university working with C-family langauges, I feel like I\'m still lacking a lot of practical experience. I am eager to expand my knowledge in both C++ and C#.</p>',
				modules: [{
					name: 'C',
					icon: '/icons/c/c-original.svg'
				}, {
					name: 'Rust',
					icon: '/icons/rust/rust-plain.svg'
				}]
			}, {
				id: 'cloud',
				name: 'Cloud',
				icon: '/icons/devops.svg',
				level: 'novice',
				description: '<p></p>',
				modules: [{
					name: 'AWS',
					icon: '/icons/amazonwebservices/amazonwebservices-original.svg'
				}]
			}, {
				id: 'automation',
				name: 'Automation',
				icon: '/icons/devops.svg',
				level: 'capable',
				description: '<p></p>',
				modules: [{
					name: 'Ansible',
					icon: '/vendor-icons/ansible-black.svg'
				}, {
					name: 'Gitlab',
					icon: '/icons/gitlab/gitlab-original.svg'
				}, {
					name: 'Terraform',
					icon: '/vendor-icons/terraform.svg'
				}]
			}, {
				id: 'devops',
				name: 'DevOps',
				icon: '/icons/devops.svg',
				level: 'capable',
				description: '<p>Thankfully I happened to learn Git long before I realized how indispensible it was to handle any larger project. I mostly use it within the terminal which helps me use it to its fullest extent.</p><p>At first I started learning automation to better handle our server stack. We set up a Docker host, which enabled easy control of webservers to large numbers through a Nginx reverse proxy.</p><p>Lately, I used Ansible to handle repetitve tasks in server deployment and maintenance. I prefer it to most other DevOps tools (i.e. Puppet, Chef) because it requires no configuration by working through ssh.</p>',
				modules: [{
					name: 'Nginx',
					icon: '/icons/nginx/nginx-original.svg'
				}, {
					name: 'Docker',
					icon: '/icons/docker/docker-original.svg'
				}, {
					name: 'Kubernetes',
					icon: '/vendor-icons/kubernetes.svg'
				}, {
					name: 'ArgoCD',
					icon: '/icons/argocd/argocd-original.svg'
				}]
			}, {
				id: 'linux',
				name: 'Linux',
				icon: '/icons/linux/linux-original.svg',
				level: 'expert',
				description: '<p>When I first got into Linux, I wanted to be able to handle our LAMP stack more efficiently. First I just used scp to copy files, then I started using vim over ssh to quickly edit some files, and ever since I\'ve got more and more used to the Linux terminal.</p><p>The thing I really liked in the Linux shell, is both the simplicity and the power it enables. I enjoy writing my own bash scripts and Makefiles, mostly because of the simple and declarative style of using pipes, which enables to solve the hardest tasks with ease.</p>',
				modules: [{
					name: 'Red Hat',
					icon: '/icons/redhat/redhat-original.svg'
				}, {
					name: 'Bash',
					icon: '/icons/bash.svg',
				}, {
					name: 'Vim',
					icon: '/icons/vim/vim-original.svg'
				}]
			}
		],
		projects: [{
			name: 'Tenable.ASM',
			cover: { png: 'asm.png', webp: 'asm.webp' },
			url: 'https://bitdiscovery.com/',
			client: {
				name: 'Tenable',
				url: 'https://www.tenable.com/'
			},
			details: [
				'Cybersecurity scanning on a scale',
				'More than 50 microservice in AWS',
				'Kubernetes (EKS) and EB management',
				'Built with ArgoCD, Helm and Terraform'
			],
			languages: [{
				name: 'AWS',
				icon: '/icons/amazonwebservices/amazonwebservices-original.svg'
			}, {
				name: 'Kubernetes',
				icon: '/vendor-icons/kubernetes.svg'
			}, {
				name: 'ArgoCD',
				icon: '/icons/argocd/argocd-original.svg'
			}, {
				name: 'Terraform',
				icon: '/vendor-icons/terraform.svg'
			}]
		}, {
			name: 'KTK Szobafoglalás',
			cover: { png: 'kolireg.png', webp: 'kolireg.webp' },
			url: 'https://szobafoglalas.ktk.bme.hu/',
			client: {
				name: 'KTK Számtech Szakosztály',
				url: 'https://szamtech.ktk.bme.hu/'
			},
			details: [
				'Laravel-based room reservation page',
				'Optimized for speed: can handle hundreds of concurrent users',
				'Realtime updates with Websocket'
			],
			languages: [{
				name: 'Laravel',
				icon: '/icons/laravel/laravel-plain.svg'
			}, {
				name: 'Redis',
				icon: '/icons/redis/redis-original.svg'
			}, {
				name: 'Websocket',
				icon: '/icons/socketio/socketio-original.svg'
			}]
		}, {
			name: 'Activiter',
			cover: { png: 'activiter.png', webp: 'activiter.webp' },
			url: 'https://red-staging.playgolfhi.com/',
			client: {
				name: 'DONE.',
				url: 'https://thisisdone.com/'
			},
			details: [
				'Hawaii golf reservation website',
				'Built with Express and React',
				'Intricate payment schemes with Stripe: delayed completion, group payments'
			],
			languages: [{
				name: 'Express',
				icon: '/icons/express/express-original.svg'
			}, {
				name: 'React',
				icon: '/icons/react/react-original.svg'
			}, {
				name: 'Stripe',
				icon: '/stripe.png'
			}]
		}, {
			name: 'KTK infrastructure',
			cover: { png: 'argo.png', webp: 'argo.webp' },
			url: '',
			client: {
				name: 'KTK Számtech Szakosztály',
				url: 'https://szamtech.ktk.bme.hu/'
			},
			details: [
				'Move 19 webservers to Docker and later to Kubernetes with ArgoCD',
				'Dockerize multiple services, including replicated MariaDB and LDAP',
			],
			languages: [{
				name: 'Linux',
				icon: '/icons/linux/linux-original.svg'
			}, {
				name: 'Docker',
				icon: '/icons/docker/docker-original.svg'
			}, {
				name: 'Kubernetes',
				icon: '/vendor-icons/kubernetes.svg'
			}, {
				name: 'ArgoCD',
				icon: '/icons/argocd/argocd-original.svg'
			}]
		}, {
			name: 'Netprinter editor',
			cover: { png: 'netprinter.png', webp: 'netprinter.webp' },
			url: 'https://netprinter.hu/products/vaszonkep',
			client: {
				name: 'DONE.',
				url: 'https://thisisdone.com/'
			},
			details: [
				'Image editor built entirely in React',
				'Can resize, rotate and recolor images',
				'Calcute total from sizes, quality and addons, send to the backend'
			],
			languages: [{
				name: 'React',
				icon: '/icons/react/react-original.svg'
			}, {
				name: 'Redux',
				icon: '/icons/redux/redux-original.svg'
			}, {
				name: 'CSS',
				icon: '/icons/css3/css3-original.svg'
			}]
		}, {
			name: 'FK! Tippjáték',
			cover: { png: 'fk.png', webp: 'fk.webp' },
			url: 'https://www.fkclub.hu/tippjatek/',
			client: {
				name: 'Fűzővel kifelé!',
				url: 'http://fuzovelkifele.com/'
			},
			details: [
				'1000+ registered users',
				'Without any PHP or JS frameworks',
				'Email and Facebook SDK authentication',
				'Custom design with 3D transitions'
			],
			languages: [{
				name: 'PHP',
				icon: '/icons/php/php-original.svg'
			}, {
				name: 'JavaScript',
				icon: '/icons/javascript/javascript-original.svg'
			}, {
				name: 'CSS',
				icon: '/icons/css3/css3-original.svg'
			}, {
				name: 'MySQL',
				icon: '/icons/mysql/mysql-original.svg'
			}]
		}, {
			name: 'This CV',
			cover: { png: 'cv.png', webp: 'cv.webp' },
			url: 'https://github.com/daniel7grant/cv.git',
			client: {
				name: 'me',
				url: 'https://cv.danielgrants.com'
			},
			details: [
				'Built without any frameworks, only using Handlebars and webpack',
				'Dynamically generated from a JSON file'
			],
			languages: [{
				name: 'Webpack',
				icon: '/icons/webpack/webpack-original.svg'
			}, {
				name: 'JavaScript',
				icon: '/icons/javascript/javascript-original.svg'
			}, {
				name: 'SCSS',
				icon: '/icons/sass/sass-original.svg'
			}, {
				name: 'Handlebars',
				icon: '/icons/handlebars/handlebars-original.svg'
			}]
		}]
	}
};
