# Facility Images Structure Documentation

## Overview

The `FacilityShowcase` component has been restructured to support separate mobile and desktop images for better performance and optimization.

## File Structure

```
src/
├── components/PageComponents/Home/Desktop/
│   └── FacilityShowcase.jsx          # Main component
├── constants/
│   └── facilityImages.js             # Image configuration
└── assets/images/home/facility/
    ├── post1.webp                    # Desktop images
    ├── post2.webp
    ├── ...
    └── mobile/                       # TODO: Create mobile-optimized images
        ├── post1.webp
        ├── post2.webp
        └── ...
```

## Data Structure

### Current Structure

```javascript
const facilityLocations = [
  {
    key: "post",
    label: "Post",
    images: {
      desktop: [post1, post2, post3, post4, post5, post6, post7, post8],
      mobile: [post1, post2, post3, post4, post5, post6, post7, post8], // Currently same as desktop
    },
  },
  // ... other locations
];
```

### Future Mobile Images Structure

```javascript
// TODO: Replace with actual mobile-optimized images
import post1Mobile from "/src/assets/images/home/facility/mobile/post1.webp";
import post2Mobile from "/src/assets/images/home/facility/mobile/post2.webp";

const facilityLocations = [
  {
    key: "post",
    label: "Post",
    images: {
      desktop: [post1, post2, post3, post4, post5, post6, post7, post8],
      mobile: [
        post1Mobile,
        post2Mobile,
        post3Mobile,
        post4Mobile,
        post5Mobile,
        post6Mobile,
        post7Mobile,
        post8Mobile,
      ],
    },
  },
];
```

## Key Features

### 1. Separate Image Sets

- **Desktop Images**: High-resolution images for desktop displays
- **Mobile Images**: Optimized, smaller images for mobile devices

### 2. Helper Functions

```javascript
// Get images for specific device type
export const getImagesForDevice = (locationKey, deviceType = "desktop") => {
  const location = facilityLocations.find((loc) => loc.key === locationKey);
  return location ? location.images[deviceType] : [];
};

// Get all location data
export const getLocationData = (locationKey) => {
  return facilityLocations.find((loc) => loc.key === locationKey);
};
```

### 3. Responsive Image Loading

- Desktop version uses `activeLocation.images.desktop`
- Mobile version uses `activeLocation.images.mobile`
- Different aspect ratios for each device type

## Implementation Details

### Desktop Version

- Aspect ratios: `aspect-[4/3] md:aspect-[16/9] xl:aspect-[21/9] 2xl:aspect-[24/9]`
- Larger carousel navigation buttons
- Full-width layout

### Mobile Version

- Aspect ratio: `aspect-[4/3]`
- Smaller carousel navigation buttons
- Scrollable tab navigation with arrow controls

## Benefits

1. **Performance**: Mobile devices load smaller, optimized images
2. **Bandwidth**: Reduced data usage on mobile networks
3. **User Experience**: Faster loading times on mobile devices
4. **Maintainability**: Centralized image configuration
5. **Scalability**: Easy to add new locations or image sets

## Next Steps

1. **Create Mobile Images Directory**:

   ```
   src/assets/images/home/facility/mobile/
   ```

2. **Optimize Images for Mobile**:

   - Resize images to appropriate mobile dimensions
   - Compress for faster loading
   - Maintain quality while reducing file size

3. **Update Configuration**:

   - Replace mobile image arrays with actual mobile-optimized images
   - Test performance improvements

4. **Add Image Preloading** (Optional):
   - Implement lazy loading for better performance
   - Add loading states for better UX

## Usage Example

```javascript
import {
  facilityLocations,
  getImagesForDevice,
} from "@/constants/facilityImages";

// Get desktop images for Post location
const postDesktopImages = getImagesForDevice("post", "desktop");

// Get mobile images for Brentwood location
const brentwoodMobileImages = getImagesForDevice("brentwood", "mobile");

// Get all data for Seton location
const setonData = getLocationData("seton");
```

## Migration Notes

- Current implementation uses the same images for both mobile and desktop
- No breaking changes to existing functionality
- Easy migration path to separate mobile images when ready
- Backward compatible with existing image structure
