// Guild ID for Dev Matrix Discord
const guildId = '1254448203852415057'; 

// Function to fetch and display Discord member count
async function fetchDiscordMemberCount() {
    try {
        const response = await fetch(`https://discord.com/api/guilds/${guildId}/widget.json`);
        const data = await response.json();

        // Display online members count in the element with ID 'onlineCount'
        document.getElementById('onlineCount').innerText = data.presence_count || "N/A";
    } catch (error) {
        console.error('Error fetching Discord member count:', error);
    }
}

// Fetch the initial member count and set up an interval to update it every 10 seconds
fetchDiscordMemberCount();
setInterval(fetchDiscordMemberCount, 10000);

// Spinner and content fade-in effect when the page is loaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const spinner = document.getElementById('spinner');
        const content = document.getElementById('content');
        
        // Fade out the spinner and fade in the content
        spinner.style.opacity = '0';
        content.style.opacity = '1';
        
        // Completely hide the spinner after fading out
        setTimeout(() => {
            spinner.style.display = 'none';
        }, 500); // Match this with the CSS transition duration for the spinner fade out
    }, 1100); // 1.1 seconds delay to ensure spinner is shown long enough
});

// Initialize the particles effect for background with touch support for mobile
particlesJS("particles-js", 
    {
        "particles": {
          "number": {
            "value": 100,
            "density": {
              "enable": false,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "star",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "http://wiki.lexisnexis.com/academic/images/f/fb/Itunes_podcast_icon_300.jpg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 4,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 14,
            "direction": "left",
            "random": false,
            "straight": true,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "grab"
            },
            "onclick": {
              "enable": true,
              "mode": "repulse"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 200,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      }
);
