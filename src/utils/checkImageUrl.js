export function checkImageURL(url) {
    return new Promise((resolve) => {
        const img = new Image();
        
        img.onload = function() {
            resolve(true); 
        };
        
        img.onerror = function() {
            resolve(false);  // URL is invalid
        };
        
        img.src = url;
    });
}