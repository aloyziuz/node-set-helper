export function SetUnion<T>(a: T[], b: T[]): Set<T>;
export function SetIntersection<T, U>(
	a: T[],
	b: U[],
	transformFn?: (memberOfA: T) => U
): Set<T>;
export function SetDifference<T, U>(
	a: T[],
	b: U[],
	transformFn?: (memberOfA: T) => U
): Set<T>;
