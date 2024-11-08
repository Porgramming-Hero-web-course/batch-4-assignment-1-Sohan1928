That's what I understand about typescript's union types and intersection types are described below:

Union types: Union type means either this or that. means comparing two or more properties. That will happen if it doesn't. Unions are declared in TypeScript by the ( | ) symbol.
Example:

type socialMedia='facebook'| 'twitter' |'linkedin' | 'instagram' ;

Intersection types: Intersection type means that if two types are compared then both conditions must be met. I mean, if it is said that the salary will be 30000 rupees and the son must have master's pass, then I will marry my daughter. Intersection are declared in TypeScript by the ( & ) symbol.
Example:

type needForMarry= 30000 & "master's pass";
