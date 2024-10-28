(() => {
  document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const mref = urlParams.get('mref');

    if (mref === '1') {
      // Find yopto review button and click it

      setTimeout(() => {
        const yotpoReviewButton = document.querySelector('#yotpo-main-widget-btn');

        if (yotpoReviewButton) {
          yotpoReviewButton.click();
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
})();

(() => {
  const disabled = true;

  if (disabled) {
    return;
  }

  // Check shopify cart to see if dicount code is applied
  document.addEventListener('DOMContentLoaded', async () => {
    const productID = document.querySelector('.shopify-product-form input[name="id"]')?.value;
    let discounts = [];

    if (!productID) {
      return;
    }

    // Fix fetch body to only add 1 product (don't overwrite quantity)
    const fetchBody = `quantity=1&id=${productID}`;

    // Add product to cart and check if discount code is applied
    await fetch('/cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `quantity=1&id=${productID}`,
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);

      if (data.discounts) {
        discounts.push(data.discounts);
      }

      // Remove product from cart (dont remove all quantities, just 1)
      fetch('/cart/change.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `quantity=0&id=${productID}`,
      })
      .then(response => response.json())
      .then(data => {
        console.log("Removed: ", data);
      })
    })

    console.log(discounts);
  })
})();
//<price-list class="price-list  ">
//  <sale-price class="text-on-sale">
//       <span class="sr-only">Sale price</span>
//       $19.55
//  </sale-price>
//
//  <compare-at-price class="text-subdued line-through">
//         <span class="sr-only">Regular price</span>
//         $22.99
//  </compare-at-price>
//</price-list>
//

// Example: ?preview_theme_id=125380460602&discount_code=BC15%2525&refresh=true
// Example2: https://www.brewcraftstore.com/products/premium-ceramic-lined-travel-mug-1?preview_theme_id=125380460602&discount_code=BC15%2525&refresh=true

(() => {
  document.addEventListener('DOMContentLoaded', () => {
    const queryParam = new URLSearchParams(window.location.search);
    const discountCode = queryParam.get('discount_code');
    const percentOff = 15;

    // Apply the discount
    if (discountCode) {
      fetch(`/discount/${discountCode}?redirect=%2Fcart`)
      .then(response => response.text())
      .then(() => {
        if (queryParam.get('refresh') === 'true') {
          window.location.replace(`${window.location.href.split('?')[0]}?refresh=false&discount_code=${discountCode}`);
        }
      })
    }

    // Display UI
    if (queryParam.get('refresh') === 'true' || (discountCode !== 'SPOOKY15' && discountCode !== 'BC15%')) {
      return
    }

    if (queryParam.get('refresh') === 'false') {
      const productPriceContainer = document.querySelector('.product .product-info .product-info__price price-list');
      const salePriceContainer = productPriceContainer?.querySelector('sale-price');

      if (salePriceContainer) {
        const currentPrice = salePriceContainer.innerText
            .replace('<span class="sr-only">Sale price</span>', '').trim()
            .replace('Sale price', '').trim()
            .replace('$', '').trim();

        const newPrice = Math.floor(currentPrice * (1 - percentOff / 100) * 100) / 100;

        productPriceContainer.innerHTML = `
          <sale-price class="text-on-sale">
              <span class="sr-only">Sale price</span>
              $${newPrice}
          </sale-price>

          <compare-at-price class="text-subdued line-through">
              <span class="sr-only">Regular price</span>
              $${currentPrice}
          </compare-at-price>
        `;

        // Add discount message after price
        productPriceContainer.parentElement.insertAdjacentHTML('afterend', `
          <div class="discount-message">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
            </svg>
            
            <p>Discount with <strong>${discountCode}</strong> applied at checkout.</p>
          </div>
        `);
      }
    }
  })
})();

