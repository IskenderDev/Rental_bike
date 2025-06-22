import NavLinks from "@/components/shared/NavLinks"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
	Facebook,
	Instagram,
	Mail,
	MapPin,
	Phone,
	Twitter,
	Youtube,
} from "lucide-react"
import { NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next"

const Footer = () => {
        const { t } = useTranslation()
        return (
		<div>
			<div className="w-full bg-[#222222] py-14">
				<div className="container">
					<div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-10 lg:px-0 md:px-10 px-5">
						<div className="relative col-span-2 font-inter ">
							<div>
								<img
									src="https://i.ibb.co/w7N05NV/White-Logo.png"
									alt="logo"
									className="w-32"
								/>
							</div>

							<p className="mt-5 text-[#aaaaaa]">
								Welcome to Probike, Fast, fun, and functional. That’s what a
								boost of electric power means for your ride. Whether for
								recreation or transportation.
							</p>
							<div className="flex gap-4 mt-5">
								<MapPin color="#aaaaaa" />
								<div className="-mt-1">
									<h3 className="text-lg font-bold text-[#aaaaaa]">Address:</h3>
									<p className="text-white">Mirpur, Dhaka, Bangladesh</p>
								</div>
							</div>
							<div className="flex gap-4 mt-5">
								<Phone color="#aaaaaa" />
								<div className="-mt-1">
									<h3 className="text-lg font-bold text-[#aaaaaa]">Phone:</h3>
									<p className="text-white">+880123456789</p>
								</div>
							</div>
							<div className="flex gap-4 mt-5">
								<Mail color="#aaaaaa" />
								<div className="-mt-1">
									<h3 className="text-lg font-bold text-[#aaaaaa]">Email:</h3>
									<p className="text-white">help@probike.com</p>
								</div>
							</div>
						</div>

						<div className="relative">
							<h2 className="text-xl font-bold mb-2 uppercase font-orbitron text-white">
								Наша компания
							</h2>
							<span className="w-28 h-[2px] bg-accent-foreground absolute"></span>
							<div className="mt-5 flex flex-col gap-4 font-inter text-[#aaaaaa] ">
                                                                <NavLinks link={"/about-us"} label={t('aboutUs')} />
								<NavLinks link={"/bikes"} label={"Велосипеды"} />
								<NavLinks link={"/services"} label={"Наши услуги"} />
								<NavLinks link={"/blogs"} label={"Блог"} />
                                                                <NavLinks link={"/contact-us"} label={t('contactUs')} />
							</div>
						</div>

						<div className="relative">
							<h2 className="text-xl font-bold mb-2 uppercase font-orbitron text-white">
								Центр помощи
							</h2>
							<span className="w-28 h-[2px] bg-accent-foreground absolute"></span>
							<div className="mt-5 flex flex-col gap-4 font-inter text-[#aaaaaa]">
								<NavLinks link={"/"} label={"Условия и положения"} />
								<NavLinks link={"/privacy-policy"} label={"Политика конфиденциальности"} />
								<NavLinks link={"/team"} label={"Наша команда"} />
								<NavLinks link={"/services"} label={"Услуги"} />
							</div>
						</div>

						<div className="relative md:col-span-1 col-span-2">
							<h2 className="text-xl font-bold mb-2 uppercase font-orbitron text-white">
								Оставайтесь на связи
							</h2>
							<span className="w-28 h-[2px] bg-accent-foreground absolute"></span>
							<div className="mt-5 font-inter space-y-2 text-[#aaaaaa]">
								<h3 className="text-lg font-medium">Рассылка новостей</h3>
								<p className="text-sm">
									Подпишитесь на нашу рассылку, чтобы быть в курсе последних
									коллекций, трендов и лучших предложений!
								</p>
								<div className="flex flex-col w-full max-w-sm items-center space-y-2 mt-2">
									<Input type="email" placeholder="Введите свой email" />
									<Button
										type="submit"
										className="bg-accent-foreground hover:bg-gray-200 hover:text-black w-full font-orbitron tracking-wider"
									>
										Подписаться
									</Button>
								</div>
							</div>
							<div className="mt-5">
								<h3 className="text-lg font-bold text-[#aaaaaa]">Подписывайтесь на нас</h3>
								<div className="flex w-full max-w-sm items-center space-x-5 mt-2 text-white">
									<Facebook className="size-6 hover:text-accent-foreground duration-300 cursor-pointer" />
									<Instagram className="size-6 hover:text-accent-foreground duration-300 cursor-pointer" />
									<Twitter className="size-6 hover:text-accent-foreground duration-300 cursor-pointer" />
									<Youtube className="size-6 hover:text-accent-foreground duration-300 cursor-pointer" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full bg-[#222222] text-gray-300 py-4 border-t-[1px] border-gray-600">
				<div className="container">
					<div className="grid lg:grid-cols-2 grid-cols-1 lg:justify-between justify-center gap-5">
						<div className="text-sm lg:text-left text-center font-inter">
							© 2024 Все права защищены. Разработано{" "}
							<NavLink to={"/"} className={"font-bold"}>
								PROBIKE
							</NavLink>
						</div>
						<div className="flex lg:justify-end justify-center">
							<img
								src="https://demo.towerthemes.com/tt_aboss/image/catalog/payment-icon.png"
								alt=""
								className="w-72"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
