import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {
	useForm,
	SubmitHandler,
	FieldValues,
	Controller,
} from "react-hook-form"
import { registerUser, LocalUser } from "@/utils/localAuth"
import { toast } from "sonner"
import { userSchema } from "@/schemas/userSchema"
import { zodResolver } from "@hookform/resolvers/zod"

const Register = () => {
        const [showPassword, setShowPassword] = useState(false)
        const navigate = useNavigate()

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(userSchema),
	})

        const onSubmit: SubmitHandler<FieldValues> = async (data) => {
                const toastId = toast.loading("Регистрация...")

                const userInfo = {
                        ...data,
                        role: "user",
                } as LocalUser
                const result = registerUser(userInfo)
                if (result.success) {
                        toast.success(result.message, { id: toastId })
                        navigate("/login")
                } else {
                        toast.error(result.message, { id: toastId })
                }
        }

	return (
		<div className="min-h-[calc(100vh-90px)] grid grid-cols-1 items-center">
			<Card className="mx-auto w-[550px]">
				<CardHeader>
                                        <CardTitle className="text-2xl font-orbitron tracking-wider">
                                                Регистрация
                                        </CardTitle>
                                        <CardDescription className="font-inter">
                                                Заполните форму для создания аккаунта
                                        </CardDescription>
				</CardHeader>
				<CardContent className="font-inter">
					<form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
						<div className="grid grid-cols-2 gap-2">
							<div className="grid gap-2">
                                                                <Label htmlFor="firstName">Имя</Label>
								<Controller
									name="firstName"
									control={control}
									rules={{ required: true }}
									render={({ field }) => (
										<>
											<Input
												{...field}
												id="firstName"
												type="text"
                                                                               placeholder="Имя"
											/>
											{errors.firstName?.message && (
												<p className="text-red-500 text-xs">
													{errors.firstName?.message as string}
												</p>
											)}
										</>
									)}
								/>
							</div>
							<div className="grid gap-2">
                                                                <Label htmlFor="lastName">Фамилия</Label>
								<Controller
									name="lastName"
									control={control}
									rules={{ required: true }}
									render={({ field }) => (
										<>
											<Input
												{...field}
												id="lastName"
												type="text"
                                                                               placeholder="Фамилия"
											/>
											{errors.lastName?.message && (
												<p className="text-red-500 text-xs">
													{errors.lastName?.message as string}
												</p>
											)}
										</>
									)}
								/>
							</div>
						</div>
						<div className="grid grid-cols-2 gap-2">
							<div className="grid gap-2">
                                                                <Label htmlFor="phone">Номер телефона</Label>
								<Controller
									name="phone"
									control={control}
									rules={{ required: true }}
									render={({ field }) => (
										<>
											<Input
												{...field}
												id="phone"
												type="text"
                                                                               placeholder="Номер телефона"
											/>
											{errors.phone?.message && (
												<p className="text-red-500 text-xs">
													{errors.phone?.message as string}
												</p>
											)}
										</>
									)}
								/>
							</div>
							<div className="grid gap-2">
                                                                <Label htmlFor="address">Адрес</Label>
								<Controller
									name="address"
									control={control}
									rules={{ required: true }}
									render={({ field }) => (
										<>
											<Input
												{...field}
												id="address"
												type="text"
                                                                               placeholder="Адрес"
											/>
											{errors.address?.message && (
												<p className="text-red-500 text-xs">
													{errors.address?.message as string}
												</p>
											)}
										</>
									)}
								/>
							</div>
						</div>
						<div className="grid gap-2">
                                                        <Label>Фото профиля</Label>
							<Controller
								name="image"
								control={control}
								render={({ field }) => (
									<>
										<Input
											{...field}
											type="text"
                                                                               placeholder="Ссылка на изображение"
										/>
									</>
								)}
							/>
						</div>
						<div className="grid gap-2">
                                                        <Label htmlFor="email">Электронная почта</Label>
							<Controller
								name="email"
								control={control}
								rules={{ required: true }}
								render={({ field }) => (
									<>
										<Input
											{...field}
											id="email"
											type="email"
                                                                               placeholder="primer@gmail.com"
										/>
										{errors.email?.message && (
											<p className="text-red-500 text-xs">
												{errors.email?.message as string}
											</p>
										)}
									</>
								)}
							/>
						</div>
						<div className="grid gap-2 relative">
                                                        <Label htmlFor="password">Пароль</Label>
							<Controller
								name="password"
								control={control}
								rules={{ required: true }}
								render={({ field }) => (
									<>
										<Input
											{...field}
											id="password"
											type={showPassword ? "text" : "password"}
										/>
										{errors.password?.message && (
											<p className="text-red-500 text-xs">
												{errors.password?.message as string}
											</p>
										)}
									</>
								)}
							/>
							<span
								className="cursor-pointer absolute right-3 bottom-2"
								onClick={() => setShowPassword(!showPassword)}
							>
								{showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
							</span>
						</div>
                                                <Button
                                                        type="submit"
                                                        className="w-full font-orbitron tracking-wider"
                                                >
                                                        Зарегистрироваться
                                                </Button>
					</form>

					{/* <div className="grid grid-cols-2 gap-2 font-inter mt-2">
						<Button variant="outline" className="w-full gap-2">
							<Mail size={18} />
							Login with Google
						</Button>
						<Button variant="outline" className="w-full gap-2">
							<Github size={20} />
							Login with Github
						</Button>
					</div> */}
					<div className="mt-4 text-center text-sm">
                                                Уже есть аккаунт?
                                                <Link
                                                        to="/login"
                                                        className="underline hover:text-accent-foreground duration-300"
                                                >
                                                        Войти
                                                </Link>
					</div>
				</CardContent>
			</Card>
		</div>
	)
}

export default Register
