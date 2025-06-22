import { Mail, MapPin, PhoneCall } from "lucide-react"
import { Button } from "../ui/button"

const AboutUs = () => {
        return (
                <div>
                        <div className="bg-about-us bg-bottom h-64 flex justify-center items-center">
                                <h1 className="text-5xl font-orbitron font-bold dark:text-black">
                                        О нас
                                </h1>
                        </div>
                        <div className="container ">
                                <div className="grid lg:grid-cols-2 grid-cols-1 justify-between items-center gap-20 my-28">
                                        <div>
                                                <img
                                                        src="https://probike.templaza.net/wp-content/uploads/elementor/thumbs/About-Us-2-qn7jrjyljgrpb5ikjbr4z61udwuzeua3tzdw3uv7mg.jpg"
                                                        alt="Фото о нас"
                                                        className="size-11/12"
                                                />
                                        </div>
                                        <div className="space-y-5">
                                                <h2 className="text-4xl font-semibold font-orbitron tracking-wider">
                                                        Велосипеды — наша работа и страсть
                                                </h2>
                                                <p className="font-inter">
                                                        У каждого из нас свои цели и причины кататься на велосипеде. В Probike мы хотим помочь вам раскрыть ваш потенциал вне зависимости от выбранного пути. Мы делаем это с помощью нашей продукции, людей и историй. Испытайте, что значит быть безграничным. Прокатитесь с нами и ощутите непередаваемые эмоции.
                                                </p>
                                                <p className="font-inter">
                                                        Probike — мировой лидер по производству качественных велосипедов и экипировки. Компания была основана в 1972 году и сочетает мастерство, технологии и инновационный дизайн.
                                                </p>
                                                <Button className="bg-accent-foreground rounded-none hover:text-white md:px-10 md:py-7 px-7 md:font-bold md:mt-0 mt-5 font-orbitron tracking-wider uppercase">
                                                        Узнать больше
                                                </Button>
                                        </div>
                                </div>
                                <div className="grid md:grid-cols-3 grid-cols-1 mt-20 justify-between border border-gray-200 md:py-5 p-10 rounded-md">
                                        <div className="flex gap-4 mt-5 md:justify-center">
                                                <MapPin size={30} className="text-accent-foreground" />
                                                <div className="-mt-1">
                                                        <h3 className="text-lg font-bold font-orbitron">Адрес:</h3>
                                                        <p className="italic font-inter">Мирпур, Дакка, Бангладеш</p>
                                                </div>
                                        </div>
                                        <div className="flex gap-4 mt-5 md:justify-center">
                                                <PhoneCall size={30} className="text-accent-foreground" />
                                                <div className="-mt-1">
                                                        <h3 className="text-lg font-bold font-orbitron">Телефон:</h3>
                                                        <p className="italic font-inter">+880123456789</p>
                                                </div>
                                        </div>
                                        <div className="flex gap-4 mt-5 md:justify-center">
                                                <Mail size={30} className="text-accent-foreground" />
                                                <div className="-mt-1">
                                                        <h3 className="text-lg font-bold font-orbitron">Email:</h3>
                                                        <p className="italic font-inter">help@gmail.com</p>
                                                </div>
                                        </div>
				</div>
			</div>
		</div>
	)
}

export default AboutUs
