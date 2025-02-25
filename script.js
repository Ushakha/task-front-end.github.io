document.querySelectorAll('.box').forEach((box) => {
    box.addEventListener('click', function () {

        const radioInput = box.querySelector('input[type="radio"]');

        document.querySelectorAll('.box.expanded').forEach((expandedBox) => {
          if(expandedBox!==this){
            this.classList.remove('expanded');
            const hidElements = expandedBox.querySelector('.options');
            hidElements.classList.add('hidden');
            expandedBox.querySelector('input[type="radio"]').checked = false;
          }  
        })

        if (radioInput) {
          radioInput.checked = true;
        }

      // expansion of div
      this.classList.add('expanded');
      const options = this.querySelector('.options');
      options.classList.remove('hidden');
  
    });
  });
  