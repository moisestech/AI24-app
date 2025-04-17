# HeroSection Component Specification

## Overview
The HeroSection is a dynamic, layered component that combines media (videos/images) with text content (slogans, mission, description, and tagline) to create an engaging above-the-fold experience. It includes interactive elements and is designed to be maintainable, scalable, and performant.

## Component Architecture

```
app/components/
├── hero/
│   ├── HeroSection.tsx (main container) ✅
│   ├── MediaLayer.tsx (handles video/image display) ✅
│   ├── ContentLayer.tsx (handles slogan text) ✅
│   ├── MissionComponent.tsx (mission statement) ✅
│   ├── DescriptionComponent.tsx (description text) ✅
│   ├── TaglineComponent.tsx (tagline text) ✅
│   ├── InteractionLayer.tsx (handles CTAs) ✅
│   ├── VideoTest.tsx (video handling test) ✅
│   ├── types.ts (shared types) ✅
│   ├── constants.ts (shared constants) ✅
│   ├── atoms.ts (state management) ✅
│   └── hooks/
│       ├── useMediaSequence.ts (media cycling logic) ✅
│       ├── useTextSequence.ts (text cycling logic) ✅
│       ├── useDebugControls.ts (debugging tools) ✅
│       └── useLayerAnimation.ts (animation controls) ❌
```

## State Management & Atoms

### Core Atoms
```typescript
// Media State
export const currentMediaUrlAtom = atom<string | null>(null)
export const currentMediaTypeAtom = atom<string | null>(null)
export const currentMediaPosterAtom = atom<string | null>(null)
export const isMediaPlayingAtom = atom<boolean>(false)
export const isMediaTransitioningAtom = atom<boolean>(false)

// Debug State
export const isDebugModeAtom = atom<boolean>(false)

// Layer Effects
export const setLayerEffectsAtom = atom(
  null,
  (get, set, layer: TextLayerType) => {
    // Handles opacity, blur, and brightness effects for different text layers
  }
)
```

### State Flow
1. **Media Sequence**
   - `useMediaSequence` hook manages video/image cycling
   - Uses `isMediaPlayingAtom` to control playback
   - Handles transitions between media items
   - Current implementation: 5-second interval between transitions

2. **Text Sequence**
   - `useTextSequence` hook manages text layer transitions
   - Cycles through slogan, mission, description, and tagline
   - Uses `isTextTransitioningAtom` for smooth transitions
   - Current implementation: 8-second duration per text layer

3. **Layer Effects**
   - `setLayerEffectsAtom` controls visual effects for each text layer
   - Adjusts opacity, blur, and brightness based on active layer
   - Current implementation:
     - Mission: 70% opacity, 2px blur, 80% brightness
     - Description: 80% opacity, 1px blur, 90% brightness
     - Tagline: 90% opacity, 0.5px blur, 95% brightness
     - Default: 100% opacity, no blur, 100% brightness

## Implementation Status

### ✅ Completed Features
1. Core Structure
   - Component architecture setup
   - Layer-based text display
   - Type definitions
   - Shared constants
   - Basic state management with Jotai atoms

2. Media Handling
   - Video and image support
   - Cloudinary video integration
   - Preloading implementation
   - Fallback content
   - Error handling
   - Performance optimizations
   - Random start time for videos
   - Video error logging

3. Text Layer Management
   - Slogan transitions with random selection
   - Mission statement display
   - Description text
   - Tagline display
   - Text animations
   - Responsive typography
   - Layer-based effects

4. Interaction Layer
   - CTA buttons
   - Hover effects
   - Click handlers
   - Basic accessibility
   - Button variants (slim/flat)

5. State Management
   - Media sequence control
   - Text layer sequencing
   - Debug tools
   - Basic interaction state
   - Atom-based state management

### 🚧 In Progress
1. Performance Optimization
   - Lazy loading implementation
   - Memory management
   - Cross-browser testing
   - Video buffering optimization
   - Need to implement proper cleanup of video elements
   - Need to optimize video preloading strategy

