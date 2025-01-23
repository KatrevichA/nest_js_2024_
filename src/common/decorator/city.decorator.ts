import { registerDecorator, ValidationOptions } from 'class-validator';

export function IsCityAllowed(validationOptions?: ValidationOptions) {
  return (object: any, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: {
        /*саме в валідаторі прописуємо свій кастомнний Декоратор*/
        validate(value: any): any {
          return validationOptions?.groups?.includes(value);
        },
      },
    });
  };
}
