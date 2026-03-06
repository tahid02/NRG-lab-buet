# Reusable Prefetch Components

## Overview
Created reusable `PrefetchLink` and `PrefetchButton` components that can be used anywhere in the app to enable instant navigation with hover/touch prefetching.

## Components

### 1. PrefetchLink
A drop-in replacement for React Router's `Link` component with intelligent prefetching.

**Location**: [`src/components/PrefetchLink.tsx`](src/components/PrefetchLink.tsx:1)

#### Usage

```tsx
import { PrefetchLink } from '@/components';

// Basic usage
<PrefetchLink to="/research" className="text-blue-500">
  Learn More
</PrefetchLink>

// With custom styling
<PrefetchLink 
  to="/about-us" 
  className="inline-flex items-center gap-2 px-4 py-2 bg-[#00897b] text-white rounded-full hover:bg-[#00796b]"
>
  About Us
</PrefetchLink>

// Disable prefetching for specific link
<PrefetchLink 
  to="/news" 
  prefetch={false}
  className="..."
>
  News (no prefetch)
</PrefetchLink>

// Prefetch only on hover (desktop)
<PrefetchLink 
  to="/publications" 
  prefetchOnTouch={false}
  className="..."
>
  Publications
</PrefetchLink>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `to` | `string` | Required | Route path to navigate to |
| `prefetch` | `boolean` | `true` | Enable/disable prefetching |
| `prefetchOnHover` | `boolean` | `true` | Prefetch on hover (desktop) |
| `prefetchOnTouch` | `boolean` | `true` | Prefetch on touch (mobile) |
| All standard `Link` props | - | - | All React Router Link props are supported |

### 2. PrefetchButton
A button component with intelligent prefetching and navigation.

**Location**: [`src/components/PrefetchButton.tsx`](src/components/PrefetchButton.tsx:1)

#### Usage

```tsx
import { PrefetchButton } from '@/components';

// Basic usage
<PrefetchButton 
  to="/research" 
  className="px-4 py-2 bg-blue-500 text-white rounded"
>
  Learn More
</PrefetchButton>

// With onClick handler
<PrefetchButton 
  to="/about-us" 
  onClick={() => console.log('Navigating to About Us')}
  className="px-6 py-3 bg-[#00897b] text-white font-semibold rounded-full hover:bg-[#00796b]"
>
  About Us
</PrefetchButton>

// Disable prefetching
<PrefetchButton 
  to="/news" 
  prefetch={false}
  className="..."
>
  News (no prefetch)
</PrefetchButton>

// With custom styling
<PrefetchButton 
  to="/facilities" 
  className="inline-flex items-center gap-2 px-8 py-4 bg-[#630e1d] text-white font-semibold rounded-full hover:bg-[#4a0a15] transition-all hover:shadow-xl"
>
  <span>View Facilities</span>
  <ArrowRight size={20} />
</PrefetchButton>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `to` | `string` | Required | Route path to navigate to |
| `prefetch` | `boolean` | `true` | Enable/disable prefetching |
| `prefetchOnHover` | `boolean` | `true` | Prefetch on hover (desktop) |
| `prefetchOnTouch` | `boolean` | `true` | Prefetch on touch (mobile) |
| All standard `button` props | - | - | All HTML button props are supported |

## Migration Guide

### Replace Existing Links

**Before:**
```tsx
import { Link } from 'react-router-dom';

<Link to="/research" className="...">
  Learn More
</Link>
```

**After:**
```tsx
import { PrefetchLink } from '@/components';

<PrefetchLink to="/research" className="...">
  Learn More
</PrefetchLink>
```

### Replace Button Navigation

**Before:**
```tsx
import { useNavigate } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();
  
  return (
    <button onClick={() => navigate('/research')} className="...">
      Learn More
    </button>
  );
}
```

**After:**
```tsx
import { PrefetchButton } from '@/components';

function MyComponent() {
  return (
    <PrefetchButton to="/research" className="...">
      Learn More
    </PrefetchButton>
  );
}
```

## Supported Routes

The following routes are supported for prefetching:

| Route Name | Path | Page |
|------------|-------|------|
| Home | `/` | Home page |
| Research | `/research` | Research page |
| About Us | `/about-us` | About Us page |
| Publications | `/publications` | Publications page |
| News | `/news` | News page |
| Facilities | `/facilities` | Facilities page |

## Use Cases

### 1. Call-to-Action Buttons
```tsx
<PrefetchButton 
  to="/research"
  className="inline-flex items-center gap-2 px-8 py-4 bg-[#00897b] text-white font-semibold rounded-full hover:bg-[#00796b] transition-all hover:shadow-xl hover:shadow-[#00897b]/25 transform hover:-translate-y-1"
>
  Learn More About Our Work
  <ArrowRight size={20} />
</PrefetchButton>
```

### 2. Navigation Links in Content
```tsx
<PrefetchLink to="/about-us" className="text-[#00897b] hover:underline">
  Learn more about our team
</PrefetchLink>
```

### 3. Card Links
```tsx
<div className="bg-white rounded-lg shadow-lg p-6">
  <h3 className="text-xl font-bold mb-2">Latest Research</h3>
  <p className="text-gray-600 mb-4">Explore our groundbreaking nanomaterial research.</p>
  <PrefetchLink 
    to="/research"
    className="inline-block px-4 py-2 bg-[#630e1d] text-white rounded hover:bg-[#4a0a15]"
  >
    View Research
  </PrefetchLink>
</div>
```

