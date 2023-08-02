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
                description: `<p>
					I started using JavaScript as a supplementary tool to build enhanced websites, mainly DOM
					manipulation with vanilla JS and jQuery, and with AJAX to load content without refresh.
				</p>
				<p>
					Since then I have improved a lot, and JS did too. The EcmaScript standard really changed the game,
					and it created one of the simplest yet most powerful languages. I learned frameworks like Vue and React,
					and with them, I learned how to create amazing interactive web apps without getting tangled in state. 
				</p>
				<p>
					Nowadays, my framework of choice is React, mainly because of its familiar syntax and always-evolving ecosystem,
					which even reached into mixed frontend-backend territories with Next.js. I try to follow the latest trends around
					JavaScript to keep up, but I feel most comfortable while writing React components.
				</p>`,
                modules: [
                    {
                        name: 'jQuery',
                        icon: '/icons/jquery/jquery-original.svg',
                    },
                    {
                        name: 'Vue.js',
                        icon: '/icons/vuejs/vuejs-original.svg',
                    },
                    {
                        name: 'React',
                        icon: '/icons/react/react-original.svg',
                    },
                    {
                        name: 'Next.js',
                        icon: '/icons/nextjs/nextjs-original.svg',
                    },
                ],
            },
            {
                id: 'node',
                name: 'Node.js',
                icon: '/icons/nodejs/nodejs-original.svg',
                level: 'expert',
                description: `<p>
					After working with PHP for a long time, writing my first Node.js backend really blew my mind. The speed and 
					the simplicity of writing simple callback functions as routes made Express instantly my favourite backend library.
				</p>
				<p>
					Even with multiple years passing, and many of its shortcomings discovered, Express is still my go-to tool for the backend.
					In the last few years, the only thing that changed is I realized how indispensable TypeScript is, and added Swagger / OpenAPI
					to the mix. These tools and a good ORM (like TypeORM or Prisma) made me as productive as ever in writing APIs.
 				</p>`,
                modules: [
                    {
                        name: 'Node.js',
                        icon: '/icons/nodejs/nodejs-original.svg',
                    },
                    {
                        name: 'Express',
                        icon: '/icons/express/express-original.svg',
                    },
                    {
                        name: 'TypeScript',
                        icon: '/icons/typescript/typescript-original.svg',
                    },
                ],
            },
            {
                id: 'sitebuilding',
                name: 'Sitebuilding',
                icon: '/icons/html5/html5-original.svg',
                level: 'expert',
                description: `<p>
					I worked with HTML and CSS for more than I could remember. I started with the usual
					middle-school treatment, creating my best 90's website impression. Soon I became familiar with CSS
					and have been fascinated by the shadows, gradients, and animations. I learnt many of the quirks of the CSS
					and built my own, admittedly wacky designs as old as 20.
				</p>
				<p>
					When I started working at DONE., the company's main profile was custom-designed WordPress, and it really
					kicked my sitebuilding experience into overdrive. I learnt to build massive websites from Figma very quickly,
					keeping it compatible with Wordpress's modifiable building blocks. Speeding through websites made me
					learn a lot about both building and design.
				</p>
				<p>
					I even had a chance to go back to my 90's website roots building marketing emails (EDMs)
					trying to achieve compatibility with Outlook email clients.
				</p>`,
                modules: [
                    {
                        name: 'HTML5',
                        icon: '/icons/html5/html5-original.svg',
                    },
                    {
                        name: 'CSS3',
                        icon: '/icons/css3/css3-original.svg',
                    },
                    {
                        name: 'Stylus',
                        icon: '/icons/stylus/stylus-original.svg',
                    },
                    {
                        name: 'Figma',
                        icon: '/icons/figma/figma-original.svg',
                    },
                ],
            },
            {
                id: 'php',
                name: 'PHP',
                icon: '/icons/php/php-original.svg',
                level: 'advanced',
                description: `<p>
					LLLike most people in backend development, I started my path with hacking and slashing PHP.
					I developed a whole application with my own authentication and session management
					before I learnt how to use Composer to simplify my life.
				</p>
				<p>
					After I widened my perspective, I quickly realized PHP's shortcomings in many aspects.
					The lacking security and outdated frameworks really made working with PHP painful.
					I worked a lot with WordPress and Woocommerce and while I appreciate the vibrant community
					and the variety of plugins, the ecosystem still feels like a mess.
				</p>
				<p>
					While I still enjoy coming back to PHP from time to time (especially to the amazing framework of Laravel),
					I feel my time with PHP has mostly passed by. Either writing content-centric web pages or REST APIs,
					there are plenty of tools I now prefer to plain old PHP.
				</p>`,
                modules: [
                    {
                        name: 'WordPress',
                        icon: '/icons/wordpress/wordpress-plain-light.svg',
                    },
                    {
                        name: 'Laravel',
                        icon: '/icons/laravel/laravel-plain.svg',
                    },
                    {
                        name: 'WooCommerce',
                        icon: '/icons/woocommerce/woocommerce-original.svg',
                    },
                ],
            },
            {
                id: 'db',
                name: 'Databases',
                icon: '/icons/database.svg',
                level: 'advanced',
                description: `<p>
					For most of my time, I worked with SQL-like databases, mostly MySQL/MariaDB, because it was the most convenient
					coming from a PHP background. I have a lot of experience in both the development and the administration of these systems.
					On the development side, I learned to use ORMs, optimize queries, and index everything.
				</p>
				<p>
					I operated MariaDB clusters in a variety of ways: bare-metal, Docker and Kubernetes. For KTK I even rewrote our bare-metal
					MariaDB into a replicated Docker image, complete with a highly available MaxScale load balancer. These experiences really
					made me appreciate PlanetScale, AWS RDS, and similar technologies.
				</p>
				<p>
					Even though I am very comfortable with MySQL, I still try to learn NoSQL technologies. Despite rarely having a chance to 
					use them, I try to apply the knowledge gained (access patterns, not overly normalizing) in relational databases.
					I have some experience with the web scale database MongoDB and I like the minimal nature of Redis.
				</p>
				`,
                modules: [
                    {
                        name: 'MySQL',
                        icon: '/icons/mysql/mysql-original.svg',
                    },
                    {
                        name: 'MariaDB',
                        icon: '/vendor-icons/mariadb-seal.svg',
                    },
                    {
                        name: 'MongoDB',
                        icon: '/icons/mongodb/mongodb-original.svg',
                    },
                    {
                        name: 'Redis',
                        icon: '/icons/redis/redis-original.svg',
                    },
                ],
            },
            {
                id: 'system',
                name: 'System programm.',
                icon: '/icons/c/c-original.svg',
                level: 'capable',
                description: `<p>
					Throughout most of my studies, I was confronted with C-family languages. I started with the incredibly performant
					albeit primitive structure of C. After a few years, I came back as a Linux developer and realized the power behind
					the simple abstractions of C. Writing complicated code really made me appreciate the expressiveness of C.
				</p>
				<p>
					Since then, I discovered Rust and fell in love with its type system. Even though it is still a language that's a bit
					rough around the edges (crate structure, async story), I think it has the potential to be the most powerful language.
					It is now my go-to language for small binaries, and I try to experiment with its other uses (e.g. web server).
				</p>`,
                modules: [
                    {
                        name: 'C',
                        icon: '/icons/c/c-original.svg',
                    },
                    {
                        name: 'Rust',
                        icon: '/icons/rust/rust-plain.svg',
                    },
                ],
            },
            {
                id: 'cloud',
                name: 'Cloud',
                icon: '/icons/cloud.svg',
                level: 'novice',
                description: `<p>
					I always preferred self-hosting to the cloud, but especially for Kubernetes (and databases), it is very tough
					to do it right. This is the reason we started getting into the cloud, firstly to AWS EKS and Azure AKS. These are
					very robust with great features like load balancing and autoscaling. I learnt tons with these technologies.
				</p>
				<p>
					Since then, we expanded our cloud operations to other services, like Elastic Beanstalk and RDS for simpler workloads.
					For these, I prefer to use Terraform to deploy them as quickly and safely as I can.
				</p>
				<p>
					Recently I started looking more into serverless technologies, as they play very well with Node.js. I worked on some
					Lambdas and Cloudflare Workers and I'd love to learn more about these tools.
				</p>`,
                modules: [
                    {
                        name: 'AWS',
                        icon: '/icons/amazonwebservices/amazonwebservices-original.svg',
                    },
                    {
                        name: 'Azure',
                        icon: '/icons/azure/azure-original.svg',
                    },
                    {
                        name: 'Terraform',
                        icon: '/vendor-icons/terraform.svg',
                    },
                ],
            },
            {
                id: 'devops',
                name: 'DevOps',
                icon: '/icons/devops.svg',
                level: 'expert',
                description: `<p>
					I started my DevOps career with managing a bunch of web servers scattered around shared hosting and separate VMs.
					Back these days, I yearned for a better way to handle a lot of similar hosts, then Docker entered.
				</p>
				<p>
					Docker really made me fall in love with containerization: I turned dozens of services into minimal Alpine-based
					Docker images. These include WordPress, Laravel, OpenLDAP, Bind DNS, and replicated MariaDB. In the span of a few years
					we turned the KTK infrastructure from undocumented VMs to mostly containerized.
				</p>
				<p>
					Docker is great, but it is lacking in orchestrating multiple containers (even with Docker-compose), so recently
					I started turning everything to Kubernetes. With its amazing ecosystem and great integration with GitOps, I deploy
					most of my new services with Helm and ArgoCD.
				</p>`,
                modules: [
                    {
                        name: 'Docker',
                        icon: '/icons/docker/docker-original.svg',
                    },
                    {
                        name: 'Kubernetes',
                        icon: '/vendor-icons/kubernetes.svg',
                    },
                    {
                        name: 'ArgoCD',
                        icon: '/icons/argocd/argocd-original.svg',
                    },
                    {
                        name: 'Nginx',
                        icon: '/icons/nginx/nginx-original.svg',
                    },
                ],
            },
            {
                id: 'linux',
                name: 'Linux',
                icon: '/icons/linux/linux-original.svg',
                level: 'expert',
                description: `<p>
					When I first got into Linux, I wanted to be able to handle our LAMP stack more efficiently.
					At first I just used scp to copy files, then I started using vim over ssh to quickly edit some files,
					and got more and more used to the Linux terminal. Now Linux is the operating system of all of my computers,
					and I fell in love with open source.
				</p>
				<p>
					The thing I really liked about the Linux shell, is both the simplicity and the power it enables.
					I enjoy writing my quick-and-dirty one-liners and shell scripts, and I learned to automate
					every part of my workflow. Now I use Ansible to install and set up my desktop and servers,
					and use GitLab or Bitbucket pipelines to automate my deployments.
				</p>
				<p>
					I am very thankful for Linux because it started me on the way of open source and taught me
					to always look behind the curtain, and understand things as deeply as I can. 
				</p>`,
                modules: [
                    {
                        name: 'Red Hat',
                        icon: '/icons/redhat/redhat-original.svg',
                    },
                    {
                        name: 'Bash',
                        icon: '/icons/bash.svg',
                    },
                    {
                        name: 'Vim',
                        icon: '/icons/vim/vim-original.svg',
                    },
                    {
                        name: 'Ansible',
                        icon: '/vendor-icons/ansible-black.svg',
                    },
                    {
                        name: 'Gitlab',
                        icon: '/icons/gitlab/gitlab-original.svg',
                    },
                ],
            },
        ],
        projects: [
            {
                name: 'Tenable.ASM',
                cover: { png: 'asm.png', webp: 'asm.webp' },
                url: 'https://bitdiscovery.com/',
                client: {
                    name: 'Tenable',
                    url: 'https://www.tenable.com/',
                },
                details: [
                    'Cybersecurity scanning on a scale',
                    'More than 50 microservice in AWS',
                    'Kubernetes (EKS) and EB management',
                    'Built with ArgoCD, Helm and Terraform',
                ],
                languages: [
                    {
                        name: 'AWS',
                        icon: '/icons/amazonwebservices/amazonwebservices-original.svg',
                    },
                    {
                        name: 'Kubernetes',
                        icon: '/vendor-icons/kubernetes.svg',
                    },
                    {
                        name: 'ArgoCD',
                        icon: '/icons/argocd/argocd-original.svg',
                    },
                    {
                        name: 'Terraform',
                        icon: '/vendor-icons/terraform.svg',
                    },
                ],
            },
            {
                name: 'KTK Szobafoglalás',
                cover: { png: 'kolireg.png', webp: 'kolireg.webp' },
                url: 'https://szobafoglalas.ktk.bme.hu/',
                client: {
                    name: 'KTK Számtech Szakosztály',
                    url: 'https://szamtech.ktk.bme.hu/',
                },
                details: [
                    'Laravel-based room reservation page',
                    'Optimized for speed: can handle hundreds of concurrent users',
                    'Realtime updates with Websocket',
                ],
                languages: [
                    {
                        name: 'Laravel',
                        icon: '/icons/laravel/laravel-plain.svg',
                    },
                    {
                        name: 'Redis',
                        icon: '/icons/redis/redis-original.svg',
                    },
                    {
                        name: 'Websocket',
                        icon: '/icons/socketio/socketio-original.svg',
                    },
                ],
            },
            {
                name: 'Activiter',
                cover: { png: 'activiter.png', webp: 'activiter.webp' },
                url: 'https://red-staging.playgolfhi.com/',
                client: {
                    name: 'DONE.',
                    url: 'https://thisisdone.com/',
                },
                details: [
                    'Hawaii golf reservation website',
                    'Built with Express and React',
                    'Intricate payment schemes with Stripe: delayed completion, group payments',
                ],
                languages: [
                    {
                        name: 'Express',
                        icon: '/icons/express/express-original.svg',
                    },
                    {
                        name: 'React',
                        icon: '/icons/react/react-original.svg',
                    },
                    {
                        name: 'Stripe',
                        icon: '/stripe.png',
                    },
                ],
            },
            {
                name: 'KTK infrastructure',
                cover: { png: 'argo.png', webp: 'argo.webp' },
                url: '',
                client: {
                    name: 'KTK Számtech Szakosztály',
                    url: 'https://szamtech.ktk.bme.hu/',
                },
                details: [
                    'Move 19 webservers to Docker and later to Kubernetes with ArgoCD',
                    'Dockerize multiple services, including replicated MariaDB and LDAP',
                ],
                languages: [
                    {
                        name: 'Linux',
                        icon: '/icons/linux/linux-original.svg',
                    },
                    {
                        name: 'Docker',
                        icon: '/icons/docker/docker-original.svg',
                    },
                    {
                        name: 'Kubernetes',
                        icon: '/vendor-icons/kubernetes.svg',
                    },
                    {
                        name: 'ArgoCD',
                        icon: '/icons/argocd/argocd-original.svg',
                    },
                ],
            },
            {
                name: 'Netprinter editor',
                cover: { png: 'netprinter.png', webp: 'netprinter.webp' },
                url: 'https://netprinter.hu/products/vaszonkep',
                client: {
                    name: 'DONE.',
                    url: 'https://thisisdone.com/',
                },
                details: [
                    'Image editor built entirely in React',
                    'Can resize, rotate and recolor images',
                    'Calcute total from sizes, quality and addons, send to the backend',
                ],
                languages: [
                    {
                        name: 'React',
                        icon: '/icons/react/react-original.svg',
                    },
                    {
                        name: 'Redux',
                        icon: '/icons/redux/redux-original.svg',
                    },
                    {
                        name: 'CSS',
                        icon: '/icons/css3/css3-original.svg',
                    },
                ],
            },
            {
                name: 'FK! Tippjáték',
                cover: { png: 'fk.png', webp: 'fk.webp' },
                url: 'https://www.fkclub.hu/tippjatek/',
                client: {
                    name: 'Fűzővel kifelé!',
                    url: 'http://fuzovelkifele.com/',
                },
                details: [
                    '1000+ registered users',
                    'Without any PHP or JS frameworks',
                    'Email and Facebook SDK authentication',
                    'Custom design with 3D transitions',
                ],
                languages: [
                    {
                        name: 'PHP',
                        icon: '/icons/php/php-original.svg',
                    },
                    {
                        name: 'JavaScript',
                        icon: '/icons/javascript/javascript-original.svg',
                    },
                    {
                        name: 'CSS',
                        icon: '/icons/css3/css3-original.svg',
                    },
                    {
                        name: 'MySQL',
                        icon: '/icons/mysql/mysql-original.svg',
                    },
                ],
            },
            {
                name: 'This CV',
                cover: { png: 'cv.png', webp: 'cv.webp' },
                url: 'https://github.com/daniel7grant/cv.git',
                client: {
                    name: 'me',
                    url: 'https://cv.danielgrants.com',
                },
                details: [
                    'Built without any frameworks, only using Handlebars and webpack',
                    'Dynamically generated from a JSON file',
                ],
                languages: [
                    {
                        name: 'Webpack',
                        icon: '/icons/webpack/webpack-original.svg',
                    },
                    {
                        name: 'JavaScript',
                        icon: '/icons/javascript/javascript-original.svg',
                    },
                    {
                        name: 'SCSS',
                        icon: '/icons/sass/sass-original.svg',
                    },
                    {
                        name: 'Handlebars',
                        icon: '/icons/handlebars/handlebars-original.svg',
                    },
                ],
            },
        ],
    },
};
