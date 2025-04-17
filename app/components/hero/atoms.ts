import { atom } from 'jotai'
import type { MediaItem, TextLayerType } from './types'

// Debug mode atom
export const isDebugModeAtom = atom<boolean>(false)

// Media state atoms
export const currentMediaAtom = atom<MediaItem | null>(null)
export const currentMediaUrlAtom = atom<string | null>(null)
export const currentMediaTypeAtom = atom<string | null>(null)
export const currentMediaPosterAtom = atom<string | null>(null)
export const isMediaPlayingAtom = atom<boolean>(false)
export const isMediaTransitioningAtom = atom<boolean>(false)

// Media sequence atoms
export const mediaSequenceAtom = atom<MediaItem[]>([])
export const currentMediaIndexAtom = atom<number>(0)
export const isMediaSequencePlayingAtom = atom<boolean>(false)
export const mediaSequenceIntervalAtom = atom<number>(5000)

// Content state atoms
export const currentSloganAtom = atom<string>('')
export const currentMissionAtom = atom<string>('')
export const currentDescriptionAtom = atom<string>('')
export const currentTaglineAtom = atom<string>('')
export const currentContentLayerAtom = atom<'slogan' | 'mission' | 'description' | 'tagline'>('slogan')

// Content layer atoms
export const currentLayerAtom = atom<TextLayerType>('slogan')
export const currentTextAtom = atom<string>('')
export const isTransitioningAtom = atom<boolean>(false)

// Media layer effect atoms
export const mediaLayerOpacityAtom = atom<number>(1)
export const mediaLayerBlurAtom = atom<number>(0)
export const mediaLayerBrightnessAtom = atom<string>('100%')

// Layer effects
export const setLayerEffectsAtom = atom(
  null,
  (get, set, layer: TextLayerType) => {
    switch (layer) {
      case 'mission':
        set(mediaLayerOpacityAtom, 0.7)
        set(mediaLayerBlurAtom, 2)
        set(mediaLayerBrightnessAtom, '80%')
        break
      case 'description':
        set(mediaLayerOpacityAtom, 0.8)
        set(mediaLayerBlurAtom, 1)
        set(mediaLayerBrightnessAtom, '90%')
        break
      case 'tagline':
        set(mediaLayerOpacityAtom, 0.9)
        set(mediaLayerBlurAtom, 0.5)
        set(mediaLayerBrightnessAtom, '95%')
        break
      default:
        set(mediaLayerOpacityAtom, 1)
        set(mediaLayerBlurAtom, 0)
        set(mediaLayerBrightnessAtom, '100%')
    }
  }
) 