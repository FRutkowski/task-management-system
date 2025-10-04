import { computed, toValue, type MaybeRef } from 'vue'

const textClasses: Record<string, string> = {
  red: 'text-red-400',
  orange: 'text-orange-400',
  amber: 'text-amber-400',
  yellow: 'text-yellow-400',
  lime: 'text-lime-400',
  green: 'text-green-400',
  emerald: 'text-emerald-400',
  teal: 'text-teal-400',
  cyan: 'text-cyan-400',
  sky: 'text-sky-400',
  blue: 'text-blue-400',
  indigo: 'text-indigo-400',
  violet: 'text-violet-400',
  fuchsia: 'text-fuchsia-400',
  pink: 'text-pink-400',
  rose: 'text-rose-400',
  purple: 'text-purple-400'
}

export const useTextColor = (color: MaybeRef<string | undefined>) => {
  const textColor = computed(() => {
    const value = toValue(color) ?? 'purple'
    return textClasses[value] ?? textClasses.purple
  })

  return { textColor }
}

const hoverClasses: Record<string, string> = {
  red: 'hover:text-red-400',
  orange: 'hover:text-orange-400',
  amber: 'hover:text-amber-400',
  yellow: 'hover:text-yellow-400',
  lime: 'hover:text-lime-400',
  green: 'hover:text-green-400',
  emerland: 'hover:text-emerland-400',
  teal: 'hover:text-teal-400',
  cyan: 'hover:text-cyan-400',
  sky: 'hover:text-sky-400',
  blue: 'hover:text-blue-400',
  indigo: 'hover:text-indigo-400',
  violet: 'hover:text-violet-400',
  fuchsia: 'hover:text-fuchsia-400',
  pink: 'hover:text-pink-400',
  rose: 'hover:text-rose-400',
  purple: 'hover:text-purple-400', // domyślny fallback
}

export const useHoverTextColor = (color: MaybeRef<string | undefined>) => {
  const onHoverTextColor = computed(() => {
    const value = toValue(color) ?? 'purple' // domyślnie purple, jeśli brak
    return hoverClasses[value] ?? hoverClasses.purple
  })

  return { onHoverTextColor }
}

const borderClasses: Record<string, string> = {
  red: 'border-red-600',
  orange: 'border-orange-600',
  amber: 'border-amber-600',
  yellow: 'border-yellow-600',
  lime: 'border-lime-600',
  green: 'border-green-600',
  emerald: 'border-emerald-600',
  teal: 'border-teal-600',
  cyan: 'border-cyan-600',
  sky: 'border-sky-600',
  blue: 'border-blue-600',
  indigo: 'border-indigo-600',
  violet: 'border-violet-600',
  fuchsia: 'border-fuchsia-600',
  pink: 'border-pink-600',
  rose: 'border-rose-600',
  purple: 'border-purple-600'
}

export const useBorderColor = (color?: MaybeRef<string | undefined>) => {
  const borderColor = computed(() => {
    const value = toValue(color) ?? 'purple'
    return borderClasses[value] ?? borderClasses.purple
  })

  return { borderColor }
}
