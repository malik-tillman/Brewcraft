(() => {
  document.addEventListener('DOMContentLoaded', () => {
    // On load if url query param for for mref = 1 then do the following
    const urlParams = new URLSearchParams(window.location.search);
    const mref = urlParams.get('mref');

    if (mref === '1') {
      // Find yopto review button and click it

      setTimeout(() => {
        const yotpoReviewButton = document.querySelector('#yotpo-main-widget-btn');

        if (yotpoReviewButton) {
          yotpoReviewButton.click();

          console.log("Malik -- Clicked on Yotpo Review Button");
        } else {
          // try again
          setTimeout(() => {
            const yotpoReviewButton = document.querySelector('#yotpo-main-widget-btn');

            if (yotpoReviewButton) {
              yotpoReviewButton.click();
            }
          }, 3000)
        }
      }, 1000)

    }

    else {
      setTimeout(() => {
        const yotpoReviewContainer = document.querySelector('.shopify-section--apps');

        console.log(yotpoReviewContainer);

        if (yotpoReviewContainer) {
          yotpoReviewContainer.style.display = 'none';
        }

        else {
          // try again
          setTimeout(() => {
            const yotpoReviewContainer = document.querySelector('.shopify-section--apps');

            if (yotpoReviewContainer) {
              yotpoReviewContainer.style.display = 'none';
            }
          }, 3000)
        }

      }, 1000)
    }
  })
})()
