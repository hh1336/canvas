import type { ContentNavigationItem } from '@nuxt/content'
import type { NavigationMenuItem } from '@nuxt/ui'

export function getNavigation<T extends NavigationMenuItem & { path?: string }>(
  currentPath: string,
  navigationArray?: ContentNavigationItem[],
): T[] | undefined {
  if (!navigationArray) return undefined
  return navigationArray.map((c) => {
    const temp = {
      label: c.title,
      to: c.children ? undefined : c.path,
      value: c.path,
      active: c.path === currentPath,
      open: true,
    } as Partial<T>
    if (c.children) {
      const children = getNavigation(currentPath, c.children)
      if (children) temp.children = children
    }
    return temp as T
  })
}
