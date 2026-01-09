# Asphalt Paving Website Color Palettes
## Complete Color Guide for Cooper Asphalt Paving

---

## 🎯 TOP RECOMMENDED PALETTE: "OKLAHOMA BLACKTOP"

**The industry-proven combo that screams professional contractor**

| Use | Color | HEX | RGB | Notes |
|-----|-------|-----|-----|-------|
| **Primary** | Asphalt Black | `#1A1A1A` | 26, 26, 26 | Headers, footer, text |
| **Secondary** | Construction Orange | `#FF7900` | 255, 121, 0 | CTAs, buttons, accents |
| **Accent** | Safety Yellow | `#FFD100` | 255, 209, 0 | Highlights, badges |
| **Background** | Clean White | `#FFFFFF` | 255, 255, 255 | Page backgrounds |
| **Light Gray** | Concrete Gray | `#F5F5F5` | 245, 245, 245 | Section backgrounds |
| **Text** | Dark Charcoal | `#333333` | 51, 51, 51 | Body text |

### CSS Variables:
```css
:root {
  --primary-black: #1A1A1A;
  --secondary-orange: #FF7900;
  --accent-yellow: #FFD100;
  --background-white: #FFFFFF;
  --background-gray: #F5F5F5;
  --text-dark: #333333;
  --text-light: #666666;
}
```

### Why This Works:
- **Black** = asphalt, professionalism, authority
- **Orange** = construction safety, energy, calls to action
- **Yellow** = heavy equipment (CAT), caution, attention
- **White** = clean, trustworthy, easy to read

---

## 🏆 ALTERNATIVE PALETTES

### Option 2: "ROSE PAVING STYLE" (Red + Black)
*Professional, established, bold*

| Use | Color | HEX | Notes |
|-----|-------|-----|-------|
| Primary | Deep Black | `#1C1C1C` | Base color |
| Secondary | Rose Red | `#C41E3A` | CTAs, accents |
| Accent | Light Gray | `#E8E8E8` | Backgrounds |
| Background | White | `#FFFFFF` | Clean base |
| Text | Charcoal | `#2D2D2D` | Body copy |

```css
:root {
  --primary: #1C1C1C;
  --secondary: #C41E3A;
  --accent: #E8E8E8;
  --background: #FFFFFF;
  --text: #2D2D2D;
}
```

---

### Option 3: "TRUSTWORTHY BLUE" (Navy + Orange)
*Professional, reliable, corporate feel*

| Use | Color | HEX | Notes |
|-----|-------|-----|-------|
| Primary | Navy Blue | `#1E3A5F` | Headers, footer |
| Secondary | Bright Orange | `#FF6B00` | CTAs, buttons |
| Accent | Steel Gray | `#6B7B8C` | Subtle accents |
| Background | Off-White | `#FAFAFA` | Page base |
| Text | Dark Navy | `#0D1B2A` | Body text |

```css
:root {
  --primary: #1E3A5F;
  --secondary: #FF6B00;
  --accent: #6B7B8C;
  --background: #FAFAFA;
  --text: #0D1B2A;
}
```

---

### Option 4: "CATERPILLAR CLASSIC" (Yellow + Black)
*Heavy equipment vibes, high visibility*

| Use | Color | HEX | Notes |
|-----|-------|-----|-------|
| Primary | CAT Yellow | `#FFCD00` | Bold headers, CTAs |
| Secondary | Equipment Black | `#1A1A1A` | Text, footer |
| Accent | Warm Gray | `#4A4A4A` | Secondary elements |
| Background | Light Yellow | `#FFFEF5` | Subtle warmth |
| Text | Pure Black | `#000000` | Maximum contrast |

```css
:root {
  --primary: #FFCD00;
  --secondary: #1A1A1A;
  --accent: #4A4A4A;
  --background: #FFFEF5;
  --text: #000000;
}
```

---

### Option 5: "EARTHY CONTRACTOR" (Green + Brown)
*Traditional, grounded, eco-friendly*

| Use | Color | HEX | Notes |
|-----|-------|-----|-------|
| Primary | Forest Green | `#2D5A27` | Headers, buttons |
| Secondary | Earth Brown | `#6B4423` | Accents |
| Accent | Sand | `#D4C5A9` | Backgrounds |
| Background | Cream | `#FAF8F5` | Page base |
| Text | Dark Brown | `#3D2914` | Body copy |

```css
:root {
  --primary: #2D5A27;
  --secondary: #6B4423;
  --accent: #D4C5A9;
  --background: #FAF8F5;
  --text: #3D2914;
}
```

---

## 🎨 SPECIFIC HEX CODES BY PURPOSE

### Construction Industry Standard Colors

| Color Name | HEX | Use Case |
|------------|-----|----------|
| **Safety Orange** | `#FF6600` | High visibility, CTAs |
| **Construction Orange** | `#FF7900` | Industry standard |
| **Cone Orange** | `#F87431` | Traffic cone, attention |
| **CAT Yellow** | `#FFCD00` | Equipment, machinery |
| **Safety Yellow** | `#FFD100` | Warning, highlights |
| **Hi-Vis Yellow** | `#DFFF00` | Maximum visibility |
| **Asphalt Black** | `#1A1A1A` | Primary dark |
| **Charcoal** | `#333333` | Text, softer black |
| **Concrete Gray** | `#808080` | Neutral elements |
| **Steel Gray** | `#71797E` | Secondary neutral |
| **Pavement Gray** | `#4A4A4A` | Dark gray elements |

