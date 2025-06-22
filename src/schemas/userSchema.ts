import { z } from "zod"

export const userSchema = z.object({
        firstName: z.string({ required_error: "Имя обязательно" }),
        lastName: z.string({ required_error: "Фамилия обязательна" }),
        email: z.string({ required_error: "Требуется электронная почта" }),
        password: z.string({ required_error: "Пароль обязателен" }),
        phone: z.string({ required_error: "Номер телефона обязателен" }),
        address: z.string({ required_error: "Адрес обязателен" }),
	image: z.string(),
})

export const loginSchema = z.object({
        email: z.string({ required_error: "Требуется электронная почта" }),
        password: z.string({ required_error: "Пароль обязателен" }),
})
