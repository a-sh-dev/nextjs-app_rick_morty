/**
 * @description Alternative to Enum Utility Type.
 * Takes an object and generates a union type of its values.
 * Must be accompanied with a readonly object literal with the same name
 * to create enum-like objects and types as an alternative to using Enums.
 * Provides type safety and autocomplete.
 * @example
 * export const AvailabilityMenuOption = {
    showAll: 'showAll',
    available: 'available',
    booked: 'booked',
    inUse: 'inUse',
  } as const
  export type AvailabilityMenuOption = AltEnumType<typeof AvailabilityMenuOption>
  * @example
  * const available1: AvailabilityMenuOption = 'available' // OK
  * const available2 = AvailabilityMenuOption.available // OK
 */
export type EnumAlternativeType<T> = T[keyof T]

export const PageRoute = {
  Home: '/',
  Info: '/info',
  Characters: '/info/characters/1',
} as const
export type PageRoute = EnumAlternativeType<typeof PageRoute>

export const USER_SESSION_KEY = 'rickMontyUser'