### 4. Footer Links
```tsx
<footer className="bg-gray-900 text-white py-12">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
    <div>
      <h4 className="font-bold mb-4">Quick Links</h4>
      <ul className="space-y-2">
        <li>
          <PrefetchLink to="/research" className="text-gray-300 hover:text-white">
            Research
          </PrefetchLink>
        </li>
        <li>
          <PrefetchLink to="/about-us" className="text-gray-300 hover:text-white">
            About Us
          </PrefetchLink>
        </li>
      </ul>
    </div>
  </div>
</footer>
```

### 5. Hero Section CTAs
```tsx
<section className="min-h-screen flex items-center justify-center">
  <div className="text-center">
    <h1 className="text-5xl font-bold mb-6">Welcome to NGR Lab</h1>
    <p className="text-xl text-gray-600 mb-8">Pioneering nanomaterial research</p>
    <div className="flex gap-4 justify-center">
      <PrefetchButton 
        to="/research"
        className="px-8 py-4 bg-[#00897b] text-white font-semibold rounded-full hover:bg-[#00796b]"
      >
        Explore Research
      </PrefetchButton>
      <PrefetchButton 
        to="/about-us"
        className="px-8 py-4 border-2 border-[#630e1d] text-[#630e1d] font-semibold rounded-full hover:bg-[#630e1d] hover:text-white"
      >
        Learn More
      </PrefetchButton>
    </div>
  </div>
</section>
```

## Performance Benefits

### Instant Navigation
- Routes are prefetched when user hovers/touches
- Navigation happens instantly on click
- No loading spinners or delays

### Better User Experience
- Smooth transitions between pages
- Professional single-page app feel
- Reduced perceived latency

### Smart Resource Usage
- Only prefetches routes user interacts with
- Browser caches prefetched chunks
- Minimal bandwidth waste

## Advanced Usage

### Conditional Prefetching
```tsx
// Only prefetch on desktop, not mobile
<PrefetchLink 
  to="/research"
  prefetchOnTouch={false}
  className="..."
>
  Research
</PrefetchLink>
```

### With Custom onClick
```tsx
<PrefetchButton 
  to="/about-us"
  onClick={() => {
    // Track analytics
    trackEvent('navigation', { page: 'about-us' });
  }}
  className="..."
>
  About Us
</PrefetchButton>
```

### Disable Prefetching for External Links
```tsx
// For external links, use standard Link
<Link to="https://example.com" className="...">
  External Link
</Link>

// For internal links, use PrefetchLink
<PrefetchLink to="/research" className="...">
  Internal Link
</PrefetchLink>
```

## Testing

### Desktop Testing
1. Open DevTools Network tab
2. Hover over PrefetchLink/PrefetchButton
3. Observe chunk loading in background
4. Click link - should be instant

### Mobile Testing
1. Open DevTools Network tab
2. Touch PrefetchLink/PrefetchButton
3. Observe chunk loading
4. Tap link - should be instant

### Performance Testing
```bash
# Build and test
npm run build
npm run preview

# Check network tab for:
# - Chunk sizes
# - Load times
# - Cache behavior
```

## Best Practices

1. **Use PrefetchLink for navigation links**
   - Replaces standard Link component
   - Works exactly like Link but with prefetching

2. **Use PrefetchButton for CTAs**
   - Better than button + navigate pattern
   - Cleaner code, better performance

3. **Keep prefetching enabled by default**
   - Only disable for specific cases
   - Most users benefit from prefetching

4. **Test on real devices**
   - Desktop hover behavior
   - Mobile touch behavior
   - Slow connection performance

5. **Monitor performance**
   - Track navigation times
   - Measure prefetch effectiveness
   - Optimize as needed

## Troubleshooting

### Prefetch Not Working
- Check if route is in the supported routes list
- Verify `prefetch` prop is not set to `false`
- Check browser console for errors

### Navigation Not Instant
- Verify chunk is being prefetched (check Network tab)
- Ensure route is lazy-loaded in App.tsx
- Check if chunk is being cached by browser

### Performance Issues
- Too many prefetches may impact performance
- Consider disabling prefetch for less important links
- Use `prefetch={false}` for rarely visited routes

## Conclusion

The `PrefetchLink` and `PrefetchButton` components provide:
- ✅ Instant navigation anywhere in the app
- ✅ Drop-in replacement for existing components
- ✅ Flexible configuration options
- ✅ Cross-platform support (desktop/mobile)
- ✅ Better user experience

Use these components throughout the app to provide instant navigation and improve user satisfaction!

## Related Files

- [`src/components/PrefetchLink.tsx`](src/components/PrefetchLink.tsx:1) - PrefetchLink component
- [`src/components/PrefetchButton.tsx`](src/components/PrefetchButton.tsx:1) - PrefetchButton component
- [`src/components/index.ts`](src/components/index.ts:1) - Export file
- [`src/App.tsx`](src/App.tsx:1) - Route code splitting
- [`NAVBAR_PREFETCHING.md`](NAVBAR_PREFETCHING.md:1) - Navbar-specific prefetching
