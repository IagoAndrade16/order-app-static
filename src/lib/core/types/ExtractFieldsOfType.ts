type AllowedFieldsWithType<Obj, Type> = {
	[K in keyof Obj]: Obj[K] extends Type ? K : never
};

export type ExtractFieldsOfType<Obj, Type> = AllowedFieldsWithType<Obj, Type>[keyof Obj]
