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
    if (queryParam.get('refresh') === 'true' || (discountCode !== 'SPOOKY15' && discountCode !== 'SPOOKY15g')) {
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

        let newPrice = currentPrice * (1 - percentOff / 100);

        productPriceContainer.innerHTML = `
          <sale-price class="text-on-sale">
              <span class="sr-only">Sale price</span>
              $${newPrice.toFixed(2)}
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

const x = {
  "props": {
    "pageProps": {
      "strapidata": {
        "id": 1,
        "published_at": "2021-03-09T09:22:47.000Z",
        "created_at": "2021-03-09T09:22:43.000Z",
        "updated_at": "2024-08-01T10:46:35.000Z",
        "CutomerHeader": {
          "id": 1,
          "Title": "GET REWARDED FOR RIDING NJ TRANSIT®",
          "Button1": "Get Started",
          "Button2": "Log In",
          "NavLinks": [
            {
              "id": 31,
              "NavLinkText": "How It Works",
              "NavLinkRoute": "https://njtrewards.com/howitworks"
            },
            {
              "id": 32,
              "NavLinkText": "Offers",
              "NavLinkRoute": "https://njtrewards.com/offers"
            },
            {
              "id": 33,
              "NavLinkText": "Conversion",
              "NavLinkRoute": "https://njtrewards.com/conversion"
            },
            {
              "id": 34,
              "NavLinkText": "Bonus Points",
              "NavLinkRoute": "https://njtrewards.com/bonuspoints"
            },
            {
              "id": 35,
              "NavLinkText": "FAQs",
              "NavLinkRoute": "https://njtrewards.com/faqs"
            }
          ],
          "HeaderLogo": {
            "id": 103,
            "name": "Njt_Logo.png",
            "alternativeText": "",
            "caption": "",
            "width": 500,
            "height": 500,
            "formats": {
              "thumbnail": {
                "name": "thumbnail_Njt_Logo.png",
                "hash": "thumbnail_Njt_Logo_19c8f865ac",
                "ext": ".png",
                "mime": "image/png",
                "width": 156,
                "height": 156,
                "size": 14.02,
                "path": null,
                "url": "https://tplandingpage.s3.amazonaws.com/1%3A24%3A38thumbnail_Njt_Logo_19c8f865ac.png"
              }
            },
            "hash": "Njt_Logo_19c8f865ac",
            "ext": ".png",
            "mime": "image/png",
            "size": "24.06",
            "url": "https://tplandingpage.s3.amazonaws.com/1%3A24%3A37Njt_Logo_19c8f865ac.png",
            "previewUrl": null,
            "provider": "s3",
            "provider_metadata": null,
            "created_at": "2022-06-21T13:24:38.000Z",
            "updated_at": "2022-06-21T13:24:38.000Z"
          }
        },
        "CutomerSection1": {
          "id": 1,
          "Heading": "Get rewarded for riding NJ TRANSIT",
          "Description": "Earn points that you can redeem for offers at stores restaurants and attractions, when you purchase NJ TRANSIT tickets and passes through the NJ TRANSIT Mobile App. Then redeem them for offers at stores, restaurants, and attractions. You choose when and how your points tickets are redeemed.",
          "Heading1": "# Get rewarded for riding NJ\u0026nbsp;TRANSIT®\n",
          "Description1": "Earn points that you can redeem for offers at stores, restaurants, and attractions when you purchase tickets and passes through the NJ\u0026nbsp;TRANSIT Mobile App. You choose when and how your points are redeemed.",
          "Image1": {
            "id": 75,
            "name": "Image (Hero).png",
            "alternativeText": "",
            "caption": "",
            "width": 480,
            "height": 480,
            "formats": {
              "thumbnail": {
                "name": "thumbnail_Image (Hero).png",
                "hash": "thumbnail_Image_Hero_4eff6b620f",
                "ext": ".png",
                "mime": "image/png",
                "width": 156,
                "height": 156,
                "size": 15.1,
                "path": null,
                "url": "https://tplandingpage.s3.amazonaws.com/12%3A16%3A27thumbnail_Image_Hero_4eff6b620f.png"
              }
            },
            "hash": "Image_Hero_4eff6b620f",
            "ext": ".png",
            "mime": "image/png",
            "size": "32.33",
            "url": "https://tplandingpage.s3.amazonaws.com/12%3A16%3A27Image_Hero_4eff6b620f.png",
            "previewUrl": null,
            "provider": "s3",
            "provider_metadata": null,
            "created_at": "2021-03-09T12:16:27.000Z",
            "updated_at": "2021-03-09T12:16:27.000Z"
          }
        },
        "CustomerSection2": {
          "id": 1,
          "Heading": "Grab offers from these and other NJT Rewards partners. Check-in frequently as new partners  and offers are coming soon!  ",
          "Description": "",
          "Heading1": "## Our Partners",
          "Image2": {
            "id": 77,
            "name": "Image (Section I).png",
            "alternativeText": "",
            "caption": "",
            "width": 540,
            "height": 420,
            "formats": {
              "thumbnail": {
                "name": "thumbnail_Image (Section I).png",
                "hash": "thumbnail_Image_Section_I_b8f333f058",
                "ext": ".png",
                "mime": "image/png",
                "width": 201,
                "height": 156,
                "size": 17.32,
                "path": null,
                "url": "https://tplandingpage.s3.amazonaws.com/12%3A17%3A05thumbnail_Image_Section_I_b8f333f058.png"
              },
              "small": {
                "name": "small_Image (Section I).png",
                "hash": "small_Image_Section_I_b8f333f058",
                "ext": ".png",
                "mime": "image/png",
                "width": 500,
                "height": 389,
                "size": 58.03,
                "path": null,
                "url": "https://tplandingpage.s3.amazonaws.com/12%3A17%3A05small_Image_Section_I_b8f333f058.png"
              }
            },
            "hash": "Image_Section_I_b8f333f058",
            "ext": ".png",
            "mime": "image/png",
            "size": "31.16",
            "url": "https://tplandingpage.s3.amazonaws.com/12%3A17%3A05Image_Section_I_b8f333f058.png",
            "previewUrl": null,
            "provider": "s3",
            "provider_metadata": null,
            "created_at": "2021-03-09T12:17:05.000Z",
            "updated_at": "2021-03-09T12:17:05.000Z"
          }
        },
        "CutomerSignup": {
          "id": 1,
          "Heading": "Sign up to get rewarded!",
          "Description": "Do you purchase tickets using the NJ TRANSIT Mobile App? Enter the same email address to get started earning points everytime you travel.",
          "Description1": "Do you purchase tickets using the NJ\u0026nbsp;TRANSIT Mobile App? Enter the same email address to get started earning points everytime you travel."
        },
        "CutomerFAQ": {
          "id": 1,
          "Title": "Want to know more...",
          "TextBeforeLink": null,
          "LinkText": null,
          "TextAfterLink": null,
          "CustomerFAQPart": [
            {
              "id": 1,
              "Question": "Who can participate in NJT\u0026nbsp;Rewards?",
              "Answer": "Everyone! Just purchase your tickets using NJ\u0026nbsp;TRANSIT Mobile App to earn points.",
              "Type": "About"
            },
            {
              "id": 2,
              "Question": "Is there a cost to become an NJT\u0026nbsp;Rewards member?",
              "Answer": "No, NJT\u0026nbsp;Rewards is a FREE program.",
              "Type": "About"
            },
            {
              "id": 3,
              "Question": "How often do I need to ride NJT to earn rewards points?",
              "Answer": "Every NJT ticket purchase earns points in your account which are redeemable for Rewards, regardless of how often you travel.",
              "Type": "About"
            },
            {
              "id": 4,
              "Question": "How do I sign up for NJT\u0026nbsp;Rewards?",
              "Answer": "\u003cp\u003e If you already buy tickets using the mobile app, tap the \"More\" tab while signed in to reach NJT\u0026nbsp;Rewards.  \u003c/p\u003e\n\u003cp\u003e - or - \u003c/p\u003e\n\u003cp\u003eDownload the NJ\u0026nbsp;TRANSIT Mobile App and get started by creating your account from the profile icon in the upper left corner in the app.\u003c/p\u003e",
              "Type": "Getting Started"
            },
            {
              "id": 5,
              "Question": "Where can I earn points on my ticket purchases?",
              "Answer": "We do not support points for tickets purchased from vending machines or ticketing booths. You must be a registered user of the transit service mobile app and make your purchases through the mobile app.",
              "Type": "Getting Started"
            },
            {
              "id": 15,
              "Question": "What information do I need to provide?\n",
              "Answer": "Only your email address and password are required.",
              "Type": "Getting Started"
            },
            {
              "id": 16,
              "Question": "Will my NJT\u0026nbsp;Rewards points expire?",
              "Answer": "No, your points don’t expire. The details of each Reward, including the expiration date of each offer and other requirements vary.",
              "Type": "Getting Started"
            },
            {
              "id": 17,
              "Question": "Do I need to have the NJ\u0026nbsp;TRANSIT Mobile App to become an NJT\u0026nbsp;Rewards member?",
              "Answer": "Yes, to become an NJT Rewards member you must purchase your tickets through the NJ\u0026nbsp;TRANSIT Mobile App.",
              "Type": "Getting Started"
            },
            {
              "id": 42,
              "Question": "What kind of NJT\u0026nbsp;Rewards can I receive?",
              "Answer": "You can redeem Rewards from your choice of any participating partner local and national stores, restaurants, and attractions.  ",
              "Type": "My Rewards"
            },
            {
              "id": 43,
              "Question": "When can I use my NJT\u0026nbsp;Reward points?",
              "Answer": "Use your points whenever your total is enough for the reward you want! Track your point balance as it increases with each ticket purchase.",
              "Type": "My Rewards"
            },
            {
              "id": 44,
              "Question": "How soon can I start earning and redeeming NJT\u0026nbsp;Rewards?",
              "Answer": "Instantly! However, it may take up to 5 business days for your ticket purchases to appear as points in your wallet. ",
              "Type": "My Rewards"
            },
            {
              "id": 45,
              "Question": "Can I return NJT\u0026nbsp;Rewards I have selected?",
              "Answer": "There is a 15-minute grace period after selecting a Reward when you may return it without penalty. Once the grace period ends, or if a partner redeems the reward, the Reward cannot be returned, and points are deducted from your account.",
              "Type": "Other"
            },
            {
              "id": 46,
              "Question": "What does NJT do with my information?",
              "Answer": "\u003cp\u003eNJT will never sell your information. Your personal information will be used in compliance with our \u003ca href=\"/termsofuse\" target=\"_blank\" \u003eTerms of Use\u003c/a\u003e and as set forth in our Privacy Policy.\u003c/p\u003e",
              "Type": "Other"
            },
            {
              "id": 47,
              "Question": "Who can I contact for help with NJT\u0026nbsp;Rewards?",
              "Answer": "\u003cp\u003e You can submit a question to NJT\u0026nbsp;Rewards Support using the \u003ca href=\"/Contact\" target=\"_blank\" \u003eonline contact form \u003c/a\u003e if you have additional questions.\u003c/p\u003e",
              "Type": "Help"
            },
            {
              "id": 48,
              "Question": "Do my Reward points expire?",
              "Answer": "No, Reward points have no expiration date.",
              "Type": null
            }
          ],
          "LandingPageHelpText": {
            "id": 1,
            "TextBeforeLink": "Check out our ",
            "LinkText": "Frequently Asked Questions",
            "TextAfterLink": "for more information.",
            "AskedLink": "\u003cdiv class='njt-sect3-desc'\u003eCheck out our \u003ca href=\"/FAQs\" target={'_blank'}\u003eFrequently Asked Questions\u003c/a\u003e for more information.\u003c/div\u003e"
          },
          "FAQPageHelpText": {
            "id": 1,
            "TextBeforeLink": "If you didn't find the answer to your question, ",
            "LinkText": "contact us",
            "TextAfterLink": "."
          },
          "FAQImage": {
            "id": 73,
            "name": "Image (Section II).png",
            "alternativeText": "",
            "caption": "",
            "width": 1260,
            "height": 335,
            "formats": {
              "thumbnail": {
                "name": "thumbnail_Image (Section II).png",
                "hash": "thumbnail_Image_Section_II_bb3bc54f02",
                "ext": ".png",
                "mime": "image/png",
                "width": 245,
                "height": 65,
                "size": 21.54,
                "path": null,
                "url": "https://tplandingpage.s3.amazonaws.com/12%3A14%3A46thumbnail_Image_Section_II_bb3bc54f02.png"
              },
              "large": {
                "name": "large_Image (Section II).png",
                "hash": "large_Image_Section_II_bb3bc54f02",
                "ext": ".png",
                "mime": "image/png",
                "width": 1000,
                "height": 266,
                "size": 149.24,
                "path": null,
                "url": "https://tplandingpage.s3.amazonaws.com/12%3A14%3A46large_Image_Section_II_bb3bc54f02.png"
              },
              "medium": {
                "name": "medium_Image (Section II).png",
                "hash": "medium_Image_Section_II_bb3bc54f02",
                "ext": ".png",
                "mime": "image/png",
                "width": 750,
                "height": 199,
                "size": 101.13,
                "path": null,
                "url": "https://tplandingpage.s3.amazonaws.com/12%3A14%3A46medium_Image_Section_II_bb3bc54f02.png"
              },
              "small": {
                "name": "small_Image (Section II).png",
                "hash": "small_Image_Section_II_bb3bc54f02",
                "ext": ".png",
                "mime": "image/png",
                "width": 500,
                "height": 133,
                "size": 57.81,
                "path": null,
                "url": "https://tplandingpage.s3.amazonaws.com/12%3A14%3A46small_Image_Section_II_bb3bc54f02.png"
              }
            },
            "hash": "Image_Section_II_bb3bc54f02",
            "ext": ".png",
            "mime": "image/png",
            "size": "107.70",
            "url": "https://tplandingpage.s3.amazonaws.com/12%3A14%3A46Image_Section_II_bb3bc54f02.png",
            "previewUrl": null,
            "provider": "s3",
            "provider_metadata": null,
            "created_at": "2021-03-09T12:14:47.000Z",
            "updated_at": "2021-03-09T12:14:47.000Z"
          }
        },
        "CutomerSection3": {
          "id": 1,
          "Link1": "Contact Us here",
          "Link2": "FAQs",
          "Link3": "Become a Retail Partner",
          "FAQLink": "\u003cli class='njt-list-menu'\u003e\u003ca href=\"/Contact\" target={'_blank'}\u003eContact Us\u003c/a\u003e\u003c/li\u003e\n\u003cli class='njt-list-menu'\u003e\u003ca href=\"/FAQs\" target={'_blank'}\u003eFAQs\u003c/a\u003e\u003c/li\u003e\n\u003cli class='njt-list-menu'\u003e\u003ca href=\"https://partner.njtrewards.com\" target={'_blank'}\u003eBecome a Retail Partner\u003c/a\u003e\u003c/li\u003e\n",
          "ImageLogo3": {
            "id": 72,
            "name": "njtlogo.png",
            "alternativeText": "",
            "caption": "",
            "width": 596,
            "height": 596,
            "formats": {
              "thumbnail": {
                "name": "thumbnail_njtlogo.png",
                "hash": "thumbnail_njtlogo_6057ee502f",
                "ext": ".png",
                "mime": "image/png",
                "width": 156,
                "height": 156,
                "size": 8.22,
                "path": null,
                "url": "https://tplandingpage.s3.amazonaws.com/12%3A13%3A17thumbnail_njtlogo_6057ee502f.png"
              },
              "small": {
                "name": "small_njtlogo.png",
                "hash": "small_njtlogo_6057ee502f",
                "ext": ".png",
                "mime": "image/png",
                "width": 500,
                "height": 500,
                "size": 34.19,
                "path": null,
                "url": "https://tplandingpage.s3.amazonaws.com/12%3A13%3A17small_njtlogo_6057ee502f.png"
              }
            },
            "hash": "njtlogo_6057ee502f",
            "ext": ".png",
            "mime": "image/png",
            "size": "24.46",
            "url": "https://tplandingpage.s3.amazonaws.com/12%3A13%3A17njtlogo_6057ee502f.png",
            "previewUrl": null,
            "provider": "s3",
            "provider_metadata": null,
            "created_at": "2021-03-09T12:13:18.000Z",
            "updated_at": "2021-03-09T12:13:18.000Z"
          }
        },
        "CustomerFooter": {
          "id": 1,
          "CopyRight": "2024 © NJ TRANSIT All Rights Reserved.",
          "Terms": "Terms of Use",
          "CopyRightLink": "https://njtrewards.com/termsofuse",
          "NavLink1": {
            "id": 6,
            "NavLinkText": "How It Works",
            "NavLinkRoute": "https://njtrewards.com/howitworks"
          },
          "NavLink2": {
            "id": 6,
            "NavLinkText": "Offers",
            "NavLinkRoute": "https://njtrewards.com/offers"
          },
          "NavLink3": {
            "id": 6,
            "NavLinkText": "Conversion",
            "NavLinkRoute": "https://njtrewards.com/conversion"
          },
          "NavLink4": {
            "id": 6,
            "NavLinkText": "FAQs",
            "NavLinkRoute": "https://njtrewards.com/faqs"
          },
          "NavLink5": {
            "id": 2,
            "NavLinkText": "Contact Us",
            "NavLinkRoute": "https://njtransit.secure.force.com/customerservice/site_app#/contactus"
          },
          "NavLinkPartner": {
            "id": 2,
            "NavLinkPartnerText": "Become a Retail Partner ",
            "NavLinkPartnerRoute": "https://partner.njtrewards.com"
          }
        },
        "ContactSection": {
          "id": 1,
          "Title": "Contact Us",
          "NoteHeading": "",
          "BeforeLinkText": "",
          "LinkText": ""
        },
        "AppDownloadSection": {
          "id": 2,
          "Heading": "\u003cp class=\"title-riderD\"\u003eDownload the NJ\u0026nbsp;TRANSIT Mobile App to get started now! \u003c/p\u003e",
          "DownloadLink1": "https://itunes.apple.com/us/app/nj-transit-mobile-app/id589549928?ls=1\u0026mt=8",
          "DownloadLink2": "https://play.google.com/store/apps/details?id=com.njtransit.njtapp",
          "Discriptions": "Simply click the profile icon in the upper left corner in the app to set up your account.",
          "Image1": {
            "id": 80,
            "name": "apple.png",
            "alternativeText": "",
            "caption": "",
            "width": 200,
            "height": 60,
            "formats": null,
            "hash": "apple_168c6fe57e",
            "ext": ".png",
            "mime": "image/png",
            "size": "5.20",
            "url": "https://tplandingpage.s3.amazonaws.com/8%3A21%3A16apple_168c6fe57e.png",
            "previewUrl": null,
            "provider": "s3",
            "provider_metadata": null,
            "created_at": "2021-04-12T08:21:17.000Z",
            "updated_at": "2021-04-12T08:21:17.000Z"
          },
          "Image2": {
            "id": 81,
            "name": "android.png",
            "alternativeText": "",
            "caption": "",
            "width": 200,
            "height": 60,
            "formats": null,
            "hash": "android_d0b9e3224e",
            "ext": ".png",
            "mime": "image/png",
            "size": "5.80",
            "url": "https://tplandingpage.s3.amazonaws.com/8%3A21%3A54android_d0b9e3224e.png",
            "previewUrl": null,
            "provider": "s3",
            "provider_metadata": null,
            "created_at": "2021-04-12T08:21:54.000Z",
            "updated_at": "2021-04-12T08:21:54.000Z"
          }
        },
        "HowItWorks": {
          "id": 6,
          "Title": "How It Works",
          "HowItWorksSection": [
            {
              "id": 21,
              "Question": "How do I sign up for NJT Rewards?\n",
              "Answer": "Step 1: Tap the profile icon in the top left-hand corner\u003cbr/\u003e\u003cbr/\u003e\n\nDon’t have a MyTix Profile?\u003cbr/\u003e\u003cbr/\u003e\n\nStep 2: If you haven’t set up your MyTix Profile yet, simply complete the profile. Tap on your profile once complete and then tap on NJT Rewards.\u003cbr/\u003e\u003cbr/\u003e\n\nOR\u003cbr/\u003e\u003cbr/\u003e\n\nAlready have a MyTix Profile?\u003cbr/\u003e\u003cbr/\u003e\n\nStep 2: Tap on NJT Rewards.\u003cbr/\u003e\nStep 3: Accept Terms \u0026 Conditions\u003cbr/\u003e\u003cbr/\u003e\n\nSuccess! You are now a NJT Rewards member.\u003cbr/\u003e\u003cbr/\u003e\n\nDon’t have the NJ TRANSIT Mobile App®?\u003cbr/\u003e\u003cbr/\u003e\n\n\u003cp\u003eStep 1: Download the app from the \u003ca href=\"https://apps.apple.com/us/app/nj-transit-mobile-app/id589549928?ls=1\" target=\"_blank\"\u003eApple App Store\u003c/a\u003e or \u003ca href=\"https://play.google.com/store/apps/details?id=com.njtransit.njtapp\" target=\"_blank\"\u003eGoogle Play Store\u003c/a\u003e\u003c/p\u003e\u003cbr/\u003e\n\nStep 2: Set up your MyTix Profile\u003cbr/\u003e\nStep 3: Tap on NJT Rewards.\u003cbr/\u003e\nStep 4: Accept Terms \u0026 Conditions\u003cbr/\u003e\u003cbr/\u003e\n\nSuccess! You are now a NJT Rewards member!\u003cbr/\u003e\u003cbr/\u003e\n\n\u003cp\u003e\u003ca href=\"https://njtbranding.s3.amazonaws.com/Rewards%20App%20Navigation.mp4\" target=\"_blank\"\u003eWatch this short video.\u003c/a\u003e\u003c/p\u003e\n"
            },
            {
              "id": 22,
              "Question": "How Do I Earn Points?\n",
              "Answer": "Every dollar you spend purchasing tickets in the NJ TRANSIT Mobile App® gets rewarded!\u003cbr/\u003e\u003cbr/\u003e\n\n\u003cp\u003eFor every dollar you spend, you earn 22 points in rewards. In addition, you get 50 points just for joining the NJT Rewards Program.\u003cbr/\u003e\u003cbr/\u003e\u003c/p\u003e  \n\nLook out for our emails that give you other opportunities to earn even more points!\n"
            },
            {
              "id": 23,
              "Question": "How Do I Redeem My Points?\n",
              "Answer": "Start redeeming your rewards by tapping “Rewards” on the main screen of the NJT Rewards app.\u003cbr/\u003e\u003cbr/\u003e\n\nIn the Rewards section, you can see our reward partners, the number of points needed, and how that offer works. You can sort the offers by category too!\u003cbr/\u003e\u003cbr/\u003e\n\nStep 1: Tap on Rewards\u003cbr/\u003e\u003cbr/\u003e\n\nStep 2: Find the reward's offer that you want, tap “Select.”\u003cbr/\u003e\u003cbr/\u003e  \n\nOnce selected, the reward will be added to your NJT Rewards Wallet. If you change your mind, you have a 15-minute grace period to return it without penalty. Once the grace period ends the reward cannot be returned, and the points will be deducted."
            },
            {
              "id": 24,
              "Question": "How Do I Use My Reward?\n",
              "Answer": "To use your reward, use your unique offer code at the retailer to get the savings and redeem the offer.\n"
            }
          ]
        },
        "CutomerFeaturedOffers": {
          "id": 1,
          "Heading": "## Featured Offers\n",
          "FeaturedOfferList": [
            {
              "id": 12,
              "businessName": "Gardinnovations",
              "offerTitle": "Save 20%",
              "businessDescription": "For the gardener in your life, save 20% on all online orders only. \n",
              "redirectURL": "https://www.mygardinnovations.com/",
              "offerExpirationDate": "2025-11-16T17:00:00.000Z",
              "adImage": [
                {
                  "id": 131,
                  "name": "New Final GI Logo 228x339.jpg",
                  "alternativeText": "",
                  "caption": "",
                  "width": 339,
                  "height": 228,
                  "formats": {
                    "thumbnail": {
                      "name": "thumbnail_New Final GI Logo 228x339.jpg",
                      "hash": "thumbnail_New_Final_GI_Logo_228x339_3c0927af96",
                      "ext": ".jpg",
                      "mime": "image/jpeg",
                      "width": 232,
                      "height": 156,
                      "size": 5.35,
                      "path": null,
                      "url": "https://tplandingpage.s3.amazonaws.com/5%3A32%3A31thumbnail_New_Final_GI_Logo_228x339_3c0927af96.jpg"
                    }
                  },
                  "hash": "New_Final_GI_Logo_228x339_3c0927af96",
                  "ext": ".jpg",
                  "mime": "image/jpeg",
                  "size": "9.58",
                  "url": "https://tplandingpage.s3.amazonaws.com/5%3A32%3A31New_Final_GI_Logo_228x339_3c0927af96.jpg",
                  "previewUrl": null,
                  "provider": "s3",
                  "provider_metadata": null,
                  "created_at": "2024-01-08T17:32:32.000Z",
                  "updated_at": "2024-01-08T17:32:32.000Z"
                }
              ]
            },
            {
              "id": 13,
              "businessName": "Even Hotels Times Square South",
              "offerTitle": "Save On Your Next Weekend Stay",
              "businessDescription": "Save 15% off weekend stays, valid Thursday-Sunday nights. Customers can show the special discount code upon check in and apply it to their final bill.\n\nTerms \u0026 Conditions\nOffer valid at Times Square South location only, 321 W. 35th Street, New York, NY.",
              "redirectURL": "https://www.evenhotels.com/hotels/us/en/reservation",
              "offerExpirationDate": "2025-11-20T17:00:00.000Z",
              "adImage": [
                {
                  "id": 132,
                  "name": "Even Logo 228x339 Edit.jpg",
                  "alternativeText": "",
                  "caption": "",
                  "width": 339,
                  "height": 228,
                  "formats": {
                    "thumbnail": {
                      "name": "thumbnail_Even Logo 228x339 Edit.jpg",
                      "hash": "thumbnail_Even_Logo_228x339_Edit_b0e7eb6704",
                      "ext": ".jpg",
                      "mime": "image/jpeg",
                      "width": 232,
                      "height": 156,
                      "size": 4.43,
                      "path": null,
                      "url": "https://tplandingpage.s3.amazonaws.com/5%3A36%3A42thumbnail_Even_Logo_228x339_Edit_b0e7eb6704.jpg"
                    }
                  },
                  "hash": "Even_Logo_228x339_Edit_b0e7eb6704",
                  "ext": ".jpg",
                  "mime": "image/jpeg",
                  "size": "6.68",
                  "url": "https://tplandingpage.s3.amazonaws.com/5%3A36%3A42Even_Logo_228x339_Edit_b0e7eb6704.jpg",
                  "previewUrl": null,
                  "provider": "s3",
                  "provider_metadata": null,
                  "created_at": "2024-01-08T17:36:42.000Z",
                  "updated_at": "2024-01-08T17:36:42.000Z"
                }
              ]
            },
            {
              "id": 14,
              "businessName": "Millie and Joy",
              "offerTitle": "Save 15%",
              "businessDescription": "First-time customers can save 15% on an in-store or online purchase. \n\nTerms \u0026 Conditions\nLimit 1 per customer and first-time customers only.",
              "redirectURL": "https://www.millieandjoy.com/",
              "offerExpirationDate": "2025-11-26T17:00:00.000Z",
              "adImage": [
                {
                  "id": 133,
                  "name": "MILLIE and Joy_Multicolor1 228x339.jpg",
                  "alternativeText": "",
                  "caption": "",
                  "width": 339,
                  "height": 228,
                  "formats": {
                    "thumbnail": {
                      "name": "thumbnail_MILLIE and Joy_Multicolor1 228x339.jpg",
                      "hash": "thumbnail_MILLIE_and_Joy_Multicolor1_228x339_d2ceb419bc",
                      "ext": ".jpg",
                      "mime": "image/jpeg",
                      "width": 232,
                      "height": 156,
                      "size": 3.55,
                      "path": null,
                      "url": "https://tplandingpage.s3.amazonaws.com/5%3A44%3A42thumbnail_MILLIE_and_Joy_Multicolor1_228x339_d2ceb419bc.jpg"
                    }
                  },
                  "hash": "MILLIE_and_Joy_Multicolor1_228x339_d2ceb419bc",
                  "ext": ".jpg",
                  "mime": "image/jpeg",
                  "size": "6.20",
                  "url": "https://tplandingpage.s3.amazonaws.com/5%3A44%3A42MILLIE_and_Joy_Multicolor1_228x339_d2ceb419bc.jpg",
                  "previewUrl": null,
                  "provider": "s3",
                  "provider_metadata": null,
                  "created_at": "2024-01-08T17:44:43.000Z",
                  "updated_at": "2024-01-08T17:44:43.000Z"
                }
              ]
            },
            {
              "id": 15,
              "businessName": "NHL",
              "offerTitle": "Save 20% for 2/17 NHL game ONLY at MetLife Stadium",
              "businessDescription": "NJT Rewards customers can save 20% off of tickets to the 2/17 game only during the 2024 Navy Federal Credit Union NHL Stadium Series™ between the NJ Devils and Philadelphia Flyers at MetLife Stadium. This offer is inclusive of the Jonas Brothers concert and Devils vs. Flyers game. \n\nTerms \u0026 Conditions\nNote: Tickets must be purchased by 11:59 p.m. on Tuesday, February 13, 2024.",
              "redirectURL": "https://njtrewards.com/offers",
              "offerExpirationDate": "2024-02-14T03:30:00.000Z",
              "adImage": [
                {
                  "id": 134,
                  "name": "SS24_JoBros_Ticketmaster_PaidSocial_339xx228.jpg",
                  "alternativeText": "",
                  "caption": "",
                  "width": 339,
                  "height": 228,
                  "formats": {
                    "thumbnail": {
                      "name": "thumbnail_SS24_JoBros_Ticketmaster_PaidSocial_339xx228.jpg",
                      "hash": "thumbnail_SS_24_Jo_Bros_Ticketmaster_Paid_Social_339xx228_e5e53554d8",
                      "ext": ".jpg",
                      "mime": "image/jpeg",
                      "width": 232,
                      "height": 156,
                      "size": 14.58,
                      "path": null,
                      "url": "https://tplandingpage.s3.amazonaws.com/7%3A17%3A20thumbnail_SS_24_Jo_Bros_Ticketmaster_Paid_Social_339xx228_e5e53554d8.jpg"
                    }
                  },
                  "hash": "SS_24_Jo_Bros_Ticketmaster_Paid_Social_339xx228_e5e53554d8",
                  "ext": ".jpg",
                  "mime": "image/jpeg",
                  "size": "28.78",
                  "url": "https://tplandingpage.s3.amazonaws.com/7%3A17%3A20SS_24_Jo_Bros_Ticketmaster_Paid_Social_339xx228_e5e53554d8.jpg",
                  "previewUrl": null,
                  "provider": "s3",
                  "provider_metadata": null,
                  "created_at": "2024-02-12T19:17:21.000Z",
                  "updated_at": "2024-02-12T19:17:21.000Z"
                }
              ]
            }
          ]
        },
        "CustomerOurPartner": {
          "id": 6,
          "ViewOfferButton": {
            "id": 6,
            "ButtonText": "View Offers",
            "ButtonLink": "https://njtrewards.com/offers"
          }
        },
        "BonusPointSection": {
          "id": 6,
          "Title": "Bonus Points Schedule",
          "Description": "Check out our current promotions below."
        },
        "BonusPointMonthYear": [
          {
            "id": 46,
            "BonusPointCampaignName": "March 2024",
            "BonusPointCard": [
              {
                "id": 136,
                "Title": "Spring Fling",
                "Description": "Now through April 30th, bring a friend for free when you “Buy One, Gift One” standard 4 one-way tickets between the same origin and destination using the code **SPRING24** in the NJ TRANSIT Mobile App.",
                "Image": {
                  "id": 94,
                  "name": "MonthlyPass.png",
                  "alternativeText": "",
                  "caption": "",
                  "width": 160,
                  "height": 160,
                  "formats": {
                    "thumbnail": {
                      "name": "thumbnail_MonthlyPass.png",
                      "hash": "thumbnail_Monthly_Pass_3b89446791",
                      "ext": ".png",
                      "mime": "image/png",
                      "width": 156,
                      "height": 156,
                      "size": 12.53,
                      "path": null,
                      "url": "https://tplandingpage.s3.amazonaws.com/7%3A44%3A58thumbnail_Monthly_Pass_3b89446791.png"
                    }
                  },
                  "hash": "Monthly_Pass_3b89446791",
                  "ext": ".png",
                  "mime": "image/png",
                  "size": "3.96",
                  "url": "https://tplandingpage.s3.amazonaws.com/7%3A44%3A57Monthly_Pass_3b89446791.png",
                  "previewUrl": null,
                  "provider": "s3",
                  "provider_metadata": null,
                  "created_at": "2022-02-21T07:44:58.000Z",
                  "updated_at": "2022-02-21T07:44:58.000Z"
                }
              },
              {
                "id": 137,
                "Title": "Newark Liberty Airport",
                "Description": "For tickets purchased to or from Newark Liberty International Airport through February 29.",
                "Image": {
                  "id": 113,
                  "name": "InternationalAirport.png",
                  "alternativeText": "",
                  "caption": "",
                  "width": 160,
                  "height": 160,
                  "formats": {
                    "thumbnail": {
                      "name": "thumbnail_InternationalAirport.png",
                      "hash": "thumbnail_International_Airport_6e68f0af28",
                      "ext": ".png",
                      "mime": "image/png",
                      "width": 156,
                      "height": 156,
                      "size": 49.11,
                      "path": null,
                      "url": "https://tplandingpage.s3.amazonaws.com/5%3A29%3A33thumbnail_International_Airport_6e68f0af28.png"
                    }
                  },
                  "hash": "International_Airport_6e68f0af28",
                  "ext": ".png",
                  "mime": "image/png",
                  "size": "44.55",
                  "url": "https://tplandingpage.s3.amazonaws.com/5%3A29%3A33International_Airport_6e68f0af28.png",
                  "previewUrl": null,
                  "provider": "s3",
                  "provider_metadata": null,
                  "created_at": "2022-11-11T05:29:34.000Z",
                  "updated_at": "2022-11-11T05:29:34.000Z"
                }
              }
            ]
          },
          {
            "id": 47,
            "BonusPointCampaignName": "February 2024",
            "BonusPointCard": [
              {
                "id": 138,
                "Title": "Monthly Pass",
                "Description": "For each monthly pass purchased through February 29.",
                "Image": {
                  "id": 94,
                  "name": "MonthlyPass.png",
                  "alternativeText": "",
                  "caption": "",
                  "width": 160,
                  "height": 160,
                  "formats": {
                    "thumbnail": {
                      "name": "thumbnail_MonthlyPass.png",
                      "hash": "thumbnail_Monthly_Pass_3b89446791",
                      "ext": ".png",
                      "mime": "image/png",
                      "width": 156,
                      "height": 156,
                      "size": 12.53,
                      "path": null,
                      "url": "https://tplandingpage.s3.amazonaws.com/7%3A44%3A58thumbnail_Monthly_Pass_3b89446791.png"
                    }
                  },
                  "hash": "Monthly_Pass_3b89446791",
                  "ext": ".png",
                  "mime": "image/png",
                  "size": "3.96",
                  "url": "https://tplandingpage.s3.amazonaws.com/7%3A44%3A57Monthly_Pass_3b89446791.png",
                  "previewUrl": null,
                  "provider": "s3",
                  "provider_metadata": null,
                  "created_at": "2022-02-21T07:44:58.000Z",
                  "updated_at": "2022-02-21T07:44:58.000Z"
                }
              },
              {
                "id": 139,
                "Title": "Newark Liberty Airport",
                "Description": "For tickets purchased to or from Newark Liberty International Airport through February 29.\n",
                "Image": {
                  "id": 113,
                  "name": "InternationalAirport.png",
                  "alternativeText": "",
                  "caption": "",
                  "width": 160,
                  "height": 160,
                  "formats": {
                    "thumbnail": {
                      "name": "thumbnail_InternationalAirport.png",
                      "hash": "thumbnail_International_Airport_6e68f0af28",
                      "ext": ".png",
                      "mime": "image/png",
                      "width": 156,
                      "height": 156,
                      "size": 49.11,
                      "path": null,
                      "url": "https://tplandingpage.s3.amazonaws.com/5%3A29%3A33thumbnail_International_Airport_6e68f0af28.png"
                    }
                  },
                  "hash": "International_Airport_6e68f0af28",
                  "ext": ".png",
                  "mime": "image/png",
                  "size": "44.55",
                  "url": "https://tplandingpage.s3.amazonaws.com/5%3A29%3A33International_Airport_6e68f0af28.png",
                  "previewUrl": null,
                  "provider": "s3",
                  "provider_metadata": null,
                  "created_at": "2022-11-11T05:29:34.000Z",
                  "updated_at": "2022-11-11T05:29:34.000Z"
                }
              }
            ]
          }
        ],
        "OptOut": {
          "id": 2,
          "ParagraphStep1": "- To opt-out of NJT\u0026nbsp;Rewards®, enter your email address and tap “Submit” button below.\n- You will be sent a six digit code to enter on next page to confirm you are owner of the account.",
          "ParagraphStep2": "Enter six digit code sent to your email account and tap “Submit” button below.",
          "ParagraphStep3": "You have been successfully opted out of NJT\u0026nbsp;Rewards®. You can rejoin the program anytime by going to NJT\u0026nbsp;Rewards® from the NJT Mobile App.",
          "ParagraphFailure": "You are currently not enrolled in NJT\u0026nbsp;Rewards®.",
          "Heading": "Opt Out",
          "Hyper_Link_Before_Text": "Click on",
          "Hyper_Link_Text": "resend",
          "Hyper_Link_After_Text": "to receive a new code."
        },
        "Conversion": {
          "id": 1,
          "Heading": "Conversion",
          "Description": "The table below shows, by mode of transportation, the number of NJT\u0026nbsp;Rewards® Points you will earn for every dollar spent on NJ TRANSIT tickets.",
          "Conersion_table_heading": [
            {
              "id": 1,
              "Heading": "Mode of Transport"
            },
            {
              "id": 2,
              "Heading": "Dollars Spend via the NJ\u0026nbsp;TRANSIT\u0026nbsp;MyTix® Application"
            },
            {
              "id": 3,
              "Heading": "Rewards Points Earned via NJT\u0026nbsp;Rewards® Program for each dollar spent"
            }
          ],
          "Table_Row1": [
            {
              "id": 1,
              "Column_Text": "Rail"
            },
            {
              "id": 2,
              "Column_Text": "$1"
            },
            {
              "id": 3,
              "Column_Text": "22"
            }
          ],
          "Table_Row2": [
            {
              "id": 1,
              "Column_Text": "Bus"
            },
            {
              "id": 2,
              "Column_Text": "$1"
            },
            {
              "id": 3,
              "Column_Text": "22"
            }
          ],
          "Table_Row3": [
            {
              "id": 1,
              "Column_Text": "Light Rail"
            },
            {
              "id": 2,
              "Column_Text": "$1"
            },
            {
              "id": 3,
              "Column_Text": "22"
            }
          ]
        },
        "OfferLogo": {
          "id": 1,
          "Heading": "Experience these great offers with NJ TRANSIT",
          "Logo": [
            {
              "id": 1,
              "Image": {
                "id": 114,
                "name": "NJTRANSIT-Logo01.png",
                "alternativeText": "",
                "caption": "",
                "width": 300,
                "height": 180,
                "formats": {
                  "thumbnail": {
                    "name": "thumbnail_NJTRANSIT-Logo01.png",
                    "hash": "thumbnail_NJTRANSIT_Logo01_c19072bc93",
                    "ext": ".png",
                    "mime": "image/png",
                    "width": 245,
                    "height": 147,
                    "size": 9.87,
                    "path": null,
                    "url": "https://tplandingpage.s3.amazonaws.com/9%3A35%3A22thumbnail_NJTRANSIT_Logo01_c19072bc93.png"
                  }
                },
                "hash": "NJTRANSIT_Logo01_c19072bc93",
                "ext": ".png",
                "mime": "image/png",
                "size": "8.11",
                "url": "https://tplandingpage.s3.amazonaws.com/9%3A35%3A22NJTRANSIT_Logo01_c19072bc93.png",
                "previewUrl": null,
                "provider": "s3",
                "provider_metadata": null,
                "created_at": "2022-11-18T09:35:22.000Z",
                "updated_at": "2022-11-18T09:35:22.000Z"
              }
            },
            {
              "id": 2,
              "Image": {
                "id": 115,
                "name": "NJTRANSITCOLOR-BLACK02.png",
                "alternativeText": "",
                "caption": "",
                "width": 300,
                "height": 180,
                "formats": {
                  "thumbnail": {
                    "name": "thumbnail_NJTRANSITCOLOR-BLACK02.png",
                    "hash": "thumbnail_NJTRANSITCOLOR_BLACK_02_c82b29694c",
                    "ext": ".png",
                    "mime": "image/png",
                    "width": 245,
                    "height": 147,
                    "size": 10.64,
                    "path": null,
                    "url": "https://tplandingpage.s3.amazonaws.com/9%3A35%3A38thumbnail_NJTRANSITCOLOR_BLACK_02_c82b29694c.png"
                  }
                },
                "hash": "NJTRANSITCOLOR_BLACK_02_c82b29694c",
                "ext": ".png",
                "mime": "image/png",
                "size": "10.31",
                "url": "https://tplandingpage.s3.amazonaws.com/9%3A35%3A38NJTRANSITCOLOR_BLACK_02_c82b29694c.png",
                "previewUrl": null,
                "provider": "s3",
                "provider_metadata": null,
                "created_at": "2022-11-18T09:35:38.000Z",
                "updated_at": "2022-11-18T09:35:39.000Z"
              }
            },
            {
              "id": 3,
              "Image": {
                "id": 116,
                "name": "Adelante-NJTRANSIT-Color-Logo03.png",
                "alternativeText": "",
                "caption": "",
                "width": 300,
                "height": 180,
                "formats": {
                  "thumbnail": {
                    "name": "thumbnail_Adelante-NJTRANSIT-Color-Logo03.png",
                    "hash": "thumbnail_Adelante_NJTRANSIT_Color_Logo03_760791877b",
                    "ext": ".png",
                    "mime": "image/png",
                    "width": 245,
                    "height": 147,
                    "size": 17.58,
                    "path": null,
                    "url": "https://tplandingpage.s3.amazonaws.com/9%3A35%3A55thumbnail_Adelante_NJTRANSIT_Color_Logo03_760791877b.png"
                  }
                },
                "hash": "Adelante_NJTRANSIT_Color_Logo03_760791877b",
                "ext": ".png",
                "mime": "image/png",
                "size": "18.40",
                "url": "https://tplandingpage.s3.amazonaws.com/9%3A35%3A55Adelante_NJTRANSIT_Color_Logo03_760791877b.png",
                "previewUrl": null,
                "provider": "s3",
                "provider_metadata": null,
                "created_at": "2022-11-18T09:35:55.000Z",
                "updated_at": "2022-11-18T09:35:55.000Z"
              }
            },
            {
              "id": 4,
              "Image": {
                "id": 117,
                "name": "HBLR-LOGO04.png",
                "alternativeText": "",
                "caption": "",
                "width": 300,
                "height": 180,
                "formats": {
                  "thumbnail": {
                    "name": "thumbnail_HBLR-LOGO04.png",
                    "hash": "thumbnail_HBLR_LOGO_04_74a7243b33",
                    "ext": ".png",
                    "mime": "image/png",
                    "width": 245,
                    "height": 147,
                    "size": 14.61,
                    "path": null,
                    "url": "https://tplandingpage.s3.amazonaws.com/9%3A36%3A08thumbnail_HBLR_LOGO_04_74a7243b33.png"
                  }
                },
                "hash": "HBLR_LOGO_04_74a7243b33",
                "ext": ".png",
                "mime": "image/png",
                "size": "13.66",
                "url": "https://tplandingpage.s3.amazonaws.com/9%3A36%3A08HBLR_LOGO_04_74a7243b33.png",
                "previewUrl": null,
                "provider": "s3",
                "provider_metadata": null,
                "created_at": "2022-11-18T09:36:09.000Z",
                "updated_at": "2022-11-18T09:36:09.000Z"
              }
            },
            {
              "id": 5,
              "Image": {
                "id": 118,
                "name": "Newark-Light-Rail-Logo05.png",
                "alternativeText": "",
                "caption": "",
                "width": 300,
                "height": 180,
                "formats": {
                  "thumbnail": {
                    "name": "thumbnail_Newark-Light-Rail-Logo05.png",
                    "hash": "thumbnail_Newark_Light_Rail_Logo05_49bda1b1bd",
                    "ext": ".png",
                    "mime": "image/png",
                    "width": 245,
                    "height": 147,
                    "size": 13.61,
                    "path": null,
                    "url": "https://tplandingpage.s3.amazonaws.com/9%3A36%3A24thumbnail_Newark_Light_Rail_Logo05_49bda1b1bd.png"
                  }
                },
                "hash": "Newark_Light_Rail_Logo05_49bda1b1bd",
                "ext": ".png",
                "mime": "image/png",
                "size": "13.53",
                "url": "https://tplandingpage.s3.amazonaws.com/9%3A36%3A23Newark_Light_Rail_Logo05_49bda1b1bd.png",
                "previewUrl": null,
                "provider": "s3",
                "provider_metadata": null,
                "created_at": "2022-11-18T09:36:24.000Z",
                "updated_at": "2022-11-18T09:36:24.000Z"
              }
            },
            {
              "id": 6,
              "Image": {
                "id": 119,
                "name": "riverline_logo06.png",
                "alternativeText": "",
                "caption": "",
                "width": 300,
                "height": 180,
                "formats": {
                  "thumbnail": {
                    "name": "thumbnail_riverline_logo06.png",
                    "hash": "thumbnail_riverline_logo06_e699aef7fc",
                    "ext": ".png",
                    "mime": "image/png",
                    "width": 245,
                    "height": 147,
                    "size": 15.98,
                    "path": null,
                    "url": "https://tplandingpage.s3.amazonaws.com/9%3A36%3A37thumbnail_riverline_logo06_e699aef7fc.png"
                  }
                },
                "hash": "riverline_logo06_e699aef7fc",
                "ext": ".png",
                "mime": "image/png",
                "size": "15.03",
                "url": "https://tplandingpage.s3.amazonaws.com/9%3A36%3A37riverline_logo06_e699aef7fc.png",
                "previewUrl": null,
                "provider": "s3",
                "provider_metadata": null,
                "created_at": "2022-11-18T09:36:38.000Z",
                "updated_at": "2022-11-18T09:36:38.000Z"
              }
            },
            {
              "id": 7,
              "Image": {
                "id": 120,
                "name": "My-Light-Rail-Logo07.png",
                "alternativeText": "",
                "caption": "",
                "width": 300,
                "height": 180,
                "formats": {
                  "thumbnail": {
                    "name": "thumbnail_My-Light-Rail-Logo07.png",
                    "hash": "thumbnail_My_Light_Rail_Logo07_bbc0acd5ce",
                    "ext": ".png",
                    "mime": "image/png",
                    "width": 245,
                    "height": 147,
                    "size": 15.15,
                    "path": null,
                    "url": "https://tplandingpage.s3.amazonaws.com/9%3A36%3A49thumbnail_My_Light_Rail_Logo07_bbc0acd5ce.png"
                  }
                },
                "hash": "My_Light_Rail_Logo07_bbc0acd5ce",
                "ext": ".png",
                "mime": "image/png",
                "size": "14.59",
                "url": "https://tplandingpage.s3.amazonaws.com/9%3A36%3A49My_Light_Rail_Logo07_bbc0acd5ce.png",
                "previewUrl": null,
                "provider": "s3",
                "provider_metadata": null,
                "created_at": "2022-11-18T09:36:49.000Z",
                "updated_at": "2022-11-18T09:36:49.000Z"
              }
            },
            {
              "id": 8,
              "Image": {
                "id": 121,
                "name": "Quiet-Commute-Logo08.png",
                "alternativeText": "",
                "caption": "",
                "width": 300,
                "height": 180,
                "formats": {
                  "thumbnail": {
                    "name": "thumbnail_Quiet-Commute-Logo08.png",
                    "hash": "thumbnail_Quiet_Commute_Logo08_4e98fb8f16",
                    "ext": ".png",
                    "mime": "image/png",
                    "width": 245,
                    "height": 147,
                    "size": 17.25,
                    "path": null,
                    "url": "https://tplandingpage.s3.amazonaws.com/9%3A37%3A03thumbnail_Quiet_Commute_Logo08_4e98fb8f16.png"
                  }
                },
                "hash": "Quiet_Commute_Logo08_4e98fb8f16",
                "ext": ".png",
                "mime": "image/png",
                "size": "18.51",
                "url": "https://tplandingpage.s3.amazonaws.com/9%3A37%3A03Quiet_Commute_Logo08_4e98fb8f16.png",
                "previewUrl": null,
                "provider": "s3",
                "provider_metadata": null,
                "created_at": "2022-11-18T09:37:04.000Z",
                "updated_at": "2022-11-18T09:37:04.000Z"
              }
            }
          ]
        }
      }
    }
  }
};

