/*global console*/

// Hide Placeholder On Input In Focus

var myInput = document.getElementsByClassName('form-control'),
    Link = document.querySelectorAll('li'),
    brand = document.getElementById('brand'),
    i;



window.onscroll = function () {
    
    'use strict';
    
//    console.log(window.pageYOffset);
    
    if (window.pageYOffset >= 670 && window.pageYOffset < 1860) {
        
        Link[1].setAttribute('class', 'active');
        Link[1].previousElementSibling.setAttribute('class', '');
        Link[1].nextElementSibling.setAttribute('class', '');
        
    } else if (window.pageYOffset < 670){
        
        Link[1].setAttribute('class', '');
        Link[1].previousElementSibling.setAttribute('class', 'active');
        
    } else if (window.pageYOffset >= 1865 && window.pageYOffset < 2895) {
        
        Link[2].previousElementSibling.removeAttribute('class');
        Link[2].nextElementSibling.removeAttribute('class');
        Link[2].setAttribute('class', 'active');
        
    } else if (window.pageYOffset >= 2895 && window.pageYOffset < 4645) {
        
        Link[3].previousElementSibling.removeAttribute('class');
        Link[3].nextElementSibling.removeAttribute('class');
        Link[3].setAttribute('class', 'active');
        
    } else if (window.pageYOffset >= 4645 && window.pageYOffset < 5955) {
        
        Link[4].previousElementSibling.removeAttribute('class');
        Link[4].nextElementSibling.removeAttribute('class');
        Link[4].setAttribute('class', 'active');
        
    } else if (window.pageYOffset >= 5955) {
        
        Link[5].previousElementSibling.removeAttribute('class');
        Link[5].setAttribute('class', 'active');
    }
    
};


for (i = 0; i <= myInput.length; i = i + 1) {
    
    if (myInput[i].hasAttribute('placeholder')) {
        
        myInput[i].onfocus = function () {
            
            'use strict';
            //Set BackUp For The Placeholder
            this.setAttribute('backUp', this.placeholder);
            this.placeholder = '';
        };
        
        myInput[i].onblur = function () {
            
            'use strict';
            // Get Placeholder From The BackUp
            this.placeholder = this.getAttribute('backUp');
            this.removeAttribute('backUp');
        };
    }
    
}


