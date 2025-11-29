# Traverum Widget Demo

Prototype widget demonstrating browse → details → cart → guest → mock payment → confirmation.

## Run locally

- Install deps: `npm install`
- Dev server: `npm run dev`
- Open: 
  - `http://localhost:3000/public/demo-hotel.html` (Demo hotel)
  - `http://localhost:3000/public/hotel-rosa-demo.html` (Hotel Rosa Baveno demo)

## Embed (iFrame)

```html
<!-- Generic widget -->
<iframe src="https://app.traverum.com/widget/demo?theme=light" sandbox="allow-scripts allow-forms allow-same-origin" style="width:100%;min-height:900px;border:0" referrerpolicy="strict-origin"></iframe>

<!-- Hotel Rosa Baveno widget -->
<iframe src="https://app.traverum.com/widget/hotel-rosa" sandbox="allow-scripts allow-forms allow-same-origin" style="width:100%;min-height:900px;border:0" referrerpolicy="strict-origin"></iframe>
```

## Shareable Demo Pages

- **Hotel Rosa Baveno**: `/public/hotel-rosa-demo.html` - Full page with widget embedded
- Access at: `https://your-domain.com/hotel-rosa-demo.html` (when deployed)

## Popup

```html
<script src="https://app.traverum.com/embed.js"></script>
<button onclick="TraverumWidget.open({ url: 'https://app.traverum.com/widget/demo?theme=light' })">Browse experiences</button>
```

The widget posts these events via `postMessage`:
- `traverum.height` { height }
- `traverum.cart_count` { count }
- `traverum.step_changed` { step }
- `traverum.booking_completed` { fakeBookingId }
