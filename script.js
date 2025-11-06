document.addEventListener('DOMContentLoaded', function() {

        // Dark mode functionality
        const darkModeToggle = document.getElementById('darkModeToggle');
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        
        // Check for saved theme preference or use system preference
        const currentTheme = localStorage.getItem('theme') || 
                            (prefersDarkScheme.matches ? 'dark' : 'light');
        
        // Apply theme on page load
        if (currentTheme === 'dark') {
            document.body.classList.add('dark-mode');
            darkModeToggle.innerHTML = '<i data-feather="sun"></i> Light Mode';
        } else {
            document.body.classList.remove('dark-mode');
            darkModeToggle.innerHTML = '<i data-feather="moon"></i> Dark Mode';
        }
        
        // Toggle dark mode
        darkModeToggle.addEventListener('click', () => {
            const isDarkMode = document.body.classList.toggle('dark-mode');
            if (isDarkMode) {
                localStorage.setItem('theme', 'dark');
                darkModeToggle.innerHTML = '<i data-feather="sun"></i> Light Mode';
            } else {
                localStorage.setItem('theme', 'light');
                darkModeToggle.innerHTML = '<i data-feather="moon"></i> Dark Mode';
            }
            feather.replace();
        });  
  
  
    // Portfolio data with categories
    const projects = [
        {
            title: ".",
            description: "",
            tags: ["React", "Node.js", "MongoDB"],
            category: "flyer",
            image: "assets/portfolio/FLYER-a.webp"
        },
        {
            title: ".",
            description: "",
            tags: ["Figma", "Adobe XD", "Illustration"],
            category: "flyer",
            image: "assets/portfolio/FLYER-b.webp"
        },
        {
            title: ".",
            description: "Interactive data visualization dashboard with real-time updates and filtering options.",
            tags: ["D3.js", "React", "Firebase"],
            category: "flyer",
            image: "assets/portfolio/FLYER-c.webp"
        },
        {
            title: ".",
            description: "",
            tags: ["Branding", "Illustration", "Print"],
            category: "flyer",
            image: "assets/portfolio/FLYER-d.webp"
        },
        {
            title: ".",
            description: "",
            tags: ["Photoshop","Inkscape"],
            category: "flyer",
            image: "assets/portfolio/FLYER-e1.webp"
        },
        {
            title: ".",
            description: "",
            tags: ["HTML/CSS", "JavaScript", "Google Analytics"],
            category: "web",
            image: "assets/portfolio/WEB1.webp"
        },
        {
            title: ".",
            description: "",
            tags: ["HTML/CSS", "JavaScript", "Google Analytics"],
            category: "web",
            image: "assets/portfolio/WEB2.webp"
        },
        {
            title: ".",
            description: "",
            tags: ["HTML/CSS", "JavaScript", "Google Analytics"],
            category: "web",
            image: "assets/portfolio/WEB3.webp"
        }
        ,
        {
            title: ".",
            description: "",
            tags: ["HTML/CSS", "JavaScript", "Google Analytics"],
            category: "web",
            image: "assets/portfolio/WEB4.webp"
        },
        {
            title: ".",
            description: "",
            tags: ["HTML/CSS", "JavaScript", "Google Analytics"],
            category: "web",
            image: "assets/portfolio/WEB5.webp"
        },
        {
            title: ".",
            description: "",
            tags: ["HTML/CSS", "JavaScript", "Google Analytics"],
            category: "web",
            image: "assets/portfolio/WEB6.webp"
        },
        {
            title: ".",
            description: "",
            tags: ["HTML/CSS", "JavaScript", "Google Analytics"],
            category: "posts",
            image: "assets/portfolio/IG1.webp"
        },
        {
            title: ".",
            description: "",
            tags: ["HTML/CSS", "JavaScript", "Google Analytics"],
            category: "posts",
            image: "assets/portfolio/IG2.webp"
        },
        {
            title: ".",
            description: "",
            tags: ["HTML/CSS", "JavaScript", "Google Analytics"],
            category: "posts",
            image: "assets/portfolio/IG3.webp"
        },
        {
            title: ".",
            description: "",
            tags: ["HTML/CSS", "JavaScript", "Google Analytics"],
            category: "posts",
            image: "assets/portfolio/IG4.webp"
        },
        {
            title: ".",
            description: "",
            tags: ["HTML/CSS", "JavaScript", "Google Analytics"],
            category: "posts",
            image: "assets/portfolio/IG5.webp"
        },
        {
            title: ".",
            description: "",
            tags: ["HTML/CSS", "JavaScript", "Google Analytics"],
            category: "posts",
            image: "assets/portfolio/IG6.webp"
        },
        {
            title: ".",
            description: "",
            tags: ["HTML/CSS", "JavaScript", "Google Analytics"],
            category: "posts",
            image: "assets/portfolio/IG7.webp"
        },
        {
            title: ".",
            description: "",
            tags: ["HTML/CSS", "JavaScript", "Google Analytics"],
            category: "posts",
            image: "assets/portfolio/IG8.webp"
        },
        {
            title: ".",
            description: "",
            tags: ["HTML/CSS", "JavaScript", "Google Analytics"],
            category: "posts",
            image: "assets/portfolio/IG9.webp"
        }
    ];
    // Get all unique tags and categories
    const allTags = [...new Set(projects.flatMap(project => project.tags))];
    const categories = [...new Set(projects.map(project => project.category))];
    // Render portfolio filters and projects
    const portfolioContainer = document.querySelector('#portfolio');
    
    // Create filter buttons for categories
    const categoryFilters = `
        <div class="filter-buttons mb-8 flex flex-wrap justify-center gap-4">
            <button class="filter-btn active px-6 py-3 rounded-full bg-indigo-600 text-white transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg" data-filter="all">
                All Projects
            </button>
            ${categories.map(category => `
                <button class="filter-btn px-6 py-3 rounded-full bg-gray-200 text-gray-700 transition-all duration-300 hover:bg-indigo-600 hover:text-white hover:shadow-lg" data-filter="${category}">
                    ${category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
            `).join('')}
        </div>
    `;

    // Create tag filter chips
    const tagFilters = `
        <!--<div class="tag-filters mb-8 flex flex-wrap justify-center gap-3">
            ${allTags.map(tag => `
                <button class="tag-btn px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm transition-all duration-300 hover:bg-indigo-600 hover:text-white hover:shadow-md" data-tag="${tag}">
                    ${tag}
                </button>
            `).join('')}
        </div>-->
    `;
    // Create projects grid with masonry layout and lazy loading
    const projectsGrid = `
        <div class="masonry-grid max-w-7xl mx-auto mt-10">
            ${projects.map((project) => {
                return `
                    <div class="masonry-item" data-category="${project.category}" data-tags="${project.tags.join(',')}">
                        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='640' height='360' viewBox='0 0 640 360'%3E%3Crect width='640' height='360' fill='%23f3f4f6'/%3E%3C/svg%3E" 
                             data-src="${project.image}" 
                             alt="${project.title}" 
                             class="lazy-load" 
                             loading="lazy">
                        <div class="masonry-content">
                            <!--<h3>${project.title}</h3>
                            <p>${project.description}</p>
                            <div class="masonry-tags">
                                ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                            </div>
                            -->
                                    <div class="masonry-tags capitalize"><span>${project.category}</span></div>
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
portfolioContainer.innerHTML = categoryFilters + tagFilters + projectsGrid;
    // Add filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const tagButtons = document.querySelectorAll('.tag-btn');
    const masonryItems = document.querySelectorAll('.masonry-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state with smooth transitions
            filterButtons.forEach(btn => {
                btn.classList.remove('active', 'bg-indigo-600', 'text-white');
                btn.classList.add('bg-gray-200', 'text-gray-700');
            });
            button.classList.add('active', 'bg-indigo-600', 'text-white');
            button.classList.remove('bg-gray-200', 'text-gray-700');

            const filter = button.dataset.filter;
            
            // Animate items with staggered delay
            masonryItems.forEach((item, index) => {
                if (filter === 'all' || item.dataset.category === filter) {
                    setTimeout(() => {
                        item.style.display = 'block';
                        item.style.animation = 'fadeInUp 0.6s ease forwards';
                    }, index * 50);
                } else {
                    item.style.animation = 'fadeOutDown 0.4s ease forwards';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 400);
                }
            });
        });
    });

    tagButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tag = button.dataset.tag;
            
            // Toggle active state for tags
            button.classList.toggle('active');
            button.classList.toggle('bg-indigo-600');
            button.classList.toggle('text-white');
            
            masonryItems.forEach((item, index) => {
                const tags = item.dataset.tags.split(',');
                if (tags.includes(tag)) {
                    setTimeout(() => {
                        item.style.display = 'block';
                        item.style.animation = 'fadeInUp 0.6s ease forwards';
                    }, index * 50);
                } else {
                    item.style.animation = 'fadeOutDown 0.4s ease forwards';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 400);
                }
            });

            // Reset category buttons to "All"
            filterButtons.forEach(btn => {
                btn.classList.remove('active', 'bg-indigo-600', 'text-white');
                btn.classList.add('bg-gray-200', 'text-gray-700');
            });
            document.querySelector('[data-filter="all"]').classList.add('active', 'bg-indigo-600', 'text-white');
        });
    });
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    // Add CSS animations for masonry items
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes fadeOutDown {
            from {
                opacity: 1;
                transform: translateY(0);
            }
            to {
                opacity: 0;
                transform: translateY(30px);
            }
        }
        
        .masonry-item {
            animation: fadeInUp 0.8s ease forwards;
        }
        
        .lazy-load {
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .lazy-load.loaded {
            opacity: 1;
        }
    `;
    document.head.appendChild(style);

    // Lazy loading implementation
    const lazyLoadImages = () => {
        const lazyImages = document.querySelectorAll('.lazy-load');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '200px 0px', // Load images 200px before they enter viewport
            threshold: 0.1
        });

        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    };

    // Initialize lazy loading
    lazyLoadImages();

    // Re-initialize lazy loading after filter changes
    const reinitLazyLoading = () => {
        setTimeout(lazyLoadImages, 100); // Small delay to allow DOM updates
    };

    // Add lazy loading reinitialization to filter events
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            setTimeout(reinitLazyLoading, 450); // Wait for fade animations to complete
        });
    });

    tagButtons.forEach(button => {
        button.addEventListener('click', () => {
            setTimeout(reinitLazyLoading, 450); // Wait for fade animations to complete
        });
    });




   // Mobile bottom bar navigation
   const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
   const sections = document.querySelectorAll('section');
   
   // Update active state based on scroll position
   const updateActiveNavItem = () => {
       const scrollPosition = window.scrollY + 100;
       
       sections.forEach(section => {
           const sectionTop = section.offsetTop;
           const sectionHeight = section.offsetHeight;
           const sectionId = section.getAttribute('id');
           
           if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
               mobileNavItems.forEach(item => {
                   const href = item.getAttribute('href');
                   if (href === `#${sectionId}` || (href === '#' && sectionId === undefined)) {
                       item.classList.add('active');
                   } else {
                       item.classList.remove('active');
                   }
               });
           }
       });
   };

   // Add scroll event listener for mobile nav
   window.addEventListener('scroll', updateActiveNavItem);
   
   // Initial update
   updateActiveNavItem();

   // Smooth scroll for mobile nav items
   mobileNavItems.forEach(item => {
       item.addEventListener('click', (e) => {
           e.preventDefault();
           const targetId = item.getAttribute('href');
           const targetElement = targetId === '#' ? document.body : document.querySelector(targetId);
           
           if (targetElement) {
               targetElement.scrollIntoView({
                   behavior: 'smooth',
                   block: 'start'
               });
               
               // Update active state
               mobileNavItems.forEach(navItem => navItem.classList.remove('active'));
               item.classList.add('active');
           }
       });
   });



});


