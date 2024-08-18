document.addEventListener('keydown', (event) => {
            
            if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I')) {
                event.preventDefault();
            }
            
            if ((event.ctrlKey && (event.key === 'U' || event.key === 'S')) || event.key === 'F5') {
                event.preventDefault();
            }
        });

        
        document.addEventListener('contextmenu', (event) => {
            event.preventDefault();
        });

        
        const detectDevTools = () => {
            let threshold = 160;
            let width = window.innerWidth || document.documentElement.clientWidth;
            let height = window.innerHeight || document.documentElement.clientHeight;
            if (width <= threshold || height <= threshold) {
                
            }
        };

        window.addEventListener('resize', detectDevTools);
        detectDevTools();
