import { z } from "zod"

export const createBikeSchema = z.object({
        name: z.string({ required_error: "Название велосипеда обязательно" }),
        description: z.string({ required_error: "Описание обязательно" }),
        pricePerHour: z.string({ required_error: "Цена обязательна" }),
        cc: z.string({ required_error: "Необходим объем двигателя" }),
        year: z.string({ required_error: "Год выпуска обязателен" }),
        model: z.string({ required_error: "Модель велосипеда обязательна" }),
        brand: z.string({ required_error: "Бренд велосипеда обязателен" }),
        category: z.string({ required_error: "Категория велосипеда обязательна" }),
        color: z.string({ required_error: "Цвет велосипеда обязателен" }),
        frame: z.string({ required_error: "Размер рамы обязателен" }),
        image: z.string({ required_error: "Изображение велосипеда обязательно" }),
        support: z.string({ required_error: "Максимальная поддержка обязательна" }),
        weight: z.string({ required_error: "Вес велосипеда обязателен" }),
})