### Call-to-Action Button Colors

| Button Type | Background | Text | Hover |
|-------------|------------|------|-------|
| Primary CTA | `#FF7900` | `#FFFFFF` | `#E66A00` |
| Secondary CTA | `#1A1A1A` | `#FFFFFF` | `#333333` |
| Ghost Button | transparent | `#FF7900` | `#FFF4E6` bg |

### Trust Signal Colors

| Signal Type | Color | HEX |
|-------------|-------|-----|
| 5-Star Gold | Gold | `#FFD700` |
| BBB Blue | BBB Blue | `#005A9C` |
| Google Red | Google | `#EA4335` |
| Facebook Blue | FB Blue | `#1877F2` |

---

## 📱 MOBILE CONSIDERATIONS

### Contrast Requirements (WCAG AA)
- Normal text: 4.5:1 minimum contrast ratio
- Large text: 3:1 minimum contrast ratio
- UI components: 3:1 minimum

### Recommended Combinations (Pass WCAG):
| Background | Text | Ratio | Status |
|------------|------|-------|--------|
| `#FFFFFF` | `#333333` | 12.6:1 | ✅ Pass |
| `#1A1A1A` | `#FFFFFF` | 16.1:1 | ✅ Pass |
| `#FF7900` | `#000000` | 4.8:1 | ✅ Pass |
| `#FF7900` | `#FFFFFF` | 3.5:1 | ⚠️ Large text only |
| `#FFD100` | `#000000` | 14.7:1 | ✅ Pass |

---

## 🔧 TAILWIND CSS CONFIG

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'asphalt': {
          50: '#F5F5F5',
          100: '#E0E0E0',
          200: '#BDBDBD',
          300: '#9E9E9E',
          400: '#757575',
          500: '#616161',
          600: '#424242',
          700: '#333333',
          800: '#1A1A1A',
          900: '#0D0D0D',
        },
        'construction': {
          orange: '#FF7900',
          'orange-dark': '#E66A00',
          'orange-light': '#FF9933',
          yellow: '#FFD100',
          'yellow-dark': '#E6BC00',
        },
        'safety': {
          orange: '#FF6600',
          yellow: '#FFFF00',
          green: '#00FF00',
        }
      }
    }
  }
}
```

---

## 🎯 COOPER ASPHALT RECOMMENDATION

**Go with Palette #1: "Oklahoma Blacktop"**

### Reasoning:
1. **Orange + Black** is the most recognized contractor color combo
2. **High contrast** = easy to read on any device
3. **Safety orange** makes CTAs impossible to miss
4. **Professional** without being corporate/cold
5. **Matches expectations** - customers expect contractors to look like contractors

### Quick Implementation:

**Header:**
- Background: `#1A1A1A` (Asphalt Black)
- Logo: White or Orange version
- Phone number: `#FF7900` (Construction Orange)
- "Free Estimate" button: `#FF7900` background, white text

**Hero Section:**
- Background: Full-width project photo
- Overlay: Semi-transparent black (`rgba(0,0,0,0.5)`)
- Text: White
- CTA Button: `#FF7900`

**Body:**
- Background: `#FFFFFF`
- Text: `#333333`
- Headings: `#1A1A1A`
- Links: `#FF7900`

**Service Cards:**
- Background: `#F5F5F5`
- Border accent: `#FF7900`
- Icons: `#FF7900`

**Footer:**
- Background: `#1A1A1A`
- Text: `#FFFFFF`
- Links: `#FF7900`

---

## 📋 COLOR CHECKLIST FOR COOPER

- [ ] Primary color chosen (recommend: `#1A1A1A`)
- [ ] Secondary/accent color chosen (recommend: `#FF7900`)
- [ ] Check if client has existing brand colors (from truck, uniforms, cards)
- [ ] Ensure colors match any existing logo
- [ ] Test contrast ratios for accessibility
- [ ] Create button hover states
- [ ] Define link colors (visited vs unvisited)

---

## 🖼️ VISUAL REFERENCE

### What The Color Scheme Looks Like:

```
┌─────────────────────────────────────────────────────────┐
│ ████████████████  HEADER (Black #1A1A1A)  ██████████████│
│  LOGO           (405) 555-1234    [FREE ESTIMATE]      │
│                    ▲ Orange          ▲ Orange Button   │
├─────────────────────────────────────────────────────────┤
│                                                         │
│     CENTRAL OKLAHOMA'S TRUSTED PAVING EXPERTS          │
│     ─────────────────────────────────────────          │
│     [  GET YOUR FREE ESTIMATE  ]  ◄── Orange Button    │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐   │
│  │ SERVICE │  │ SERVICE │  │ SERVICE │  │ SERVICE │   │
│  │  ICON   │  │  ICON   │  │  ICON   │  │  ICON   │   │
│  │(Orange) │  │(Orange) │  │(Orange) │  │(Orange) │   │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘   │
│    ▲ Gray background cards (#F5F5F5)                   │
├─────────────────────────────────────────────────────────┤
│ ████████████████  FOOTER (Black #1A1A1A)  ██████████████│
│  Contact  |  Services  |  Areas  |  Social (Orange)    │
└─────────────────────────────────────────────────────────┘
```

---

*Color guide compiled by LMW Labs LLC*
*For Cooper Asphalt Paving project*
