module.exports = {
	hu: {
		language: 'hu',
		name: 'Gergely Dániel',
		description: '',
		email: '',
		github: '',
		slides: [{
			name: 'Cover',
			type: 'cover',
			icon: 'js.png'
		}, {
			name: 'Nyelvek',
			type: 'langs',
			icon: ''
		}, {
			name: 'Munkák',
			type: 'works',
			icon: ''
		}],
		languages: [
			{
				id: 'js',
				name: 'JavaScript',
				icon: '/icons/javascript/javascript-original.svg',
				level: 'pro',
				description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit distinctio porro ducimus qui. Deleniti unde doloremque similique omnis? Beatae eum alias, illum nemo repellat porro? Voluptates consequatur consectetur accusantium quo!',
				modules: [{
					name: 'Node.js',
					icon: '/icons/nodejs/nodejs-original.svg'
				}, {
					name: 'Vue.js',
					icon: '/icons/vuejs/vuejs-original.svg'
				}, {
					name: 'jQuery',
					icon: '/icons/jquery/jquery-original.svg'
				}, {
					name: 'Webpack',
					icon: '/icons/webpack/webpack-original.svg'
				}, {
					name: 'AJAX',
					icon: '/icons/javascript/javascript-original.svg'
				}]
			}, {
				id: 'php',
				name: 'PHP',
				icon: '/icons/php/php-original.svg',
				level: 'pro',
				description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit distinctio porro ducimus qui. Deleniti unde doloremque similique omnis? Beatae eum alias, illum nemo repellat porro? Voluptates consequatur consectetur accusantium quo!',
				modules: [{
					name: 'Wordpress',
					icon: '/icons/wordpress/wordpress-plain.svg'
				}, {
					name: 'Drupal',
					icon: '/icons/drupal/drupal-original.svg'
				}]
			}, {
				id: 'webdesign',
				name: 'Web Design',
				icon: '/icons/html5/html5-original.svg',
				level: 'pro',
				description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit distinctio porro ducimus qui. Deleniti unde doloremque similique omnis? Beatae eum alias, illum nemo repellat porro? Voluptates consequatur consectetur accusantium quo!',
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
				id: 'db',
				name: 'Adatbázis-kezelés',
				icon: '/icons/mysql/mysql-original.svg',
				level: 'pro',
				description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit distinctio porro ducimus qui. Deleniti unde doloremque similique omnis? Beatae eum alias, illum nemo repellat porro? Voluptates consequatur consectetur accusantium quo!',
				modules: [{
					name: 'MySQL',
					icon: '/icons/mysql/mysql-original.svg'
				}, {
					name: 'SQLite',
					icon: '/icons/mysql/mysql-original.svg'
				}, {
					name: 'MongoDB',
					icon: '/icons/mongodb/mongodb-original.svg'
				}]
			}, {
				id: 'java',
				name: 'Java',
				icon: '/icons/java/java-original.svg',
				level: 'pro',
				description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit distinctio porro ducimus qui. Deleniti unde doloremque similique omnis? Beatae eum alias, illum nemo repellat porro? Voluptates consequatur consectetur accusantium quo!',
				modules: [{
					name: 'Android',
					icon: '/icons/android/android-original.svg'
				}, {
					name: 'Gradle',
					icon: '/icons/gradle/gradle-plain-wordmark.svg'
				}]
			}, {
				id: 'c',
				name: 'C-típusú nyelvek',
				icon: '/icons/c/c-original.svg',
				level: 'pro',
				description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit distinctio porro ducimus qui. Deleniti unde doloremque similique omnis? Beatae eum alias, illum nemo repellat porro? Voluptates consequatur consectetur accusantium quo!',
				modules: [{
					name: 'C++',
					icon: '/icons/cplusplus/cplusplus-original.svg'
				}, {
					name: 'C#',
					icon: '/icons/csharp/csharp-original.svg'
				}]
			}, {
				id: 'devops',
				name: 'DevOps',
				icon: '/icons/linux/linux-original.svg',
				level: 'pro',
				description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit distinctio porro ducimus qui. Deleniti unde doloremque similique omnis? Beatae eum alias, illum nemo repellat porro? Voluptates consequatur consectetur accusantium quo!',
				modules: [{
					name: 'Linux',
					icon: '/icons/linux/linux-original.svg',
				}, {
					name: 'Git',
					icon: '/icons/git/git-original.svg'
				}, {
					name: 'Docker',
					icon: '/icons/docker/docker-original.svg'
				}, {
					name: 'Ansible',
					icon: '/vendor-icons/ansible-black.svg'
				}, {
					name: 'Nginx',
					icon: '/icons/nginx/nginx-original.svg'
				}]
			}
		],
		projects: [{
			name: 'FK Tippjáték',
			cover: { png: 'fk.png', webp: 'fk.webp' },
			url: 'http://www.fkclub.hu/tippjatek/',
			details: [
				'1000+ user',
				'Custom design',
				'Without any PHP or JS frameworks'
			],
			languages: [{
				name: 'PHP',
				icon: '/icons/php/php-original.svg'
			}, {
				name: 'JavaScript',
				icon: '/icons/javascript/javascript-original.svg'
			}]
		}, {
			name: 'GSZK Website',
			cover: { png: 'gszk.png', webp: 'gszk.webp' },
			url: 'http://gszk.bme.hu/',
			details: [
				'Based on Drupal',
				'Custom module and theme'
			],
			languages: [{
				name: 'Drupal',
				icon: '/icons/drupal/drupal-original.svg'
			}, {
				name: 'JavaScript',
				icon: '/icons/javascript/javascript-original.svg'
			}]
		}, {
			name: 'FK Tippjáték',
			cover: { png: 'fk.png', webp: 'fk.webp' },
			url: 'http://www.fkclub.hu/tippjatek/',
			details: [
				'1000+ user',
				'Custom design',
				'Without any PHP or JS frameworks'
			],
			languages: [{
				name: 'PHP',
				icon: '/icons/php/php-original.svg'
			}, {
				name: 'JavaScript',
				icon: '/icons/javascript/javascript-original.svg'
			}]
		}, {
			name: 'GSZK Website',
			cover: { png: 'gszk.png', webp: 'gszk.webp' },
			url: 'http://gszk.bme.hu/',
			details: [
				'Based on Drupal',
				'Custom module and theme'
			],
			languages: [{
				name: 'PHP',
				icon: '/icons/php/php-original.svg'
			}, {
				name: 'JavaScript',
				icon: '/icons/javascript/javascript-original.svg'
			}]
		}, {
			name: 'FK Tippjáték',
			cover: { png: 'fk.png', webp: 'fk.webp' },
			url: 'http://www.fkclub.hu/tippjatek/',
			details: [
				'1000+ user',
				'Custom design',
				'Without any PHP or JS frameworks'
			],
			languages: [{
				name: 'PHP',
				icon: '/icons/php/php-original.svg'
			}, {
				name: 'JavaScript',
				icon: '/icons/javascript/javascript-original.svg'
			}]
		}]
	},
	en: {
		language: 'en',
		name: 'Gergely Dániel',
		description: '',
		email: 'daniel7grant@gmail.com',
		github: 'https://github.com/daniel7grant/',
		slides: [{
			name: 'Cover',
			type: 'cover',
			icon: 'js.png'
		}, {
			name: 'Languages',
			type: 'langs',
			icon: ''
		}, {
			name: 'Works',
			type: 'works',
			icon: ''
		}],
		languages: [
			{
				id: 'js',
				name: 'JavaScript',
				icon: '/icons/javascript/javascript-original.svg',
				level: 'pro',
				description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit distinctio porro ducimus qui. Deleniti unde doloremque similique omnis? Beatae eum alias, illum nemo repellat porro? Voluptates consequatur consectetur accusantium quo!',
				modules: [{
					name: 'Node.js',
					icon: '/icons/nodejs/nodejs-original.svg'
				}, {
					name: 'Vue.js',
					icon: '/icons/vuejs/vuejs-original.svg'
				}, {
					name: 'jQuery',
					icon: '/icons/jquery/jquery-original.svg'
				}, {
					name: 'Webpack',
					icon: '/icons/webpack/webpack-original.svg'
				}, {
					name: 'AJAX',
					icon: '/icons/javascript/javascript-original.svg'
				}]
			}, {
				id: 'php',
				name: 'PHP',
				icon: '/icons/php/php-original.svg',
				level: 'pro',
				description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit distinctio porro ducimus qui. Deleniti unde doloremque similique omnis? Beatae eum alias, illum nemo repellat porro? Voluptates consequatur consectetur accusantium quo!',
				modules: [{
					name: 'Wordpress',
					icon: '/icons/wordpress/wordpress-plain.svg'
				}, {
					name: 'Drupal',
					icon: '/icons/drupal/drupal-original.svg'
				}]
			}, {
				id: 'webdesign',
				name: 'Web Design',
				icon: '/icons/html5/html5-original.svg',
				level: 'pro',
				description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit distinctio porro ducimus qui. Deleniti unde doloremque similique omnis? Beatae eum alias, illum nemo repellat porro? Voluptates consequatur consectetur accusantium quo!<br/><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit distinctio porro ducimus qui. Deleniti unde doloremque similique omnis? Beatae eum alias, illum nemo repellat porro? Voluptates consequatur consectetur accusantium quo!',
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
				id: 'db',
				name: 'DB Management',
				icon: '/icons/mysql/mysql-original.svg',
				level: 'pro',
				description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit distinctio porro ducimus qui. Deleniti unde doloremque similique omnis? Beatae eum alias, illum nemo repellat porro? Voluptates consequatur consectetur accusantium quo!',
				modules: [{
					name: 'MySQL',
					icon: '/icons/mysql/mysql-original.svg'
				}, {
					name: 'SQLite',
					icon: '/icons/mysql/mysql-original.svg'
				}, {
					name: 'MongoDB',
					icon: '/icons/mongodb/mongodb-original.svg'
				}]
			}, {
				id: 'java',
				name: 'Java',
				icon: '/icons/java/java-original.svg',
				level: 'pro',
				description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit distinctio porro ducimus qui. Deleniti unde doloremque similique omnis? Beatae eum alias, illum nemo repellat porro? Voluptates consequatur consectetur accusantium quo!',
				modules: [{
					name: 'Android',
					icon: '/icons/android/android-original.svg'
				}, {
					name: 'Gradle',
					icon: '/icons/gradle/gradle-plain-wordmark.svg'
				}]
			}, {
				id: 'c',
				name: 'C-family languages',
				icon: '/icons/c/c-original.svg',
				level: 'pro',
				description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit distinctio porro ducimus qui. Deleniti unde doloremque similique omnis? Beatae eum alias, illum nemo repellat porro? Voluptates consequatur consectetur accusantium quo!',
				modules: [{
					name: 'C++',
					icon: '/icons/cplusplus/cplusplus-original.svg'
				}, {
					name: 'C#',
					icon: '/icons/csharp/csharp-original.svg'
				}]
			}, {
				id: 'devops',
				name: 'DevOps',
				icon: '/icons/linux/linux-original.svg',
				level: 'pro',
				description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit distinctio porro ducimus qui. Deleniti unde doloremque similique omnis? Beatae eum alias, illum nemo repellat porro? Voluptates consequatur consectetur accusantium quo!',
				modules: [{
					name: 'Linux',
					icon: '/icons/linux/linux-original.svg',
				}, {
					name: 'Git',
					icon: '/icons/git/git-original.svg'
				}, {
					name: 'Docker',
					icon: '/icons/docker/docker-original.svg'
				}, {
					name: 'Ansible',
					icon: '/vendor-icons/ansible-black.svg'
				}, {
					name: 'Nginx',
					icon: '/icons/nginx/nginx-original.svg'
				}]
			}
		],
		projects: [{
			name: 'FK Tippjáték',
			cover: { png: 'fk.png', webp: 'fk.webp' },
			url: 'http://www.fkclub.hu/tippjatek/',
			client: {
				name: 'Fűzővel kifelé!',
				url: 'http://fuzovelkifele.com/'
			},
			details: [
				'1000+ user',
				'Custom design',
				'Without any PHP or JS frameworks'
			],
			languages: [{
				name: 'PHP',
				icon: '/icons/php/php-original.svg'
			}, {
				name: 'JavaScript',
				icon: '/icons/javascript/javascript-original.svg'
			}]
		}, {
			name: 'GSZK Homepage',
			cover: { png: 'gszk.png', webp: 'gszk.webp' },
			url: 'http://gszk.bme.hu/',
			client: {
				name: 'Gépész Szakkollégium',
				url: 'http://gszk.bme.hu/'
			},
			details: [
				'Based on Drupal',
				'Custom module and theme'
			],
			languages: [{
				name: 'Drupal',
				icon: '/icons/drupal/drupal-original.svg'
			}, {
				name: 'JavaScript',
				icon: '/icons/javascript/javascript-original.svg'
			}]
		}, {
			name: 'KTKSzSz Docker server',
			cover: { png: 'fk.png', webp: 'fk.webp' },
			url: '',
			client: {
				name: 'Kármán Tódor Kollégium',
				url: 'http://ktkszsz.ktk.bme.hu'
			},
			details: [
				'Migrating 19 webservers to Docker platform',
				'Automatically generated NGINX reverse proxy',
				'Automatic SSL with Let\'s Encrypt wildcard certificates',
				'Convenient container management with systemd units',
			],
			languages: [{
				name: 'Linux',
				icon: '/icons/linux/linux-original.svg'
			}, {
				name: 'Docker',
				icon: '/icons/docker/docker-original.svg'
			}, {
				name: 'NGINX',
				icon: '/icons/nginx/nginx-original.svg'
			}]
		}, {
			name: 'GSZK Website',
			cover: { png: 'gszk.png', webp: 'gszk.webp' },
			url: 'http://gszk.bme.hu/',
			client: {
				name: 'Fűzővel kifelé!',
				url: 'http://fuzovelkifele.com/'
			},
			details: [
				'Based on Drupal',
				'Custom module and theme'
			],
			languages: [{
				name: 'PHP',
				icon: '/icons/php/php-original.svg'
			}, {
				name: 'JavaScript',
				icon: '/icons/javascript/javascript-original.svg'
			}]
		}, {
			name: 'FK Tippjáték',
			cover: { png: 'fk.png', webp: 'fk.webp' },
			client: {
				name: 'Fűzővel kifelé!',
				url: 'http://fuzovelkifele.com/'
			},
			url: 'http://www.fkclub.hu/tippjatek/',
			details: [
				'1000+ user',
				'Custom design',
				'Without any PHP or JS frameworks'
			],
			languages: [{
				name: 'PHP',
				icon: '/icons/php/php-original.svg'
			}, {
				name: 'JavaScript',
				icon: '/icons/javascript/javascript-original.svg'
			}]
		}]
	}
};
