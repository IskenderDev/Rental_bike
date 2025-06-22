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
import { useTranslation } from "react-i18next"
import { Link, useNavigate } from "react-router-dom"
import {
	useForm,
	SubmitHandler,
	FieldValues,
	Controller,
} from "react-hook-form"
import { loginUser } from "@/utils/localAuth"
import { toast } from "sonner"
import { useAppDispatch } from "@/redux/hook"
import { setUser } from "@/redux/features/auth/userSlice"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema } from "@/schemas/userSchema"

const Login = () => {
        const { t } = useTranslation()
        const [showPassword, setShowPassword] = useState(false)
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(loginSchema),
	})
        const dispatch = useAppDispatch()
        const navigate = useNavigate()

        const onSubmit: SubmitHandler<FieldValues> = async (data) => {
                const toastId = toast.loading("Вход...")

                const result = loginUser(data.email, data.password)

                if (result.success && result.user) {
                        toast.success("Успешный вход", { id: toastId })
                        const userInfo = {
                                id: result.user.email,
                                role: result.user.role,
                                iat: 0,
                                exp: 0,
                        }
                        dispatch(setUser({ user: userInfo, token: 'local-auth' }))
                        navigate("/dashboard")
                } else {
                        toast.error(result.message || "Неверные учетные данные", { id: toastId })
                }
        }

	return (
		<div className="min-h-[calc(100vh-90px)] grid grid-cols-1 items-center">
			<Card className="mx-auto max-w-sm">
				<CardHeader>
                                        <CardTitle className="text-2xl font-orbitron tracking-wider">
                                                {t('signIn')}
                                        </CardTitle>
                                        <CardDescription className="font-inter">
                                                Введите электронную почту и пароль, чтобы войти в аккаунт
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
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
                                                                               placeholder="пример@gmail.com"
											type="email"
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
							<div className="flex items-center">
                                                                <Label htmlFor="password">Пароль</Label>
								<Link
									to="#"
									className="ml-auto inline-block text-sm underline hover:text-accent-foreground duration-300"
								>
                                                                Забыли пароль?
								</Link>
							</div>
							<Controller
								name="password"
								control={control}
								rules={{ required: true }}
								render={({ field }) => (
									<>
										<Input
											{...field}
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
                                                        {t('signIn')}
                                                </Button>
					</form>
					{/* <div className="grid grid-cols-2 gap-2 font-inter mt-2">
						<Button variant="outline" className="w-full gap-2">
							Login with Google
						</Button>
						<Button variant="outline" className="w-full gap-2">
							Login with Github
						</Button>
					</div> */}
					<div className="mt-4 text-center text-sm">
                                                Нет аккаунта?
                                                <Link
                                                        to="/registration"
                                                        className="underline hover:text-accent-foreground duration-300"
                                                >
                                                        {t('signUp')}
                                                </Link>
					</div>
				</CardContent>
			</Card>
		</div>
	)
}

export default Login