2. Accessibility
   - ARIA labels
   - Keyboard navigation
   - Screen reader optimization
   - Color contrast compliance
   - Need to add proper ARIA roles and labels
   - Need to implement keyboard controls for video

3. Testing
   - Unit tests
   - Integration tests
   - Performance benchmarks
   - Accessibility testing
   - Need to add test coverage for atoms
   - Need to test video error scenarios

### ❌ Not Started
1. Advanced Features
   - User controls (play/pause, progress bar)
   - Volume control
   - Speed control
   - Mouse parallax effects
   - Scroll-based triggers
   - Touch gestures
   - Video quality selection
   - Video preload strategies

2. Analytics
   - View tracking
   - Interaction tracking
   - Performance metrics
   - User behavior analysis
   - Video engagement metrics
   - Error tracking

3. Content Management
   - Dynamic content loading
   - A/B testing support
   - Content scheduling
   - Multi-language support
   - Content versioning
   - Media asset management

## Technical Considerations

### Performance
- ✅ Preloading strategies
- ✅ Optimized animations
- 🚧 Lazy loading
- 🚧 Memory management
- ✅ Video buffering optimization
- ❌ Video quality adaptation
- ❌ Progressive loading

### Accessibility
- ✅ Basic ARIA support
- 🚧 Keyboard navigation
- 🚧 Screen reader optimization
- 🚧 Color contrast compliance
- ❌ Video controls accessibility
- ❌ Focus management

### Testing
- ❌ Unit tests
- ❌ Integration tests
- ❌ Performance benchmarks
- ❌ Accessibility testing
- ❌ Video playback tests
- ❌ Error scenario tests

### Maintenance
- ✅ Clear documentation
- ✅ Debugging tools
- ✅ Error boundaries
- 🚧 Logging system
- ❌ Performance monitoring
- ❌ Error tracking

## Debug Tools

### Current Implementation
- ✅ Debug panel toggle (Ctrl+D)
- ✅ Current state display
- ✅ Media loading status
- ✅ Basic error logging
- ❌ Performance metrics
- ❌ Animation timing
- ❌ Interaction logs

### Needed Improvements
1. Debug Panel
   - Add video playback metrics
   - Add memory usage tracking
   - Add frame rate monitoring
   - Add error rate tracking
   - Add transition timing visualization

2. Keyboard Controls
   - Implement play/pause (Space)
   - Add sequence navigation (Arrow keys)
   - Add media jumping (1-9)
   - Add debug mode toggle (Ctrl+D)

3. Error Handling
   - Add detailed error logging
   - Add error recovery strategies
   - Add fallback content management
   - Add error reporting system

## Known Issues & Gotchas

1. Video Playback
   - Need to handle video loading errors better
   - Need to implement proper cleanup
   - Need to handle browser autoplay policies
   - Need to handle network conditions

2. State Management
   - Need to handle atom dependencies better
   - Need to implement proper cleanup
   - Need to handle state persistence
   - Need to handle state synchronization

3. Performance
   - Need to optimize video loading
   - Need to handle memory usage
   - Need to handle browser throttling
   - Need to handle device capabilities

4. Accessibility
   - Need to implement proper ARIA roles
   - Need to handle keyboard navigation
   - Need to handle screen readers
   - Need to handle focus management

## Next Steps

1. Immediate Priorities
   - Implement proper video error handling
   - Add comprehensive debug tools
   - Complete accessibility features
   - Set up testing infrastructure
   - Implement proper cleanup
   - Add performance monitoring

2. Short-term Goals
   - Add user controls
   - Implement analytics tracking
   - Enhance content management
   - Optimize performance
   - Add error tracking
   - Add performance metrics

3. Long-term Vision
   - Advanced interactions
   - Comprehensive analytics
   - Dynamic content system
   - Multi-language support
   - Advanced video features
   - Enhanced accessibility 