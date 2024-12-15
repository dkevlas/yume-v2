import { z } from "zod";

export const ProductValidator = z.object({
    title: z
        .string({
            required_error: 'El titulo es requerido'
        })
        .min( 4, {
            message: 'Mínimo de 4 carácteres'
        })
        .regex( /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s,.\-!?;:'"()&%$#@¡¿¡¨*+~\[\]{}|\\^_`<>¬ºªñÑ]*(\r?\n[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s,.\-!?;:'"()&%$#@¡¿¡¨*+~\[\]{}|\\^_`<>¬ºªñÑ]*)*$/,{
            message: 'El título no puede estar vacío. Por favor ingresa un título válido.'
        }),
    description: z
        .string({
            required_error: 'La descripción no puede estar vacía'
        })
        .max(300, {
            message: 'Máximo de 300 carácteres'
        }),
    category: z
        .string({
            message: "El campo debe ser una cadena"
        })
        .optional()
        .nullable(),
    subcategory: z
        .string({
            message: "El campo debe ser una cadena"
        })
        .optional()
        .nullable(),
    stock: z
        .number({
            message: 'El campo de stock debe ser un número.'
        })
        .int({
            message: 'El stock debe ser un número entero'
        })
        .nonnegative({
            message: 'El stock no puede ser negativo.'
        })
        .optional(),
    price: z
        .number({
            required_error: 'El precio es necesario'
        })
        .positive({
            message: 'El precio debe ser un número positivo.'
        }),
    discountPercentage: z
        .number({
            message: 'El descuento debe ser numerico'
        })
        .min(0, {
            message: 'El descuento no puede ser negativo.'
        })
        .max(100, {
            message: 'El descuento no puede ser mayor a 100%.'
        })
        .optional(),
    brand: z
        .string({
            message: "El campo debe ser una cadena"
        })
        .optional(),
    thumbnail: z
        .string({
            required_error: 'El campo es obligatorio'
        }),
    images: z
        .array(z.string({
            message: "Debe ser una cadena"
        }), {
            required_error: "Este campo es obligatorio",
        })
        .nonempty({
            message: "Debe proporcionar al menos una imagen"
        }),
    createdAt: z
        .date()
        .optional()
})
