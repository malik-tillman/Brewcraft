const mainProduct = {
  "name": "Product page",
  "class": "shopify-section--main-product",
  "tag": "section",
  "blocks": [
    {
      "type": "@app"
    },
    {
      "type": "vendor",
      "name": "Vendor",
      "limit": 1
    },
    {
      "type": "title",
      "name": "Title",
      "limit": 1,
      "settings": [
        {
          "type": "select",
          "id": "heading_tag",
          "label": "Style",
          "options": [
            {
              "value": "h1",
              "label": "X-Large"
            },
            {
              "value": "h2",
              "label": "Large"
            },
            {
              "value": "h3",
              "label": "Medium"
            },
            {
              "value": "h4",
              "label": "Small"
            },
            {
              "value": "h5",
              "label": "X-Small"
            },
            {
              "value": "h6",
              "label": "XX-Small"
            }
          ],
          "default": "h2"
        }
      ]
    },
    {
      "type": "sku",
      "name": "SKU",
      "limit": 1
    },
    {
      "type": "badges",
      "name": "Badges",
      "limit": 1,
      "settings": [
        {
          "type": "paragraph",
          "content": "Use metafields to add custom badges. [Learn more](https://support.maestrooo.com/article/75-collection-displaying-custom-label)"
        }
      ]
    },
    {
      "type": "price",
      "name": "Price",
      "limit": 1,
      "settings": [
        {
          "type": "checkbox",
          "id": "show_taxes_notice",
          "label": "Show taxes notice",
          "default": false
        }
      ]
    },
    {
      "type": "payment_terms",
      "name": "Payment installments",
      "limit": 1,
      "settings": [
        {
          "type": "paragraph",
          "content": "To display payment installments, your store needs to support Shop Pay Installments. [Learn more](https://help.shopify.com/en/manual/payments/shop-pay-installments)"
        }
      ]
    },
    {
      "type": "rating",
      "name": "Rating",
      "limit": 1,
      "settings": [
        {
          "type": "paragraph",
          "content": "To display a rating, add a product rating app. [Learn more](https://apps.shopify.com/categories/store-design-social-proof-product-reviews)"
        },
        {
          "type": "checkbox",
          "id": "show_empty",
          "label": "Show if no reviews",
          "default": false
        }
      ]
    },
    {
      "type": "separator",
      "name": "Separator"
    },
    {
      "type": "description",
      "name": "Description",
      "limit": 1,
      "settings": [
        {
          "type": "checkbox",
          "id": "collapse_content",
          "label": "Collapse content",
          "default": false
        }
      ]
    },
    {
      "type": "variant_picker",
      "name": "Variant picker",
      "limit": 1,
      "settings": [
        {
          "type": "checkbox",
          "id": "hide_sold_out_variants",
          "label": "Hide sold out variants",
          "default": false
        },
        {
          "type": "checkbox",
          "id": "stack_blocks",
          "label": "Stack options on mobile",
          "default": true
        },
        {
          "type": "select",
          "id": "selector_style",
          "label": "Selector style",
          "options": [
            {
              "value": "block",
              "label": "Block"
            },
            {
              "value": "dropdown",
              "label": "Dropdown"
            }
          ],
          "default": "block"
        },
        {
          "type": "select",
          "id": "swatch_selector_style",
          "label": "Swatch selector style",
          "info": "Enable [swatches](https://help.shopify.com/en/manual/online-store/themes/theme-structure/theme-settings#options-with-swatches) on product options.",
          "options": [
            {
              "value": "swatch",
              "label": "Swatch"
            },
            {
              "value": "block_swatch",
              "label": "Block with swatch"
            },
            {
              "value": "none",
              "label": "None"
            }
          ],
          "default": "swatch"
        },
        {
          "type": "text",
          "id": "variant_image_options",
          "label": "Show variant image for options",
          "info": "List of comma separated option names where option values show the attached variant image. [Learn more](https://impact-theme.helpscoutdocs.com/article/555-variant-images-for-color-option)"
        },
        {
          "type": "page",
          "id": "size_chart_page",
          "label": "Size chart page",
          "info": "Feature a page for size option"
        }
      ]
    },
    {
      "type": "product_variations",
      "name": "Product variations",
      "limit": 1,
      "settings": [
        {
          "type": "paragraph",
          "content": "Link products of different colors using swatches. [Learn more](https://support.maestrooo.com/article/307-product-creating-product-variations-that-link-to-different-pages)"
        },
        {
          "type": "text",
          "id": "option_name",
          "label": "Option name",
          "info": "Example: Color, Style..."
        },
        {
          "type": "text",
          "id": "option_value_metafield",
          "label": "Option value metafield",
          "info": "Enter namespace and key of the metafield holding the value. Eg.: custom.color"
        },
        {
          "type": "product_list",
          "id": "products",
          "label": "Products",
          "info": "Select all the variations (including the product itself)."
        },
        {
          "type": "select",
          "id": "selector_style",
          "label": "Selector style",
          "info": "Product image mode requires that all variant have an associated image. [Learn more](https://help.shopify.com/en/manual/products/product-media/add-images-variants#add-images-to-existing-variants)",
          "options": [
            {
              "value": "block",
              "label": "Block"
            },
            {
              "value": "block_swatch",
              "label": "Block with swatch"
            },
            {
              "value": "swatch",
              "label": "Swatch"
            },
            {
              "value": "variant_image",
              "label": "Variant image"
            }
          ],
          "default": "swatch"
        }
      ]
    },
    {
      "type": "line_item_property",
      "name": "Line item property",
      "settings": [
        {
          "type": "paragraph",
          "content": "Line item properties are used to collect customization information for an item added to the cart."
        },
        {
          "type": "text",
          "id": "label",
          "label": "Label",
          "default": "Your label"
        },
        {
          "type": "select",
          "id": "type",
          "label": "Type",
          "options": [
            {
              "value": "text",
              "label": "Text"
            },
            {
              "value": "checkbox",
              "label": "Checkbox"
            }
          ],
          "default": "text"
        },
        {
          "type": "checkbox",
          "id": "required",
          "label": "Required",
          "info": "For text property, the customer must write a text ; for checkbox, the customer must check it to add to cart.",
          "default": false
        },
        {
          "type": "header",
          "content": "Text",
          "info": "Only applicable for line item property of type Text."
        },
        {
          "type": "checkbox",
          "id": "allow_long_text",
          "label": "Allow long text",
          "default": false
        },
        {
          "type": "number",
          "id": "max_length",
          "label": "Maximum number of characters"
        }
      ]
    },
    {
      "type": "quantity_selector",
      "name": "Quantity selector",
      "limit": 1,
      "settings": [
        {
          "type": "paragraph",
          "content": "The selector is automatically hidden if all variants are sold out. When at least one variant is available, the selector is always visible to prevent the page from moving when switching variants."
        }
      ]
    },
    {
      "type": "inventory",
      "name": "Inventory",
      "limit": 1,
      "settings": [
        {
          "type": "range",
          "id": "low_inventory_threshold",
          "label": "Low inventory threshold",
          "info": "Use low stock color when quantity is below the threshold. Choose 0 to always show in stock.",
          "min": 0,
          "max": 100,
          "step": 1,
          "default": 0
        }
      ]
    },
    {
      "type": "buy_buttons",
      "name": "Buy buttons",
      "limit": 1,
      "settings": [
        {
          "type": "checkbox",
          "id": "show_payment_button",
          "label": "Show dynamic checkout button",
          "info": "Each customer will see their preferred payment method from those available on your store, such as PayPal or Apple Pay. [Learn more](https://help.shopify.com/manual/using-themes/change-the-layout/dynamic-checkout)",
          "default": true
        },
        {
          "type": "checkbox",
          "id": "show_gift_card_recipient",
          "label": "Show recipient information form for gift cards",
          "info": "Allow buyers to send gift cards along with a personal message. [Learn more](https://help.shopify.com/manual/online-store/themes/customizing-themes/add-gift-card-recipient-fields)",
          "default": true
        },
        {
          "type": "color",
          "id": "atc_button_background",
          "label": "Add to cart background"
        },
        {
          "type": "color",
          "id": "atc_button_text_color",
          "label": "Add to cart color"
        },
        {
          "type": "color",
          "id": "payment_button_background",
          "label": "Buy now button background"
        },
        {
          "type": "color",
          "id": "payment_button_text_color",
          "label": "Buy now button color"
        }
      ]
    },
    {
      "type": "pickup_availability",
      "name": "Pickup availability",
      "limit": 1,
      "settings": [
        {
          "type": "paragraph",
          "content": "Allow your customers to see availability in retail stores by [setting up local pickup](https://help.shopify.com/en/manual/sell-in-person/shopify-pos/order-management/local-pickup-for-online-orders)."
        }
      ]
    },
    {
      "type": "text",
      "name": "Text",
      "settings": [
        {
          "type": "richtext",
          "id": "text",
          "label": "Text",
          "default": "<p>Share some content to your customers about your products.</p>"
        }
      ]
    },
    {
      "type": "collapsible_text",
      "name": "Collapsible text",
      "settings": [
        {
          "type": "text",
          "id": "title",
          "label": "Title",
          "default": "Title"
        },
        {
          "type": "richtext",
          "id": "content",
          "label": "Content",
          "default": "<p>Share some content to your customers about your products.</p>"
        },
        {
          "type": "page",
          "id": "page",
          "label": "Page",
          "info": "Replaces inline content if specified."
        }
      ]
    },
    {
      "type": "image",
      "name": "Image",
      "settings": [
        {
          "type": "image_picker",
          "id": "image",
          "label": "Image"
        },
        {
          "type": "select",
          "id": "alignment",
          "label": "Alignment",
          "options": [
            {
              "value": "start",
              "label": "Left"
            },
            {
              "value": "center",
              "label": "Center"
            },
            {
              "value": "end",
              "label": "Right"
            }
          ],
          "default": "start"
        },
        {
          "type": "range",
          "id": "max_width",
          "min": 50,
          "max": 500,
          "step": 10,
          "unit": "px",
          "label": "Width",
          "default": 150
        }
      ]
    },
    {
      "type": "button",
      "name": "Button",
      "settings": [
        {
          "type": "paragraph",
          "content": "Create link to your contact page, external marketplace..."
        },
        {
          "type": "url",
          "id": "link",
          "label": "Link"
        },
        {
          "type": "text",
          "id": "text",
          "label": "Text",
          "default": "Button"
        },
        {
          "type": "select",
          "id": "size",
          "label": "Size",
          "options": [
            {
              "value": "sm",
              "label": "Small"
            },
            {
              "value": "base",
              "label": "Medium"
            },
            {
              "value": "lg",
              "label": "Large"
            },
            {
              "value": "xl",
              "label": "X-Large"
            }
          ],
          "default": "xl"
        },
        {
          "type": "select",
          "id": "style",
          "label": "Style",
          "options": [
            {
              "value": "outline",
              "label": "Outline"
            },
            {
              "value": "fill",
              "label": "Fill"
            }
          ],
          "default": "fill"
        },
        {
          "type": "checkbox",
          "id": "stretch",
          "label": "Stretch",
          "default": true
        },
        {
          "type": "color",
          "id": "background",
          "label": "Background"
        },
        {
          "type": "color",
          "id": "text_color",
          "label": "Text"
        }
      ]
    },
    {
      "type": "liquid",
      "name": "Custom Liquid",
      "settings": [
        {
          "type": "liquid",
          "id": "liquid",
          "label": "Liquid",
          "info": "Add app snippets or other Liquid code to create advanced customizations."
        }
      ]
    },
    {
      "type": "associated_products",
      "name": "Complementary products",
      "limit": 1,
      "settings": [
        {
          "type": "paragraph",
          "content": "To select complementary products, use the Search & Discovery app. [Learn more](https://help.shopify.com/en/manual/online-store/search-and-discovery/product-recommendations#complementary-products)"
        },
        {
          "type": "text",
          "id": "title",
          "label": "Heading",
          "default": "Buy it with"
        },
        {
          "type": "checkbox",
          "id": "stack_products",
          "label": "Stack products",
          "default": true
        },
        {
          "type": "range",
          "id": "products_count",
          "min": 1,
          "max": 10,
          "label": "Products to show",
          "default": 5
        },
        {
          "type": "header",
          "content": "Colors",
          "info": "Cards are bordered when background matches section background."
        },
        {
          "type": "color",
          "id": "background",
          "label": "Background"
        },
        {
          "type": "color",
          "id": "text_color",
          "label": "Text"
        }
      ]
    },
    {
      "type": "offer",
      "name": "Offer",
      "settings": [
        {
          "type": "select",
          "id": "text_alignment",
          "label": "Text alignment",
          "options": [
            {
              "value": "start",
              "label": "Left"
            },
            {
              "value": "center",
              "label": "Center"
            }
          ],
          "default": "start"
        },
        {
          "type": "select",
          "id": "icon_position",
          "label": "Icon position",
          "options": [
            {
              "value": "aligned",
              "label": "Aligned horizontally"
            },
            {
              "value": "stacked",
              "label": "Stacked"
            }
          ],
          "default": "aligned"
        },
        {
          "type": "select",
          "id": "icon",
          "label": "Icon",
          "options": [
            {
              "value": "none",
              "label": "None"
            },
            {
              "value": "picto-coupon",
              "label": "Coupon",
              "group": "Shop"
            },
            {
              "value": "picto-percent",
              "label": "Percent",
              "group": "Shop"
            },
            {
              "value": "picto-gift",
              "label": "Gift",
              "group": "Shop"
            },
            {
              "value": "picto-star",
              "label": "Star",
              "group": "Shop"
            },
            {
              "value": "picto-like",
              "label": "Like",
              "group": "Shop"
            },
            {
              "value": "picto-building",
              "label": "Building",
              "group": "Shop"
            },
            {
              "value": "picto-love",
              "label": "Love",
              "group": "Shop"
            },
            {
              "value": "picto-award-gift",
              "label": "Award gift",
              "group": "Shop"
            },
            {
              "value": "picto-happy",
              "label": "Happy",
              "group": "Shop"
            },
            {
              "value": "picto-box",
              "label": "Box",
              "group": "Shipping"
            },
            {
              "value": "picto-pin",
              "label": "Pin",
              "group": "Shipping"
            },
            {
              "value": "picto-timer",
              "label": "Timer",
              "group": "Shipping"
            },
            {
              "value": "picto-validation",
              "label": "Validation",
              "group": "Shipping"
            },
            {
              "value": "picto-truck",
              "label": "Truck",
              "group": "Shipping"
            },
            {
              "value": "picto-return",
              "label": "Return",
              "group": "Shipping"
            },
            {
              "value": "picto-earth",
              "label": "Earth",
              "group": "Shipping"
            },
            {
              "value": "picto-plane",
              "label": "Plane",
              "group": "Shipping"
            },
            {
              "value": "picto-credit-card",
              "label": "Credit card",
              "group": "Payment & Security"
            },
            {
              "value": "picto-lock",
              "label": "Lock",
              "group": "Payment & Security"
            },
            {
              "value": "picto-shield",
              "label": "Shield",
              "group": "Payment & Security"
            },
            {
              "value": "picto-secure-profile",
              "label": "Secure profile",
              "group": "Payment & Security"
            },
            {
              "value": "picto-money",
              "label": "Money",
              "group": "Payment & Security"
            },
            {
              "value": "picto-recycle",
              "label": "Recycle",
              "group": "Ecology"
            },
            {
              "value": "picto-leaf",
              "label": "Leaf",
              "group": "Ecology"
            },
            {
              "value": "picto-tree",
              "label": "Tree",
              "group": "Ecology"
            },
            {
              "value": "picto-mobile-phone",
              "label": "Mobile phone",
              "group": "Communication"
            },
            {
              "value": "picto-phone",
              "label": "Phone",
              "group": "Communication"
            },
            {
              "value": "picto-chat",
              "label": "Chat",
              "group": "Communication"
            },
            {
              "value": "picto-customer-support",
              "label": "Customer support",
              "group": "Communication"
            },
            {
              "value": "picto-operator",
              "label": "Operator",
              "group": "Communication"
            },
            {
              "value": "picto-mailbox",
              "label": "Mailbox",
              "group": "Communication"
            },
            {
              "value": "picto-envelope",
              "label": "Envelope",
              "group": "Communication"
            },
            {
              "value": "picto-comment",
              "label": "Comment",
              "group": "Communication"
            },
            {
              "value": "picto-question",
              "label": "Question",
              "group": "Communication"
            },
            {
              "value": "picto-send",
              "label": "Send",
              "group": "Communication"
            },
            {
              "value": "picto-at-sign",
              "label": "At sign",
              "group": "Tech"
            },
            {
              "value": "picto-camera",
              "label": "Camera",
              "group": "Tech"
            },
            {
              "value": "picto-wifi",
              "label": "WiFi",
              "group": "Tech"
            },
            {
              "value": "picto-bluetooth",
              "label": "Bluetooth",
              "group": "Tech"
            },
            {
              "value": "picto-printer",
              "label": "Printer",
              "group": "Tech"
            },
            {
              "value": "picto-smart-watch",
              "label": "Smart watch",
              "group": "Tech"
            },
            {
              "value": "picto-coffee",
              "label": "Coffee",
              "group": "Food & Drink"
            },
            {
              "value": "picto-burger",
              "label": "Burger",
              "group": "Food & Drink"
            },
            {
              "value": "picto-beer",
              "label": "Beer",
              "group": "Food & Drink"
            },
            {
              "value": "picto-target",
              "label": "Target",
              "group": "Other"
            },
            {
              "value": "picto-document",
              "label": "Document",
              "group": "Other"
            },
            {
              "value": "picto-jewelry",
              "label": "Jewelry",
              "group": "Other"
            },
            {
              "value": "picto-music",
              "label": "Music",
              "group": "Other"
            },
            {
              "value": "picto-file",
              "label": "File",
              "group": "Other"
            },
            {
              "value": "picto-mask",
              "label": "Mask",
              "group": "Other"
            },
            {
              "value": "picto-stop",
              "label": "Stop",
              "group": "Other"
            }
          ],
          "default": "picto-coupon"
        },
        {
          "type": "image_picker",
          "id": "custom_icon",
          "label": "Custom icon",
          "info": "240 x 240px .png recommended"
        },
        {
          "type": "range",
          "id": "icon_width",
          "min": 20,
          "max": 100,
          "step": 4,
          "unit": "px",
          "label": "Icon width",
          "default": 24
        },
        {
          "type": "text",
          "id": "title",
          "label": "Heading",
          "default": "Shipping"
        },
        {
          "type": "richtext",
          "id": "content",
          "label": "Content",
          "default": "<p>Short content about your shipping rates or discounts.</p>"
        },
        {
          "type": "color",
          "id": "background",
          "label": "Background",
          "default": "#eaf2ed"
        },
        {
          "type": "color",
          "id": "text_color",
          "label": "Text",
          "default": "#00a341"
        }
      ]
    },
    {
      "type": "share_buttons",
      "name": "Share buttons",
      "settings": [
        {
          "type": "paragraph",
          "content": "To improve user experience and performance, native share buttons are used when supported."
        },
        {
          "type": "select",
          "id": "alignment",
          "label": "Alignment",
          "options": [
            {
              "value": "start",
              "label": "Left"
            },
            {
              "value": "center",
              "label": "Center"
            },
            {
              "value": "end",
              "label": "Right"
            }
          ],
          "default": "start"
        }
      ]
    }
  ],
  "settings": [
    {
      "type": "checkbox",
      "id": "full_width",
      "label": "Full width",
      "default": true
    },
    {
      "type": "checkbox",
      "id": "show_fixed_add_to_cart",
      "label": "Show add to cart on scroll",
      "default": true
    },
    {
      "type": "text",
      "id": "yopto-reviews-text",
      "label": "Yopto Review Text"
    },
    {
      "type": "image_picker",
      "id": "yopto-reviews-badge",
      "label": "Yopto Reviews Badge"
    },
    {
      "type": "header",
      "content": "Media"
    },
    {
      "type": "paragraph",
      "content": "Learn more about [media types](https://help.shopify.com/en/manual/products/product-media)"
    },
    {
      "type": "range",
      "id": "desktop_media_width",
      "label": "Desktop media size",
      "min": 35,
      "max": 65,
      "step": 5,
      "unit": "%",
      "default": 55
    },
    {
      "type": "select",
      "id": "desktop_media_layout",
      "label": "Desktop media layout",
      "options": [
        {
          "value": "grid",
          "label": "Grid"
        },
        {
          "value": "grid_highlight",
          "label": "Grid with main media"
        },
        {
          "value": "carousel_thumbnails_left",
          "label": "Thumbnails left (carousel)"
        },
        {
          "value": "carousel_thumbnails_bottom",
          "label": "Thumbnails bottom (carousel)"
        }
      ],
      "default": "carousel_thumbnails_left"
    },
    {
      "type":"select",
      "id": "mobile_media_size",
      "label": "Mobile media size",
      "options": [
        {
          "value": "expanded",
          "label": "Expanded"
        },
        {
          "value": "contained",
          "label": "Contained"
        }
      ],
      "default": "expanded"
    },
    {
      "type": "select",
      "id": "mobile_carousel_control",
      "label": "Mobile carousel control",
      "options": [
        {
          "value": "dots",
          "label": "Dots"
        },
        {
          "value": "floating_dots",
          "label": "Floating dots"
        },
        {
          "value": "thumbnails",
          "label": "Thumbnails"
        },
        {
          "value": "free_scroll",
          "label": "Free scroll"
        }
      ],
      "default": "floating_dots"
    },
    {
      "type": "checkbox",
      "id": "enable_video_autoplay",
      "label": "Enable video autoplay",
      "info": "Video are muted automatically to allow autoplay. Grid mode on desktop turn off autoplay.",
      "default": false
    },
    {
      "type": "checkbox",
      "id": "enable_video_looping",
      "label": "Enable video looping",
      "default": true
    },
    {
      "type": "header",
      "content": "Image zoom"
    },
    {
      "type": "checkbox",
      "id": "enable_image_zoom",
      "label": "Enable",
      "default": true
    },
    {
      "type": "range",
      "id": "max_image_zoom_level",
      "min": 1,
      "max": 4,
      "step": 0.5,
      "label": "Max zoom level",
      "default": 3
    },
    {
      "type": "header",
      "content": "Colors",
      "info": "Gradient replaces solid colors when set."
    },
    {
      "type": "color",
      "id": "background",
      "label": "Background"
    },
    {
      "type": "color_background",
      "id": "background_gradient",
      "label": "Background gradient"
    },
    {
      "type": "color",
      "id": "text_color",
      "label": "Text"
    },
    {
      "type": "header",
      "content": "Input colors",
      "info": "Applies to elements like quantity selector and variant selectors."
    },
    {
      "type": "color",
      "id": "input_background",
      "label": "Background",
      "default": "rgba(0,0,0,0)"
    },
    {
      "type": "color",
      "id": "input_text_color",
      "label": "Text"
    }
  ]
}
