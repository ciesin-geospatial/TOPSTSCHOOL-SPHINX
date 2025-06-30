document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        if (link.hostname !== window.location.hostname) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
});

window.addEventListener('load', () => {
    const wordsPerMinute = 275;
    const section = document.querySelector('section');

    if (!section) return;

    const paragraphs = section.querySelectorAll('p');
    const totalWordCount = Array.from(paragraphs).reduce((count, p) =>
        count + p.textContent.trim().split(/\s+/).length, 0);

    if (totalWordCount > 0) {
        const readingTime = Math.ceil(totalWordCount / wordsPerMinute);
        document.getElementById('readingTime').innerHTML = `<i class='fa-regular fa-hourglass-start' style='padding-right: 0.3rem;'></i>${readingTime} minutes`;
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('#content .fade-image');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    images.forEach(image => observer.observe(image));
});

document.querySelectorAll('details.sd-dropdown').forEach((dropdown) => {
    const summary = dropdown.querySelector('summary');
    const content = dropdown.querySelector('.sd-summary-content');
    content.style.transition = 'max-height 1s ease';
    content.style.overflow = 'hidden';
    content.style.maxHeight = '0';
    summary.addEventListener('click', (event) => {
        event.preventDefault();
        const isOpen = dropdown.hasAttribute('open');
        if (isOpen) {
            content.style.maxHeight = '0';
            setTimeout(() => dropdown.removeAttribute('open'), 1000);
        } else {
            dropdown.setAttribute('open', true);
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('page-fade-in');
    const links = document.querySelectorAll('a[href]');
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('http')) {
                event.preventDefault();
                document.body.classList.add('page-fade-out');
                setTimeout(() => {
                    window.location.href = href;
                }, 500);
            }
        });
    });
});

var supportedLanguages = ['en', 'es'];

function switchLanguage() {
    var selectedLanguage = document.getElementById('language-selector').value;
    var currentUrl = window.location.href;
    var newUrl;
    var regex = new RegExp('\/(' + supportedLanguages.join('|') + ')\/');
    var currentLanguage = currentUrl.match(regex);

    if (supportedLanguages.includes(selectedLanguage)) {
        if (selectedLanguage !== 'en') {
            if (currentLanguage) {
                newUrl = currentUrl.replace(regex, '/' + encodeURIComponent(selectedLanguage) + '/');
            } else {
                newUrl = currentUrl.endsWith('/') ? currentUrl + encodeURIComponent(selectedLanguage) + '/' : currentUrl + '/' + encodeURIComponent(selectedLanguage) + '/';
            }
        } else {
            if (currentLanguage) {
                newUrl = currentUrl.replace(regex, '/');
            }
        }
        if (newUrl) {
            window.location.href = newUrl;
        }
    }
}

window.addEventListener('DOMContentLoaded', function () {
    var regex = new RegExp('\/(' + supportedLanguages.join('|') + ')\/');
    var currentLanguage = window.location.href.match(regex);
    if (currentLanguage) {
        document.getElementById('language-selector').value = currentLanguage[1];
    } else {
        document.getElementById('language-selector').value = 'en';
    }
});

const dropdowns = document.querySelectorAll('.header-dropdown');
dropdowns.forEach(dropdown => {
    const button = dropdown.querySelector('.header-dropdown button');
    button.addEventListener('click', () => {
        dropdowns.forEach(d => d.classList.remove('active'));
        dropdown.classList.toggle('active');
    });
});
document.addEventListener('click', function (event) {
    if (!event.target.closest('.header-dropdown')) {
        dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
    }
});

document.querySelectorAll('.contributor-name').forEach(element => {
    element.addEventListener('mouseenter', function (event) {
        const index = event.target.getAttribute('data-index');
        const modal = document.getElementById('contributors-publisher-modal-' + index);
        modal.style.display = 'block';

        document.addEventListener('click', function handleOutsideClick(e) {
            if (!modal.contains(e.target) && !element.contains(e.target)) {
                modal.style.display = 'none';
                document.removeEventListener('click', handleOutsideClick);
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        root: null,
        threshold: 0.2
    };
    const observerCallback = (entries) => {
        entries.forEach((entry) => {
            const link = document.querySelector(`#right-sidebar ul li a[href='#${entry.target.id}']`);
            if (entry.isIntersecting) {
                link.setAttribute('data-current', 'true');
            } else {
                link.removeAttribute('data-current');
            }
        });
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((section) => observer.observe(section));
});

document.addEventListener("DOMContentLoaded", function () {
    Splitting();
});

document.addEventListener("DOMContentLoaded", function () {
    let prevScrollTop = 0;
    let header = document.querySelector("header");

    header.style.transition = "transform 0.2s ease-in-out";

    document.addEventListener("scroll", function () {
        let nowScrollTop = window.scrollY;

        if (nowScrollTop > prevScrollTop) {
            header.style.transform = "translateY(-200%)";
        } else {
            header.style.transform = "translateY(0%)";
        }

        prevScrollTop = nowScrollTop;
    });
});



