// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "A selection of research and practice-based work contributed over the years.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "This page is under construction.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "A curated collection of academic, research, and data science works showcasing skills, tools, and insights.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "THIS IS DUMMY This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "A snapshot of my teaching experience, philosophy, and contributions to higher education instruction.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/distill/";
          
        },
      },{id: "books-democracy-and-education",
          title: 'Democracy and Education',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/democracy_and_education/";
            },},{id: "books-einstein",
          title: 'Einstein',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/einstein/";
            },},{id: "books-fifth-discipline",
          title: 'Fifth Discipline',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/fifth_discipline/";
            },},{id: "books-good-to-great",
          title: 'Good to Great',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/good_to_great/";
            },},{id: "books-long-walk-to-freedom",
          title: 'Long Walk to Freedom',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/long_walk_to_freedom/";
            },},{id: "books-open-heart-open-mind",
          title: 'Open Heart, Open Mind',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/open_heart_open_mind/";
            },},{id: "books-power-of-now",
          title: 'Power of Now',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/power_of_now/";
            },},{id: "books-the-7-habits-of-highly-effective-people",
          title: 'The 7 Habits of Highly Effective People',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/seven_habits/";
            },},{id: "books-the-story-of-my-experiments-with-truth",
          title: 'The Story of My Experiments with Truth',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_story_of_my_experiments_with_truth/";
            },},{id: "news-attened-pathways-to-profession-p2p-symposium-at-tarleton-state-university-sponsored-by-tamus",
          title: 'Attened Pathways to Profession (P2P) Symposium at Tarleton State University sponsored by TAMUS....',
          description: "",
          section: "News",},{id: "news-microphone-presented-my-research-at-the-sera-annual-conference-in-san-antonio-texas",
          title: ':microphone:Presented my research at the SERA Annual Conference in San Antonio, Texas.',
          description: "",
          section: "News",},{id: "news-i-advanced-to-candidacy-and-i-am-a-doctoral-candidate-man-student",
          title: 'I advanced to candidacy and I am a doctoral candidate :man_student:',
          description: "",
          section: "News",},{id: "news-microphone-presentated-my-research-at-the-aera-annual-confernce-in-denver-colorado",
          title: ':microphone:Presentated my research at the AERA Annual Confernce in Denver, Colorado.',
          description: "",
          section: "News",},{id: "news-i-successfully-defended-dissertation-proposal-man-student",
          title: 'I successfully defended dissertation proposal :man_student:',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%62%6C%75%69%74%65%6C@%69%73%6C%61%6E%64%65%72.%74%61%6D%75%63%63.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Bibek-Luitel", "_blank");
        },
      },{
        id: 'social-kaggle',
        title: 'Kaggle',
        section: 'Socials',
        handler: () => {
          window.open("https://www.kaggle.com/bibekluitel", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/luitel-bibek", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0005-1123-4683", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Bibek-Luitel-4/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=L8h9lIIAAAAJ&hl", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
