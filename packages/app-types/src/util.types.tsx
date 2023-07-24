export type NormalizedObject<T> = {
    byId: {
        [key: string]: T
    },
    allIds: string[]
} | undefined




