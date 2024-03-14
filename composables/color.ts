export const useTextColor = (color: MaybeRef) => {
  const textColor = computed(() => {
    switch (color.value) {
      case 'red':
        return 'text-red-400'
      case 'orange':
        return 'text-orange-400'
      case 'amber':
        return 'text-amber-400'
      case 'yellow':
        return 'text-yellow-400'
      case 'lime':
        return 'text-lime-400'
      case 'green':
        return 'text-green-400'
      case 'emerland':
        return 'text-emerland-400'
      case 'teal':
        return 'text-teal-400'
      case 'cyan':
        return 'text-cyan-400'
      case 'sky':
        return 'text-sky-400'
      case 'blue':
        return 'text-blue-400'
      case 'indigo':
        return 'text-indigo-400'
      case 'violet':
        return 'text-violet-400'
      case 'fuchsia':
        return 'text-fuchsia-400'
      case 'pink':
        return 'text-pink-400'
      case 'rose':
        return 'text-rose-400'
      case 'purple':
      default:
        return 'text-purple-400'
    }
  })

  return {
    textColor
  }
}

export const useHoverTextColor = (color: MaybeRef) => {
  const textColor = computed(() => {
    switch (color.value) {
      case 'red':
      case 'orange':
        return 'hover:text-orange-400'
      case 'amber':
        return 'hover:text-amber-400'
      case 'yellow':
        return 'hover:text-yellow-400'
      case 'lime':
        return 'hover:text-lime-400'
      case 'green':
        return 'hover:text-green-400'
      case 'emerland':
        return 'hover:text-emerland-400'
      case 'teal':
        return 'hover:text-teal-400'
      case 'cyan':
        return 'hover:text-cyan-400'
      case 'sky':
        return 'hover:text-sky-400'
      case 'blue':
        return 'hover:text-blue-400'
      case 'indigo':
        return 'hover:text-indigo-400'
      case 'violet':
        return 'hover:text-violet-400'
      case 'fuchsia':
        return 'hover:text-fuchsia-400'
      case 'pink':
        return 'hover:text-pink-400'
      case 'rose':
        return 'hover:text-rose-400'
      case 'purple':
      default:
        return 'hover:text-purple-400'
    }
  })

  return {
    textColor
  }
}
